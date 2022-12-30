"use strict";

let burger = document.querySelector(".burger");
let burgerLine = document.querySelector(".burger__line");
let menuContain = document.querySelector(".header__burger-contain");
let navList = document.querySelector(".nav__list");

burger.addEventListener("click", burgerOpen);

function burgerOpen() {
    burgerLine.classList.toggle("burger__line--active");
    menuContain.classList.toggle("burger-contain--active");
    navList.classList.toggle(".nav__list--active");
};