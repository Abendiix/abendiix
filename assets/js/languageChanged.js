/*
MIT License

Copyright (c) 2024 Abendiix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/** Detect language and change texts */
window.onload = (event) => {
    if(localStorage.getItem("language") == "es")
    {
        updateTexts("es");
        document.documentElement.setAttribute("lang", 'es');
    }
    else if (localStorage.getItem("language") == "en")
    {
        updateTexts("en");
        document.documentElement.setAttribute("lang", 'en');
    }
    else if (localStorage.getItem("language") == "ja")
    {
        updateTexts("ja");
        document.documentElement.setAttribute("lang", 'ja');
    }    
};

function changeToES()
{
    localStorage.setItem("language", "es");
    document.documentElement.setAttribute("lang", 'es');
    updateTexts("es");
}

function changeToEN()
{
    localStorage.setItem("language", "en");
    document.documentElement.setAttribute("lang", 'en');
    updateTexts("en");
}

function changeToJA()
{
    localStorage.setItem("language", "ja");
    document.documentElement.setAttribute("lang", 'ja');
    updateTexts("ja");
}

function updateTexts(language)
{
    if(localStorage.getItem("language") == "es")
    {
        //Meta
        document.title = "Abendiix | ¡Juegos, herramientas y más!"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Enlace a la página de Abendiix (donde estás ahora).";
        document.getElementById("banner").alt = "Logo de Abendiix en su forma expandida. Las letras están en negro y el fondo es transparente (modo claro).";
        document.getElementById("moto").innerHTML = "¡Juegos, herramientas y más!";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "underline";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "none";

        document.getElementById("clearmode").ariaLabel = "Cambiar los colores de la página al modo claro.";
        document.getElementById("clear").alt = "Icono de un sol para cambiar la página al modo claro.";
        document.getElementById("darkmode").ariaLabel = "Cambiar los colores de la página al modo oscuro.";
        document.getElementById("dark").alt = "Icono de una luna para cambiar la página al modo oscuro.";

        document.getElementById("libretranslate").style.display = "none";

        //Projects' filters
        document.getElementById("projects").innerHTML = "Proyectos |";
        document.getElementById("projectsall").ariaLabel = "Mostrar todos los proyectos de Abendiix.";
        document.getElementById("projectsall").innerHTML = "Todo";
        document.getElementById("projectsgames").ariaLabel = "Mostrar juegos de Abendiix.";
        document.getElementById("projectsgames").innerHTML = "Juegos";
        document.getElementById("projectstools").ariaLabel = "Mostrar herramientas de Abendiix.";
        document.getElementById("projectstools").innerHTML = "Herramientas";
        document.getElementById("projectsart").ariaLabel = "Mostrar arte de Abendiix.";
        document.getElementById("projectsart").innerHTML = "Arte";

        //Projects
        //Sprites Love
        document.getElementById("spritesloveicon").alt = "Logo del proyecto Sprites Love. Muestra una S pixelada que viene de la palabra 'Sprites' y un pixel abajo a la derecha, hay un corazón pixelado rojo que representa la palabra 'Love'.";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("spriteslovelink").ariaLabel = "Enlace a la página de Sprites Love.";
        document.getElementById("spriteslovelinkicon").alt = "Icono negro que simboliza un enlace web con dos cadenas en diagonal que redirige a la web de Sprites Love.";
        
        //Trom
        document.getElementById("tromicon").alt = "Logo del proyecto Trom. Muestra una trompeta hecha en pixel art que viene del propio juego.";
        document.getElementById("trm").innerHTML = "Trom";
        document.getElementById("tromlinkplaystore").ariaLabel = "Enlace a la página de Play Store de Trom.";
        document.getElementById("tromlinkplaystoreicon").alt = "Icono negro de Play Store que redirige a la página de Trom.";
        
        //Fonts
        document.getElementById("fonts").alt = "Logo para las fuentes de Abendiix. Muestra una A mayúscula y una a minúscula en estilo pixel art.";
        document.getElementById("fnts").innerHTML = "Fuentes";
        document.getElementById("fontslink").ariaLabel = "Enlace a la página web de fuentes de Abendiix.";
        document.getElementById("fontslinkicon").alt = "Icono negro que simboliza un enlace web con dos cadenas en diagonal que redirige a la página web de fuentes de Abendiix.";

        //Abouts
        document.getElementById("aboutabndx").innerHTML = "Sobre";
        document.getElementById("aboutap1").innerHTML = "Soy Abendiix, un desarrollador indie y artista. Hago (y cacharreo con) juegos, herramientas y cualquier cosa que me llame la atención, con la esperanza de hacer del mundo un lugar mejor con mis proyectos.";
        document.getElementById("aboutap2").innerHTML = "Abendiix es tanto mi alias de desarrollador/artista como un proyecto por sí mismo, donde quiero perseguir el sueño y objetivo de desarrollar ideas, arte y proyectos que sean tan abiertos, accesibles y cómodos como pueda para todo y cualquier persona que interactúe con ellos o se vea afectado o influenciado por ellos.";
        document.getElementById("aboutap3").innerHTML = "Abendiix (como proyecto) crecerá, aprenderá, evolucionará y cambiará tanto, sino más, de lo que Abendiix (como yo mismo) lo hará. El objetivo de Abendiix siempre será aprovechar al máximo cualquier creación, buscando un impacto positivo en la gente que llegue a conocerlo, en nuestro planeta y en cualquier cosa que nos rodee.";
        document.getElementById("aboutap4").innerHTML = "¡Síentete libre de contactarme sobre cualquier cosa! Cualquier error/bug/problema que deba arreglar o resolver, cualquier pregunta que puedas tener, enseñarme cualquier cosa que quieras como fanarts o experiencias que hayas tenido con mis proyectos o incluso para simplemente saludar y charlar. ¡Siempre estaré más que agradecido y feliz de hablar e interactuar con cualquier persona!";

        document.getElementById("projectssummary").innerHTML = "Proyectos";
        document.getElementById("aboutpp1").innerHTML = "Creo que cualquier creación siempre contará con al menos 2 autores (o 2 partes que le dan sentido a la creación). La primera parte sería el creador 'original', a quien se le ocurren ideas y las convierte en una realidad. La segunda parte sería quien experimenta esa realidad, la interpreta, la disfruta, la siente y mucho más, haciendo de esa realidad un todo, dándole su razón de ser en el proceso.";
        document.getElementById("aboutpp2").innerHTML = "A veces, ambos son solamente el creador original interactuando con su propia creación, incluso si aún está en el proceso de crear esa realidad o experimentando con ella desde cualquier perspectiva.";
        document.getElementById("aboutpp3").innerHTML = "Sin tener en cuenta este escenario, la relación entre esos 2 autores diferentes y esa realidad tiene que ser tan sana como pueda. Sin ninguna de las partes o sin que una de ellas tenga el cuidado y responsabilidad necesarios, esa relación dejaría a alguna de las partes sintiendo que no se las está teniendo en cuenta, que no se las toma en serio o como si estas no importaran.";
        document.getElementById("aboutpp4").innerHTML = "Esa relación debe tener en cuenta, en medida de lo posible, los antecedentes de ambos autores, sus situaciones y necesidades, con ambas partes respetándose mutuamente y siendo responsables con como interactúan y coexisten, para así formar esa realidad que solo podría existir con una relación igualitaria entre ambas partes.";
        document.getElementById("aboutpp5").innerHTML = "A veces el creador original puede incluso ser el 'segundo', donde sus necesidades son las que le dan un sentido y forma a una creación necesaria, que no se hará realidad a no ser que alguien trabaje en ella.";
        document.getElementById("aboutpp6").innerHTML = "Mis proyectos carecerían de sentido si no beneficiaran de cualquier forma, en una manera sana y coherente a cualquiera de las partes involucradas. Quiero que todo el mundo se sienta bienvenido a disfrutar, interactuar y compartir cualquier cosa relacionada con Abendiix y sus proyectos de cualquier forma. Aún mejor, esas experiencias con los proyectos de Abendiix pueden dar lugar a otras creaciones y realidades que la gente podrá experimentar, donde ideas, sentimientos y mucho más interactuarán, coexistirán y crearán otras muchas creaciones.";
        document.getElementById("aboutpp7").innerHTML = "El proceso creativo y la necesidad de la gente por expresarse y ser oídos no es algo que se deba ni se pueda controlar ni parar. Desde quienes quieren divertirse y compartir con otros la alegría que sienten con las creaciones de otros, como quienes quieren reclamar quienes son, reivindicar sobre algún aspecto de sus vidas o cualquier tipo de movimiento.";
        document.getElementById("aboutpp8").innerHTML = "Hay obvias limitaciones legales pero hablo de esa necesidad de crear y sentir que simplemente no puedes dejar ir ni soltar, por lo que quiero y trabajaré para que mis creaciones sean todo lo abiertas, libres y accesibles como pueda, para que cualquiera pueda exprimirlas al máximo en todos los sentidos y formas posibles.";
        document.getElementById("aboutpp9").innerHTML = "Estas palabras son solo pensamientos que se me pasan por la cabeza de vez en cuando cuando experimento las creaciones de otras personas y como resultado de lo que me hacen sentir y como me gustaría que fueran mis proyectos y creaciones. Quiero hacer proyectos y creaciones que no limiten la creatividad ni necesidad de la gente de disfrutar y experimentar plenamente cualquier cosa que haga. Quiero que la gente sienta toda la libertad posible cuando se crucen con Abendiix y sus proyectos. Quiero aprender más de todo y de todos, hacer proyectos y creaciones que tanto yo como otras personas amemos y con los que nos divirtamos (y con los que confiemos ganarme la vida 🤞) en el proceso.";
        document.getElementById("aboutpp10").innerHTML = "PD: Esta es solo <b>mi</b> forma de ver como quiero hacer <b>mis propios</b> proyectos y arte, que pueden o no cambiar en el futuro y/o mientras los creo (y no algo que espere tozudamente de nadie ni de ningún proyecto; todos somos y debemos aspirar a ser diferentes). Cometeré errores y estoy abierto a hablar sobre ellos y mejorar mis proyectos y a mi mismo. ¡Siéntete libre de hablarme y no dudes de ponerte en contacto cuando quieras! ^^";

        document.getElementById("projectssoftwaretitle").innerHTML = "Software";
        document.getElementById("aboutpsp1").innerHTML = "Todo el software de Abendiix siempre será código abierto y estará disponible para todo el mundo. Habrá ocasiones en las que el código pueda no estar disponible, como en el caso de lanzar un videojuego en una plataforma con código privado de la misma. En estos casos siempre habrá un proyecto equivalente donde todo el código estará disponible de forma gratuita (imagínate un lanzamiento en PC y consola, donde puede haber algunos módulos privados para la versión de consola pero no en la de PC, donde podré hacer el código completamente abierto).";
        document.getElementById("aboutpsp2").innerHTML = "El software de Abendiix siempre tendrá su licencia correspondiente y su reclamación de derechos de autor para despejar cualquier duda sobre su uso.";


        document.getElementById("projectsarttitle").innerHTML = "Arte";
        document.getElementById("aboutpap1").innerHTML = "Todo el arte de Abendiix tendrá un enfoque parecido al software de Abendiix, estando siempre libremente disponible (puede que a veces no completamente gratuito) y con su uso abierto a cualquiera.";
        document.getElementById("aboutpap2").innerHTML = "Todas las obras de arte tendrán su licencia y su reclamación de derechos de autor para despejar cualquier duda sobre su uso.";
        document.getElementById("aboutpap3").innerHTML = "Habrá veces donde las licencias y reclamaciones de derechos de autor serán más restrictivas para evitar casos donde el arte se use/venda de forma no sana/tóxica para cualquiera de las partes involucradas.";
        document.getElementById("aboutpap4").innerHTML = "Al mismo tiempo, estas licencias, reclamaciones de derechos de autor y restricciones nunca buscarán ir en contra o dañar a nadie o su proceso creativo (como por ejemplo hacer fan-art, vender merchandising o básicamente cualquier otra cosa). Quiero que todo el mundo se sienta bienvenido a compartir su pasión y que la gente no se vea restringida en el proceso (y estaré más que contento y feliz por ver que comparte la gente sobre mis proyectos :D).";

        //Presskits
        //Abendiix
        document.getElementById("presskits").innerHTML = "Kits de prensa";

        document.getElementById("abendiixzip").ariaLabel = "Archivo zip con el logo y banner de Abendiix en modo claro y oscuro, formato svg y png y de 128, 256 y 512 píxeles.";
        document.getElementById("abendiixzip").innerHTML = "Descargar todo";

        document.getElementById("logodark").innerHTML = "Logo (versión oscura)";
        document.getElementById("logodarkthumbnail").alt = "Logo oscuro de Abendiix que sirve como miniatura.";
        document.getElementById("logodark128svg").ariaLabel = "Descargar logo de Abendiix, versión oscura, svg, 128 píxeles.";
        document.getElementById("logodark256svg").ariaLabel = "Descargar logo de Abendiix, versión oscura, svg, 256 píxeles.";
        document.getElementById("logodark512svg").ariaLabel = "Descargar logo de Abendiix, versión oscura, svg, 512 píxeles.";
        document.getElementById("logodark128png").ariaLabel = "Descargar logo de Abendiix, versión oscura, png, 128 píxeles.";
        document.getElementById("logodark256png").ariaLabel = "Descargar logo de Abendiix, versión oscura, png, 256 píxeles.";
        document.getElementById("logodark512png").ariaLabel = "Descargar logo de Abendiix, versión oscura, png, 512 píxeles.";

        document.getElementById("logoclear").innerHTML = "Logo (versión clara)";
        document.getElementById("logoclearthumbnail").alt = "Logo claro de Abendiix que sirve como miniatura.";
        document.getElementById("logoclear128svg").ariaLabel = "Descargar logo de Abendiix, versión clara, svg, 128 píxeles.";
        document.getElementById("logoclear256svg").ariaLabel = "Descargar logo de Abendiix, versión clara, svg, 256 píxeles.";
        document.getElementById("logoclear512svg").ariaLabel = "Descargar logo de Abendiix, versión clara, svg, 512 píxeles.";
        document.getElementById("logoclear128png").ariaLabel = "Descargar logo de Abendiix, versión clara, png, 128 píxeles.";
        document.getElementById("logoclear256png").ariaLabel = "Descargar logo de Abendiix, versión clara, png, 256 píxeles.";
        document.getElementById("logoclear512png").ariaLabel = "Descargar logo de Abendiix, versión clara, png, 512 píxeles.";

        document.getElementById("bannerdark").innerHTML = "Banner (versión oscura)";
        document.getElementById("bannerdarkthumbnail").alt = "Banner oscuro de Abendiix que sirve como miniatura.";
        document.getElementById("bannerdark128svg").ariaLabel = "Descargar banner de Abendiix, versión oscura, svg, 128 píxeles.";
        document.getElementById("bannerdark256svg").ariaLabel = "Descargar banner de Abendiix, versión oscura, svg, 256 píxeles.";
        document.getElementById("bannerdark512svg").ariaLabel = "Descargar banner de Abendiix, versión oscura, svg, 512 píxeles.";
        document.getElementById("bannerdark128png").ariaLabel = "Descargar banner de Abendiix, versión oscura, png, 128 píxeles.";
        document.getElementById("bannerdark256png").ariaLabel = "Descargar banner de Abendiix, versión oscura, png, 256 píxeles.";
        document.getElementById("bannerdark512png").ariaLabel = "Descargar banner de Abendiix, versión oscura, png, 512 píxeles.";

        document.getElementById("bannerclear").innerHTML = "Banner (versión clara)";
        document.getElementById("bannerclearthumbnail").alt = "Banner claro de Abendiix que sirve como miniatura.";
        document.getElementById("bannerclear128svg").ariaLabel = "Descargar banner de Abendiix, versión clara, svg, 128 píxeles.";
        document.getElementById("bannerclear256svg").ariaLabel = "Descargar banner de Abendiix, versión clara, svg, 256 píxeles.";
        document.getElementById("bannerclear512svg").ariaLabel = "Descargar banner de Abendiix, versión clara, svg, 512 píxeles.";
        document.getElementById("bannerclear128png").ariaLabel = "Descargar banner de Abendiix, versión clara, png, 128 píxeles.";
        document.getElementById("bannerclear256png").ariaLabel = "Descargar banner de Abendiix, versión clara, png, 256 píxeles.";
        document.getElementById("bannerclear512png").ariaLabel = "Descargar banner de Abendiix, versión clara, png, 512 píxeles.";

        //Sprites Love
        document.getElementById("spriteslovezip").ariaLabel = "Archivo zip con los diferentes logos de Sprites Love con una relación de 1 a 1 y 1 a 10 (en píxeles), en formato svg y png.";
        document.getElementById("spriteslovezip").innerHTML = "Descargar todo";

        document.getElementById("spriteslovemain").innerHTML = "Logo principal";
        document.getElementById("spriteslovemainthumbnail").alt = "Logo principal de Sprites Love que sirve como miniatura.";
        document.getElementById("spriteslovemain1-1svg").ariaLabel =  "Descargar logo principal de Sprites Love, relación 1 a 1, svg.";
        document.getElementById("spriteslovemain1-10svg").ariaLabel = "Descargar logo principal de Sprites Love, relación 1 a 10, svg.";
        document.getElementById("spriteslovemain1-1png").ariaLabel =  "Descargar logo principal de Sprites Love, relación 1 a 1, png.";
        document.getElementById("spriteslovemain1-10png").ariaLabel = "Descargar logo principal de Sprites Love, relación 1 a 10, png.";

        document.getElementById("spritesloveshort").innerHTML = "Logo cuadrado";
        document.getElementById("spritesloveshortthumbnail").alt = "Logo cuadrado de Sprites Love que sirve como miniatura.";
        document.getElementById("spritesloveshort1-1svg").ariaLabel =  "Descargar logo cuadrado de Sprites Love, relación 1 a 1, svg.";
        document.getElementById("spritesloveshort1-10svg").ariaLabel = "Descargar logo cuadrado de Sprites Love, relación 1 a 10, svg.";
        document.getElementById("spritesloveshort1-1png").ariaLabel =  "Descargar logo cuadrado de Sprites Love, relación 1 a 1, png.";
        document.getElementById("spritesloveshort1-10png").ariaLabel = "Descargar logo cuadrado de Sprites Love, relación 1 a 10, png.";

        document.getElementById("spriteslovelong").innerHTML = "Logo acortado";
        document.getElementById("spriteslovelongthumbnail").alt = "Logo acortado de Sprites Love que sirve como miniatura.";
        document.getElementById("spriteslovelong1-1svg").ariaLabel =  "Descargar logo acortado de Sprites Love, relación 1 a 1, svg.";
        document.getElementById("spriteslovelong1-10svg").ariaLabel = "Descargar logo acortado de Sprites Love, relación 1 a 10, svg.";
        document.getElementById("spriteslovelong1-1png").ariaLabel =  "Descargar logo acortado de Sprites Love, relación 1 a 1, png.";
        document.getElementById("spriteslovelong1-10png").ariaLabel = "Descargar logo acortado de Sprites Love, relación 1 a 10, png.";

        document.getElementById("spriteslovesquare").innerHTML = "Logo alargado";
        document.getElementById("spriteslovesquarethumbnail").alt = "Logo alargado de Sprites Love que sirve como miniatura.";
        document.getElementById("spriteslovesquare1-1svg").ariaLabel =  "Descargar logo alargado de Sprites Love, relación 1 a 1, svg.";
        document.getElementById("spriteslovesquare1-10svg").ariaLabel = "Descargar logo alargado de Sprites Love, relación 1 a 10, svg.";
        document.getElementById("spriteslovesquare1-1png").ariaLabel =  "Descargar logo alargado de Sprites Love, relación 1 a 1, png.";
        document.getElementById("spriteslovesquare1-10png").ariaLabel = "Descargar logo alargado de Sprites Love, relación 1 a 10, png.";

        document.getElementById("spriteslovebig").innerHTML = "Logo grande";
        document.getElementById("spriteslovebigthumbnail").alt = "Logo grande de Sprites Love que sirve como miniatura.";
        document.getElementById("spriteslovebig1-1svg").ariaLabel =  "Descargar logo grande de Sprites Love, relación 1 a 1, svg.";
        document.getElementById("spriteslovebig1-10svg").ariaLabel = "Descargar logo grande de Sprites Love, relación 1 a 10, svg.";
        document.getElementById("spriteslovebig1-1png").ariaLabel =  "Descargar logo grande de Sprites Love, relación 1 a 1, png.";
        document.getElementById("spriteslovebig1-10png").ariaLabel = "Descargar logo grande de Sprites Love, relación 1 a 10, png.";

        document.getElementById("spritesloveheart").innerHTML = "Logo corazón";
        document.getElementById("spritesloveheartthumbnail").alt = "Logo corazón de Sprites Love que sirve como miniatura.";
        document.getElementById("spritesloveheart1-1svg").ariaLabel =  "Descargar logo corazón de Sprites Love, relación 1 a 1, svg.";
        document.getElementById("spritesloveheart1-10svg").ariaLabel = "Descargar logo corazón de Sprites Love, relación 1 a 10, svg.";
        document.getElementById("spritesloveheart1-1png").ariaLabel =  "Descargar logo corazón de Sprites Love, relación 1 a 1, png.";
        document.getElementById("spritesloveheart1-10png").ariaLabel = "Descargar logo corazón de Sprites Love, relación 1 a 10, png.";

        //Privacy Policies
        document.getElementById("privacypolicies").innerHTML = "Políticas de privacidad";
        document.getElementById("trompp").innerHTML = "Trom no genera ningún tipo de datos ni los transmite a ningún tipo de servidor o base de datos.";

        //External sites
        document.getElementById("tips").innerHTML = "Propinas";
        document.getElementById("ko-filink").ariaLabel = "Enlace al Ko-fi de Abendiix.";
        document.getElementById("ko-fi").alt = "Icono negro de Ko-fi que redirige al perfil de Abendiix.";

        document.getElementById("c&r").innerHTML = "Código y lanzamientos";
        document.getElementById("githublink").ariaLabel = "Enlace al GitHub de Abendiix.";
        document.getElementById("github").alt = "Icono negro de GitHub que redirige al perfil de Abendiix.";
        document.getElementById("itchiolink").ariaLabel = "Enlace al itch.io de Abendiix.";
        document.getElementById("itchio").alt = "Icono negro de itch.io que redirige al perfil de Abendiix.";
        document.getElementById("playstorelink").ariaLabel = "Enlace al Play Store de Abendiix.";
        document.getElementById("playstore").alt = "Icono negro de Play Store que redirige al perfil de Abendiix.";

        document.getElementById("socials").innerHTML = "RRSS";
        document.getElementById("twitterlink").ariaLabel = "Enlace al Twitter de Abendiix.";
        document.getElementById("twitter").alt = "Icono negro de Twitter que redirige al perfil de Abendiix.";
        document.getElementById("blueskylink").ariaLabel = "Enlace al Bluesky de Abendiix.";
        document.getElementById("bluesky").alt = "Icono negro de Bluesky que redirige al perfil de Abendiix.";

        //Contact section
        document.getElementById("contact").innerHTML = "Contactar via email";
        document.getElementById("copy").ariaLabel = "Copiar email de contacto de Abendiix al portapapeles.";
        document.getElementById("copy").innerHTML = "Copiar";
        document.getElementById("openApp").ariaLabel = "Abrir aplicación de email por defecto para contactar con Abendiix.";
        document.getElementById("openApp").innerHTML = "Abrir aplicación";
        document.getElementById("openApp").href = "mailto:contacto@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "Enlace a la página de Creative Commons sobre CC0.";
        document.getElementById("fontAwe").ariaLabel = "Enlace a la página de Font Awesome.";

        //Emoti gag
        document.getElementById("emotiText").innerHTML = "¡Me encontraste!";
        document.getElementById("emotigag").ariaLabel = "Pequeña broma sobre un texto con forma de emoti que lanza emojis aleatorios de comida.";
        document.getElementById("emoti").ariaLabel = "Diferentes caracteres que forman una cara feliz que lanza estrellas y un emoji de comida aleatorio.";
    }
    else if (localStorage.getItem("language") == "en")
    {
        //Meta
        document.title = "Abendiix | Games, tools and more!"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Link to Abendiix's website (where you are now).";
        document.getElementById("banner").alt = "Abendiix's logo in expanded form. The letters are black and the background of the image is transparent (clear mode).";
        document.getElementById("moto").innerHTML = "Games, tools and more!";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "underline";
        document.getElementById("ja").style.textDecoration = "none";

        document.getElementById("clearmode").ariaLabel = "Change website colors to clear mode.";
        document.getElementById("clear").alt = "Icon showing a sun for changing the website to clear mode.";
        document.getElementById("darkmode").ariaLabel = "Change website colors to dark mode.";
        document.getElementById("dark").alt = "Icon showing a moon for changing the website to dark mode.";

        document.getElementById("libretranslate").style.display = "none";

        //Projects' filters
        document.getElementById("projects").innerHTML = "Projects |";
        document.getElementById("projectsall").ariaLabel = "Show every Abendiix's project.";
        document.getElementById("projectsall").innerHTML = "All";
        document.getElementById("projectsgames").ariaLabel = "Show Abendiix's games.";
        document.getElementById("projectsgames").innerHTML = "Games";
        document.getElementById("projectstools").ariaLabel = "Show Abendiix's tools.";
        document.getElementById("projectstools").innerHTML = "Tools";
        document.getElementById("projectsart").ariaLabel = "Show Abendiix's art.";
        document.getElementById("projectsart").innerHTML = "Art";

        //Projects
        //Sprites Love
        document.getElementById("spritesloveicon").alt = "Logo for the project Sprites Love. It shows a pixelated S from the word 'Sprites' and one pixel down and to the right there's a red pixelated heart representing the word 'Love'.";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("spriteslovelink").ariaLabel = "Link to Sprites Love's website.";
        document.getElementById("spriteslovelinkicon").alt = "Black icon that symbolizes a website link with two diagonal chains that redirects to Sprites Love's website.";
        
        //Trom
        document.getElementById("tromicon").alt = "Logo for the project Trom. It shows a trumpet made with pixel art that comes from the game.";
        document.getElementById("trm").innerHTML = "Trom";
        document.getElementById("tromlinkplaystore").ariaLabel = "Link to Trom's Play Store page.";
        document.getElementById("tromlinkplaystoreicon").alt = "Play Store icon in black (clear mode) that redirects to Trom's Play Store page.";
        
        //Fonts
        document.getElementById("fonts").alt = "Logo for Abendiix's fonts. It shows a upper case A and a lower case a in pixel art style.";
        document.getElementById("fnts").innerHTML = "Fonts";
        document.getElementById("fontslink").ariaLabel = "Link to Abendiix's font website.";
        document.getElementById("fontslinkicon").alt = "Black icon (in clear mode) that symbolizes a website link with two diagonal chains that redirects to Abendiix's fonts website.";

        //Abouts
        document.getElementById("aboutabndx").innerHTML = "About";
        document.getElementById("aboutap1").innerHTML = "I'm Abendiix, an indie developer and artist. I make (and tinker with) games, tools and anything that catches my attention, hoping that I can make the world a better place with my projects.";
        document.getElementById("aboutap2").innerHTML = "Abendiix is both my developer/artist alias and a project by itself, where I want to pursue the dream and goal of developing ideas, art and projects that are as open, accessible and friendly as I can to everything and everyone that interacts with or is affected and influenced by them.";
        document.getElementById("aboutap3").innerHTML = "Abendiix (as in the project) will grow, learn, evolve and change just as much as Abendiix (as in myself) will do, if not more. Abendiix's goal will always be to make the best out of any creation, looking for a positive impact on the people that get to know Abendiix, our planet and anything that surrounds us.";
        document.getElementById("aboutap4").innerHTML = "Feel free to contact me about anything you want! Any error/bug/problem that I should fix or solve, any question you may have, showing me anything you want as fanarts or experiences you've had with my projects or even just to say hello or have a chat. I will always be more than grateful and happy to speak and engage with anyone!";

        document.getElementById("projectssummary").innerHTML = "Projects";
        document.getElementById("aboutpp1").innerHTML = "I believe that any creation will always have at least 2 authors (or 2 parts that give sense to that creation). The first one would be the 'original' creator, who comes up with ideas and turns them into a reality. The second one would be who experiences that reality, interpreting it, enjoying it, feeling it and much more, making that reality a whole and giving it its sense of being in the process.";
        document.getElementById("aboutpp2").innerHTML = "Sometimes both of them are just the original creator interacting with their own creation, even if they are still on the process of creating that reality or experiencing it from any perspective.";
        document.getElementById("aboutpp3").innerHTML = "Without taking into account this scenario, that relationship between those 2 different authors and that reality has to be as healthy as it can be. Without one of the parts or without one of them not taking the needed care and responsability, that relationship would leave some of the parts feeling like they are being left behind and not taken seriously or as if they didn't matter.";
        document.getElementById("aboutpp4").innerHTML = "That relationship should take into account, as much as possible, both authors' backgrounds, situations and needs, with both parts respecting each other and being responsible about how they interact and coexist, to then form that reality that can only come with an equal relationship between both parts.";
        document.getElementById("aboutpp5").innerHTML = "Sometimes the original creator could even be that 'second one', where their needs are what give sense and shape to a creation that is needed, and that won't turn into a reality unless someone works on it.";
        document.getElementById("aboutpp6").innerHTML = "My projects would lack their purpose if they weren't benefitial in any kind of way in a healthy and coherent manner to any of the parts involved. I want to make everyone feel welcomed to enjoy, engage and share anything related with Abendiix and its projects in every kind of way. Even better, those experiences with Abendiix's project may lead to many other creations and realities that people will be able to experience, where ideas, feelings and so much more will interact, coexist and create so many more creations.";
        document.getElementById("aboutpp7").innerHTML = "The creative process and the need for people to express themselves and be heard is not something that should nor can be controlled or stopped. From the people that want to have fun and share with others the joy they feel with other's creations, to those who want to claim who they are, vindicate about any aspect of their life or any kind of movement.";
        document.getElementById("aboutpp8").innerHTML = "There are some obvious legal limitations but I talk about that need to create and feel that sometimes can't just be let go, so I want and will work to make my creations as open, free and accesible as I can, so anyone can squeeze the most out of them in every sense and way possible.";
        document.getElementById("aboutpp9").innerHTML = "This words are just thoughts that cross my mind from time to time when experiencing other people's creation and a result of how all of them make me feel and how I would like my projects and creations to be. I want to make projects and creations that do not limit people's creativity and desire to enjoy and fully experience anything that I make. I want to make people feel as much freedom as they can when coming across Abendiix and its projects. I want to learn more about everything and everyone, make projects and creations that me and other people will love and have fun with (and let's hope making a living 🤞) in the process.";
        document.getElementById("aboutpp10").innerHTML = "PS: This is just <b>my</b> actual way of looking at how I want to create <b>my own</b> projects and art, that may or may not change in the future and/or as I create them (and not something I stubbornly expect from anyone or any project; everyone is and should aim to be different). I will make errors and I'm open to talk about them and improve my projects and myself. Feel free to always reach me out! ^^.";

        document.getElementById("projectssoftwaretitle").innerHTML = "Software";
        document.getElementById("aboutpsp1").innerHTML = "All of Abendiix's software will always be open source and available to everyone and anyone. There will sometimes be cases where the code may not be available, such as releasing a videogame into a platform with private code from the platform's company. In this cases there will always be an equivalent project where all the code is freely available (think of it like a PC and console release, where there may be some private modules for consoles but not for PC, where I can make the code fully open source).";
        document.getElementById("aboutpsp2").innerHTML = "Abendiix's software will always have it's corresponding license and copyright claim to not left out any doubts on its usage.";

        document.getElementById("projectsarttitle").innerHTML = "Art";
        document.getElementById("aboutpap1").innerHTML = "All of Abendiix's art will follow a similar approach to Abendiix's software, being always freely (as in freedom, since there will be some cases where it won't be completely free) available and open for usage to anyone.";
        document.getElementById("aboutpap2").innerHTML = "Every work of art will have it's corresponding license and copyright claim to not left out any doubts on its usage.";
        document.getElementById("aboutpap3").innerHTML = "There will sometimes be more restrictive licenses and copyright claims to avoid cases where the art is used/sold in a non-healthy/toxic way to any of the parties involved.";
        document.getElementById("aboutpap4").innerHTML = "At the same time, this licenses, copyright claims and restrictions will never aim to go against and harm anyone or their creative process (such as making fan-art, selling merchandising and pretty much anything). I want everyone to feel welcomed to share their passion and not restrict them on the process (and I'll be more than happy to see what people share about my projects :D).";

        //Presskits
        //Abendiix
        document.getElementById("presskits").innerHTML = "Presskits";

        document.getElementById("abendiixzip").ariaLabel = "Zip file with Abendiix's logo and banner in clear and dark mode, svg and png format and in 128, 256 and 512 pixels.";
        document.getElementById("abendiixzip").innerHTML = "Download everything";

        document.getElementById("logodark").innerHTML = "Logo (dark version)";
        document.getElementById("logodarkthumbnail").alt = "Abendiix's dark logo that serves as a thumbnail.";
        document.getElementById("logodark128svg").ariaLabel = "Download Abendiix's logo, dark mode, svg, 128 pixels.";
        document.getElementById("logodark256svg").ariaLabel = "Download Abendiix's logo, dark mode, svg, 256 pixels.";
        document.getElementById("logodark512svg").ariaLabel = "Download Abendiix's logo, dark mode, svg, 512 pixels.";
        document.getElementById("logodark128png").ariaLabel = "Download Abendiix's logo, dark mode, png, 128 pixels.";
        document.getElementById("logodark256png").ariaLabel = "Download Abendiix's logo, dark mode, png, 256 pixels.";
        document.getElementById("logodark512png").ariaLabel = "Download Abendiix's logo, dark mode, png, 512 pixels.";

        document.getElementById("logoclear").innerHTML = "Logo (clear version)";
        document.getElementById("logoclearthumbnail").alt = "Abendiix's clear logo that serves as a thumbnail.";
        document.getElementById("logoclear128svg").ariaLabel = "Download Abendiix's logo, clear mode, svg, 128 pixels.";
        document.getElementById("logoclear256svg").ariaLabel = "Download Abendiix's logo, clear mode, svg, 256 pixels.";
        document.getElementById("logoclear512svg").ariaLabel = "Download Abendiix's logo, clear mode, svg, 512 pixels.";
        document.getElementById("logoclear128png").ariaLabel = "Download Abendiix's logo, clear mode, png, 128 pixels.";
        document.getElementById("logoclear256png").ariaLabel = "Download Abendiix's logo, clear mode, png, 256 pixels.";
        document.getElementById("logoclear512png").ariaLabel = "Download Abendiix's logo, clear mode, png, 512 pixels.";

        document.getElementById("bannerdark").innerHTML = "Banner (dark version)";
        document.getElementById("bannerdarkthumbnail").alt = "Abendiix's dark banner that serves as a thumbnail.";
        document.getElementById("bannerdark128svg").ariaLabel = "Download Abendiix's banner, dark mode, svg, 128 pixels.";
        document.getElementById("bannerdark256svg").ariaLabel = "Download Abendiix's banner, dark mode, svg, 256 pixels.";
        document.getElementById("bannerdark512svg").ariaLabel = "Download Abendiix's banner, dark mode, svg, 512 pixels.";
        document.getElementById("bannerdark128png").ariaLabel = "Download Abendiix's banner, dark mode, png, 128 pixels.";
        document.getElementById("bannerdark256png").ariaLabel = "Download Abendiix's banner, dark mode, png, 256 pixels.";
        document.getElementById("bannerdark512png").ariaLabel = "Download Abendiix's banner, dark mode, png, 512 pixels.";

        document.getElementById("bannerclear").innerHTML = "Banner (clear version)";
        document.getElementById("bannerclearthumbnail").alt = "Abendiix's clear banner that serves as a thumbnail.";
        document.getElementById("bannerclear128svg").ariaLabel = "Download Abendiix's banner, clear mode, svg, 128 pixels.";
        document.getElementById("bannerclear256svg").ariaLabel = "Download Abendiix's banner, clear mode, svg, 256 pixels.";
        document.getElementById("bannerclear512svg").ariaLabel = "Download Abendiix's banner, clear mode, svg, 512 pixels.";
        document.getElementById("bannerclear128png").ariaLabel = "Download Abendiix's banner, clear mode, png, 128 pixels.";
        document.getElementById("bannerclear256png").ariaLabel = "Download Abendiix's banner, clear mode, png, 256 pixels.";
        document.getElementById("bannerclear512png").ariaLabel = "Download Abendiix's banner, clear mode, png, 512 pixels.";

        //Sprites Love
        document.getElementById("spriteslovezip").ariaLabel = "Zip file with Sprites Love's different logos with 1 to 1 ratio and 1 to 10 ratio (in pixels), in svg and png format.";
        document.getElementById("spriteslovezip").innerHTML = "Download everything";

        document.getElementById("spriteslovemain").innerHTML = "Main logo";
        document.getElementById("spriteslovemainthumbnail").alt = "Sprites Love's main logo that serves as a thumbnail.";
        document.getElementById("spriteslovemain1-1svg").ariaLabel = "Download Sprites Love's main logo, 1 to 1 pixel ratio, svg.";
        document.getElementById("spriteslovemain1-10svg").ariaLabel = "Download Sprites Love's main logo, 1 to 10 pixel ratio, svg.";
        document.getElementById("spriteslovemain1-1png").ariaLabel = "Download Sprites Love's main logo, 1 to 1 pixel ratio, png.";
        document.getElementById("spriteslovemain1-10png").ariaLabel = "Download Sprites Love's main logo, 1 to 10 pixel ratio, png.";

        document.getElementById("spritesloveshort").innerHTML = "Square logo";
        document.getElementById("spritesloveshortthumbnail").alt = "Sprites Love's square logo that serves as a thumbnail.";
        document.getElementById("spritesloveshort1-1svg").ariaLabel = "Download Sprites Love's square logo, 1 to 1 pixel ratio, svg.";
        document.getElementById("spritesloveshort1-10svg").ariaLabel = "Download Sprites Love's square logo, 1 to 10 pixel ratio, svg.";
        document.getElementById("spritesloveshort1-1png").ariaLabel = "Download Sprites Love's square logo, 1 to 1 pixel ratio, png.";
        document.getElementById("spritesloveshort1-10png").ariaLabel = "Download Sprites Love's square logo, 1 to 10 pixel ratio, png.";

        document.getElementById("spriteslovelong").innerHTML = "Short logo";
        document.getElementById("spriteslovelongthumbnail").alt = "Sprites Love's short logo that serves as a thumbnail.";
        document.getElementById("spriteslovelong1-1svg").ariaLabel = "Download Sprites Love's short logo, 1 to 1 pixel ratio, svg.";
        document.getElementById("spriteslovelong1-10svg").ariaLabel = "Download Sprites Love's short logo, 1 to 10 pixel ratio, svg.";
        document.getElementById("spriteslovelong1-1png").ariaLabel = "Download Sprites Love's short logo, 1 to 1 pixel ratio, png.";
        document.getElementById("spriteslovelong1-10png").ariaLabel = "Download Sprites Love's short logo, 1 to 10 pixel ratio, png.";

        document.getElementById("spriteslovesquare").innerHTML = "Long logo";
        document.getElementById("spriteslovesquarethumbnail").alt = "Sprites Love's long logo that serves as a thumbnail.";
        document.getElementById("spriteslovesquare1-1svg").ariaLabel = "Download Sprites Love's long logo, 1 to 1 pixel ratio, svg.";
        document.getElementById("spriteslovesquare1-10svg").ariaLabel = "Download Sprites Love's long logo, 1 to 10 pixel ratio, svg.";
        document.getElementById("spriteslovesquare1-1png").ariaLabel = "Download Sprites Love's long logo, 1 to 1 pixel ratio, png.";
        document.getElementById("spriteslovesquare1-10png").ariaLabel = "Download Sprites Love's long logo, 1 to 10 pixel ratio, png.";

        document.getElementById("spriteslovebig").innerHTML = "Big logo";
        document.getElementById("spriteslovebigthumbnail").alt = "Sprites Love's big logo that serves as a thumbnail.";
        document.getElementById("spriteslovebig1-1svg").ariaLabel = "Download Sprites Love's big logo, 1 to 1 pixel ratio, svg.";
        document.getElementById("spriteslovebig1-10svg").ariaLabel = "Download Sprites Love's big logo, 1 to 10 pixel ratio, svg.";
        document.getElementById("spriteslovebig1-1png").ariaLabel = "Download Sprites Love's big logo, 1 to 1 pixel ratio, png.";
        document.getElementById("spriteslovebig1-10png").ariaLabel = "Download Sprites Love's big logo, 1 to 10 pixel ratio, png.";

        document.getElementById("spritesloveheart").innerHTML = "Heart logo";
        document.getElementById("spritesloveheartthumbnail").alt = "Sprites Love's heart logo that serves as a thumbnail.";
        document.getElementById("spritesloveheart1-1svg").ariaLabel = "Download Sprites Love's heart logo, 1 to 1 pixel ratio, svg.";
        document.getElementById("spritesloveheart1-10svg").ariaLabel = "Download Sprites Love's heart logo, 1 to 10 pixel ratio, svg.";
        document.getElementById("spritesloveheart1-1png").ariaLabel = "Download Sprites Love's heart logo, 1 to 1 pixel ratio, png.";
        document.getElementById("spritesloveheart1-10png").ariaLabel = "Download Sprites Love's heart logo, 1 to 10 pixel ratio, png.";

        //Privacy Policies
        document.getElementById("privacypolicies").innerHTML = "Privacy Policies";
        document.getElementById("trompp").innerHTML = "Trom does not generate any kind of data nor does it transmits it to any kind of server or data base.";

        //External sites
        document.getElementById("tips").innerHTML = "Tips";
        document.getElementById("ko-filink").ariaLabel = "Link to Abendiix's Ko-fi.";
        document.getElementById("ko-fi").alt = "Ko-fi icon in black (clear mode) that redirects to Abendiix's profile.";

        document.getElementById("c&r").innerHTML = "Code and releases";
        document.getElementById("githublink").ariaLabel = "Link to Abendiix's GitHub.";
        document.getElementById("github").alt = "GitHub icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("itchiolink").ariaLabel = "Link to Abendiix's Itch.io.";
        document.getElementById("itchio").alt = "itch.io icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("playstorelink").ariaLabel = "Link to Abendiix's Play Store.";
        document.getElementById("playstore").alt = "Play Store icon in black (clear mode) that redirects to Abendiix's profile.";

        document.getElementById("socials").innerHTML = "Socials";
        document.getElementById("twitterlink").ariaLabel = "Link to Abendiix's Twitter.";
        document.getElementById("twitter").alt = "Twitter icon in black (clear mode) that redirects to Abendiix's profile.";
        document.getElementById("blueskylink").ariaLabel = "Link to Abendiix's Bluesky.";
        document.getElementById("bluesky").alt = "Bluesky icon in black (clear mode) that redirects to Abendiix's profile.";

        //Contact section
        document.getElementById("contact").innerHTML = "Contact via email";
        document.getElementById("copy").ariaLabel = "Copy Abendiix's contact email to clipboard.";
        document.getElementById("copy").innerHTML = "Copy";
        document.getElementById("openApp").ariaLabel = "Open email app by default to contact Abendiix.";
        document.getElementById("openApp").innerHTML = "Open app";
        document.getElementById("openApp").href = "mailto:contact@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "Link to Creative Commons page about CC0.";
        document.getElementById("fontAwe").ariaLabel = "Link to Font Awesome's page.";

        //Emoti gag
        document.getElementById("emotiText").innerHTML = "You found me!";
        document.getElementById("emotigag").ariaLabel = "Small gag about a emoti-like text throwing randomly generated food emojis.";
        document.getElementById("emoti").ariaLabel = "Multiple characters arranged to look like a happy face throwing stars and a random food emoji.";

    }
    else if (localStorage.getItem("language") == "ja")
    {
        //Meta
        document.title = "Abendiix | ゲーム、ツール、その他！"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "AbendiixのWebサイト(現在)へのリンク。";
        document.getElementById("banner").alt = "拡大された形態のAbendiixロゴ。 文字は黒く、背景は透明(クリアモード)です。";
        document.getElementById("moto").innerHTML = "ゲーム、ツール、その他！";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "underline";

        document.getElementById("clearmode").ariaLabel = "ページの色をクリアモードに変更。";
        document.getElementById("clear").alt = "ページをクリアモードに変更する太陽のアイコン。";
        document.getElementById("darkmode").ariaLabel = "ページの色をダークモードに変更する。";
        document.getElementById("dark").alt = "月のアイコンでページを暗モードに変更。";

        document.getElementById("libretranslate").style.display = "block";

        //Projects' filters
        document.getElementById("projects").innerHTML = "プロジェクト |";
        document.getElementById("projectsall").ariaLabel = "すべてのAbendiixプロジェクトを表示。";
        document.getElementById("projectsall").innerHTML = "すべて";
        document.getElementById("projectsgames").ariaLabel = "Abendiixのゲームを表示。";
        document.getElementById("projectsgames").innerHTML = "ゲーム";
        document.getElementById("projectstools").ariaLabel = "Abendiixツールを表示します。";
        document.getElementById("projectstools").innerHTML = "ツール";
        document.getElementById("projectsart").ariaLabel = "Abendiixのアートを表示。";
        document.getElementById("projectsart").innerHTML = "アート";

        //Projects
        //Sprites Love
        document.getElementById("spritesloveicon").alt = "プロジェクトロゴ Sprites Love. 「Sprites」という単語から出てくるピクセル化されたSと、右側にピクセルダウンすると、「Love」という単語を表す赤いピクセル化されたハートがあります。";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("spriteslovelink").ariaLabel = "Sprites Loveへのリンクのウェブサイト。";
        document.getElementById("spriteslovelinkicon").alt = "Sprites Loveウェブサイトにリダイレクトする対角形の2つのチェーンとWebリンクを象徴する黒いアイコン。";
        
        //Trom
        document.getElementById("tromicon").alt = "プロジェクトTROMのロゴ。 ゲームから来るピクセルアートで作られたトランペットを示しています。";
        document.getElementById("trm").innerHTML = "Trom";
        document.getElementById("tromlinkplaystore").ariaLabel = "TromのPlay Storeページへのリンク。";
        document.getElementById("tromlinkplaystoreicon").alt = "PLAY STORE アイコンを黒(クリアモード)で、TROM の PLAY STORE ページにリダイレクト。";
        
        //Fonts
        document.getElementById("fonts").alt = "Abendiixのフォントのロゴ。 ピクセルアートスタイルでは、大文字 A と小文字のケースを表示します。";
        document.getElementById("fnts").innerHTML = "ソース";
        document.getElementById("fontslink").ariaLabel = "Sprites Loveへのリンクのウェブサイト。";
        document.getElementById("fontslinkicon").alt = "Abendiixのフォントウェブサイトにリダイレクトする2つの対角チェーンとウェブサイトのリンクを象徴する黒いアイコン(クリアモードで)。";

        //Abouts
        document.getElementById("aboutabndx").innerHTML = "について";
        document.getElementById("aboutap1").innerHTML = "インディー開発者とアーティストのAbendiixです。 自分の注意をキャッチするゲーム、ツール、そして何かを作ったり、私のプロジェクトで世界をより良い場所にすることができるようにしたい。";
        document.getElementById("aboutap2").innerHTML = "Abendiix は、開発者/アーティストのエイリアスとプロジェクトの両方を自分で行います。 Abendiixクスでは、自分がやりとりするすべての人や、影響を受けたり、影響を受けたりすることができるので、オープンでアクセス可能でフレンドリーなアイデア、アート、プロジェクトの開発の夢と目標を追求したいと思います。";
        document.getElementById("aboutap3").innerHTML = "Abendiix(プロジェクト内で)は、Abendiix(自分で)と同じように成長、学び、進化し、変化します。 アベンディイックスの目標は、常に私たちの惑星にプラスの影響を求めるあらゆる創造を最大限に活用し、Abendiixを知っている人々と私たちを囲むもの。";
        document.getElementById("aboutap4").innerHTML = "どんなものでもお気軽にお問い合わせください！ 私は修正または解決するべきエラー/バグ/問題, あなたが持っている任意の質問, 私はあなたが私のプロジェクトで持っていたファンアートや経験として、私が望むものを表示したり、あまりにもこんにちはと言うか、チャットを持っている. 誰とでも話し合い、やりとりしてもらえるのは、感謝の気持ちで幸せです！";

        document.getElementById("projectssummary").innerHTML = "プロジェクト";
        document.getElementById("aboutpp1").innerHTML = "どんな作品でも、少なくとも2つの作者(またはその創造に感銘を与える2つの部分)が常にあると確信しています。 最初の1つは、アイデアを思い浮かべて現実に変える「オリジナル」クリエーターです。 2つ目は、その現実を経験し、それを解釈し、それを楽しんで、それを感じ、そしてはるかに多く、その現実を全体にし、プロセスにいることの感覚を与える人です。";
        document.getElementById("aboutpp2").innerHTML = "時々それらの両方が元のクリエイターです、自分の創作とやりとりする独創的なクリエーターが、その現実を創造し、あらゆる観点からそれを経験する過程であっても。";
        document.getElementById("aboutpp3").innerHTML = "このシナリオを考慮に入れなければ、その2つの異なる作者とその現実間の関係は、それができる限り健康である必要があります。 その関係は、必要なケアと責任を取らない部分の1つまたはそれらの1つなしで、彼らは後ろに残っているような部分の一部を残し、真剣に受け取られていない、または彼らが問題にしなかった場合。";
        document.getElementById("aboutpp4").innerHTML = "その関係は、可能な限り、著者のバックグラウンド、状況、ニーズの両方を考慮に入れ、互いに尊重し、彼らがやりとりし、共存する方法について責任を負い、両方の部分と等しい関係を持つことができる現実を形成する必要があります。";
        document.getElementById("aboutpp5").innerHTML = "時には、元のクリエイターは、そのニーズが必要とされる創造に感銘を与えるものである「第二のもの」であっても、誰かがそれを働かない限り、それは現実に変わります。";
        document.getElementById("aboutpp6").innerHTML = "私のプロジェクトは、彼らが関与する部分に、健康的で一貫性のある方法であらゆる種類の方法で有益でなければ、自分の目的を欠くだろう。 Abendiixとあらゆる方法でプロジェクトに関連したことを誰もが楽しんで、やり取りし、共有したいと思っています。 その上で、Abendiixのプロジェクトの経験は、人々が経験することができる多くの他の創造と現実につながるかもしれません。そこで、アイデア、感情などが相互作用し、共存し、より多くの創造を生み出します。";
        document.getElementById("aboutpp7").innerHTML = "創造的プロセスと人々自身を表現し、聞くための必要性は、制御または停止することができるものではない。 他の人と楽しく共有したい人から、彼らは他の創造と感じている喜び、彼らが誰であるかを主張したい人、自分の人生やどんな動きのあらゆる側面について包括します。";
        document.getElementById("aboutpp8").innerHTML = "法的な制限がいくつかありますが、その意味でしか行かないと感じなければならないことについて話しています。そうしたいと思い、私の創造をできるだけ開いて、自由、そしてアクセス可能にするために働きます。そのため、誰もがすべての意味でそれらを最大限に絞り、そして可能にすることができます。";
        document.getElementById("aboutpp9").innerHTML = "この言葉は、他の人の創造と、そのすべてが私に感じ、私のプロジェクトや創造をしたいと考えているとき、時間から時間までの間、私の心を渡ると考えられています。 人の創造性を制限しないプロジェクトやクリエイティビティをつくりたいと思っています。 私は、Abendiixとそのプロジェクトに遭遇したときに、人々ができるだけ自由を感じるようにしたいと思っています。 私はすべての人やみんなについてもっと知りたいです。プロジェクトや作品を作りたいと思っています。そして、他の人が大好きな人になり、楽しくなるでしょう(そして、私はお金を稼ぐことができます🤞)プロセスで。";
        document.getElementById("aboutpp10").innerHTML = "<b>PS<b>: これは、自分のプロジェクトやアートを作成したいのを実際に見てみる方法です。それは、将来や/または私はそれらを作成するように変化しかもしれません(そして、私は誰やプロジェクトから頑固に期待するものではありません; 誰もが異なることを目指しるべきです)。 私はエラーを犯し、私はそれらについて話し、私のプロジェクトや自分自身を改善するために開いています。 常に私に手を差し伸べる！ ^^。";

        document.getElementById("projectssoftwaretitle").innerHTML = "ソフトウェア";
        document.getElementById("aboutpsp1").innerHTML = "すべてのAbendiixのソフトウェアは、常にオープンソースであり、誰にも利用できます。 プラットフォームの会社からプライベートコードでビデオゲームをリリースするなど、コードが利用できなくなる場合があります。 このケースでは、すべてのコードが自由に利用できる等しいプロジェクト(PCやコンソールリリースのようなもの)、コンソール用のプライベートモジュールがあるかもしれませんが、PCでは、コードを完全にオープンソースにすることができます)。";
        document.getElementById("aboutpsp2").innerHTML = "Abendiixのソフトウェアは、その使用上の疑いを残さないために、対応するライセンスと著作権主張を常に持っているでしょう。";

        document.getElementById("projectsarttitle").innerHTML = "アート";
        document.getElementById("aboutpap1").innerHTML = "すべてのAbendiixのアートは、Abendiixのソフトウェアに類似したアプローチを持ち、常に自由に利用できます(一部は完全に無料ではありません)。";
        document.getElementById("aboutpap2").innerHTML = "すべての作品は、その使用上の疑問を残さないために、その対応するライセンスと著作権主張です。";
        document.getElementById("aboutpap3").innerHTML = "美術が非健康/有毒な方法で、関係者に使用/売られている場合を避けるために、より制限的なライセンスと著作権の主張があります。";
        document.getElementById("aboutpap4").innerHTML = "同時に、このライセンス、著作権のクレームおよび制限は、誰やその創造的なプロセスに反して害を及ぼすことはありません(ファンアートを作る、商品化を販売するなど)。 私は誰もが自分の情熱を共有し、プロセスにそれらを制限しないように歓迎したいです(そして、私は人々が私のプロジェクトについて共有しているかを見て満足しているでしょう :D)。";

        //Presskits
        //Abendiix
        document.getElementById("presskits").innerHTML = "プレスキット";

        document.getElementById("abendiixzip").ariaLabel = "2つのモードでのAbendiixロゴとバナーを含むZIP形式のファイル:ライトモードとダークモード、svgおよびpng形式と128、256および512ピクセル。";
        document.getElementById("abendiixzip").innerHTML = "すべてのロゴをダウンロード";

        document.getElementById("logodark").innerHTML = "ロゴ(ダークバージョン)";
        document.getElementById("logodarkthumbnail").alt = "Abendiixのダークロゴがミニチュアとして機能。";
        document.getElementById("logodark128svg").ariaLabel = "Abendiixロゴ、ダークバージョン、svg、128ピクセルをダウンロード。";
        document.getElementById("logodark256svg").ariaLabel = "Abendiixロゴ、ダークバージョン、svg、256ピクセルをダウンロード。";
        document.getElementById("logodark512svg").ariaLabel = "Abendiixロゴ、ダークバージョン、svg、512ピクセルをダウンロード。";
        document.getElementById("logodark128png").ariaLabel = "Abendiixロゴ、ダークバージョン、png、128ピクセルをダウンロード。";
        document.getElementById("logodark256png").ariaLabel = "Abendiixロゴ、ダークバージョン、png、256ピクセルをダウンロード。";
        document.getElementById("logodark512png").ariaLabel = "Abendiixロゴ、ダークバージョン、png、512ピクセルをダウンロード。";

        document.getElementById("logoclear").innerHTML = "ロゴ(クリアバージョン)";
        document.getElementById("logoclearthumbnail").alt = "Abendiixのクリアロゴがミニチュアとして機能。";
        document.getElementById("logoclear128svg").ariaLabel = "Abendiixロゴ、クリアバージョン、svg、128ピクセルをダウンロード。";
        document.getElementById("logoclear256svg").ariaLabel = "Abendiixロゴ、クリアバージョン、svg、256ピクセルをダウンロード。";
        document.getElementById("logoclear512svg").ariaLabel = "Abendiixロゴ、クリアバージョン、svg、512ピクセルをダウンロード。";
        document.getElementById("logoclear128png").ariaLabel = "Abendiixロゴ、クリアバージョン、png、128ピクセルをダウンロード。";
        document.getElementById("logoclear256png").ariaLabel = "Abendiixロゴ、クリアバージョン、png、256ピクセルをダウンロード。";
        document.getElementById("logoclear512png").ariaLabel = "Abendiixロゴ、クリアバージョン、png、512ピクセルをダウンロード。";

        document.getElementById("bannerdark").innerHTML = "バナー(ダークバージョン)";
        document.getElementById("bannerdarkthumbnail").alt = "Abendiixのダークバナーがミニチュアとして機能。";
        document.getElementById("bannerdark128svg").ariaLabel = "Abendiixバナー、ダークバージョン、svg、128ピクセルをダウンロード。";
        document.getElementById("bannerdark256svg").ariaLabel = "Abendiixバナー、ダークバージョン、svg、256ピクセルをダウンロード。";
        document.getElementById("bannerdark512svg").ariaLabel = "Abendiixバナー、ダークバージョン、svg、512ピクセルをダウンロード。";
        document.getElementById("bannerdark128png").ariaLabel = "Abendiixバナー、ダークバージョン、png、128ピクセルをダウンロード。";
        document.getElementById("bannerdark256png").ariaLabel = "Abendiixバナー、ダークバージョン、png、256ピクセルをダウンロード。";
        document.getElementById("bannerdark512png").ariaLabel = "Abendiixバナー、ダークバージョン、png、512ピクセルをダウンロード。";

        document.getElementById("bannerclear").innerHTML = "バナー(クリアバージョン)";
        document.getElementById("bannerclearthumbnail").alt = "Abendiixのクリアバナーがミニチュアとして機能。";
        document.getElementById("bannerclear128svg").ariaLabel = "Abendiixバナー、クリアバージョン、svg、128ピクセルをダウンロード。";
        document.getElementById("bannerclear256svg").ariaLabel = "Abendiixバナー、クリアバージョン、svg、256ピクセルをダウンロード。";
        document.getElementById("bannerclear512svg").ariaLabel = "Abendiixバナー、クリアバージョン、svg、512ピクセルをダウンロード。";
        document.getElementById("bannerclear128png").ariaLabel = "Abendiixバナー、クリアバージョン、png、128ピクセルをダウンロード。";
        document.getElementById("bannerclear256png").ariaLabel = "Abendiixバナー、クリアバージョン、png、256ピクセルをダウンロード。";
        document.getElementById("bannerclear512png").ariaLabel = "Abendiixバナー、クリアバージョン、png、512ピクセルをダウンロード。";

        //Sprites Love
        document.getElementById("spriteslovezip").ariaLabel = "2つの関係を持つ異なるSprites LoveロゴとZIP形式のファイル:1〜1ピクセルと1〜10ピクセル、svgおよびpng形式で。";
        document.getElementById("spriteslovezip").innerHTML = "すべてのロゴをダウンロード";

        document.getElementById("spriteslovemain").innerHTML = "メインロゴ";
        document.getElementById("spriteslovemainthumbnail").alt = "ミニチュアとして機能するSprites Loveのメインロゴ。";
        document.getElementById("spriteslovemain1-1svg").ariaLabel =  "SpritesLoveのメインロゴをダウンロード, 比 1-1, svg。";
        document.getElementById("spriteslovemain1-10svg").ariaLabel = "SpritesLoveのメインロゴをダウンロード, 比 1-10, svg。";
        document.getElementById("spriteslovemain1-1png").ariaLabel =  "SpritesLoveのメインロゴをダウンロード, 比 1-1, png。";
        document.getElementById("spriteslovemain1-10png").ariaLabel = "SpritesLoveのメインロゴをダウンロード, 比 1-10, png。";

        document.getElementById("spriteslovesquare").innerHTML = "スクエアロゴ";
        document.getElementById("spriteslovesquarethumbnail").alt = "ミニチュアとして機能するSprites Loveスクエアロゴ。";
        document.getElementById("spriteslovesquare1-1svg").ariaLabel =  "SpritesLoveのスクエアロゴをダウンロード, 比 1-1, svg。";
        document.getElementById("spriteslovesquare1-10svg").ariaLabel = "SpritesLoveのスクエアロゴをダウンロード, 比 1-10, svg。";
        document.getElementById("spriteslovesquare1-1png").ariaLabel =  "SpritesLoveのスクエアロゴをダウンロード, 比 1-1, png。";
        document.getElementById("spriteslovesquare1-10png").ariaLabel = "SpritesLoveのスクエアロゴをダウンロード, 比 1-10, png。";

        document.getElementById("spritesloveshort").innerHTML = "ショートロゴ";
        document.getElementById("spritesloveshortthumbnail").alt = "ミニチュアとして機能するSprites Loveショートロゴ。";
        document.getElementById("spritesloveshort1-1svg").ariaLabel =  "SpritesLoveのショートロゴをダウンロード, 比 1-1, svg。";
        document.getElementById("spritesloveshort1-10svg").ariaLabel = "SpritesLoveのショートロゴをダウンロード, 比 1-10, svg。";
        document.getElementById("spritesloveshort1-1png").ariaLabel =  "SpritesLoveのショートロゴをダウンロード, 比 1-1, png。";
        document.getElementById("spritesloveshort1-10png").ariaLabel = "SpritesLoveのショートロゴをダウンロード, 比 1-10, png。";

        document.getElementById("spriteslovelong").innerHTML = "ロングロゴ";
        document.getElementById("spriteslovelongthumbnail").alt = "ミニチュアとして機能するSprites Loveのロングロゴ。";
        document.getElementById("spriteslovelong1-1svg").ariaLabel =  "SpritesLoveのロングロゴをダウンロード, 比 1-1, svg。";
        document.getElementById("spriteslovelong1-10svg").ariaLabel = "SpritesLoveのロングロゴをダウンロード, 比 1-10, svg。";
        document.getElementById("spriteslovelong1-1png").ariaLabel =  "SpritesLoveのロングロゴをダウンロード, 比 1-1, png。";
        document.getElementById("spriteslovelong1-10png").ariaLabel = "SpritesLoveのロングロゴをダウンロード, 比 1-10, png。";

        document.getElementById("spriteslovebig").innerHTML = "大きいロゴ";
        document.getElementById("spriteslovebigthumbnail").alt = "ミニチュアとして機能するSprites Loveの大きいロゴ。";
        document.getElementById("spriteslovebig1-1svg").ariaLabel =  "SpritesLoveの大きいロゴをダウンロード, 比 1-1, svg。";
        document.getElementById("spriteslovebig1-10svg").ariaLabel = "SpritesLoveの大きいロゴをダウンロード, 比 1-10, svg。";
        document.getElementById("spriteslovebig1-1png").ariaLabel =  "SpritesLoveの大きいロゴをダウンロード, 比 1-1, png。";
        document.getElementById("spriteslovebig1-10png").ariaLabel = "SpritesLoveの大きいロゴをダウンロード, 比 1-10, png。";

        document.getElementById("spritesloveheart").innerHTML = "ハートロゴ";
        document.getElementById("spritesloveheartthumbnail").alt = "ミニチュアとして機能するSprites Loveハートロゴ。";
        document.getElementById("spritesloveheart1-1svg").ariaLabel =  "SpritesLoveのハートロゴをダウンロード, 比 1-1, svg。";
        document.getElementById("spritesloveheart1-10svg").ariaLabel = "SpritesLoveのハートロゴをダウンロード, 比 1-10, svg。";
        document.getElementById("spritesloveheart1-1png").ariaLabel =  "SpritesLoveのハートロゴをダウンロード, 比 1-1, png。";
        document.getElementById("spritesloveheart1-10png").ariaLabel = "SpritesLoveのハートロゴをダウンロード, 比 1-10, png。";

        //Privacy Policies
        document.getElementById("privacypolicies").innerHTML = "プライバシーポリシー";
        document.getElementById("trompp").innerHTML = "Tromは、あらゆる種類のデータを生成せず、あらゆる種類のサーバーやデータベースに送信しません。";

        //External sites
        document.getElementById("tips").innerHTML = "ヒント";
        document.getElementById("ko-filink").ariaLabel = "AbendiixへのリンクKo-fi。";
        document.getElementById("ko-fi").alt = "AbendiixのプロファイルにリダイレクトするKo-fiブラックアイコン。";

        document.getElementById("c&r").innerHTML = "コードとリリース";
        document.getElementById("githublink").ariaLabel = "AbendiixへのリンクGitHub。";
        document.getElementById("github").alt = "AbendiixのプロファイルにリダイレクトするGitHubブラックアイコン。";
        document.getElementById("itchiolink").ariaLabel = "Abendiixへのリンクitch.io。";
        document.getElementById("itchio").alt = "Abendiixのプロファイルにリダイレクトするitch.ioブラックアイコン。";
        document.getElementById("playstorelink").ariaLabel = "AbendiixへのリンクPlay Store。";
        document.getElementById("playstore").alt = "AbendiixのプロファイルにリダイレクトするPlay Storeブラックアイコン。";

        document.getElementById("socials").innerHTML = "SNS";
        document.getElementById("twitterlink").ariaLabel = "AbendiixへのリンクTwitter。";
        document.getElementById("twitter").alt = "AbendiixのプロファイルにリダイレクトするTwitterブラックアイコン。";
        document.getElementById("blueskylink").ariaLabel = "AbendiixへのリンクBluesky。";
        document.getElementById("bluesky").alt = "AbendiixのプロファイルにリダイレクトするBlueskyブラックアイコン。";

        //Contact section
        document.getElementById("contact").innerHTML = "メールでのお問い合わせ";
        document.getElementById("copy").ariaLabel = "Abendiixの連絡先メールをクリップボードにコピーします。";
        document.getElementById("copy").innerHTML = "コピー";
        document.getElementById("openApp").ariaLabel = "Abendiixに連絡する既定のメールアプリケーションを開く。";
        document.getElementById("openApp").innerHTML = "アプリケーションを開く";
        document.getElementById("openApp").href = "mailto:contact@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "CC0のCreative Commonsページへのリンク。";
        document.getElementById("fontAwe").ariaLabel = "FontAwesomeページへのリンク。";

        //Emoti gag
        document.getElementById("emotiText").innerHTML = "見つけた！";
        document.getElementById("emotigag").ariaLabel = "食のランダムな絵文字を投げるエモチ型のテキストについて少し冗談。";
        document.getElementById("emoti").ariaLabel = "星を投げる幸せな顔や、ランダムに選ばれた食物絵文字を形成する異なる文字。";
    }
}
