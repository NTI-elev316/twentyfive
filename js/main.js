document.addEventListener('DOMContentLoaded', function() {

document.querySelector(".overlay").addEventListener("click",toggleMenu)

document.querySelector(".menu-button").addEventListener("click",toggleMenu)


function toggleMenu(){
    let menu = document.querySelector("nav");
    menu.classList.toggle("active");
    let layer = document.querySelector(".overlay");
    layer.classList.toggle("active")
}});