const myBtn = document.querySelector('#darkBtn');
const body = document.body;

myBtn.addEventListener('click', () => {
    myBtn.classList.toggle('dark');
    body.classList.toggle('dark-mode')

})