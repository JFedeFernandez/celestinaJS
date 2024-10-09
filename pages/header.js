export function createHeader() {
    const header = document.getElementById('header')

    const nav = document.createElement('nav')
    nav.setAttribute('aria-label', 'Navegación principal');

    const img = document.createElement('img');
    img.src = './assets/img/logo.webp';
    img.alt = 'Logo de La Celestina - Casa de Artesanías y Manualidades';
    img.style = 'width: 150px; height: auto';

    const btnMenu = document.createElement('button');
    btnMenu.id = 'btn-menu';
    btnMenu.classList.add('btn');
    btnMenu.type = 'button';
    btnMenu.setAttribute('data-bs-toggle', 'offcanvas');
    btnMenu.setAttribute('data-bs-target', '#offcanvasTop');
    btnMenu.setAttribute('aria-controls', 'offcanvasTop');
    btnMenu.setAttribute('aria-label', 'Abrir menú');

    // Icono del botón
    const iconBtn = document.createElement('i');
    iconBtn.classList.add('fa-solid', 'fa-bars', 'fa-2xl');
    btnMenu.appendChild(iconBtn);

    // Crear el menú offcanvas
    const offcanvas = document.createElement('div');
    offcanvas.classList.add('offcanvas', 'offcanvas-top');
    offcanvas.id = 'offcanvasTop';
    offcanvas.setAttribute('tabindex', -1);
    offcanvas.setAttribute('aria-labelledby', 'offcanvasTopLabel');

    // Offcanvas header
    const offcanvasHeader = document.createElement('div');
    offcanvasHeader.classList.add('offcanvas-header');

    // Botón para cerrar el offcanvas
    const btnOffHeader = document.createElement('button');
    btnOffHeader.type = 'button';
    btnOffHeader.classList.add('btn-close', 'btn-close-white');
    btnOffHeader.setAttribute('data-bs-dismiss', 'offcanvas');
    btnOffHeader.ariaLabel = 'Close';
    offcanvasHeader.appendChild(btnOffHeader);

    const offcanvasBody = document.createElement('div');
    offcanvasBody.classList.add('offcanvas-body');

    const ul = document.createElement('ul');
    ul.classList.add('navbar');
    ul.setAttribute('role', 'list');

    // Definir los elementos del menú con sus funciones de carga
    const menuItems = [
        { href: '#inicio', icon: 'fa-solid fa-house', text: 'Inicio', id: 'inicio'},
        { href: '#fotos', icon: 'fa-regular fa-image', text: 'Fotos', id: 'fotos'},
        { href: '#productos', icon: 'fa-solid fa-cart-shopping', text: 'Productos', id: 'productos'},
        { href: '#nosotros', icon: 'fa-solid fa-circle-info', text: 'Nosotros', id: 'nosotros'},
        { href: '#contacto', icon: 'fa-regular fa-envelope', text: 'Contacto', id: 'contacto'}
    ];

    // Crear los elementos del menú
    menuItems.forEach(element => {
        const li = document.createElement('li');
        const i = document.createElement('i');
        const a = document.createElement('a');

        a.href = element.href;
        a.setAttribute('aria-current', 'page');
        a.setAttribute('role', 'listitem');
        a.textContent = element.text;
        a.id = element.id

        i.className = element.icon;
        a.appendChild(i);

        li.appendChild(a);
        ul.appendChild(li);

    });

    offcanvasBody.appendChild(ul);
    offcanvas.appendChild(offcanvasHeader);
    offcanvas.appendChild(offcanvasBody);

    const navList = document.createElement('ul');
    navList.setAttribute('role', 'list');

    // Reutilizar los mismos elementos del menú para la navegación fuera del offcanvas
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.setAttribute('aria-current', 'page');
        a.setAttribute('role', 'listitem');
        a.id = item.id
        
        const icon = document.createElement('i');
        icon.className = item.icon;
        a.appendChild(icon);
    
        const text = document.createTextNode(' ' + item.text);
        a.appendChild(text);

        li.appendChild(a);
        navList.appendChild(li);

    });

    // Agregar todo al nav
    nav.appendChild(img);
    nav.appendChild(btnMenu);
    nav.appendChild(offcanvas);
    nav.appendChild(navList);

    // Finalmente agregar nav al header y el header al body
    header.appendChild(nav);
    document.body.appendChild(header);
}