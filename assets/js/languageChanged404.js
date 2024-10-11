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
        document.getElementById("emotigag").ariaLabel = "Pequeña broma sobre un texto con forma de emoti confuso.";
        document.getElementById("emoti").ariaLabel = "Diferentes caracteres que forman una cara confusa.";
    }
    else if (localStorage.getItem("language") == 'en')
    {
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
        document.getElementById("emotigag").ariaLabel = "Small gag about a emoti-like text being confused.";
        document.getElementById("emoti").ariaLabel = "Multiple characters arranged to look like a confused face.";

    }
    else if (localStorage.getItem("language") == 'ja')
    {
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
        document.getElementById("emotigag").ariaLabel = "混乱顔文字。";
        document.getElementById("emoti").ariaLabel = "混乱顔文字。";
    }
}
