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

function copyEmail()
{
    if(localStorage.getItem("language") == "es")
    {
        navigator.clipboard.writeText("contacto@abendiix [.] com");
    }
    else
    {
        navigator.clipboard.writeText("contact@abendiix [.] com");
    }

    document.getElementById("copy").style.textDecoration = "none";


    if(localStorage.getItem("language") == "es")
    {
        document.getElementById("copy").innerHTML = "¡Copiado!";

        //Improve responsiveness and accessibility for the copy email button
        delay(function(){
            document.getElementById("copy").innerHTML = "Copiar";
            document.getElementById("copy").style.textDecoration = "underline";
        }, 1200 );
    }
    else if (localStorage.getItem("language") == "en")
    {
        document.getElementById("copy").innerHTML = "Copied!";

        //Improve responsiveness and accessibility for the copy email button
        delay(function(){
            document.getElementById("copy").innerHTML = "Copy";
            document.getElementById("copy").style.textDecoration = "underline";
        }, 1200 );
    }
    else if (localStorage.getItem("language") == "ja")
    {
        document.getElementById("copy").innerHTML = "コピー済み！";

        //Improve responsiveness and accessibility for the copy email button
        delay(function(){
            document.getElementById("copy").innerHTML = "コピー";
            document.getElementById("copy").style.textDecoration = "underline";
        }, 1200 );
    }
}

var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();