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
window.addEventListener("load", (event) => {
    if(localStorage.getItem("language") == 'es')
    {
        updateTexts("es");
        document.documentElement.setAttribute("lang", 'es');
    }
    else if (localStorage.getItem("language") == 'en')
    {
        updateTexts("en");
        document.documentElement.setAttribute("lang", 'en');
    }
    else if (localStorage.getItem("language") == 'ja')
    {
        updateTexts("ja");
        document.documentElement.setAttribute("lang", 'ja');
    }
  });
  

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
    if(localStorage.getItem("language") == 'es')
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

        document.getElementById("translationauthor").style.display = "none";

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
        document.getElementById("spriteslovegithublink").ariaLabel = "Enlace al repositorio GitHub de Abendiix Sprites Love.";
        document.getElementById("spriteslovegithublinkicon").alt = "Icono negro de GitHub que redirige a la página de Sprites Love.";
        
        //Trom
        document.getElementById("tromicon").alt = "Logo del proyecto Trom. Muestra una trompeta hecha en pixel art que viene del propio juego.";
        document.getElementById("trm").innerHTML = "Trom";
        document.getElementById("tromlinkitchio").ariaLabel = "Enlace a la página de itch.io de Trom.";
        document.getElementById("tromlinkitchioicon").alt = "Icono negro de itch.io que redirige a la página de Trom.";
        document.getElementById("tromlinkko-fi").ariaLabel = "Enlace a la página de Ko-fi de Trom.";
        document.getElementById("tromlinkko-fiicon").alt = "Icono negro de Ko-fi que redirige a la página de Trom.";
        document.getElementById("tromlinkgithub").ariaLabel = "Enlace a la página de GitHub de Trom.";
        document.getElementById("tromlinkgithubicon").alt = "Icono negro de GitHub que redirige a la página de Trom.";
        document.getElementById("tromlinkplaystore").ariaLabel = "Enlace a la página de Play Store de Trom.";
        document.getElementById("tromlinkplaystoreicon").alt = "Icono negro de Play Store que redirige a la página de Trom.";
        document.getElementById("tromlinkappstore").ariaLabel = "Enlace a la página de App Store de Trom.";
        document.getElementById("tromlinkappstoreicon").alt = "Icono negro de App Store que redirige a la página de Trom.";
        
        //Fonts
        document.getElementById("fonts").alt = "Logo para las fuentes de Abendiix. Muestra una A mayúscula y una a minúscula en estilo pixel art.";
        document.getElementById("fnts").innerHTML = "Fuentes";
        document.getElementById("fontslink").ariaLabel = "Enlace a la página web de fuentes de Abendiix.";
        document.getElementById("fontslinkicon").alt = "Icono negro que simboliza un enlace web con dos cadenas en diagonal que redirige a la página web de fuentes de Abendiix.";
        document.getElementById("fontsgithublink").ariaLabel = "Enlace al repositorio GitHub de fuentes de Abendiix.";
        document.getElementById("fontsgithublinkicon").alt = "Icono negro de GitHub que redirige al repositorio de fuentes de Abendiix.";

        //Abouts
        document.getElementById("aboutabndx").innerHTML = "Sobre";
        document.getElementById("aboutap1").innerHTML = "Soy Abendiix, un desarrollador indie y artista. Hago (y cacharreo con) juegos, herramientas y cualquier cosa que me llame la atención, con la esperanza de hacer del mundo un lugar mejor con mis proyectos.";
        document.getElementById("aboutap2").innerHTML = "Abendiix es tanto mi alias de desarrollador/artista como un proyecto por sí mismo, donde quiero perseguir el sueño y objetivo de desarrollar ideas, arte y proyectos que sean tan abiertos, accesibles y cómodos posibles para cualquier persona que interactúe con ellos o que se vea afectada o influenciada positivamente por los mismos.";
        document.getElementById("aboutap3").innerHTML = "Abendiix (como proyecto) crecerá, aprenderá, evolucionará y cambiará tanto, sino más, de lo que Abendiix (como yo mismo) lo hará. El objetivo de Abendiix siempre será aprovechar al máximo cualquier creación, buscando al mismo tiempo un impacto positivo tanto en la gente que llegue a conocerlo como en nuestro planeta y todo lo que nos rodea.";
        document.getElementById("aboutap4").innerHTML = "¡Síentete libre de contactar conmigo sobre cualquier tema! Cualquier error/bug/problema que deba arreglar o resolver, preguntas que puedas tener o incluso enseñarme cualquier cosa que quieras como fanarts o experiencias que hayas tenido con mis proyectos. Como si es simplemente para saludar y charlar. ¡Siempre estaré más que agradecido y feliz de hablar e interactuar con cualquier persona!";

        document.getElementById("projectssummary").innerHTML = "Proyectos";
        document.getElementById("aboutpp1").innerHTML = "Creo que toda creación siempre contará con al menos 2 autores (o 2 partes que le dan sentido a la creación). La primera parte sería el creador 'original'. Este creador sería a quien se le ocurren ideas y las convierte en una realidad. La segunda parte sería quien experimenta esa realidad, la interpreta, disfruta, siente y mucho más, haciendo de esa realidad un todo, dándole su razón de ser en el proceso.";
        document.getElementById("aboutpp2").innerHTML = "A veces, ambas partes son el creador original interactuando con su propia creación, incluso si aún está en el proceso de crear esa realidad o experimentando con ella desde cualquier punto de vista.";
        document.getElementById("aboutpp3").innerHTML = "Sin tener en cuenta este escenario, la relación entre esos 2 autores diferentes y esa realidad tiene que ser tan sana como se pueda. Si una o ambas de las partes no tienen el cuidado y responsabilidad necesarios, esa relación dejaría a alguna de las partes la sensación de que no se las está teniendo en cuenta, que no se las toma en serio o como si estas no importaran.";
        document.getElementById("aboutpp4").innerHTML = "Esa relación debe tener en cuenta, en medida de lo posible, los antecedentes, situaciones y necesidades de ambas partes, respetándose mutuamente y siendo responsables con como interactúan y coexisten entre ellas y entre lo que las rodean. De esta forma se podrá dar una realidad que solo podría existir con una relación igualitaria entre ambas.";
        document.getElementById("aboutpp5").innerHTML = "A veces el creador original puede incluso ser el 'segundo', donde sus necesidades son las que le dan un sentido y forma a una creación necesaria, que no se hará realidad hasta que alguien trabaje en ella.";
        document.getElementById("aboutpp6").innerHTML = "Mis proyectos carecerían de sentido si no beneficiaran de cualquier forma, en una manera sana y coherente a las partes involucradas. Quiero que todo el mundo se sienta bienvenido a disfrutar, interactuar y compartir todo aquello relacionado con Abendiix y sus proyectos de la forma que prefieran. Aún mejor: esas experiencias con los proyectos de Abendiix pueden dar lugar a otras creaciones y realidades que la gente podrá experimentar, donde ideas, sentimientos y mucho más interactuarán, coexistirán y crearán otras muchas creaciones que todo el mundo pueda disfrutar.";
        document.getElementById("aboutpp7").innerHTML = "El proceso creativo y la necesidad de las personas por expresarse y ser oídas no es algo que se deba ni se pueda controlar ni parar. Desde quienes quieren divertirse y compartir con otros la alegría que sienten con las creaciones de otros, como quienes quieren reclamar quienes son, reivindicar sobre algún aspecto de sus vidas o cualquier tipo de movimiento.";
        document.getElementById("aboutpp8").innerHTML = "Hay obvias limitaciones legales y de responsabilidad pero hablo de esa necesidad de crear y sentir que simplemente no puedes ni dejar ir ni soltar. Por estas razones y más, quiero y trabajaré para que mis creaciones sean todo lo abiertas, libres y accesibles como pueda, para que cualquiera pueda exprimirlas al máximo en todos los sentidos y formas posibles o disponibles.";
        document.getElementById("aboutpp9").innerHTML = "Estas palabras son solo pensamientos que se me pasan por la cabeza de vez en cuando al experimentar con creaciones de otras personas y como resultado de lo que me hacen sentir y como me gustaría que fueran mis proyectos y creaciones. Quiero hacer proyectos y creaciones que no limiten ni la creatividad, ni la necesidad, ni el deseo de la gente de disfrutar y experimentar plenamente cualquier cosa que haga. Quiero que la gente sienta toda la libertad posible cuando se crucen con Abendiix y sus proyectos. Quiero aprender más de todo y de todos, hacer proyectos y creaciones que tanto yo como otras personas amemos y con los que nos divirtamos (y con los que confiemos ganarme algún la vida 🤞 para poder hacer más y mejores proyectos) en el proceso.";
        document.getElementById("aboutpp10").innerHTML = "PD: Esta es solo <b>mi</b> forma de ver como quiero hacer <b>mis propios</b> proyectos y arte, que pueden o no cambiar en el futuro y/o mientras los creo (y no algo que espere tozudamente de nadie ni de ningún proyecto; todos somos y debemos aspirar a ser diferentes). Cometeré errores y estoy abierto a hablar sobre ellos y mejorar mis proyectos o a mi mismo. ¡Siéntete libre de hablarme y no dudes en ponerte en contacto cuando quieras! ^^";

        document.getElementById("projectssoftwaretitle").innerHTML = "Software";
        document.getElementById("aboutpsp1").innerHTML = "Todo el software de Abendiix siempre será código abierto y estará disponible para todo el mundo. Habrá ocasiones en las que el código pueda no estar disponible, como en el caso de lanzar un videojuego en una plataforma con código privado de la misma. En estos casos siempre habrá un proyecto equivalente donde todo el código estará disponible de forma gratuita (imagínate un lanzamiento en PC y consola, donde puede haber algunos módulos privados para la versión de consola pero no en la de PC, donde podré hacer el código completamente abierto).";
        document.getElementById("aboutpsp2").innerHTML = "El software de Abendiix siempre tendrá su licencia correspondiente y su reclamación de derechos de autor para despejar cualquier duda sobre su uso.";


        document.getElementById("projectsarttitle").innerHTML = "Arte";
        document.getElementById("aboutpap1").innerHTML = "Todo el arte de Abendiix tendrá un enfoque parecido al software de Abendiix, estando siempre libremente disponible (puede que a veces no completamente gratuito) y con su uso abierto a cualquiera.";
        document.getElementById("aboutpap2").innerHTML = "Todas las obras de arte tendrán su licencia y su reclamación de derechos de autor para despejar cualquier duda sobre su uso.";
        document.getElementById("aboutpap3").innerHTML = "Habrá veces donde las licencias y reclamaciones de derechos de autor serán más restrictivas para evitar casos donde el arte se use/venda de forma no sana/tóxica para cualquiera de las partes involucradas.";
        document.getElementById("aboutpap4").innerHTML = "Al mismo tiempo, estas licencias, reclamaciones de derechos de autor y restricciones nunca buscarán ir en contra o dañar a nadie o su proceso creativo (como por ejemplo hacer fan-art o vender merchandising relacionados con algún proyecto). Quiero que todo el mundo se sienta bienvenido a compartir su pasión y que la gente no se vea restringida en el proceso (y estaré más que contento y feliz por ver qué comparte la gente sobre mis proyectos :D).";

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

        //Trom
        document.getElementById("tromzip").innerHTML = "Descargar todo";
        document.getElementById("tromzip").ariaLabel = "Archivo zip con el logo de Trom y capturas de pantalla del juego en formato svg y png.";
        document.getElementById("logotrom").innerHTML = "Logo";
        document.getElementById("logotromthumbnail").alt = "Logo de Trom que sirve como minitarua.";
        document.getElementById("logotromsvg").ariaLabel = "Descargar logo de Trom, svg.";
        document.getElementById("logotrompng").ariaLabel = "Descargar logo de Trom, png.";
        document.getElementById("screenshotstrom").innerHTML = "Capturas de pantalla del juego (click en las imágenes para descargarlas).";
        document.getElementById("menutrom").ariaLabel = "Descargar captura de pantalla del menú de Trom, png.";
        document.getElementById("screenshottrommenu").alt = "Captura de pantalla del menú de Trom que sirve como miniatura.";
        document.getElementById("game1_1trom").ariaLabel = "Descargar la primera captura de pantalla del primer modo de juego de Trom, png.";
        document.getElementById("screenshottromgame1_1").alt = "Primera captura de pantalla del primer modo de juego de Trom que sirve como miniatura.";
        document.getElementById("game1_2trom").ariaLabel = "Descargar segunda captura del primer modo de juego de Trom, png.";
        document.getElementById("screenshottromgame1_2").alt = "Segunda captura de pantalla del primer modo de juego de Trom que sirve como miniatura.";
        document.getElementById("game2trom").ariaLabel = "Descargar captura de pantalla del segundo modo de juego de Trom, png.";
        document.getElementById("screenshottromgame2").alt = "Captura de pantalla del segundo modo de juego de Trom que sirve como miniatura.";
        document.getElementById("configtrom").ariaLabel = "Descargar captura de pantalla de la configuración de Trom, png.";
        document.getElementById("screenshottromconfig").alt = "Captura de pantalla de la configuración de Trom que sirve como miniatura.";

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
    else if (localStorage.getItem("language") == 'en')
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

        document.getElementById("translationauthor").style.display = "none";

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
        document.getElementById("spriteslovegithublink").ariaLabel = "Link to Abendiix's Sprites Love's GitHub repository.";
        document.getElementById("spriteslovegithublinkicon").alt = "GitHub icon in black (clear mode) that redirects to Abendiix's Sprites Love's repository.";

        //Trom
        document.getElementById("tromicon").alt = "Logo for the project Trom. It shows a trumpet made with pixel art that comes from the game.";
        document.getElementById("trm").innerHTML = "Trom";
        document.getElementById("tromlinkitchio").ariaLabel = "Link to Trom's itch.io page.";
        document.getElementById("tromlinkitchioicon").alt = "itch.io icon in black (clear mode) that redirects to Trom's itch.io page.";
        document.getElementById("tromlinkko-fi").ariaLabel = "Link to Trom's Ko-fi page.";
        document.getElementById("tromlinkko-fiicon").alt = "Ko-fi icon in black (clear mode) that redirects to Trom's Ko-fi page.";
        document.getElementById("tromlinkgithub").ariaLabel = "Link to Trom's GitHub page.";
        document.getElementById("tromlinkgithubicon").alt = "GitHub icon in black (clear mode) that redirects to Trom's GitHub page.";
        document.getElementById("tromlinkplaystore").ariaLabel = "Link to Trom's Play Store page.";
        document.getElementById("tromlinkplaystoreicon").alt = "Play Store icon in black (clear mode) that redirects to Trom's Play Store page.";
        document.getElementById("tromlinkappstore").ariaLabel = "Link to Trom's App Store page.";
        document.getElementById("tromlinkappstoreicon").alt = "App Store icon in black (clear mode) that redirects to Trom's App Store page.";
        
        //Fonts
        document.getElementById("fonts").alt = "Logo for Abendiix's fonts. It shows a upper case A and a lower case a in pixel art style.";
        document.getElementById("fnts").innerHTML = "Fonts";
        document.getElementById("fontslink").ariaLabel = "Link to Abendiix's font website.";
        document.getElementById("fontslinkicon").alt = "Black icon (in clear mode) that symbolizes a website link with two diagonal chains that redirects to Abendiix's fonts website.";
        document.getElementById("fontsgithublink").ariaLabel = "Link to Abendiix's font's GitHub repository.";
        document.getElementById("fontsgithublinkicon").alt = "GitHub icon in black (clear mode) that redirects to Abendiix's font's repository.";

        //Abouts
        document.getElementById("aboutabndx").innerHTML = "About";
        document.getElementById("aboutap1").innerHTML = "I'm Abendiix, an indie developer and artist. I make (and tinker with) games, tools and anything that catches my attention, hoping that I can make the world a better place with my projects.";
        document.getElementById("aboutap2").innerHTML = "Abendiix is both my developer/artist alias and a project by itself, where I want to pursue the dream and goal of developing ideas, art and projects that are as open, accessible and friendly as I can to everything and everyone that interacts with or is affected and influenced by them.";
        document.getElementById("aboutap3").innerHTML = "Abendiix (as in the project) will grow, learn, evolve and change just as much as Abendiix (as in myself) will do, if not more. Abendiix's goal will always be to make the best out of any creation, looking for a positive impact on the people that get to know Abendiix, our planet and anything that surrounds us.";
        document.getElementById("aboutap4").innerHTML = "Feel free to contact me about anything you want! Any error/bug/problem that I should fix or solve, any question you may have, showing me anything you want as fanarts or experiences you've had with my projects or even just to say hello or have a chat. I will always be more than grateful and happy to speak and engage with anyone!";

        document.getElementById("projectssummary").innerHTML = "Projects";
        document.getElementById("aboutpp1").innerHTML = "I believe that any creation will always have at least 2 authors (or 2 parts that give sense to that creation). The first one would be the 'original' creator, who comes up with ideas and turns them into a reality. The second one would be who experiences that reality, interpreting, enjoying, feeling it and much more, making that reality a whole and giving it its sense of being in the process.";
        document.getElementById("aboutpp2").innerHTML = "Sometimes both of them are just the original creator interacting with their own creation, even if they are still on the process of creating that reality or experiencing it from any perspective.";
        document.getElementById("aboutpp3").innerHTML = "Without taking into account this scenario, that relationship between those 2 different authors and that reality has to be as healthy as it can be. If one or both parts don't take the needed care and responsibility, that relationship would leave some of the parts feeling like they are being left behind and not taken seriously or as if they didn't matter.";
        document.getElementById("aboutpp4").innerHTML = "That relationship should take into account, as much as possible, both authors' backgrounds, situations and needs, respecting each other and being responsible about how they interact and coexist with each other and what surrounds them. This will allow a reality that could only exist with an equal relationship between both parts.";
        document.getElementById("aboutpp5").innerHTML = "Sometimes the original creator could even be that 'second one', where their needs are what give sense and shape to a creation that is needed, and that won't turn into a reality unless someone works on it.";
        document.getElementById("aboutpp6").innerHTML = "My projects would lack their purpose if they weren't benefitial in any kind of way in a healthy and coherent manner to any of the parts involved. I want to make everyone feel welcomed to enjoy, engage and share anything related with Abendiix and its projects in every kind of way. Even better: those experiences with Abendiix's project may lead to many other creations and realities that people will be able to experience, where ideas, feelings and so much more will interact, coexist and create so many more creations that everyone could enjoy.";
        document.getElementById("aboutpp7").innerHTML = "The creative process and the need for people to express themselves and be heard is not something that should nor can be controlled nor stopped. From the people that want to have fun and share with others the joy they feel with other's creations, to those who want to claim who they are, vindicate about any aspect of their life or any kind of movement.";
        document.getElementById("aboutpp8").innerHTML = "There are some obvious legal and responsibility limitations but I talk about that need to create and feel that sometimes can't just be let go. For these reasons and more, I want and will work to make my creations as open, free and accessible as I can, so that anyone can squeeze the most out of them in every sense and way possible.";
        document.getElementById("aboutpp9").innerHTML = "This words are just thoughts that cross my mind from time to time when experiencing other people's creations and a result of how all of them make me feel and how I would like my projects and creations to be. I want to make projects and creations that do not limit nor people's creativity, nor needs, nor desires to fully enjoy and experience anything that I make. I want to make people feel as much freedom as they can when coming across Abendiix and its projects. I want to learn more about everything and everyone, make projects and creations that me and other people will love and have fun with (and let's hope making a living 🤞 to make more and better proyects) in the process.";
        document.getElementById("aboutpp10").innerHTML = "PS: This is just <b>my</b> actual way of looking at how I want to create <b>my own</b> projects and art, that may or may not change in the future and/or as I create them (and not something I stubbornly expect from anyone or any project; everyone is and should aim to be different). I will make errors and I'm open to talk about them and improve my projects and myself. Feel free to always reach me out! ^^.";

        document.getElementById("projectssoftwaretitle").innerHTML = "Software";
        document.getElementById("aboutpsp1").innerHTML = "All of Abendiix's software will always be open source and available to everyone and anyone. There will sometimes be cases where the code may not be available, such as releasing a videogame into a platform with private code from the platform's company. In this cases there will always be an equivalent project where all the code is freely available (think of it like a PC and console release, where there may be some private modules for consoles but not for PC, where I can make the code fully open source).";
        document.getElementById("aboutpsp2").innerHTML = "Abendiix's software will always have it's corresponding license and copyright claim to not left out any doubts on its usage.";

        document.getElementById("projectsarttitle").innerHTML = "Art";
        document.getElementById("aboutpap1").innerHTML = "All of Abendiix's art will follow a similar approach to Abendiix's software, being always freely (as in freedom, since there will be some cases where it won't be completely free) available and open for usage to anyone.";
        document.getElementById("aboutpap2").innerHTML = "Every work of art will have it's corresponding license and copyright claim to not left out any doubts on its usage.";
        document.getElementById("aboutpap3").innerHTML = "There will sometimes be more restrictive licenses and copyright claims to avoid cases where the art is used/sold in a non-healthy/toxic way to any of the parties involved.";
        document.getElementById("aboutpap4").innerHTML = "At the same time, this licenses, copyright claims and restrictions will never aim to go against and harm anyone or their creative process (such as making fan-art or selling merchandising related to some proyect). I want everyone to feel welcomed to share their passion and not restrict them on the process (and I'll be more than happy to see what people share about my projects :D).";

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


        //Trom
        document.getElementById("tromzip").innerHTML = "Download everything";
        document.getElementById("tromzip").ariaLabel = "Zip file with Trom's logo and game's screenshots in svg and png format.";
        document.getElementById("logotrom").innerHTML = "Logo";
        document.getElementById("logotromthumbnail").alt = "Trom's logo that serves as a thumbnail.";
        document.getElementById("logotromsvg").ariaLabel = "Download Trom's logo, svg.";
        document.getElementById("logotrompng").ariaLabel = "Download Trom's logo, png.";
        document.getElementById("screenshotstrom").innerHTML = "Game's screenshots (click on images to download them)";
        document.getElementById("menutrom").ariaLabel = "Download Trom's menu screenshot, png.";
        document.getElementById("screenshottrommenu").alt = "Trom's menu screenshot that serves as a thumbnail.";
        document.getElementById("game1_1trom").ariaLabel = "Download Trom's first game mode's first screenshot, png.";
        document.getElementById("screenshottromgame1_1").alt = "Trom's first game mode's first screenshot that serves as a thumbnail.";
        document.getElementById("game1_2trom").ariaLabel = "Download Trom's first game mode's second screenshot, png.";
        document.getElementById("screenshottromgame1_2").alt = "Trom's first game mode's second screenshot that serves as a thumbnail.";
        document.getElementById("game2trom").ariaLabel = "Download Trom's second game mode's screenshot, png.";
        document.getElementById("screenshottromgame2").alt = "Trom's second game screenshot that serves as a thumbnail.";
        document.getElementById("configtrom").ariaLabel = "Download Trom's configuration screenshot, png.";
        document.getElementById("screenshottromconfig").alt = "Trom's configuration screenshot that serves as a thumbnail.";

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
    else if (localStorage.getItem("language") == 'ja')
    {
        //Meta
        document.title = "Abendiix | ゲーム、ツール、その他！"

        //Header
        document.getElementById("linktothisweb").ariaLabel = "Abendiixのウェブサイトへのリンク（現在のページ）。";
        document.getElementById("banner").alt = "Abendiixのロゴの拡大版。文字は黒で、画像の背景は透明（クリアモード）です。";
        document.getElementById("moto").innerHTML = "ゲーム、ツール、その他！";
        
        //Languages and modes
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "underline";

        document.getElementById("clearmode").ariaLabel = "ウェブサイトの色をクリアモードに変更する。";
        document.getElementById("clear").alt = "ウェブサイトをクリアモードに変更するための太陽のアイコン。";
        document.getElementById("darkmode").ariaLabel = "ウェブサイトの色をダークモードに変更する。";
        document.getElementById("dark").alt = "ウェブサイトをダークモードに変更するための月のアイコン。";

        document.getElementById("translationauthor").style.display = "block";

        //Projects' filters
        document.getElementById("projects").innerHTML = "プロジェクト |";
        document.getElementById("projectsall").ariaLabel = "Abendiixのすべてのプロジェクトを表示する。";
        document.getElementById("projectsall").innerHTML = "すべて";
        document.getElementById("projectsgames").ariaLabel = "Abendiixのゲームを表示する。";
        document.getElementById("projectsgames").innerHTML = "ゲーム";
        document.getElementById("projectstools").ariaLabel = "Abendiixのツールを表示する。";
        document.getElementById("projectstools").innerHTML = "ツール";
        document.getElementById("projectsart").ariaLabel = "Abendiixのアートを表示する。";
        document.getElementById("projectsart").innerHTML = "アート";

        //Projects
        //Sprites Love
        document.getElementById("spritesloveicon").alt = "プロジェクトSprites Loveのロゴ。『Sprites』の文字からピクセル化されたSが表示されており、その下と右に赤いピクセル化されたハートが『Love』を表しています。";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("spriteslovelink").ariaLabel = "Sprites Loveのウェブサイトへのリンク。";
        document.getElementById("spriteslovelinkicon").alt = "Sprites Loveのウェブサイトにリダイレクトする2つの斜めのチェーンを持つウェブサイトリンクを象徴する黒いアイコン。";
        document.getElementById("spriteslovegithublink").ariaLabel = "AbendiixのSprites LoveのGitHubリポジトリへのリンク。";
        document.getElementById("spriteslovegithublinkicon").alt = "AbendiixのSprites Loveのリポジトリにリダイレクトする黒いGitHubアイコン（クリアモード）。";
        
        //Trom
        document.getElementById("tromicon").alt = "プロジェクトTromのロゴ。ゲームから来たピクセルアートで作られたトランペットが表示されています。";
        document.getElementById("trm").innerHTML = "Trom";
        document.getElementById("tromlinkitchio").ariaLabel = "Tromのitch.ioページへのリンク。";
        document.getElementById("tromlinkitchioicon").alt = "Tromのitch.ioページにリダイレクトする黒いitch.ioアイコン（クリアモード）。";
        document.getElementById("tromlinkko-fi").ariaLabel = "TromのKo-fiページへのリンク。";
        document.getElementById("tromlinkko-fiicon").alt = "TromのKo-fiページにリダイレクトする黒いKo-fiアイコン（クリアモード）。";
        document.getElementById("tromlinkgithub").ariaLabel = "TromのGitHubページへのリンク。";
        document.getElementById("tromlinkgithubicon").alt = "TromのGitHubページにリダイレクトする黒いGitHubアイコン（クリアモード）。";
        document.getElementById("tromlinkplaystore").ariaLabel = "TromのPlay Storeページへのリンク。";
        document.getElementById("tromlinkplaystoreicon").alt = "TromのPlay Storeページにリダイレクトする黒いPlay Storeアイコン（クリアモード）。";
        document.getElementById("tromlinkappstore").ariaLabel = "TromのApp Storeページへのリンク。";
        document.getElementById("tromlinkappstoreicon").alt = "TromのApp Storeページにリダイレクトする黒いApp Storeアイコン（クリアモード）。";
        
        //Fonts
        document.getElementById("fonts").alt = "Abendiixのフォントのロゴ。大文字のAと小文字のaがピクセルアートスタイルで表示されています。";
        document.getElementById("fnts").innerHTML = "フォント";
        document.getElementById("fontslink").ariaLabel = "Abendiixのフォントウェブサイトへのリンク。";
        document.getElementById("fontslinkicon").alt = "Abendiixのフォントウェブサイトにリダイレクトする2つの斜めのチェーンを持つウェブサイトリンクを象徴する黒いアイコン（クリアモード）。";
        document.getElementById("fontsgithublink").ariaLabel = "AbendiixのフォントのGitHubリポジトリへのリンク。";
        document.getElementById("fontsgithublinkicon").alt = "Abendiixのフォントのリポジトリにリダイレクトする黒いGitHubアイコン（クリアモード）。";

        //Abouts
        document.getElementById("aboutabndx").innerHTML = "について";
        document.getElementById("aboutap1").innerHTML = "私はAbendiix、インディー開発者でありアーティストです。ゲームやツール、そして私の興味を引くものを作成（および試行錯誤）し、プロジェクトを通じて世界をより良くすることを望んでいます。";
        document.getElementById("aboutap2").innerHTML = "Abendiixは、私の開発者/アーティストのエイリアスであり、同時に独自のプロジェクトでもあります。アイデア、アート、プロジェクトをできる限りオープンでアクセスしやすく、親しみやすくするという夢と目標を追求しています。";
        document.getElementById("aboutap3").innerHTML = "Abendiix（プロジェクトとして）は、私自身（Abendiix）と同じくらい、またはそれ以上に成長し、学び、進化し、変わり続けます。Abendiixの目標は、どんな創作物でも最善を尽くし、Abendiixを知る人々や私たちの星、周囲のすべてに良い影響を与えることです。";
        document.getElementById("aboutap4").innerHTML = "気軽にご連絡ください！ 修正や解決が必要なエラーやバグ、質問、ファンアートやプロジェクトに関する体験の共有、またはただの挨拶やおしゃべりなど、どんなことでも歓迎します。どんな方ともお話しし、関わりを持つことを心から嬉しく思います！";

        document.getElementById("projectssummary").innerHTML = "プロジェクト";
        document.getElementById("aboutpp1").innerHTML = "どんな創作物にも必ず2人以上の著者（またはその創作物に意味を与える2つの部分）がいると私は信じています。最初の著者は、アイデアを考え出し、それを現実に変える「オリジナル」のクリエイターです。2番目の著者は、その現実を体験し、それを解釈し、楽しみ、感じるなどして、その現実を一体化させ、その存在に意味を与える役割を担います。";
        document.getElementById("aboutpp2").innerHTML = "時には、両者が同じ「オリジナル」のクリエイターで、自分の創作物と対話していることもあります。たとえその現実を作り出す過程にあったり、どの視点から体験しているにせよです。";
        document.getElementById("aboutpp3").innerHTML = "このシナリオを考慮せずに言えば、その2人の異なる著者と現実との関係は、できる限り健全であるべきです。一方または両方の部分が必要な配慮や責任を怠ると、その関係は一部が置き去りにされている、真剣に受け止められていない、または重要でないと感じることになります。";
        document.getElementById("aboutpp4").innerHTML = "その関係は、できる限り両方の著者の背景、状況、ニーズを考慮し、互いを尊重し、どのように相互作用し共存するか、また周囲とどのように関わるかについて責任を持つべきです。これにより、両者の平等な関係がある現実が実現できるでしょう。";
        document.getElementById("aboutpp5").innerHTML = "時には、オリジナルのクリエイターがその「二番目の著者」であり、そのニーズが必要とされる創作物に意味と形を与える場合があります。そして、その現実が実現するには誰かがそれに取り組む必要があります。";
        document.getElementById("aboutpp6").innerHTML = "私のプロジェクトは、関わるすべての部分にとって健康的で一貫性のある方法で有益でない限り、その目的を欠いてしまいます。Abendiixとそのプロジェクトに関連するすべてのことを楽しみ、関わり、共有できるように、皆さんが歓迎されていると感じてもらいたいと思います。さらに、Abendiixのプロジェクトとの体験が、アイデアや感情などが相互作用し、共存し、さらに多くの創作物を生み出す新たな創作物や現実をもたらすかもしれません。";
        document.getElementById("aboutpp7").innerHTML = "創造的なプロセスと人々が自分を表現し、声を聞いてもらう必要性は、制御されたり止められるべきではなく、また止められることもありません。他人の創造物で感じた喜びを分かち合いたい人から、自分自身を主張したり、人生のあらゆる側面や運動に対して権利を主張したい人まで。";
        document.getElementById("aboutpp8").innerHTML = "明らかな法的および責任の制限はありますが、時にはその創造的な欲求をただ手放すことができないと感じることについて話しています。これらの理由から、私は自分の創作物をできる限りオープンで自由でアクセスしやすいものにし、誰もがあらゆる意味や方法で最大限に活用できるようにしたいと思っています。";
        document.getElementById("aboutpp9").innerHTML = "これらの言葉は、他人の創作物を体験する際に私の心をよぎる考えであり、それらすべてが私に与える感情と、私のプロジェクトや創作物がどうあるべきかについての結果です。私は、人々の創造性やニーズ、私が作るものを完全に楽しみ、体験する欲望を制限することなく、プロジェクトや創作物を作りたいと考えています。Abendiixやそのプロジェクトに触れることで、人々にできるだけ多くの自由を感じてもらいたいと思っています。すべてとすべての人についてもっと学び、私自身や他の人が愛し楽しむプロジェクトや創作物を作りたいと思っています（そして、もっと良いプロジェクトを作るために生計を立てられることを願っています🤞）。";
        document.getElementById("aboutpp10").innerHTML = "追記：これは、私が自分のプロジェクトやアートをどう作りたいかについての現時点での考え方であり、将来的に変わる可能性があることや、それらを作成する過程で変わる可能性もあります（誰に対しても、またどのプロジェクトに対しても頑固に期待しているわけではありません；すべての人は異なり、異なることを目指すべきです）。私は間違いを犯すことがあり、私のプロジェクトや自分自身を改善するために話し合うことにオープンです。いつでも気軽に連絡してください！ ^^。";

        document.getElementById("projectssoftwaretitle").innerHTML = "ソフトウェア";
        document.getElementById("aboutpsp1").innerHTML = "Abendiixのソフトウェアはすべてオープンソースであり、誰でも利用できるようにします。ただし、プラットフォーム会社のプライベートコードを使用するビデオゲームのリリースなど、コードが利用できない場合もあります。その場合には、すべてのコードが自由に利用できる同等のプロジェクトが常に提供されます（PCとコンソールのリリースを考えてみてください。コンソールにはプライベートなモジュールがあるかもしれませんが、PCには完全にオープンソースのコードを提供できます）。";
        document.getElementById("aboutpsp2").innerHTML = "Abendiixのソフトウェアには常に適切なライセンスと著作権主張が付随し、その使用に関する疑問が残らないようにします。";

        document.getElementById("projectsarttitle").innerHTML = "アート";
        document.getElementById("aboutpap1").innerHTML = "Abendiixのアートは、Abendiixのソフトウェアと同様のアプローチを採用し、常に自由（自由度の意味で、完全に無料でない場合もあります）に利用できるようにします。";
        document.getElementById("aboutpap2").innerHTML = "すべてのアート作品には、その使用に関する疑問が残らないように、適切なライセンスと著作権主張が付随します。";
        document.getElementById("aboutpap3").innerHTML = "アートが関係するすべての当事者にとって健全でない、または有害な方法で使用または販売されるのを避けるために、より制限的なライセンスや著作権主張が付随する場合があります。";
        document.getElementById("aboutpap4").innerHTML = "同時に、これらのライセンス、著作権主張、制限は、誰かやその創造的なプロセスに対抗したり害を及ぼしたりすることを目的とするものではありません（例えば、ファンアートを作成したり、プロジェクトに関連するマーチャンダイジングを販売したりすることなど）。すべての人が自分の情熱を共有できるようにし、プロセスを制限することはありません（そして、私のプロジェクトに関して人々が共有するものを見るのはとても楽しみです :D）。";

        //Presskits
        //Abendiix
        document.getElementById("presskits").innerHTML = "プレスキット";

        document.getElementById("abendiixzip").ariaLabel = "Abendiixのロゴとバナーのクリアモードとダークモード、SVGおよびPNG形式、128、256、512ピクセルのZIPファイル。";
        document.getElementById("abendiixzip").innerHTML = "すべてをダウンロード";

        document.getElementById("logodark").innerHTML = "ロゴ（ダークバージョン）";
        document.getElementById("logodarkthumbnail").alt = "Abendiixのダークロゴでサムネイルとして使用されます。";
        document.getElementById("logodark128svg").ariaLabel = "Abendiixのロゴ、ダークモード、SVG、128ピクセルをダウンロードする。";
        document.getElementById("logodark256svg").ariaLabel = "Abendiixのロゴ、ダークモード、SVG、256ピクセルをダウンロードする。";
        document.getElementById("logodark512svg").ariaLabel = "Abendiixのロゴ、ダークモード、SVG、512ピクセルをダウンロードする。";
        document.getElementById("logodark128png").ariaLabel = "Abendiixのロゴ、ダークモード、PNG、128ピクセルをダウンロードする。";
        document.getElementById("logodark256png").ariaLabel = "Abendiixのロゴ、ダークモード、PNG、256ピクセルをダウンロードする。";
        document.getElementById("logodark512png").ariaLabel = "Abendiixのロゴ、ダークモード、PNG、512ピクセルをダウンロードする。";

        document.getElementById("logoclear").innerHTML = "ロゴ（クリアバージョン）";
        document.getElementById("logoclearthumbnail").alt = "Abendiixのクリアロゴでサムネイルとして使用されます。";
        document.getElementById("logoclear128svg").ariaLabel = "Abendiixのロゴ、クリアモード、SVG、128ピクセルをダウンロードする。";
        document.getElementById("logoclear256svg").ariaLabel = "Abendiixのロゴ、クリアモード、SVG、256ピクセルをダウンロードする。";
        document.getElementById("logoclear512svg").ariaLabel = "Abendiixのロゴ、クリアモード、SVG、512ピクセルをダウンロードする。";
        document.getElementById("logoclear128png").ariaLabel = "Abendiixのロゴ、クリアモード、PNG、128ピクセルをダウンロードする。";
        document.getElementById("logoclear256png").ariaLabel = "Abendiixのロゴ、クリアモード、PNG、256ピクセルをダウンロードする。";
        document.getElementById("logoclear512png").ariaLabel = "Abendiixのロゴ、クリアモード、PNG、512ピクセルをダウンロードする。";

        document.getElementById("bannerdark").innerHTML = "バナー（ダークバージョン）";
        document.getElementById("bannerdarkthumbnail").alt = "Abendiixのダークバナーでサムネイルとして使用されます。";
        document.getElementById("bannerdark128svg").ariaLabel = "Abendiixのバナー、ダークモード、SVG、128ピクセルをダウンロードする。";
        document.getElementById("bannerdark256svg").ariaLabel = "Abendiixのバナー、ダークモード、SVG、256ピクセルをダウンロードする。";
        document.getElementById("bannerdark512svg").ariaLabel = "Abendiixのバナー、ダークモード、SVG、512ピクセルをダウンロードする。";
        document.getElementById("bannerdark128png").ariaLabel = "Abendiixのバナー、ダークモード、PNG、128ピクセルをダウンロードする。";
        document.getElementById("bannerdark256png").ariaLabel = "Abendiixのバナー、ダークモード、PNG、256ピクセルをダウンロードする。";
        document.getElementById("bannerdark512png").ariaLabel = "Abendiixのバナー、ダークモード、PNG、512ピクセルをダウンロードする。";

        document.getElementById("bannerclear").innerHTML = "バナー（クリアバージョン）";
        document.getElementById("bannerclearthumbnail").alt = "Abendiixのクリアバナーでサムネイルとして使用されます。";
        document.getElementById("bannerclear128svg").ariaLabel = "Abendiixのバナー、クリアモード、SVG、128ピクセルをダウンロードする。";
        document.getElementById("bannerclear256svg").ariaLabel = "Abendiixのバナー、クリアモード、SVG、256ピクセルをダウンロードする。";
        document.getElementById("bannerclear512svg").ariaLabel = "Abendiixのバナー、クリアモード、SVG、512ピクセルをダウンロードする。";
        document.getElementById("bannerclear128png").ariaLabel = "Abendiixのバナー、クリアモード、PNG、128ピクセルをダウンロードする。";
        document.getElementById("bannerclear256png").ariaLabel = "Abendiixのバナー、クリアモード、PNG、256ピクセルをダウンロードする。";
        document.getElementById("bannerclear512png").ariaLabel = "Abendiixのバナー、クリアモード、PNG、512ピクセルをダウンロードする。";

        //Sprites Love
        document.getElementById("spriteslovezip").ariaLabel = "Sprites Loveの異なるロゴが1:1比率と1:10比率（ピクセル単位）で、SVGおよびPNG形式のZIPファイル。";
        document.getElementById("spriteslovezip").innerHTML = "すべてをダウンロード";

        document.getElementById("spriteslovemain").innerHTML = "メインロゴ";
        document.getElementById("spriteslovemainthumbnail").alt = "Sprites Loveのメインロゴ（サムネイル用）。";
        document.getElementById("spriteslovemain1-1svg").ariaLabel =  "Sprites Loveのメインロゴをダウンロード（1:1ピクセル比、SVG形式）。";
        document.getElementById("spriteslovemain1-10svg").ariaLabel = "Sprites Loveのメインロゴをダウンロード（1:10ピクセル比、SVG形式）。";
        document.getElementById("spriteslovemain1-1png").ariaLabel =  "Sprites Loveのメインロゴをダウンロード（1:1ピクセル比、PNG形式）。";
        document.getElementById("spriteslovemain1-10png").ariaLabel = "Sprites Loveのメインロゴをダウンロード（1:10ピクセル比、PNG形式）。";

        document.getElementById("spriteslovesquare").innerHTML = "スクエアロゴ";
        document.getElementById("spriteslovesquarethumbnail").alt = "Sprites Loveのスクエアロゴ（サムネイル用）。";
        document.getElementById("spriteslovesquare1-1svg").ariaLabel =  "Sprites Loveのスクエアロゴをダウンロード（1:1ピクセル比、SVG形式）。";
        document.getElementById("spriteslovesquare1-10svg").ariaLabel = "Sprites Loveのスクエアロゴをダウンロード（1:10ピクセル比、SVG形式）。";
        document.getElementById("spriteslovesquare1-1png").ariaLabel =  "Sprites Loveのスクエアロゴをダウンロード（1:1ピクセル比、PNG形式）。";
        document.getElementById("spriteslovesquare1-10png").ariaLabel = "Sprites Loveのスクエアロゴをダウンロード（1:10ピクセル比、PNG形式）。";

        document.getElementById("spritesloveshort").innerHTML = "ショートロゴ";
        document.getElementById("spritesloveshortthumbnail").alt = "Sprites Loveのショートロゴ（サムネイル用）。";
        document.getElementById("spritesloveshort1-1svg").ariaLabel =  "Sprites Loveのショートロゴをダウンロード（1:1ピクセル比、SVG形式）。";
        document.getElementById("spritesloveshort1-10svg").ariaLabel = "Sprites Loveのショートロゴをダウンロード（1:10ピクセル比、SVG形式）。";
        document.getElementById("spritesloveshort1-1png").ariaLabel =  "Sprites Loveのショートロゴをダウンロード（1:1ピクセル比、PNG形式）。";
        document.getElementById("spritesloveshort1-10png").ariaLabel = "Sprites Loveのショートロゴをダウンロード（1:10ピクセル比、PNG形式）。";

        document.getElementById("spriteslovelong").innerHTML = "ロングロゴ";
        document.getElementById("spriteslovelongthumbnail").alt = "Sprites Loveのロングロゴ（サムネイル用）。";
        document.getElementById("spriteslovelong1-1svg").ariaLabel =  "Sprites Loveのロングロゴをダウンロード（1:1ピクセル比、SVG形式）。";
        document.getElementById("spriteslovelong1-10svg").ariaLabel = "Sprites Loveのロングロゴをダウンロード（1:10ピクセル比、SVG形式）。";
        document.getElementById("spriteslovelong1-1png").ariaLabel =  "Sprites Loveのロングロゴをダウンロード（1:1ピクセル比、PNG形式）。";
        document.getElementById("spriteslovelong1-10png").ariaLabel = "Sprites Loveのロングロゴをダウンロード（1:10ピクセル比、PNG形式）。";

        document.getElementById("spriteslovebig").innerHTML = "ビッグロゴ";
        document.getElementById("spriteslovebigthumbnail").alt = "Sprites Loveのビッグロゴ（サムネイル用）。";
        document.getElementById("spriteslovebig1-1svg").ariaLabel =  "Sprites Loveのビッグロゴをダウンロード（1:1ピクセル比、SVG形式）。";
        document.getElementById("spriteslovebig1-10svg").ariaLabel = "Sprites Loveのビッグロゴをダウンロード（1:10ピクセル比、SVG形式）。";
        document.getElementById("spriteslovebig1-1png").ariaLabel =  "Sprites Loveのビッグロゴをダウンロード（1:1ピクセル比、PNG形式）。";
        document.getElementById("spriteslovebig1-10png").ariaLabel = "Sprites Loveのビッグロゴをダウンロード（1:10ピクセル比、PNG形式）。";

        document.getElementById("spritesloveheart").innerHTML = "ハートロゴ";
        document.getElementById("spritesloveheartthumbnail").alt = "Sprites Loveのハートロゴ（サムネイル用）。";
        document.getElementById("spritesloveheart1-1svg").ariaLabel =  "Sprites Loveのハートロゴをダウンロード（1:1ピクセル比、SVG形式）。";
        document.getElementById("spritesloveheart1-10svg").ariaLabel = "Sprites Loveのハートロゴをダウンロード（1:10ピクセル比、SVG形式）。";
        document.getElementById("spritesloveheart1-1png").ariaLabel =  "Sprites Loveのハートロゴをダウンロード（1:1ピクセル比、PNG形式）。";
        document.getElementById("spritesloveheart1-10png").ariaLabel = "Sprites Loveのハートロゴをダウンロード（1:10ピクセル比、PNG形式）。";

        //Trom
        document.getElementById("tromzip").innerHTML = "すべてをダウンロード";
        document.getElementById("tromzip").ariaLabel = "Tromのロゴとゲームのスクリーンショット（SVG形式とPNG形式）のZIPファイル。";
        document.getElementById("logotrom").innerHTML = "ロゴ";
        document.getElementById("logotromthumbnail").alt = "Tromのロゴ（サムネイル用）。";
        document.getElementById("logotromsvg").ariaLabel = "Tromのロゴをダウンロード（SVG形式）。";
        document.getElementById("logotrompng").ariaLabel = "Tromのロゴをダウンロード（PNG形式）。";
        document.getElementById("screenshotstrom").innerHTML = "ゲームのスクリーンショット（画像をクリックしてダウンロード）";
        document.getElementById("menutrom").ariaLabel = "Tromのメニューのスクリーンショットをダウンロード（PNG形式）。";
        document.getElementById("screenshottrommenu").alt = "Tromのメニューのスクリーンショット（サムネイル用）。";
        document.getElementById("game1_1trom").ariaLabel = "Tromの最初のゲームモードの最初のスクリーンショットをダウンロード（PNG形式）。";
        document.getElementById("screenshottromgame1_1").alt = "Tromの最初のゲームモードの最初のスクリーンショット（サムネイル用）。";
        document.getElementById("game1_2trom").ariaLabel = "Tromの最初のゲームモードの2番目のスクリーンショットをダウンロード（PNG形式）。";
        document.getElementById("screenshottromgame1_2").alt = "Tromの最初のゲームモードの2番目のスクリーンショット（サムネイル用）。";
        document.getElementById("game2trom").ariaLabel = "Tromの2番目のゲームモードのスクリーンショットをダウンロード（PNG形式）。";
        document.getElementById("screenshottromgame2").alt = "Tromの2番目のゲームのスクリーンショット（サムネイル用）。";
        document.getElementById("configtrom").ariaLabel = "Tromの設定のスクリーンショットをダウンロード（PNG形式）。";
        document.getElementById("screenshottromconfig").alt = "Tromの設定のスクリーンショット（サムネイル用）。";

        //Privacy Policies
        document.getElementById("privacypolicies").innerHTML = "プライバシーポリシー";
        document.getElementById("trompp").innerHTML = "Tromはデータを生成せず、サーバーやデータベースに送信することもありません。";

        //External sites
        document.getElementById("tips").innerHTML = "ヒント";
        document.getElementById("ko-filink").ariaLabel = "AbendiixのKo-fiへのリンク。";
        document.getElementById("ko-fi").alt = "Abendiixのプロフィールにリダイレクトする黒いKo-fiアイコン（クリアモード）。";

        document.getElementById("c&r").innerHTML = "コードとリリース";
        document.getElementById("githublink").ariaLabel = "AbendiixのGitHubへのリンク。";
        document.getElementById("github").alt = "Abendiixのプロフィールにリダイレクトする黒いGitHubアイコン（クリアモード）。";
        document.getElementById("itchiolink").ariaLabel = "AbendiixのItch.ioへのリンク。";
        document.getElementById("itchio").alt = "Abendiixのプロフィールにリダイレクトする黒いitch.ioアイコン（クリアモード）。";
        document.getElementById("playstorelink").ariaLabel = "AbendiixのPlay Storeへのリンク。";
        document.getElementById("playstore").alt = "Abendiixのプロフィールにリダイレクトする黒いPlay Storeアイコン（クリアモード）。";

        document.getElementById("socials").innerHTML = "SNS";
        document.getElementById("twitterlink").ariaLabel = "AbendiixのTwitterへのリンク。";
        document.getElementById("twitter").alt = "Abendiixのプロフィールにリダイレクトする黒いTwitterアイコン（クリアモード）。";
        document.getElementById("blueskylink").ariaLabel = "AbendiixのBlueskyへのリンク。";
        document.getElementById("bluesky").alt = "Abendiixのプロフィールにリダイレクトする黒いBlueskyアイコン（クリアモード）。";

        //Contact section
        document.getElementById("contact").innerHTML = "メールでの連絡";
        document.getElementById("copy").ariaLabel = "Abendiixの連絡先メールアドレスをクリップボードにコピーする。";
        document.getElementById("copy").innerHTML = "コピー";
        document.getElementById("openApp").ariaLabel = "Abendiixに連絡するためにデフォルトでメールアプリを開く。";
        document.getElementById("openApp").innerHTML = "アプリを開く";
        document.getElementById("openApp").href = "mailto:contact@abendiix [.] com";

        //Copyright
        document.getElementById("cc0").ariaLabel = "CC0に関するクリエイティブ・コモンズのページへのリンク。";
        document.getElementById("fontAwe").ariaLabel = "Font Awesomeのページへのリンク。";

        //Emoti gag
        document.getElementById("emotiText").innerHTML = "私を見つけました！";
        document.getElementById("emotigag").ariaLabel = "ランダムに生成された食べ物の絵文字を投げる絵文字のようなテキストに関する小さなギャグ。";
        document.getElementById("emoti").ariaLabel = "星とランダムな食べ物の絵文字を投げるように見える顔文字を形成する複数の文字が並んでいる。";
    }
}
