const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
let lastModif = new Date(document.lastModified);
lastModified = `Last Modification:  ${lastModif}`;
document.querySelector("#lastModified").textContent = lastModified;


const form = document.querySelector('form');
form.addEventListener('submit', function () {
    const currentTimestamp = new Date().toISOString();
    document.getElementById('timestamp').value = currentTimestamp;
});
localStorage.setItem('lastVisit', new Date().toISOString());
