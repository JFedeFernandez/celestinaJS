export function loadContactoPage() {
    main.className = ''
    
        const contactos = document.createElement('div')
        contactos.className = 'contactos'
        main.appendChild(contactos)
    
        const h1 = document.createElement('h1')
        h1.textContent = 'Contactate con nosotros!'
        contactos.appendChild(h1)
    
        const p = document.createElement('p')
        p.innerHTML = '¿Quieres saber más sobre nuestros productos artesanales únicos o necesitas ayuda para elegir el regalo perfecto? ¡Estamos aquí para ayudarte! <br> En La Celestina, nos apasiona ofrecer objetos artesanales de alta calidad que añadan un toque especial a tu vida.Ya sea que tengas preguntas sobre nuestros artículos, necesites asesoramiento sobre envíos o simplemente quieras decir hola, ¡nos encantaría escucharte! Puedes contactarnos a través de nuestro formulario en línea, enviarnos un correo electrónico o llamarnos directamente. Estamos comprometidos a brindarte una experiencia de atención al cliente excepcional en cada interacción.<br>En La Celestina, valoramos tu opinión y estamos aquí para asegurarnos de que encuentres la pieza perfecta que refleje tu estilo y personalidad. ¡Esperamos conectar contigo pronto! <br>¡Gracias por elegir La Celestina para descubrir y apreciar la belleza de los objetos artesanales!'
    
        contactos.appendChild(p)
    
        const form = document.createElement('form')
        form.className = 'formulario'
    
        const labelName = document.createElement('label')
        labelName.setAttribute('for', 'name')
        labelName.textContent = 'Nombre/s'
        form.appendChild(labelName)
    
        const inputName = document.createElement('input')
        inputName.type = 'text'
        inputName.setAttribute('placeholder', 'Nombre Completo')
        inputName.id = 'name'
        inputName.setAttribute('name', 'name')
        inputName.setAttribute('required', true)
        form.appendChild(inputName)
    
    
        const labelAp = document.createElement('label')
        labelAp.setAttribute('for', 'apellido')
        labelAp.textContent = 'Apellido/s'
        form.appendChild(labelAp)
    
        const inputAp = document.createElement('input')
        inputAp.type = 'text'
        inputAp.setAttribute('placeholder', 'Apellido')
        inputAp.id = 'apellido'
        inputAp.setAttribute('name', 'apellido')
        inputAp.setAttribute('required', true)
        form.appendChild(inputAp)
    
        const labelMail = document.createElement('label')
        labelMail.setAttribute('for', 'mail')
        labelMail.textContent = 'Mail'
        form.appendChild(labelMail)
    
        const inputMail = document.createElement('input')
        inputMail.type = 'email'
        inputMail.setAttribute('placeholder', 'email@mail.com')
        inputMail.id = 'mail'
        inputMail.setAttribute('name', 'email')
        inputMail.setAttribute('required', true)
        form.appendChild(inputMail)
    
        const labelMensaje = document.createElement('label')
        labelMensaje.setAttribute('for', 'message')
        labelMensaje.textContent = 'Mensaje'
        form.appendChild(labelMensaje)
    
        const mensaje = document.createElement('textarea')
        mensaje.id = 'message'
        mensaje.setAttribute('placeholder', 'Deja tu mensaje aqui...')
        mensaje.setAttribute('row', 5)
        mensaje.setAttribute('required', true)
        form.appendChild(mensaje)
    
        const btn = document.createElement('button')
        btn.type = 'submit'
        btn.textContent = 'Enviar'
        form.appendChild(btn)
    
        contactos.appendChild(form)
        document.body.appendChild(main)
}