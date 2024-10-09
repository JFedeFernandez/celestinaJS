import { createHeader } from "./pages/header.js";
import { loadFooterPage } from "./pages/footer.js";
import { loadInicioPage } from "./pages/inicio.js";

document.addEventListener('DOMContentLoaded', () => {
    createHeader()
    loadInicioPage()
    loadFooterPage()
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', async (event) => {
            
            const page = event.target.id; // Obtener el id de la página a cargar

            // Limpiar el contenido actual del main
            main.innerHTML = '';

            try {
                // Cargar el módulo dinámicamente según el id del enlace
                switch (page) {
                    case 'fotos':
                        const { loadFotosPage } = await import('./pages/fotos.js');
                        loadFotosPage(main); // Pasamos el elemento main para que cargue el contenido
                        break;
                    case 'productos':
                        const { loadProductosPage } = await import('./pages/productos.js');
                        loadProductosPage(main);
                        break;
                    case 'nosotros':
                        const { loadNosotrosPage } = await import('./pages/nosotros.js');
                        loadNosotrosPage(main);
                        break;
                    case 'inicio':
                        const { loadInicioPage } = await import('./pages/inicio.js');
                        loadInicioPage(main);
                        break;
                    case 'contacto':
                        const { loadContactoPage } = await import('./pages/contacto.js');
                        loadContactoPage(main);
                        break;
                    default:
                        console.error('Página no encontrada:', page);
                }
                footer.innerHTML = ''
                loadFooterPage()
            } catch (error) {
                console.error('Error al cargar el módulo:', error);
            }
        });
    });
})

