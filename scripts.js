const menuBtn = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu-list');
const navToggle = document.querySelector('.navToggle');


const toggleShow = () => {
    console.log('click')
    menuList.classList.toggle('show-menu');

}

menuBtn.addEventListener('click', toggleShow);

document.addEventListener('click', (event) => {
    if (!menuList.classList.contains('show-menu')) {
        return;

    } else if (event.target !== menuBtn) {
            menuList.classList.toggle('show-menu');
        }

});