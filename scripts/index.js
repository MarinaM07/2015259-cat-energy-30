document.addEventListener("DOMContentLoaded",()=>{let a=document.querySelector(".main-nav"),e=document.querySelector(".main-nav__list"),n=document.querySelector(".main-nav__toggle");if(e){a.classList.remove("main-nav--nojs");let s=()=>{e.classList.contains("main-nav__list--closed")?(e.classList.remove("main-nav__list--closed"),e.classList.add("main-nav__list--opened"),n.classList.remove("main-nav__toggle--closed"),n.classList.add("main-nav__toggle--opened")):(e.classList.add("main-nav__list--closed"),e.classList.remove("main-nav__list--opened"),n.classList.add("main-nav__toggle--closed"),n.classList.remove("main-nav__toggle--opened"))};n.addEventListener("click",s),n.addEventListener("touchstart",t=>{t.preventDefault(),s()})}});
