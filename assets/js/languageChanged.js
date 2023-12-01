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
    location.reload();
}

function changeToEN()
{
    localStorage.setItem("language", "en");
    document.documentElement.setAttribute("lang", 'en');
    updateTexts("en");
    location.reload();
}

function changeToJA()
{
    localStorage.setItem("language", "ja");
    document.documentElement.setAttribute("lang", 'ja');
    updateTexts("ja");
    location.reload();
}

function updateTexts(language)
{
    if(localStorage.getItem("language") == "es")
    {
        //Texts
        document.getElementById("moto").innerHTML = "¡Juegos y herramientas!";
        document.getElementById("es").style.textDecoration = "underline";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "none";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("contact").innerHTML = "Contactar por correo";
        document.getElementById("copy").innerHTML = "Copiar";
        document.getElementById("openApp").innerHTML = "Abrir aplicación";
        document.getElementById("openApp").href = "mailto:contacto@abendiix.com";
        document.getElementById("emotiText").innerHTML = "¡Me encontraste!";

        //Alt texts
        document.getElementById("banner").alt = "Placeholder";
        document.getElementById("spritesloveicon").alt = "Placeholder";
        document.getElementById("spriteslovelinkicon").alt = "Placeholder";
        document.getElementById("ko-fi").alt = "Placeholder";
        document.getElementById("github").alt = "Placeholder";
        document.getElementById("itchio").alt = "Placeholder";
        document.getElementById("twitter").alt = "Placeholder";

    }
    else if (localStorage.getItem("language") == "en")
    {
        //Texts
        document.getElementById("moto").innerHTML = "Games and tools!";
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "underline";
        document.getElementById("ja").style.textDecoration = "none";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("contact").innerHTML = "Contact via email";
        document.getElementById("copy").innerHTML = "Copy";
        document.getElementById("openApp").innerHTML = "Open app";
        document.getElementById("openApp").href = "mailto:contact@abendiix.com";
        document.getElementById("emotiText").innerHTML = "You found me!";

        //Alt texts
        document.getElementById("banner").alt = "Abendiix's logo expanded in banner form. The letters are black and the background of the image is transparent.";
        document.getElementById("spritesloveicon").alt = "Logo/Icon for the project called 'Sprites Love'. It shows a pixelated S from the word 'Sprites' and one pixel down and to the right there's a red pixelated heart representing the word 'Love'.";
        document.getElementById("spriteslovelinkicon").alt = "Black icon that symbolizes a website link with two diagonal chains that is also used a link to visit the website of the project 'Sprites Love'.";
        document.getElementById("ko-fi").alt = "Black icon of the platform Ko-fi, used to redirect to Abendiix's profile.";
        document.getElementById("github").alt = "Black icon of the platform GitHub, used to redirect to Abendiix's profile.";
        document.getElementById("itchio").alt = "Black icon of the platform itch.io, used to redirect to Abendiix's profile.";
        document.getElementById("twitter").alt = "Black icon of the platform Twitter, used to redirect to Abendiix's profile.";
    }
    else if (localStorage.getItem("language") == "ja")
    {
        //Texts
        document.getElementById("moto").innerHTML = "ゲームとツール！";
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "underline";
        document.getElementById("sprlv").innerHTML = "スプライト ラブ";
        document.getElementById("contact").innerHTML = "メールで私にご連絡ください";
        document.getElementById("copy").innerHTML = "コピー";
        document.getElementById("openApp").innerHTML = "アプリを開く";
        document.getElementById("openApp").href = "mailto:contact@abendiix.com";
        document.getElementById("emotiText").innerHTML = "私を見つけた！";

        //Alt texts
        document.getElementById("banner").alt = "Placeholder";
        document.getElementById("spritesloveicon").alt = "Placeholder";
        document.getElementById("spriteslovelinkicon").alt = "Placeholder";
        document.getElementById("ko-fi").alt = "Placeholder";
        document.getElementById("github").alt = "Placeholder";
        document.getElementById("itchio").alt = "Placeholder";
        document.getElementById("twitter").alt = "Placeholder";
    }
}
