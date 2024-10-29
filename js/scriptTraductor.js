//----------------------ELECCIÓN DEL IDIOMA------------------------------
//translate en la web
const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

//partes de la app que donde sus literales serán traducidos 
const titulo = document.getElementById('titulo');
//menu
const seccionEmpanadas = document.getElementById('empanadas');
const seccionPasteleriaBolleria = document.getElementById('pasteleriaBolleria');
const seccionPanaderia = document.getElementById('panaderia');
const seccionInicio = document.getElementById('inicio');

const productoPan = document.getElementById('productoPan');
const productoPastel = document.getElementById('productoPastel');
const productoEmpanada = document.getElementById('productoEmpanada');
const product = document.getElementById('product');

const productoDisponiblePan = document.getElementById("productoDisponiblePan");
const productoDisponiblePastel = document.getElementById("productoDisponiblePastel");
const productoDisponibleEmpanada = document.getElementById("productoDisponibleEmpanada");

//toggle lista idiomas
idiomaActual.addEventListener('click', ()=>{
    listaIdiomas.classList.toggle('toggle');
});

//-----------SELECCIÓN EN EL MENÚ DE SECCIÓN-----------------------------
//menú
const seccionesMenu = document.getElementsByClassName('menuContenido');
const migaPan = document.getElementById('migapan');
const tituloSeccion = document.getElementById('tituloseccion');
const imagenSeccion = document.getElementById('imagenseccion');
const textoSeccion = document.getElementById('textoseccion');

//contenido principal de la sección escogida
const seccionEscogida = document.getElementsByClassName('seccion');


function removeAccentsAndN(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n").replace(/Ñ/g, "N");
}

const menusArray = Array.from(seccionesMenu);
var seccion = "inicio";

menusArray.forEach((seccionesMenu)=>{
    
    seccionesMenu.addEventListener('click', ()=>{
        seccion = seccionesMenu.getElementsByTagName('span')[0].id; 
        traducir(removeAccentsAndN(language), seccion);
    });
})
//-----------SELECCIÓN EN EL MENÚ DE SECCIÓN-----------------------------

function removeAccentsAndN(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n");
}

const opcionesArray = Array.from(idiomas);
var language = "espanol";
opcionesArray.forEach((opcion)=>{
   console.log(opcion);
    opcion.addEventListener('click', ()=>{
        language = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        traducir(removeAccentsAndN(language), seccion);
    });
});

//----------------------ELECCIÓN DEL IDIOMA------------------------------

