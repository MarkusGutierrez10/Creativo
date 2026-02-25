function setActiveLink(element) {
    // 1. Quitar la clase 'active' de todos los enlaces
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    
    // 2. Añadir la clase 'active' al elemento clicado
    element.classList.add('active');
}

function menuInicio(element) {
    // Cambiar la clase active
    if(element) setActiveLink(element);

    // Gestionar vistas
    document.getElementById('vistaMenuInicio').style.display = 'block';
    document.getElementById('vistaMenuPersonalizaciones').style.display = 'none';
}

function menuPersonalizaciones(element) {
    // Cambiar la clase active
    if(element) setActiveLink(element);

    // Gestionar vistas
    document.getElementById('vistaMenuInicio').style.display = 'none';
    document.getElementById('vistaMenuPersonalizaciones').style.display = 'block';
}