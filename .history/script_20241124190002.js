const menuIcon = document.getElementById("hamburger");
const menuList = document.querySelector(".nav-list");
menuIcon.addEventListener("click", () => {
        menuList.classList.toggle("active");
    });

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

