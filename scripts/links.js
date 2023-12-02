const baseURL = "https://raeland.github.io/wdd230/";
const linksURL = "https://raeland.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let line = document.createElement('li');
        line.textContent = `Week ${week}:\xa0\xa0\xa0`;

        weeks.week.forEach((links) => {
            let anchor = document.createElement('a');

            anchor.setAttribute('target', '_blank');
            anchor.setAttribute('href', links.url);
            anchor.textContent = links.title;

            line.appendChild(anchor);
            line.insertAdjacentHTML( 'beforeend', " | " );
            
        });
        
        cardList.appendChild(line);
    });
  }