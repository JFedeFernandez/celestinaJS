import { loadHeaderPage } from '../global/header.js'
import { loadFooterPage } from '../global/footer.js'


document.addEventListener('DOMContentLoaded', () => {
        loadHeaderPage().then(data => {
            const main = document.querySelector('main')
            const h1 = document.createElement('h1')
        
            main.className = 'index'
            main.id = 'main-content'
            h1.className = 'titulo'
            h1.textContent = 'La Celestina'
        
            const carouselExample = document.createElement('div')
            carouselExample.id = 'carouselExampleInterval'
            carouselExample.classList.add('carousel','slide')
            carouselExample.setAttribute('data-bs-ride', 'carousel')
            carouselExample.ariaLabel = 'Carrusel de imágenes'
        
            const carouselInner = document.createElement('div')
            carouselInner.className = 'carousel-inner'
        
            const imgsCarousel = [
                {dataIterval: 1000, src:'../assets/img/ovillo-de-lana.webp', class:"d-block w-100", alt:'Ovillo de lana', loading:"lazy", active: true},
                {dataIterval: 1000, src:"../assets/img/tijeras-hilos.webp", class:"d-block", alt:"Tijeras hilos", loading:"lazy", active: false},
                {src:"../assets/img/hoja-artesanias.webp", class:"d-block", alt:"Hoja artesanales", loading:"lazy", active: false}
            ]
            
            imgsCarousel.forEach(element => {
                const div = document.createElement('div')
        
                div.className = element.active ? 'carousel-item active' : 'carousel-item'
                if (element.interval){
                    div.setAttribute('data-bs-interval', element.interval)
                }
        
                const img = document.createElement('img')
                img.src = element.src
                img.className = element.class
                img.alt = element.alt
                img.loading = element.loading
        
                div.appendChild(img)
                carouselInner.appendChild(div)
            })
        
            // Agregar inner al carrusel
            carouselExample.appendChild(carouselInner);
        
            // Botón de control previo
            const prevButton = document.createElement('button');
            prevButton.className = 'carousel-control-prev';
            prevButton.type = 'button';
            prevButton.setAttribute('data-bs-target', '#carouselExampleInterval');
            prevButton.setAttribute('data-bs-slide', 'prev');
            prevButton.setAttribute('aria-label', 'Slide anterior');
        
            // Icono del botón previo
            const prevIcon = document.createElement('span');
            prevIcon.className = 'carousel-control-prev-icon';
            prevIcon.setAttribute('aria-hidden', 'true');
        
            const prevText = document.createElement('span');
            prevText.className = 'visually-hidden';
            prevText.textContent = 'Previous';
        
            prevButton.appendChild(prevIcon);
            prevButton.appendChild(prevText);
            carouselExample.appendChild(prevButton);
        
            // Botón de control siguiente
            const nextButton = document.createElement('button');
            nextButton.className = 'carousel-control-next';
            nextButton.type = 'button';
            nextButton.setAttribute('data-bs-target', '#carouselExampleInterval');
            nextButton.setAttribute('data-bs-slide', 'next');
            nextButton.setAttribute('aria-label', 'Slide siguiente');
        
            // Icono del botón siguiente
            const nextIcon = document.createElement('span');
            nextIcon.className = 'carousel-control-next-icon';
            nextIcon.setAttribute('aria-hidden', 'true');
        
            // Texto del boton siguiente
            const nextText = document.createElement('span');
            nextText.className = 'visually-hidden';
            nextText.textContent = 'Next';
        
            // Colocamos en el carousel los botones e iconos
            nextButton.appendChild(nextIcon);
            nextButton.appendChild(nextText);
            carouselExample.appendChild(nextButton);
        
            // Creamos seccion de ubicacion
            const ubicacion = document.createElement('section')
            ubicacion.setAttribute('aria-labelledby', 'ubicacion')
        
            // Creamos iframe para ubicacion
            const iframe = document.createElement('iframe')
            iframe.className = 'mapa'
            iframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d395.98707019724384!2d-65.29236228863813!3d-32.732042611263275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1716384364073!5m2!1ses-419!2sar'
            iframe.width = 400
            iframe.height = 300
            iframe.style = 'border:0'
            iframe.setAttribute('allowfullscreen', '')
            iframe.loading = 'lazy'
            iframe.referrerPolicy = 'no-referrer-when-downgrade'
            iframe.title = 'Ubicación de La Celestina en Tilisarao, San Luis, Argentina'
        
            ubicacion.appendChild(iframe)
        
            // Creamos seccion de contacto
            const contacto = document.createElement('section')
            contacto.setAttribute('aria-labelledby', 'contacto')
        
            const info = document.createElement('ul')
            info.className = 'info'
        
            const itemsLista = [
                {clas: 'fa-solid fa-location-dot', text: 'Av. San Martín'},
                {text: 'Tilisarao, San Luis, Argentina.'},
                {clas: 'fa-brands fa-whatsapp', text: '+54 9 2664 834226'}
            ]
        
            // Creamos la lista desordenada 
            itemsLista.forEach(element => {
                const li = document.createElement('li')
        
                if (element.clas) {
                    const i = document.createElement('i')
                    i.className = element.clas
                    li.appendChild(i)
                    li.appendChild(document.createTextNode(' ' + element.text))
                } else {
                    li.textContent = element.text
                }
        
                info.appendChild(li)
            })
        
            contacto.appendChild(info)
        
            // Agregar las secciones correspondientes al main
            main.appendChild(h1)
            main.appendChild(carouselExample);
            main.appendChild(ubicacion)
            main.appendChild(contacto)
            document.body.appendChild(main)
            loadFooterPage()
        })
    
})