const baseURL = 'https://raeland.github.io/wdd230/';
const linksURL = 'https://raeland.github.io/wdd230/data/links.json';

const learningActivities = document.querySelector('.card-box');

async function getLinks() {
    const response = await fetch(linksURL);
    //if(response.ok) {
        const data = await response.json();
        //console.log(data);
        displayLinks(data);
    //} else {
      //  throw Error(response.statusText);
    //}
}

getLinks();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(){
    const displayLinks = (weeks) => {
        weeks.forEach((week) => {
            let card = document.querySelector('div');
            let myweek = document.createElement('h4');
            let title = document.createElement('p');
            let url = document.createElement('a');

            myweek.innerHTML = `${weeks.week}`;
            title.innerHTML = `${links.title}: `;
            url.innerHTML = `${linksURL}${links.url}`;

            const seperator = document.createTextNode(` | `);
            weekElement.appendChild(seperator);

            card.append(h4);
            card.appendChild(p);
            card.appendChild(a);

            cards.append(div);
        });
    }
};

getActivityList();