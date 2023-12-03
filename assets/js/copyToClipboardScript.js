function copyEmail()
{
    if(localStorage.getItem("language") == "es")
    {
        navigator.clipboard.writeText("contacto@abendiix.com");
    }
    else
    {
        navigator.clipboard.writeText("contact@abendiix.com");
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