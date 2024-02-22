const taglist1 = document.querySelector('.taglist1');
const taglist2 = document.querySelector('.taglist2');
const taglist3 = document.querySelector('.taglist3');
const visible1 = document.querySelector('.tag1-visible');
const visible2 = document.querySelector('.tag2-visible');
const visible3 = document.querySelector('.tag3-visible');
const Arrow1 = document.getElementById('Arrow1');
const Arrow2 = document.getElementById('Arrow2');
const Arrow3 = document.getElementById('Arrow3');


visible1.addEventListener('click', function () {
    Arrow1.classList.toggle('rotate180');
    taglist1.classList.toggle('open');
});

visible2.addEventListener('click', function () {
    Arrow2.classList.toggle('rotate180');
    taglist2.classList.toggle('open');
});

visible3.addEventListener('click', function () {
    Arrow3.classList.toggle('rotate180');
    taglist3.classList.toggle('open');
});

