const nav = document.getElementById('nav-links')
const burger = document.getElementById('meny')

function toggleMenu() {
    console.log("")
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)

