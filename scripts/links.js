const baseURL = "https://raeland.github.io/wdd230/";
const linksURL = "https://raeland.github.io/wdd230/data/links.json";

const learningActivities = document.querySelector('#learningActivities');

async function getActivityList() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(activitiesData);
    displayWeeks(data.weeks);
};


const displayWeeks = (weeks) => {
    weeks.forEach((week) => {
        const assignment = document.createElement('section');
        assignment.setAttribute('class', 'assignments')

        const weekTitle = document.createElement('h1');

        const weekURL = document.createElement('a');
        weekURL.textContent = '${wee.links[0].url'
        weekURL.setAttribute('href', week.links[0].url);

        weekTitle.appendChild(weekURL);
        assignment.appendChild(weekTitle);

        cards.appendChild(assignment);
    });
};


getActivityList();