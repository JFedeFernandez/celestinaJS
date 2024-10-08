export function loadNosotrosPage() {
        main.className = 'nosotras'
    
        const h1 = document.createElement('h1')
        h1.textContent = '¿Quienes somos?'
    
        main.appendChild(h1)
    
        const content = [
            {classDiv:'perfil-uno',classFoto: 'foto',src:'./assets/img/zunilda.png', alt:'Zunilda, artista y creadora en La Celestina', text: '¡Hola! Soy Zunilda, una apasionada del arte con un profundo amor por la creación de belleza en todas sus formas. Desde temprana edad, mi vida ha estado inmersa en la pintura, la cerámica. Explorando y experimentando con cada técnica para dar vida a mis visiones artísticas. Para mí, cada pieza es una extensión de mi alma y un reflejo de mi deseo de compartir emociones y belleza con el mundo. Mi objetivo es ofrecerte obras que no solo decoren tu espacio, sino que también toquen tu corazón y te inspiren. Ya sea que busques una pintura única para tu hogar o un regalo especial para alguien querido, estoy aquí para ayudarte a encontrar esa pieza que resonará contigo. Gracias por visitar nuestro espacio creativo. Espero que encuentres en mis creaciones algo que despierte en ti la misma emoción que siento al hacerlas. <br>¡Bienvenidos a nuestro mundo artístico!'},
            {classDiv:'perfil-dos',classFoto:'foto', src:'./assets/img/monica.png', alt:'Mónica, artista y creadora en La Celestina', text: '¡Hola! Soy Mónica, una entusiasta del arte que encuentra su verdadera pasión en explorar diversas formas de expresión creativa. Desde que era joven, el arte ha sido mi refugio y mi modo de comunicarme con el mundo. Me encanta trabajar en la pintura, la costura, y manualidades, buscando siempre nuevas maneras de compartir la belleza que veo en mi entorno. Si estás en busca de una pieza especial para adornar tu hogar o un regalo que transmita un mensaje significativo, estaré encantada de asistirte. Gracias por adentrarte a nuestro universo creativo. Espero que encuentres en mis obras la misma chispa de alegría y reflexión que yo experimenté al crearlas. <br>¡Bienvenidos a nuestro espacio artístico!'}
        ]
    
        content.forEach( element => {
            if (element.classDiv === 'perfil-uno'){
                const div = document.createElement('div')
                div.className = element.classDiv
    
                const img = document.createElement('img')
                img.className = element.classFoto
                img.src = element.src
                img.alt = element.alt
    
                div.appendChild(img)
    
                const p = document.createElement('p')
                p.innerHTML = element.text
    
                div.appendChild(p)
                main.appendChild(div)
            } else {
                const div = document.createElement('div')
                div.className = element.classDiv
    
                const p = document.createElement('p')
                p.innerHTML = element.text
    
                div.appendChild(p)
    
                const img = document.createElement('img')
                img.className = element.classFoto
                img.src = element.src
                img.alt = element.alt
    
                div.appendChild(img)
                main.appendChild(div)
    
            }
        })
    
        document.body.appendChild(main)
}