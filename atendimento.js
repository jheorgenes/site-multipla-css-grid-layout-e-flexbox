var button_navbar = document.querySelector("#navbar_toggle");
var navBar = document.querySelector("#menubar_expansive");
var containerHeader = document.querySelector("#container__header");
var containerImagemMain = document.querySelector("#container_imagem");

button_navbar.addEventListener("click", (e) => {
    if (navBar.style.display == "" || navBar.style.display == "none") {
        navBar.style.display = "flex";
        containerHeader.style.height = "536px";
        containerImagemMain.style.marginTop = "538px";
    } else {
        navBar.style.display = "none";
        containerHeader.style.height = "265px";
        containerImagemMain.style.marginTop = "265px";
    }
})