const baseURL = 'https://raeland.github.io/wdd230/';
const linksURL = 'https://raeland.github.io/wdd230/data/links.json';

const learningActivities = document.querySelector('.card-list');

async function getActivityList() {
    const response = await fetch(linksURL);
    if(response.ok) {
        const data = await response.json();
        //console.log(data);
        buildLearningCard(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildLearningCard(weekLinks){
        const displayLinks = (weeks) => {
            weeks.forEach((week) => {
                let card = document.querySelector('div');
                let h4 = document.createElement('h4');
                let week = document.createElement('p');

                h4.innerHTML = `${weekLinks.week}`;
                week.innerHTML = `${week.week}: `;

                card.append(h2);
                card.appendChild(week);
                cards.appendChild(card);
            });

                card.appendChild(learningActivities);

                weeks.forEach((week) => {
                    let weekElement = document.createElement('p');
                    weekElement.innerHTML = `${week.week}: `;        
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
    };
}
    getActivityList();