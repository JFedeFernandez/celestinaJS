import { loadHeaderPage } from "../global/header.js"
import { loadFooterPage } from "../global/footer.js"

document.addEventListener('DOMContentLoaded', () => {
    loadHeaderPage().then(data => {
        
        const main = document.querySelector('main')
        main.className = 'fotos-container'
    
        const pContent = document.createElement('div')
        pContent.className = 'p-content'
    
        const h1 = document.createElement('h1')
        h1.textContent = 'Descripción de nuestros productos'
    
        const p = document.createElement('p')
        p.className = 'parrafo'
        p.innerHTML = `En nuestra página web, te invitamos a explorar un universo de creatividad y calidez a través de nuestras fotos exclusivas. Aquí podrás descubrir una exquisita selección de productos elaborados con amor y atención al detalle. <br> Cada imagen captura la esencia de nuestra oferta, resaltando la calidad y la artesanía de cada artículo. Navega por nuestras galerías para encontrar ese detalle especial que transformará tu hogar o será el regalo perfecto para tus seres queridos. <br>¡Sumérgete en nuestra colección y déjate inspirar por la belleza de lo hecho a mano!`
    
        const fotos = document.createElement('div')
        fotos.className = 'fotos'
    
        const articles = [
            {
                src:'../assets/img/camino-mesa-pampa.png',
                alt:'Camino de mesa Pampa tejido a mano, ideal para decoración de mesas y sillas',
                content: 'Camino de mesa tejido al telar industrial.<br>Ideal para decorar sillas, paredes, mesas o como pie de cama.<br>Diseño guarda Pampa.',
                ariaLabel: 'Ver más sobre el camino de mesa Pampa'
            },
            {
                src:'../assets/img/camino-mesa.png',
                alt:'Camino de mesa Cactus tejido a mano, ideal para decoración de mesas y sillas',
                content: 'Funda para almohadón tejido al telar industrial.<br>Ideal para decorar tu hogar.<br>Diseño Cactus.',
                ariaLabel: 'Ver más sobre la funda de almohadón Cactus'
            },
            {
                src: '../assets/img/funda-almohadon-amancay.png',
                alt:'Funda para almohadón Cactus tejida a mano, ideal para decoración de tu hogar',
                content: 'Funda para almohadón tejido al telar industrial.<br>Ideal para decorar tus espacios, sillones, sillas.<br>Diseño Amancay.',
                ariaLabel: 'Ver más sobre la funda de almohadón Amancay',
            },
            {
                src:'../assets/img/funda-almohadon-cactus.png',
                alt:'Funda para almohadón Cactus tejida a mano, ideal para decoración de tu hogar',
                content: 'Funda para almohadón tejido al telar industrial.<br>Ideal para decorar tu hogar.<br>Diseño Cactus.',
                ariaLabel: 'Ver más sobre la funda de almohadón Cactus'
            },
            {
                src:'../assets/img/manta-decorativa-mapuche.png',
                alt:'Manta Mapuche tejida a mano, ideal para decorar sillones, camas y mesas',
                content: 'Manta tejida al telar industrial.<br>Ideal para decorar sillones, camas, paredes y mesas.<br>Diseño Mapuche.',
                ariaLabel:'Ver más sobre la manta Mapuche'
            },
            {
                src:'../assets/img/manta-decorativo-floral.png',
                alt:'Manta Floral tejida a mano, ideal para decorar sillones, camas y mesas',
                content: 'Manta tejida al telar industrial.<br>Ideal para decorar sillones, camas, paredes y mesas.<br>Diseño Flores.',
                ariaLabel: 'Ver más sobre la manta Floral'
            }
        ]
    
        articles.forEach(element => {
            const article = document.createElement('article')
    
            const img = document.createElement('img')
            img.src = element.src
            img.alt = element.alt
    
            article.appendChild(img)
    
            const p = document.createElement('p')
            p.innerHTML = element.content
            article.appendChild(p)
    
            const a = document.createElement('a')
            a.href = '#'
            a.setAttribute('aria-label', element.ariaLabel)
            a.textContent = 'Ver más...'
            article.appendChild(a)
    
            fotos.appendChild(article)
        })
    
        pContent.appendChild(h1)
        pContent.appendChild(p)
        main.appendChild(pContent)
        main.appendChild(fotos)
        document.body.appendChild(main)
        loadFooterPage()
    })
    
})