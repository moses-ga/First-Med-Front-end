var home_nav = document.getElementById("home-nav-bar")
home_nav.style.right = "-100%"

function showHome_Menu(){
    if(home_nav.style.right == "-100%"){
        home_nav.style.right = "0"
    }
    else{
        home_nav.style.right = "-100%"
    }

}