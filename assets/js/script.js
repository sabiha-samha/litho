'use strict';


// add event on multiple elements

const addEventOnElem = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");


const navToggleFunc = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", navToggleFunc);