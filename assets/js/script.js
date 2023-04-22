"use strict";
/*
 **add events function
 */
const addEventOnElement = function (elements, eventType, callBack) {
  let len = elements.length;
  for (let i = 0; i < len; i++) {
    elements[i].addEventListener(eventType, callBack);
  }
};
/*
 **add events function
 */

///////////navbar toggle for mobile////////////
let navbar = document.querySelector("header .container .navbar");
let overlay = document.querySelector("header .container .overlay");
let toggleBtn = document.querySelector("header .container .navbar-opn-btn");

let toggle = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventOnElement([toggleBtn, overlay], "click", toggle);
console.log(navbar);
console.log(toggleBtn);
console.log(overlay);
///////////navbar toggle for mobile////////////
