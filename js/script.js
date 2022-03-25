const nav = document.getElementById('nav-links')
const burger = document.getElementById('meny')

function toggleMenu() {
    console.log("HEJ")
    nav.classList.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);