const toggleButton = document.getElementsByClassName('navbar__hamburger')[0]
const navbarMenu = document.getElementsByClassName('navbar__menu')[0]

toggleButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('menu-open')
});