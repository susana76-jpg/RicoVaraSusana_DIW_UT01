//translate en la web
const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

//partes de la app que donde sus literales serán traducidos 
const titulo = document.getElementById('titulo');


//toggle lista idiomas
idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle');
});

function removeAccentsAndN(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n").replace(/Ñ/g, "N");
}

const opcionesArray = Array.from(idiomas);
opcionesArray.forEach((opcion)=>{
   // console.log(opcion);
    opcion.addEventListener('click', ()=>{
        const language = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        console.log(language);
        traducir(removeAccentsAndN(language));
    });
});



function traducir(idioma){
   // console.log('language: '+idioma);
    idiomaActual.getElementsByTagName('img')[0].src=`banderas/${idioma}.png`;
    //menu
    let contacto = "";
    let panaderia = "";
    let pasteleriaBolleria = "";
    let empanadas = "";
    let mapa = "";
    


    switch (idioma){
        case 'espanol':
            titulo.textContent = 'Migas - Amigas';
            //menu
            panaderia = "Panadería";
            pasteleriaBolleria = "Pastelería-Bollería";
            empanadas = "Empanadas";
            contacto= 'Contacto';
            mapa = "Mapa";
            //menu contenido
            menuContenidoContacto ="Somos Gallegos.";
            menuContenidoPanaderia ="Somos una panadería";
            menuContenidoPasteleriaPanaderia ="";
            menuContenidoEmpanadas ="";
            menuContenidoMapa ="";
            break;

        case 'english':
            titulo.textContent = 'Crumbs - Friends';
            //menu
            panaderia = "Bakery";
            pasteleriaBolleria = "Pastry";
            empanadas = "Pies";
            contacto= 'Contact';
            mapa = "Map";
            //menu contenido
            menuContenidoContacto ="We are Gallegos";
            menuContenidoPanaderia ="We are a";
            menuContenidoPasteleriaPanaderia ="";
            menuContenidoEmpanadas ="";
            menuContenidoMapa ="";
            break;
            
        case 'portugues':
            titulo.textContent = 'Migas - Amigos';
            //menu
            panaderia = "Padaria";
            pasteleriaBolleria = "Pastelaria";
            empanadas = "Tortas";
            contacto= 'Contacto';
            mapa = "Mapa";
            //menu contenido
            menuContenidoContacto ="Somos gallegos en portugués";
            menuContenidoPanaderia ="";
            menuContenidoPasteleriaPanaderia ="";
            menuContenidoEmpanadas ="";
            menuContenidoMapa ="";
            break;
    }

    menuContacto.textContent                = contacto;
    menuPanaderia.textContent               = panaderia;
    menuPasteleriaBolleria.textContent       = pasteleriaBolleria;
    menuEmpanadas.textContent               = empanadas;
    //menuMapa.textContent                    = mapa;
    menuContenido.textContent               = "";

}

document.addEventListener('DOMContentLoaded', ()=>{
    //console.log(navigator.language);

    switch (navigator.language){
        case 'es':
            traducir('espanol');
            break;
        case 'en':
            traducir('english');
            break;
        case 'pt':
            traducir('portugues');
            break;
        default:
            traducir('english');
            break;
    }
});