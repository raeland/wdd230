const baseURL = "https://raeland.github.io/wdd230/";
const linksURL = "https://raeland.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
  getLinks();