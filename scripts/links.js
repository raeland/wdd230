const baseURL = 'https://raeland.github.io/wdd230/';
const linksURL = 'https://raeland.github.io/wdd230/data/links.json';

const learningActivities = document.querySelector('.cardlist');

async function getActivityList() {
    const response = await fetch(linksURL);
    if(response.ok) {
        const data = await response.json();
        //console.log(data);
        buildLearningCard();
    } else {
        throw Error(response.statusText);
    }
}

function buildLearningCard(weekLinks){
    console.log(weekLinks);
}
    getActivityList();
/*
    //console.log(activitiesData);
    displayWeeks(data.weeks);
};
getLinks();
//const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let card = document.querySelector('.cardlist');
        let title = document.createElement('h3');
        let learningActivities = document.createElement('div');
        title.textContent = 'Learning Activities';
        card.appendChild(title);
        card.appendChild(learningActivities);
        weeks.forEach((week) => {
            let weekElement = document.createElement('p');
            weekElement.textContent = `${weel.week}: `;        
            week.links.forEach((link) => {
                const linkElement = document.createElement('a');
                linkElement.textContent = link.title;
                linkElement.href = `${baseURL}${link.url}`;

                weekElement.appendChild(linkElement);

                const seperator = document.createTextNode(` | `);
                weekElement.appendChild(seperator);
            })
        })

        learningActivities.appendChild(weekElement);

        weekElement.removeChild(weekElement.lastChild);
    });
}*/