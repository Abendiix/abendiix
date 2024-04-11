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

var all = document.getElementById("projectsall");
var games = document.getElementById("projectsgames");
var tools = document.getElementById("projectstools");
var art = document.getElementById("projectsart");

var spriteslove = document.getElementById("spriteslove");
var trom = document.getElementById("trom");

function showAll()
{
    spriteslove.style.display = "block";
    trom.style.display = "block";
    all.style.textDecoration = "underline";
    games.style.textDecoration = "none";
    tools.style.textDecoration = "none";
    art.style.textDecoration = "none";
}

function showGames()
{
    spriteslove.style.display = "none";
    trom.style.display = "block";
    all.style.textDecoration = "none";
    games.style.textDecoration = "underline";
    tools.style.textDecoration = "none";
    art.style.textDecoration = "none";
}

function showTools()
{
    spriteslove.style.display = "block";
    trom.style.display = "none";
    all.style.textDecoration = "none";
    games.style.textDecoration = "none";
    tools.style.textDecoration = "underline";
    art.style.textDecoration = "none";
}

function showArt()
{
    spriteslove.style.display = "none";
    trom.style.display = "none";
    all.style.textDecoration = "none";
    games.style.textDecoration = "none";
    tools.style.textDecoration = "none";
    art.style.textDecoration = "underline";
}