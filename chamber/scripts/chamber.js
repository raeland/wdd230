document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('lastVisit')) {
        const lastVisitDate = new Date(localStorage.getItem('lastVisit'));
        const timeDifference = new Date() - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            document.getElementById('days').innerText = `${days}`;
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


function showBenefit(level) {
    const collapsibleContent = document.getElementById(`${level}-content`);
    const maxHeight = collapsibleContent.style.maxHeight;

    if (!maxHeight || maxHeight === "0px") {
        collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
    } else {
        collapsibleContent.style.maxHeight = "0";
    }
};
