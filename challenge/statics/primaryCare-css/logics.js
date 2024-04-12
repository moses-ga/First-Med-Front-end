var navbar = document.getElementById("menuLists")



navbar.style.height = "0px"


function toggleMenu(){
    if(navbar.style.height == "0px"){
        navbar.style.paddingBlock = "20px"
        navbar.style.height = "70vh"
        
    }
    else{
        navbar.style.paddingBlock = "0px"
        navbar.style.height = "0px"
    }
}

var nv = document.getElementById("nav")
nv.style.background = "red"

// nav bar onscroll animation
const header = document.getElementById("header")
header.style.background = "red"
window.addEventListener("scroll",function(){
    if(this.window.scrollY > 0){
        header.classList.add("nav-active")
    }
    else{
        header.classList.remove("nav-active")
    }
})

