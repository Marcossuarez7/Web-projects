let openNav = document.getElementById("open-nav");
let closeNav = document.getElementById("close-nav");
function showNavBar() {
  let navBar = document.getElementById("nav-bar");
  navBar.classList.toggle("show");
}
openNav.addEventListener("click", showNavBar);
closeNav.addEventListener("click", showNavBar);
