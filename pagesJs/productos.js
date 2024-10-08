import { loadHeaderPage } from "../global/header.js"
import { loadFooterPage } from "../global/footer.js"

document.addEventListener('DOMContentLoaded', () => {
    loadHeaderPage().then(data => {
        const main = document.querySelector('main')
        main.className = 'articles'
    
        const h1 = document.createElement('h1')
        h1.className = 'titulo'
        h1.textContent = 'Nuestros Productos'
        main.appendChild(h1)
    
        const boxArticulos = document.createElement('div')
        boxArticulos.className = 'box-articulos'
    
        const articles = [
            {
                clas: 'articulos',
                src:'../assets/img/camino-mesa-pampa.png',
                alt:'Camino de mesa Pampa tejido a mano, ideal para decoración de mesas y sillas',
                title: 'Camino Mesa',
                subtitle: 'Pampa',
                content: 'Camino de mesa tejido al telar industrial.<br>Ideal para decorar sillas, paredes, mesas o como pie de cama.<br>Diseño Guarda Pampa.',
                href: '#',
                text: 'Comprar'
            },
            {
                clas: 'articulos',
                src:'../assets/img/camino-mesa.png',
                alt:'Camino de mesa Cactus tejido a mano, ideal para decoración de mesas y sillas',
                title: 'Camino Mesa',
                subtitle: 'Cactus',
                content: 'Camino de mesa tejido al telar industrial.<br>Ideal para decorar sillas, paredes, mesas o como pie de cama.<br>Diseño Cactus.',
                href: '#',
                text: 'Comprar'
            },
            {
                clas: 'articulos',
                src:'../assets/img/funda-almohadon-cactus.png',
                alt:'Funda para almohadón Cactus tejida a mano, ideal para decoración de tu hogar',
                title: 'Funda Almohadon',
                subtitle: 'Cactus',
                content: 'Funda para almohadón tejido al telar industrial.<br>Ideal para decorar tu hogar.<br>Diseño Cactus.',
                href: '#',
                text: 'Comprar'
            },
            {
                clas: 'articulos',
                src:'../assets/img/manta-decorativa-mapuche.png',
                alt:'Manta Mapuche tejida a mano, ideal para decorar sillones, camas y mesas',
                title: 'Manta',
                subtitle: 'Mapuche',
                content: 'Manta tejida al telar industrial.<br>Ideal para decorar sillones, camas, paredes y mesas.<br>Diseño Mapuche.',
                href: '#',
                text: 'Comprar'
            },
            {
                clas: 'articulos',
                src:'../assets/img/manta-decorativo-floral.png',
                alt:'Manta Floral tejida a mano, ideal para decorar sillones, camas y mesas',
                title: 'Manta',
                subtitle: 'Floral',
                content: 'Manta tejida al telar industrial.<br>Ideal para decorar sillones, camas, paredes y mesas.<br>Diseño Flores.',
                href: '#',
                text: 'Comprar'
            }
        ]
    
        articles.forEach(element => {
            const article = document.createElement('article')
            article.className = element.clas
    
            const img = document.createElement('img')
            img.src = element.src
            img.alt = element.alt
            article.appendChild(img)
    
            const h2 = document.createElement('h2')
            h2.textContent = element.title
            article.appendChild(h2)
    
            const h3 = document.createElement('h3')
            h3.textContent = element.subtitle
            article.appendChild(h3)
    
            const p = document.createElement('p')
            p.innerHTML = element.content
            article.appendChild(p)
    
            const a = document.createElement('a')
            a.href = element.href
            a.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${element.text}`
    
            article.appendChild(a)
    
            boxArticulos.appendChild(article)
        })
        main.appendChild(boxArticulos)
        document.body.appendChild(main)
        loadFooterPage()
    })
})
