"use strict";
// Adding Element
document.body.append("Hello");
// Creating Element
const divElement = document.createElement("div");
divElement.innerText = "Hello Again";
divElement.id = "app";
document.body.append(divElement);
document.querySelector("div").style.backgroundColor = "green";
// Inserting Element in the div
const h1Element = document.createElement("h1");
h1Element.innerText = "h1";
h1Element.style.backgroundColor = "yellow";
document.querySelector("#app").append(h1Element);
// Modifying Attributes
divElement.setAttribute("id", "main_container");
h1Element.className = "header_sub";
h1Element.classList.add("header");
// Removing Elements
//* h1Element.remove();
const h1Class = h1Element.getAttribute("class");
// DOM Traversal
document.getElementById("#id");
const parentElement = document.querySelectorAll(".parent");
parentElement.forEach((e) => {
    changeColour(e, "red");
});
// Selecting children
const firstRowChildren = parentElement[0].children;
changeColour(firstRowChildren[0], "yellow");
function changeColour(element, colour) {
    element.style.backgroundColor = colour;
}
// Selecting parent
const child = firstRowChildren[0];
const getParentElement = child.parentElement;
getParentElement.style.backgroundColor = "aqua";
const getGrandParent = child.closest(".grandparent"); // Works like querySelector but moves upwards
getGrandParent.style.backgroundColor = "pink";
const selectNextSibling = child.nextElementSibling;
selectNextSibling.style.backgroundColor = "green";
