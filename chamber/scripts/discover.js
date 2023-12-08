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