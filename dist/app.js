"use strict";
// Adding Element
document.body.append("Hello");
// Creating Element
const divElement = document.createElement("div");
divElement.innerText = "Hello Again";
document.body.append(divElement);
document.querySelector("div").style.backgroundColor = "green";
// Inserting Element in the div
const h1Element = document.createElement("h1");
h1Element.innerText = "h1";
h1Element.style.backgroundColor = "yellow";
document.querySelector("div").append(h1Element);
// Modifying Attributes
divElement.setAttribute("id", "main_container");
h1Element.className = "header_sub";
h1Element.classList.add("header");
// Removing Elements
//* h1Element.remove();
const h1Class = h1Element.getAttribute("class");
console.log(h1Class);
