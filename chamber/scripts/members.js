const baseURL = 'https://raeland.github.io/wdd230/';
const membersURL = 'https://raeland.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
}
  
getMembers();

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let businessName = document.createElement('h2');
    let address = document.createElement('p')
    let phone = document.createElement('p')
    let website = document.createElement('a')
    let membership = document.createElement('p')

    logo.setAttribute('src', member.image)
    logo.setAttribute('alt', `company logo`)
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');
    logo.setAttribute('height', '440');

    businessName.textContent = `${member.name}`;
    address.textContent = `${member.address}<br>${member.city}`;
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;
    website.setAttribute('href', member.website);
    membership.textContent = `Membership Level:\xa0\xa0\xa0\xa0\xa0${member.membership}`;
    
    website.setAttribute('target', '_blank');
    website.setAttribute('href', member.website);
    address.setAttribute('class', 'address');
    logo.setAttribute('src', member.imageurl);
    logo.setAttribute('alt', `Logo for ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '200');
    logo.setAttribute('height', '200');

    card.appendChild(logo);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    return card;
})
}