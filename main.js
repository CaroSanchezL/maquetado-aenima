const menuBttn = document.getElementById("menu-button");
const hamburgerIcon = document.getElementById("hamburguer-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

const toggleMenu = () => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    menu.classList.toggle("hidden");
}

const closeMenu = () => {
    if (hamburgerIcon.classList.contains("hidden")) {
    closeIcon.classList.add("hidden");
    menu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden")
    }
}

menuBttn.addEventListener("click", toggleMenu);
menu.addEventListener("click", closeMenu)
