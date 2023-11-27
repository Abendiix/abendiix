window.onload = (event) => {
    console.log(localStorage.getItem("language"));

    if(localStorage.getItem("language") == "es")
    {
        updateTexts("es");
    }
    else if (localStorage.getItem("language") == "en")
    {
        updateTexts("en");
    }
    else if (localStorage.getItem("language") == "ja")
    {
        updateTexts("ja");
    }    
};

function changeToES()
{
    localStorage.setItem("language", "es");
    location.reload();
}

function changeToEN()
{
    localStorage.setItem("language", "en");
    location.reload();
}

function changeToJA()
{
    localStorage.setItem("language", "ja");
    location.reload();
}

function updateTexts(language)
{
    if(localStorage.getItem("language") == "es")
    {
        document.getElementById("moto").innerHTML = "¡Juegos y herramientas!";
        document.getElementById("es").style.textDecoration = "underline";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "none";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("contact").innerHTML = "Contactar por correo";
        document.getElementById("copy").innerHTML = "Copiar";
        document.getElementById("openApp").innerHTML = "Abrir aplicación";
        document.getElementById("emotiText").innerHTML = "¡Me encontraste!";
    }
    else if (localStorage.getItem("language") == "en")
    {
        document.getElementById("moto").innerHTML = "Games and tools!";
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "underline";
        document.getElementById("ja").style.textDecoration = "none";
        document.getElementById("sprlv").innerHTML = "Sprites Love";
        document.getElementById("contact").innerHTML = "Contact via email";
        document.getElementById("copy").innerHTML = "Copy";
        document.getElementById("openApp").innerHTML = "Open app";
        document.getElementById("emotiText").innerHTML = "You found me!";
    }
    else if (localStorage.getItem("language") == "ja")
    {
        document.getElementById("moto").innerHTML = "ゲームとツール！";
        document.getElementById("es").style.textDecoration = "none";
        document.getElementById("en").style.textDecoration = "none";
        document.getElementById("ja").style.textDecoration = "underline";
        document.getElementById("sprlv").innerHTML = "スプライト ラブ";
        document.getElementById("contact").innerHTML = "メールで私にご連絡ください";
        document.getElementById("copy").innerHTML = "コピー";
        document.getElementById("openApp").innerHTML = "アプリを開く";
        document.getElementById("emotiText").innerHTML = "私を見つけた！";
    }
}