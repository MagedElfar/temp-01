/*global document, prompt, console, alert, $*/

var
    ch = document.querySelector(".choose-right"),
    imgSrc = [
        "img/about2.webp",
        "img/about1.webp"
    ],
    i = 0,
    k = 0;

console.log(ch.lastElementChild.children.length);

ch.lastElementChild.children[0].classList.add("color");

var colorChange = setInterval(function () {
    "use strict";
    
    var j = 0;
    for (j; j < ch.lastElementChild.children.length; j++) {
        ch.lastElementChild.children[j].style.backgroundColor = "#FFF";
    }
    
    ch.lastElementChild.children[k++].style.backgroundColor = "red";
    
    if (k === ch.lastElementChild.children.length) {
        k = 0;
    }
    
    ch.firstElementChild.src = imgSrc[i++];
    if (i === imgSrc.length) {
        i = 0;
    }
    
}, 2000);

