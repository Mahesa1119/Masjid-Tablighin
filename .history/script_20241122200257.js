const menuToggle = document.getElementById("mobile-menu");
const menuList = document.getElementById("menu-list");

menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
