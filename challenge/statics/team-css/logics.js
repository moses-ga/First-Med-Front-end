var navbar = document.getElementById("menuLists")
var primary_nav = document.getElementById("nav-primary")
const header = document.getElementById("header")

navbar.style.height = "0px"


function toggleMenu(){
    if(navbar.style.height == "0px"){
        header.style.background = "#ED215E"
        navbar.style.paddingBlock = "20px"
        navbar.style.height = "70vh"

        
    }
    else{
        navbar.style.paddingBlock = "0px"
        navbar.style.height = "0px"
        setTimeout(() => {
            header.style.background = "transparent"
        }, 500);
    }
}

// nav bar onscroll animation

window.addEventListener("scroll",function(){
    if(this.window.scrollY > 0){
        header.classList.add("nav-active")
    }
    else{
        header.classList.remove("nav-active")
    }
})