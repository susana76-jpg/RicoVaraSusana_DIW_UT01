//menú
const menuContenido = document.getElementsByClassName('menuContenido');
const menuPanaderia = document.getElementById('menuPanaderia');
const menuPanaderiaBolleria = document.getElementById('menuPanaderiaBolleria');
const menuEmpanadas = document.getElementById('menuEmpanadas');
const menuContacto = document.getElementById('menuContacto');
const menuMapa = document.getElementById('menuMapa');
//contenido principal de la sección escogida
const seccionEscogida = document.getElementById('contenidoArticle');


const menusArray = Array.from(menuContenido);
menusArray.forEach((menuContenido)=>{
    //console.log(menuContenido);
    
    menuContenido.addEventListener('click', ()=>{
        const seccion = menuContenido.getElementsByTagName('span')[0].textContent;
        
    });
    
})


function elegirSeccion(seccion){

    console.log(seccion);
    switch (seccion){
        case 'Panaderia' || 'Bakery' || 'Padaria':
            seccionEscogida.textContent = menuContenidoPanaderia;
            break;
        case 'Pasteleria-Bolleria':
            seccionEscogida.textContent = menuContenidoPasteleriaPanaderia;
            break;
        case 'Empanadas':
            seccionEscogida.textContent = menuContenidoEmpanadas;
            break;
        case 'Contacto':
            console.log(menuContenidoContacto);
            seccionEscogida.textContent = menuContenidoContacto;
            break;
        case 'Mapa':
            seccionEscogida.textContent = menuContenidoMapa;
            break;
                                    
    }

    document.getElementById("p1").innerHTML = "New text!";
}