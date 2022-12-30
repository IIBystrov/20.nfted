"use strict";

let burger = document.querySelector(".burger");
let burgerLine = document.querySelector(".burger__line");

burger.addEventListener("click", burgerOpen);

function burgerOpen() {
    burgerLine.classList.toggle("open");
};