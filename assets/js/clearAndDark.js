var page = document.getElementById("page");

var elementsToChangeArray = document.getElementsByClassName("changeableColor");

window.onload = (event) => {
    if(localStorage.getItem("mode") == "clear")
    {
        changeToClearMode();
    }
    else if (localStorage.getItem("mode") == "dark")
    {
        changeToDarkMode();
    }
    else
    {
        localStorage.setItem("mode", "clear");
    }
};

function filterClear(item)
{
    item.style.filter = "invert(0%) sepia(5%) saturate(4170%) hue-rotate(82deg) brightness(118%) contrast(84%)";
}

function filterDark(item)
{
    item.style.filter = "invert(99%) sepia(8%) saturate(1%) hue-rotate(316deg) brightness(110%) contrast(84%)";
}

function changeToClearMode()
{
    localStorage.setItem("mode", "clear");
    page.style.backgroundColor = "rgb(255, 255, 255)";
    page.style.color = "rgb(20, 20, 20)";

    for (var i = 0; i < elementsToChangeArray.length; i++)
    {
        filterClear(elementsToChangeArray.item(i));
    }
}

function changeToDarkMode()
{
    localStorage.setItem("mode", "dark");
    page.style.backgroundColor = "rgb(30, 30, 30)";
    page.style.color = "rgb(235, 235, 235)";

    for (var i = 0; i < elementsToChangeArray.length; i++)
    {
        filterDark(elementsToChangeArray.item(i));
    }
}