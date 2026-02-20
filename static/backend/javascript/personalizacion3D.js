const modelViewer = document.querySelector('#camisa3D');
const canvas = new fabric.Canvas('logoCanvas');
let colorActualHex = "#ffffff";

/**
 * 1. ACTUALIZAR TODO (Color y Sincronización)
 * Se usa para los botones sugeridos
 */
window.actualizarTodo = function(hex) {
    document.getElementById('colorPicker').value = hex;
    cambiarColorCamisa(hex);
};

/**
 * 2. CAMBIAR COLOR DE LA CAMISA
 * Esta función recorre los materiales y actualiza el fondo del logo
 */
window.cambiarColorCamisa = function(colorHex) {
    colorActualHex = colorHex;
    document.getElementById('hexCode').innerText = colorHex.toUpperCase();
    
    if (!modelViewer.model) return;

    const r = parseInt(colorHex.slice(1, 3), 16) / 255;
    const g = parseInt(colorHex.slice(3, 5), 16) / 255;
    const b = parseInt(colorHex.slice(5, 7), 16) / 255;

    // Aplicamos color a todos los materiales del .glb
    modelViewer.model.materials.forEach((mat) => {
        mat.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
    });

    // Actualizamos el canvas para que el logo no tenga fondo negro
    actualizarLogoEn3D();
};

/**
 * 3. LOGICA DEL LOGO CON FABRIC.JS
 */
document.getElementById('upload-image').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(f) {
        fabric.Image.fromURL(f.target.result, function(img) {
            img.scaleToWidth(120);
            canvas.add(img);
            img.center();
            canvas.setActiveObject(img);
            actualizarLogoEn3D();
        });
    };
    reader.readAsDataURL(e.target.files[0]);
});

/**
 * 4. ACTUALIZAR LOGO EN EL MODELO 3D
 * TRUCO: Pintamos el fondo del canvas con el color de la camisa
 */
async function actualizarLogoEn3D() {
    if (!modelViewer.model) return;

    // Sincronizamos el fondo del canvas con el color de la camisa
    canvas.setBackgroundColor(colorActualHex, canvas.renderAll.bind(canvas));

    // Damos un pequeño respiro para que FabricJS renderice el fondo
    setTimeout(async () => {
        const dataUrl = canvas.toDataURL({ format: 'png', quality: 1 });
        const texture = await modelViewer.createTexture(dataUrl);
        
        // El material 0 es el que recibe el logo (el frente)
        const materialPecho = modelViewer.model.materials[0];
        
        if (materialPecho.pbrMetallicRoughness.baseColorTexture) {
            materialPecho.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
        }
        
        // Reseteamos el factor a blanco para que se vea el color del canvas fielmente
        materialPecho.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
    }, 50);
}

/**
 * 5. BOTÓN BORRAR
 */
document.getElementById('btn-borrar').addEventListener('click', function() {
    canvas.clear();
    actualizarLogoEn3D();
});

// Eventos de FabricJS para actualizar mientras arrastras
canvas.on('object:modified', actualizarLogoEn3D);