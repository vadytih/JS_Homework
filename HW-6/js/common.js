var icon = document.querySelector('.js-icon');
var box = document.querySelector('.js-box');

icon.addEventListener('click', function () {
    icon.classList.toggle('activ');
    box.classList.toggle('activ');
})


