const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('nav ul');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})