function traducir(idioma,seccion){
   console.log('language: '+idioma);
   console.log('seccion: '+seccion);

    idiomaActual.getElementsByTagName('img')[0].src=`banderas/${idioma}.png`;
    switch (idioma){
        case 'espanol':
            titulo.textContent = 'Migas - Amigas';
            //menu
            seccionPanaderia.textContent = "Panadería";
            seccionPasteleriaBolleria.textContent = "Pastelería-Bollería";
            seccionEmpanadas.textContent = "Empanadas";
            seccionInicio.textContent = "Inicio";

            productoPan.textContent = "Panes";
            productoPastel.textContent = "Pasteles";
            productoEmpanada.textContent = "Empanadas";
            product.textContent = "Productos disponibles";

            productoDisponiblePan.innerHTML = 'Panes disponibles &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Volver</a>';
            productoDisponiblePastel.innerHTML = 'Pasteles disponibles &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Volver</a>';
            productoDisponibleEmpanada.innerHTML = 'Empanadas disponibles &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Volver</a>'; 


            //seccion en español
            if(seccion == "panaderia"){
                seccionEscogida.textContent = "HOla esto es una panadería en español";
                migaPan.innerHTML = "Migas - Amigas &nbsp;&nbsp;|&nbsp;&nbsp; Panadería";
                tituloSeccion.textContent = "NUESTRA PANADERÍA";
                textoSeccion.innerHTML = "<h1>La magia del pan artesanal: Desde la masa madre hasta el horneado perfecto</h1>"
                                    +"<p>La magia del pan artesanal es un arte culinario que se remonta a tiempos ancestrales y que ha sido redescubierto en la actualidad como una forma de conexión con la tradición, el cuidado de la alimentación y la búsqueda de sabores auténticos. El proceso de elaborar pan artesanal, desde la preparación de la masa madre hasta el horneado perfecto, es todo un ritual que requiere tiempo, paciencia y amor por la cocina.</p>"
                                    +"<p><strong>La masa madre es el ingrediente clave en la elaboración del pan artesanal,</strong> ya que es la encargada de proporcionar al pan su sabor característico y su textura única. Para preparar la masa madre, se mezclan harina y agua en un recipiente y se deja fermentar durante varios días para que las levaduras naturales se desarrollen y se cree un ambiente propicio para la fermentación.</p>"
                                    +"<p>Una vez que la masa madre está lista, se incorpora a la mezcla de harina, agua y sal para dar inicio a la preparación de la masa del pan. El amasado es un paso fundamental en este proceso, ya que permite desarrollar el gluten de la harina y obtener una masa elástica y consistente. Amasar con cuidado y dedicación es esencial para lograr un <strong>pan con una buena estructura y una miga perfecta.</strong></p>"
                                    +"<p>Después de amasar, la masa se deja reposar en un lugar cálido para que fermente y adquiera su sabor característico. Durante este proceso, es importante realizar pliegues en la masa para desarrollar la estructura del pan y lograr una miga esponjosa y alveolada. La fermentación es un paso crucial en la elaboración del pan artesanal, ya que determinará el sabor y la textura final del pan.</p>"
                                    +"<p>De esta manera <strong>en Miga - Amiga conseguimos un pan de calidad,</strong> que gusta en cualquier mesa y boca sin excepción.</p>";
                imagenSeccion.src = "img/panadero.png";

            }else if(seccion == 'pasteleriaBolleria'){
                seccionEscogida.textContent = "Esto es pastelería bollería";
                migaPan.innerHTML = "Migas - Amigas &nbsp;&nbsp;|&nbsp;&nbsp; Pastelería y Bollería";
                tituloSeccion.textContent = "NUESTRA PASTELERÍA Y BOLLERÍA";
                textoSeccion.innerHTML =" <h1>El secreto de una pastelería de calidad artesanal</h1>"
                                    +"<p>Seguro que cuando te dicen que un dulce está elaborado siguiendo las técnicas de la pastelería artesanal se te hace la boca agua. Lo primero que te viene a la cabeza es que tiene ese sabor de siempre tan reconocible. Además, estarás seguro de que son <strong>productos con ingredientes de primera calidad.</strong></p>"
                                    +"<p>Y es que ahí es donde está la primera clave de <strong>la auténtica pastelería artesanal.</strong> Se selecciona con cuidado la materia prima para conseguir los mejores resultados. Se utilizan aquellos ingredientes que después de ser cocinados proporcionen el sabor, el aroma y la textura que hacen que el producto sea especial.</p>"
                                    +"<p>Además, es una manera de asegurar que son productos totalmente saludables <strong>sin aditivos ni conservantes.</strong> Tan sólo los ingredientes necesarios para dar sabor y forma a estos deliciosos dulces. Ni más ni menos.</p>"
                                    +"<p>Otra de las claves de <strong>la autentica pastelería artesanal es que está elaborada por expertos que conocen la receta a la perfección.</strong> Es la mejor manera de asegurar que el dulce sea el de siempre respetando los procesos de elaboración tradicionales. Puede parecer evidente, pero la pastelería artesanal debe ser realizada por artesanos.</p>"
                                    +"<p>El buen hacer, el cariño puesto durante la elaboración y el cuidado en la elección de los ingredientes son las claves de una auténtica pastelería tradicional.</p>";
                imagenSeccion.src = "img/pasteleria.png";

            }else if(seccion == 'empanadas'){
                seccionEscogida.textContent = "Esto es empanadas";
                migaPan.innerHTML = "Migas - Amigas &nbsp;&nbsp;|&nbsp;&nbsp;  Empanadas";
                tituloSeccion.textContent = "NUESTRAS EMPANADAS";
                textoSeccion.innerHTML = "<h1>El Arte de la Empanada Gallega Artesana: Tradición y Calidad en Cada Bocado</h1>"
                                    +"<p>Nuestra empanada gallega es mucho más que un plato típico de la región. <stron>Es una expresión de la cultura gallega,</stron> una combinación de sabores auténticos y técnicas artesanales transmitidas de generación en generación desde 1955.</p>"
                                    +"<p><strong>El Proceso de Elaboración: Pasos Fundamentales para una Empanada Gallega Artesanal Perfecta</strong></p>"
                                    +"<ol>"
                                    +"<li>Selección de Ingredientes: Desde la masa hasta el relleno, cada ingrediente se selecciona cuidadosamente para garantizar la máxima calidad y frescura.</li>"
                                    +"<li>Elaboración de la Masa: La masa de la empanada gallega se forma y estira a mano con mimo y dedicación, siguiendo nuestra receta única Avoa Maruxa de 1955 que aseguran una textura única y un sabor inigualable</li>"
                                    +"<li>Relleno Tradicional: Ya sea de carne, pescado o verduras, el relleno de la empanada gallega artesana se cocina lentamente y se extiende manualmente para resaltar su sabor característico.</li>"
                                    +"<li>Cierre y Decoración: El cierre de la empanada es todo un arte en sí mismo, y hacemos una a una a mano. Además, con la masa sobrante se hace una decoración con tiras que forma parte de la identidad visual de la empanada gallega.</li>"
                                    +"</ol>"
                                    +"<p>Si deseas disfrutar de la auténtica empanada gallega artesana sin complicaciones, te ofrecemos la opción de comprarla en nuestra tienda online.</p>"
                                    +"<p>Descubre cómo puedes recibir en tu hogar una empanada recién horneada, elaborada con los mejores ingredientes y siguiendo las <strong>técnicas tradicionales de la receta Miga-Amiga de 1955.</strong></p>";
                imagenSeccion.src = "img/empanadas.png";

            }else{//INICIO
                seccionEscogida.textContent = "Esto es el inicio de la página";
                migaPan.innerHTML = "Migas - Amigas &nbsp;&nbsp;|&nbsp;&nbsp;  Inicio";
                tituloSeccion.textContent = "SOBRE NOSOTROS";
                textoSeccion.innerHTML = "<h1>Nuestra empresa</h1><p><strong>Migas-Amigas</strong> es una empresa familiar que nació a principios de los años 80 en el pueblo de Azagra (Navarra), con el fin de servir pan tanto a particulares como a tiendas, bares, restaurantes y supermercados.</p> "
                                    +"<p>La Panadera ha sido siempre una empresa preocupada por satisfacer las necesidades de sus clientes, ofreciendo siempre la máxima calidad tanto en sus productos como en sus servicios.</p>"
                                    + "<p>A lo largo de los años, La Panadera ha apostado por la innovación, desarrollando nuevos productos diferenciales tanto por su sabor, como por su funcionalidad. Como resultado de esa investigación, nace su producto estrella, <strong>Laxapan</strong>, el primer pan de fibra verde.</p>"
                                    +"<p>Su misión es ser la empresa líder en el negocio de la panadería y repostería, superando las expectativas de los clientes, a través de un equipo comprometido.</p>"
                                    +"<p>La Panadera adapta sus productos a las exigencias de sus clientes, es por ello que ofrecemos un <strong> especializado abanico de productos</strong> para el sector de la hostelería, modificando formas, pesos y tamaños de los productos en función de sus necesidades.</p>"
                                    +"<p>Ofrecemos un servicio rápido y seguro para el transporte de nuestros productos al lugar que el cliente desee. Además de disponer de un servicio a domicilio, también comercializamos nuestros productos por el resto de provincias.</p>";
                imagenSeccion.src = "img/panaderia.png";

            }
            break;

        case 'english':
            titulo.textContent = 'Crumbs - Friends';
            //menu
            seccionPanaderia.textContent = "Bakery";
            seccionPasteleriaBolleria.textContent = "Pastry";
            seccionEmpanadas.textContent = "Pies"; 
            seccionInicio.textContent = "Init";

            productoPan.textContent  = "Bread";
            productoPastel.textContent  = "Cakes";
            productoEmpanada.textContent  = "Pies";
            product.textContent = "Products for Sale";

            productoDisponiblePan.innerHTML = 'Breads for Sale &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Init</a>';
            productoDisponiblePastel.innerHTML = 'Cakes for Sale &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Init</a>';
            productoDisponibleEmpanada.innerHTML = 'Pies for Sale &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Init</a>'; 



            
            //seccion en INGLÉS
            if(seccion == "panaderia"){
                migaPan.innerHTML = "Crumbs - Friends &nbsp;&nbsp;|&nbsp;&nbsp; Bakery";
                tituloSeccion.textContent = "OUR BAKERY";
                textoSeccion.innerHTML = "<h1>The magic of artisan bread: From sourdough to perfect baking</h1>"
                                    +"<p>The magic of artisan bread is a culinary art that dates back to ancient times and has been rediscovered today as a way of connecting with tradition, taking care of food and the search for authentic flavors. The process of making artisan bread, from the preparation of sourdough to the perfect baking, is a ritual that requires time, patience and love for cooking.</p>"
                                    +"<p><strong>Sourdough is the key ingredient in the production of artisanal bread,</strong> as it is responsible for providing the bread with its characteristic flavor and unique texture. To prepare sourdough, flour and water are mixed in a container and left to ferment for several days so that natural yeasts develop and an environment conducive to fermentation is created.</p>"
                                    +"<p>Once the sourdough is ready, it is incorporated into the mixture of flour, water and salt to start the preparation of the bread dough. Kneading is a fundamental step in this process, as it allows the gluten in the flour to develop and obtain an elastic and consistent dough. Kneading with care and dedication is essential to achieve a <strong>bread with a good structure and a perfect crumb.</strong></p>"
                                    +"<p>After kneading, the dough is left to rest in a warm place to ferment and acquire its characteristic flavor. During this process, it is important to make folds in the dough to develop the structure of the bread and achieve a fluffy and honeycombed crumb. Fermentation is a crucial step in making artisan bread, as it will determine the final flavor and texture of the bread.</p>"
                                    +"<p>In this way <strong>at Crumbs - Friends we get a quality bread,</strong> which is liked on any table and mouth without exception.</p>";
                imagenSeccion.src = "img/panadero.png";

            }else if(seccion == 'pasteleriaBolleria'){
                migaPan.innerHTML = "Crumbs - Friends &nbsp;&nbsp;|&nbsp;&nbsp; Pastry";
                tituloSeccion.textContent ="OUR PASTRY";
                textoSeccion.innerHTML ="<h1>The secret of an artisanal quality pastry shop</h1>"
                                    +"<p>Surely when they tell you that a sweet is made following the techniques of artisanal pastry, your mouth waters. The first thing that comes to mind is that it has that always recognizable flavor. In addition, you will be sure that they are <strong>products with top quality ingredients.</strong></p>"
                                    +"<p>And that is where the first key to <strong>authentic artisanal pastry lies.</strong> The raw material is carefully selected to achieve the best results. Those ingredients are used that after being cooked provide the flavor, aroma and texture that make the product special.</p>"
                                    +"<p>In addition, it is a way to ensure that they are totally healthy products <strong>without additives or preservatives.</strong> Just the ingredients needed to give flavor and shape to these delicious sweets. No more, no less.</p>"
                                    +"<p>Another key to <strong>authentic artisanal pastry is that it is made by experts who know the recipe perfectly.</strong> It is the best way to ensure that the sweet is the same as always while respecting the traditional production processes. It may seem obvious, but artisanal pastry must be made by artisans.</p>"
                                    +"<p>The good work, the love put into the preparation and the care in the choice of ingredients are the keys to an authentic traditional pastry.</p>";
                imagenSeccion.src = "img/pasteleria.png";

            }else if(seccion == 'empanadas'){
            
                migaPan.innerHTML = "Crumbs - Friends &nbsp;&nbsp;|&nbsp;&nbsp;  Pies";
                tituloSeccion.textContent = "OUR PIES";
                textoSeccion.innerHTML = "<h1>The Art of the Galician Artisan Empanada: Tradition and Quality in Every Bite</h1>"
                                    +"<p>Our Galician empanada is much more than a typical dish of the region. <stron>It is an expression of Galician culture,</stron> a combination of authentic flavours and artisanal techniques passed down from generation to generation since 1955.</p>"
                                    +"<p><strong>The Preparation Process: Fundamental Steps for a Perfect Galician Artisan Empanada</strong></p>"
                                    +"<ol>"
                                    +"<li>Selection of Ingredients: From the dough to the filling, each ingredient is carefully selected to ensure the highest quality and freshness.</li>"
                                    +"<li>Dough Making: The Galician empanada dough is formed and stretched by hand with care and dedication, following our unique Avoa Maruxa recipe from 1955 that ensures a unique texture and an unbeatable flavor</li>"
                                    +"<li>Traditional Filling: Whether it is meat, fish or vegetables, the filling of the artisan Galician empanada is cooked slowly and spread manually to bring out its characteristic flavor.</li>"
                                    +"<li>Closing and Decoration: The closing of the empanada is an art in itself, and we make them one by one. In addition, the leftover dough is decorated with strips that is part of the visual identity of the Galician empanada.</li>"
                                    +"</ol>"
                                    +"<p>If you want to enjoy the authentic artisan Galician empanada without complications, we offer you the option of buying it in our online store.</p>"
                                    +"<p>Find out how you can receive a freshly baked empanada at home, made with the best ingredients and following the <strong>traditional techniques of the Miga-Amiga recipe from 1955.</strong></p>";
                imagenSeccion.src = "img/empanadas.png";

            }else{//INICIO
                migaPan.innerHTML = "Crumbs - Friends &nbsp;&nbsp;|&nbsp;&nbsp;  Init";
                tituloSeccion.textContent = "ABOUT US";
                textoSeccion.innerHTML = "<h1>Our company</h1><p><strong>Migas-Amigas</strong> is a family business that was born in the early 80s in the town of Santiago de Compostela (A Coruña), in order to serve bread both to individuals and to shops, bars, restaurants and supermarkets.</p>"
                                    +"<p>La Panadera has always been a company concerned with satisfying the needs of its customers, always offering the highest quality in both its products and services.</p>"
                                    + "<p>Over the years, La Panadera has been committed to innovation, developing new products that differentiate both their flavour and their functionality. As a result of this research, its star product, <strong>Laxapan</strong>, the first green fiber bread, was born.</p>"
                                    +"<p>Its mission is to be the leading company in the bakery and confectionery business, exceeding customer expectations, through a committed team.</p>"
                                    +"<p>La Panadera adapts its products to the demands of its customers, which is why we offer a <strong> specialized range of products</strong> for the hospitality sector, modifying shapes, weights and sizes of the products according to their needs.</p>"
                                    +"<p>We offer a fast and safe service for the transport of our products to the place of the customer's choice. In addition to having a home delivery service, we also market our products in the rest of the provinces.</p>";
                imagenSeccion.src = "img/panaderia.png";

            }
            
            break;
            
        case 'portugues':
            titulo.textContent = 'Migas - Amigos';
            //menu
            seccionPanaderia.textContent = "Padaria";
            seccionPasteleriaBolleria.textContent = "Pastelaria";
            seccionEmpanadas.textContent = "Tortas";
            
            productoPan.textContent = "Pães";
            productoPastel.textContent = "Pastéis";
            productoEmpanada.textContent = "Tortas";
            product.textContent = "Produtos para Venda";

            productoDisponiblePan.innerHTML = 'Paes para Venda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Init</a>';
            productoDisponiblePastel.innerHTML = 'Pasteis para Venda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Init</a>';
            productoDisponibleEmpanada.innerHTML = 'Tortas para Venda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="text-align: end;"><a href="#translate">Init</a>'; 

            
            //seccion en portugués
            if(seccion == "panaderia"){
                migaPan.innerHTML = "Migas - Amigos &nbsp;&nbsp;|&nbsp;&nbsp; Padaria";
                tituloSeccion.textContent = "NOSSA PADARIA";
                textoSeccion.innerHTML = "<h1>A magia do pão artesanal: da massa fermentada ao cozimento perfeito</h1>"
                                    +"<p>A magia do pão artesanal é uma arte culinária que remonta aos tempos antigos e foi redescoberta hoje como uma forma de se conectar com a tradição, cuidar da comida e buscar sabores autênticos. O processo de fabricação do pão artesanal, desde o preparo da massa fermentada até o cozimento perfeito, é um ritual que requer tempo, paciência e amor pela culinária.</p>"
                                    +"<p><strong>A massa mãe é o ingrediente chave na produção do pão artesanal,</strong> pois é responsável por conferir ao pão o seu sabor característico e textura única. Para preparar a massa fermentada, a farinha e a água são misturadas em um recipiente e deixadas para fermentar por vários dias para que as leveduras naturais se desenvolvam e um ambiente propício à fermentação seja criado.</p>"
                                    +"<p>Assim que a massa fermentada estiver pronta, ela é incorporada à mistura de farinha, água e sal para iniciar o preparo da massa do pão. O amassamento é uma etapa fundamental neste processo, pois permite que o glúten da farinha se desenvolva e obtenha uma massa elástica e consistente. Amassar com cuidado e dedicação é essencial para obter um <strong>pão com uma boa estrutura e um miolo perfeito.</strong></p>"
                                    +"<p>Após amassar, a massa é deixada em repouso em local aquecido para fermentar e adquirir seu sabor característico. Durante esse processo, é importante fazer dobras na massa para desenvolver a estrutura do pão e obter um miolo fofo e alveolar. A fermentação é uma etapa crucial na fabricação do pão artesanal, pois determinará o sabor e a textura finais do pão.</p>"
                                    +"<p>Desta forma<strong>, na Miga - Amiga obtemos um pão de qualidade,</strong> que é apreciado em qualquer mesa e boca, sem exceção.</p>";
                imagenSeccion.src = "img/panadero.png";

            }else if(seccion == 'pasteleriaBolleria'){
                migaPan.innerHTML = "Migas - Amigos &nbsp;&nbsp;|&nbsp;&nbsp; Pastelaria";
                tituloSeccion.textContent = "A NOSSA PASTELARIA E PASTELARIA";
                textoSeccion.innerHTML =" <h1>O segredo de uma pastelaria artesanal de qualidade</h1>"
                                    +"<p>Certamente, quando dizem que um doce é feito seguindo as técnicas da pastelaria artesanal, fica com água na boca. A primeira coisa que vem à mente é que tem aquele sabor sempre reconhecível. Além disso, você terá a certeza de que são <strong>produtos com ingredientes de primeira qualidade.</strong></p>"
                                    +"<p>E é aí que reside a primeira chave para a <strong>autêntica pastelaria artesanal.</strong> A matéria-prima é cuidadosamente selecionada para obter os melhores resultados. São utilizados esses ingredientes que, depois de cozidos, proporcionam o sabor, aroma e textura que tornam o produto especial.</p>"
                                    +"<p>Além disso, é uma forma de garantir que são produtos totalmente saudáveis, <strong>sem aditivos ou conservantes.</strong> Apenas os ingredientes necessários para dar sabor e forma a esses deliciosos doces. Nem mais, nem menos.</p>"
                                    +"<p>Outra chave para a <strong>autêntica pastelaria artesanal é que ela é feita por especialistas que conhecem perfeitamente a receita.</strong> É a melhor forma de garantir que o doce é o mesmo de sempre, respeitando os processos de produção tradicionais. Pode parecer óbvio, mas a pastelaria artesanal deve ser feita por artesãos.</p>"
                                    +"<p>O bom trabalho, o amor colocado na preparação e o cuidado na escolha dos ingredientes são as chaves para uma autêntica pastelaria tradicional.</p>";
                imagenSeccion.src = "img/pasteleria.png";

            }else if(seccion == 'empanadas'){
                migaPan.innerHTML = "Migas - Amigos &nbsp;&nbsp;|&nbsp;&nbsp;  Tortas";
                tituloSeccion.textContent = "NOSSAS EMPANADAS";
                textoSeccion.innerHTML = "<h1>A arte da empanada artesanal galega: tradição e qualidade em cada mordida</h1>"
                                    +"<p>A nossa empanada galega é muito mais do que um prato típico da região. <stron>É uma expressão da cultura galega,</stron> uma combinação de sabores autênticos e técnicas artesanais transmitidas de geração em geração desde 1955.</p>"
                                    +"<p><strong>O processo de preparação: etapas fundamentais para uma empanada artesanal galega perfeita</strong></p>"
                                    +"<ol>"
                                    +"<li>Seleção de Ingredientes: Da massa ao recheio, cada ingrediente é cuidadosamente selecionado para garantir a mais alta qualidade e frescura.</li>"
                                    +"<li>Confecção de massa: A massa de empanada galega é formada e esticada à mão com cuidado e dedicação, seguindo a nossa receita única de Avoa Maruxa de 1955 que garante uma textura única e um sabor imbatível</li>"
                                    +"<li>Recheio Tradicional: Quer se trate de carne, peixe ou legumes, o recheio da empanada artesanal galega é cozinhado lentamente e espalhado manualmente para realçar o seu sabor característico.</li>"
                                    +"<li>Fechamento e Decoração: O fechamento da empanada é uma arte em si, e nós os fazemos um a um. Além disso, a massa restante é decorada com tiras que fazem parte da identidade visual da empanada galega.</li>"
                                    +"</ol>"
                                    +"<p>Se quiser desfrutar da autêntica empanada artesanal galega sem complicações, oferecemos-lhe a opção de a comprar na nossa loja online.</p>"
                                    +"<p>Descubra como pode receber em casa uma empanada acabada de fazer, feita com os melhores ingredientes e seguindo as <strong>técnicas tradicionais da receita Miga-Amiga de 1955.</strong></p>";
                imagenSeccion.src = "img/empanadas.png";

            }else{//INICIO
                migaPan.innerHTML = "Migas - Amigos &nbsp;&nbsp;|&nbsp;&nbsp;  Principio";
                tituloSeccion.textContent = "QUEM SOMOS";
                textoSeccion.innerHTML = "<h1>A nossa empresa</h1><p><strong>Migas-Amigas</strong> é uma empresa familiar que nasceu no início dos anos 80 na localidade de Santiago de Compostela (A Coruña), com o objetivo de servir pão tanto a particulares como a lojas, bares, restaurantes e supermercados.</p>"
                                    +"<p>La Panadera sempre foi uma empresa preocupada em satisfazer as necessidades de seus clientes, sempre oferecendo a mais alta qualidade em seus produtos e serviços.</p>"
                                    + "<p>Ao longo dos anos, La Panadera apostou na inovação, desenvolvendo novos produtos que diferenciam tanto o seu sabor como a sua funcionalidade. Como resultado dessa pesquisa, nasceu seu produto estrela, <strong>o Laxapan</strong>, o primeiro pão de fibra verde.</p>"
                                    +"<p>A sua missão é ser a empresa líder no ramo da panificação e confeitaria, superando as expectativas dos clientes, através de uma equipa empenhada.</p>"
                                    +"<p>La Panadera adapta seus produtos às demandas de seus clientes, por isso oferecemos uma <strong> gama especializada de produtos</strong> para o setor hoteleiro, modificando formas, pesos e tamanhos dos produtos de acordo com suas necessidades.</p>"
                                    +"<p>Oferecemos um serviço rápido e seguro para o transporte dos nossos produtos até ao local à escolha do cliente. Além de ter um serviço de entrega em domicílio, também comercializamos nossos produtos no resto das províncias.</p>";
                imagenSeccion.src = "img/panaderia.png";

            }
            break;
    }
}



function removeAccentsAndN(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n").replace(/Ñ/g, "N");
}

//lenguaje por defecto del navegador
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