function setActiveLink(element) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

function menuInicio(element) {
    if(element) setActiveLink(element);
    document.getElementById('vistaMenuInicio').style.display = 'block';
    document.getElementById('vistaMenuPersonalizaciones').style.display = 'none';
    document.getElementById('vistaMenuContacto').style.display = 'none';
}

function menuPersonalizaciones(element) {
    if(element) setActiveLink(element);
    document.getElementById('vistaMenuInicio').style.display = 'none';
    document.getElementById('vistaMenuContacto').style.display = 'none';
    document.getElementById('vistaMenuPersonalizaciones').style.display = 'block';
}

function vistaMenuContacto(element) {
    if(element) setActiveLink(element);
    document.getElementById('vistaMenuInicio').style.display = 'none';
    document.getElementById('vistaMenuPersonalizaciones').style.display = 'none';
    document.getElementById('vistaMenuContacto').style.display = 'block';

    
}