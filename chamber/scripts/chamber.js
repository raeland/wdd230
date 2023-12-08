const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toDateString();

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('lastVisit')) {
        const lastVisitDate = new Date(localStorage.getItem('lastVisit'));
        const timeDifference = new Date() - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            document.getElementById('days').innerText = "Back so soon! Awesome!";
        } else {
            const message = (daysDifference === 1) ? "day" : "days";
            document.getElementById('days').innerText = `You last visited ${daysDifference} ${message} ago.`;
        }
    } else {
        document.getElementById('days').innerText = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', new Date().toISOString());
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
