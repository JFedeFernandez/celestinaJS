export function loadFooterPage() {
        const footer = document.getElementById('footer')

        const ul = document.createElement('ul')
        const p = document.createElement('p')
    
        const list = [
            {class: 'fa-brands fa-instagram', href: '#', ariaaLabel: 'Siguenos en Instagram', ariaHidden: 'false'},
            {class: 'fa-brands fa-x-twitter', href: '#', ariaaLabel: 'Siguenos en X', ariaHidden: 'false'},
            {class: 'fa-brands fa-facebook', href: '#', ariaaLabel: 'Siguenos en Facebook', ariaHidden: 'false'}
        ]
    
        list.forEach(element => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            a.className = element.class
            a.href = element.href
            a.ariaLabel = element.ariaaLabel
            a.ariaHidden = element.ariaHidden
    
            li.appendChild(a)
            ul.appendChild(li)
        })
    
        p.textContent = '\u00A9 2024 La Celestina.'
    
        footer.appendChild(ul)
        footer.appendChild(p)
    
        document.body.appendChild(footer)
}