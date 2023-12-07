function dropFunction() {
    var button = document.getElementById("drop-button");
    var navBar = document.getElementById("nav-right");

    if(navBar.classList.contains("hide")) { // Is Hidden
        navBar.classList.remove("hide");
        button.innerHTML = "-";
        return;
    }
    navBar.classList.add("hide");
    button.innerHTML = "v";
}