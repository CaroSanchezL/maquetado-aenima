const menuBttn = document.getElementById("menu-button");
const hamburgerIcon = document.getElementById("hamburguer-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

const toggleMenu = () => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    menu.ariaExpanded = "true";
    menuBttn.ariaLabel = "cerrar menu"
}

const closeMenu = () => {
    if (hamburgerIcon.classList.contains("hidden")) {
    closeIcon.classList.add("hidden");
    menu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    menu.ariaExpanded = "false"
    menuBttn.ariaLabel = "abrir menu"
    }
}

menuBttn.addEventListener("click", toggleMenu);
menu.addEventListener("click", closeMenu);

const cards = document.getElementsByClassName("tendencias-card");
const cardsTitle = document.getElementsByClassName("tendencias-card-title");
const cardsImg = document.getElementsByClassName("tendencias-img");
const cardsDescription = document.getElementsByClassName("tendencias-card-text")

const fetchCardsInfo = async(url) => {
   try {
        const response = await fetch(url)
        const data = await response.json()
        return data 
   }
   catch(error) {console.log(error)}
}

const updateCardImg = (information) => {
    let counter = 0
    for (let cardImg of cardsImg) {
        cardImg.src = information[counter].image
        counter++
    }
}

const updateCardTitle = (information) => {
    let counter = 0
    for (let cardTitle of cardsTitle) {
        cardTitle.innerHTML = information[counter].title
        counter++
    }
}

const updateCardDescription = (information) => {
    let counter = 0
    for (let cardDescription of cardsDescription) {
        cardDescription.innerHTML = information[counter].description
        counter++
    }
}

const getTodayDate = () => {
    const date = new Date()
    return `${date.getDate()}-${(date.getMonth()+1)}-${date.getFullYear()}`
}

const displayNewSign = (information) => {
    const today = getTodayDate()
    let counter = 0
    for (let card of cards) {
        if (today === information[counter].date) {
            const newSign = document.createElement('div')
            newSign.classList.add ('tendencias-new')
            newSign.innerHTML = '<span class="tendencias-new-text">NUEVO</span>'
            card.appendChild(newSign)
        }
        counter++
    }
}

const updateCards = (information) => {
    updateCardImg(information)
    updateCardTitle(information)
    updateCardDescription(information)
    displayNewSign(information)
}

window.onload = fetchCardsInfo('./api').then(data => updateCards(data))