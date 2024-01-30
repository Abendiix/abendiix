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
        //Texts
        document.getElementById("moto").innerHTML = "¡Juegos, herramientas y más!";
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
        document.getElementById("banner").alt = "Logo de Abendiix en forma expandida. Las letras son negras y el fondo de la imagen transparente.";
        document.getElementById("spritesloveicon").alt = "Logo del proyecto 'Sprites Love'. Se puede ver una S pixelada por la palabra 'Sprites' y un pixel abajo y a la derecha hay un corazón rojo pixelado representando la palabra 'Love'.";
        document.getElementById("spriteslovelinkicon").alt = "Icono negro que simboliza un enlace web con dos cadenas diagonales que redirige a la web de 'Sprites Love'.";
        document.getElementById("ko-fi").alt = "Icono negro de Ko-fi que redirige al perfil de Abendiix.";
        document.getElementById("github").alt = "Icono negro de GitHub que redirige al perfil de Abendiix.";
        document.getElementById("itchio").alt = "Icono negro de itch.io que redirige al perfil de Abendiix.";
        document.getElementById("twitter").alt = "Icono negro de Twitter que redirige al perfil de Abendiix.";

        //AriaLabel texts
        document.getElementById("linktothisweb").ariaLabel = "Enlace a la web de Abendiix (donde estás).";
        document.getElementById("spriteslovelink").ariaLabel = "Enlace a la web de 'Sprites Love'";
        document.getElementById("ko-filink").ariaLabel = "Enlace al Ko-fi de Abendiix";
        document.getElementById("githublink").ariaLabel = "Enlace al GitHub de Abendiix";
        document.getElementById("itchiolink").ariaLabel = "Enlace al Itch.io de Abendiix";
        document.getElementById("twitterlink").ariaLabel = "Enlace al Twitter de Abendiix";
        document.getElementById("copy").ariaLabel = "Copiar el correo electrónico de contacto de Abendiix.";
        document.getElementById("openApp").ariaLabel = "Abrir aplicación de correo electrónico por defecto para contactar a Abendiix";
        document.getElementById("emotigag").ariaLabel = "Pequeña broma sobre un texto con forma de emoti que lanza emojis aleatorios de comida.";

    }
    else if (localStorage.getItem("language") == "en")
    {
        //Texts
        document.getElementById("moto").innerHTML = "Games, tools and more!";
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
        document.getElementById("banner").alt = "Abendiix's logo in expanded form. The letters are black and the background of the image is transparent.";
        document.getElementById("spritesloveicon").alt = "Logo for the project 'Sprites Love'. It shows a pixelated S from the word 'Sprites' and one pixel down and to the right there's a red pixelated heart representing the word 'Love'.";
        document.getElementById("spriteslovelinkicon").alt = "Black icon that symbolizes a website link with two diagonal chains that redirects to 'Sprites Love''s website.";
        document.getElementById("ko-fi").alt = "Black icon for Ko-fi that redirects to Abendiix's profile.";
        document.getElementById("github").alt = "Black icon for GitHub that redirects to Abendiix's profile.";
        document.getElementById("itchio").alt = "Black icon for itch.io that redirects to Abendiix's profile.";
        document.getElementById("twitter").alt = "Black icon for Twitter that redirects to Abendiix's profile.";

        //AriaLabel texts
        document.getElementById("linktothisweb").ariaLabel = "Link to Abendiix's website (where you are now).";
        document.getElementById("spriteslovelink").ariaLabel = "Link to 'Sprites Love''s website.";
        document.getElementById("ko-filink").ariaLabel = "Link to Abendiix's Ko-fi";
        document.getElementById("githublink").ariaLabel = "Link to Abendiix's GitHub";
        document.getElementById("itchiolink").ariaLabel = "Link to Abendiix's Itch.io";
        document.getElementById("twitterlink").ariaLabel = "Link to Abendiix's Twitter";
        document.getElementById("copy").ariaLabel = "Copy Abendiix's contact email to clipboard.";
        document.getElementById("openApp").ariaLabel = "Open email app by default to contact Abendiix.";
        document.getElementById("emotigag").ariaLabel = "Small gag about a emoti-like text throwing randomly generated food emojis.";
    }
    else if (localStorage.getItem("language") == "ja")
    {
        //Texts
        document.getElementById("moto").innerHTML = "ゲーム、ツール、その他！";
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
        document.getElementById("banner").alt = "Abendiix のロゴを拡大したもの。文字は黒、背景は透明です。";
        document.getElementById("spritesloveicon").alt = "「Sprites Love」のウェブにリダイレクトされる、2本の斜めの鎖でつながれたウェブサイトのリンクを象徴する黒いアイコン。";
        document.getElementById("spriteslovelinkicon").alt = " 「Sprites Love」のウェブにリダイレクトされる、2本の斜めの鎖でつながれたウェブサイトのリンクを象徴する黒いアイコン。";
        document.getElementById("ko-fi").alt = "Abendiix のプロフィールにリダイレクトするKo-fiの黒いアイコン。";
        document.getElementById("github").alt = "Abendiix のプロフィールにリダイレクトするGitHub黒いアイコン。";
        document.getElementById("itchio").alt = "Abendiix のプロフィールにリダイレクトするitch.ioの黒いアイコン。";
        document.getElementById("twitter").alt = "Abendiix のプロフィールにリダイレクトするTwitter黒いアイコン。";

        //AriaLabel texts
        document.getElementById("linktothisweb").ariaLabel = "Abendiix のウェブサイトへのリンク。";
        document.getElementById("spriteslovelink").ariaLabel = "「Sprites Love」ウェブサイトへのリンク。";
        document.getElementById("ko-filink").ariaLabel = "Abendiix の Ko-Fi へのリンク。";
        document.getElementById("githublink").ariaLabel = "Abendiix の GitHub へのリンク。";
        document.getElementById("itchiolink").ariaLabel = "Abendiix の Ko-Fi へのリンク。";
        document.getElementById("twitterlink").ariaLabel = "Abendiix の Twitter へのリンク。";
        document.getElementById("copy").ariaLabel = "Abendiix の連絡先Eメールをクリップボードにコピーする。";
        document.getElementById("openApp").ariaLabel = "Abendiix に連絡するために、デフォルトでEメールアプリを開きます。";
        document.getElementById("emotigag").ariaLabel = "ランダムに生成される食べ物の絵文字を投げる絵文字のようなテキストについての小さなギャグ。";
    }
}
