"use strict";

// variables

let burger = document.querySelector(".burger");
let burgerLine = document.querySelector(".burger__line");
let menuContain = document.querySelector(".header__burger-contain");
let navList = document.querySelector(".nav__list");
let headerBtn = document.querySelector(".header__btn");

// eventListener

burger.addEventListener("click", burgerOpen);

// functions

function burgerOpen() {
    burgerLine.classList.toggle("burger__line--active");
    menuContain.classList.toggle("burger-contain--active");
    navList.classList.toggle("nav__list--active");
    headerBtn.classList.toggle("header__btn--active");
};