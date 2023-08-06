function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const mob_icons = document.querySelector(".mob-icon");
    menu.classList.toggle("open");
    mob_icons.classList.toggle("open");
}