let bars = document.querySelector(".bars")
let cross = document.querySelector(".cross")
let menu = document.querySelector(".menu")
let nav_left = document.querySelector(".nav-left")
let nav_right = document.querySelector(".nav-right")

bars.addEventListener("click",(e)=>{
    // console.log("bar clicked")
    menu.classList.remove("hidden")
    nav_left.classList.add("hidden")
    nav_right.classList.add("hidden")

})

cross.addEventListener("click",()=>{
    menu.classList.add("hidden")
    nav_left.classList.remove("hidden")
    nav_right.classList.remove("hidden")
})