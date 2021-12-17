let hamburger = document.querySelector(".outer-circle");
let menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("change");
    menu.classList.toggle("hide");
})