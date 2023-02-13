
let openBtn = document.getElementById('open');
let closeBtn = document.getElementById('close');
let mainNav = document.getElementById('main-nav');

openBtn.addEventListener('click', function () {
    mainNav.classList.add('active');
    closeBtn.classList.remove('hide');
    openBtn.classList.add('hide');
    if (mainNav && 'active') {
        closeBtn.addEventListener('click', function () {
            mainNav.classList.remove('active');
            closeBtn.classList.add('hide');
            openBtn.classList.remove('hide');
        })
        mainNav.addEventListener('click', function () {
            mainNav.classList.remove('active');
            closeBtn.classList.add('hide');
            openBtn.classList.remove('hide');
        })
    }
})






// to change header color on scroll
let headEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headEl.classList.add('head-scroll');
    } else {
        headEl.classList.remove('head-scroll')
    }
})



