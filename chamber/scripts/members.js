const baseURL = 'https://raeland.github.io/wdd230/';
const membersURL = 'https://raeland.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembers() {
    try{
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

  
getMembers();

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');

    let businessName = document.createElement('h2');
    let address = document.createElement('p');
    member.address.forEach((info) => {
        address.textContent = `${info.address}, ${info.street}, ${info.city}, ${info.state} ${info.zipcode}`;
    });

    let phone = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement('p');

    let logo = document.createElement('img');
    member.logo.forEach((item) => {
        logo.setAttribute('src', item.img);
        logo.setAttribute('alt', `company logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
    });
    
    businessName.textContent = `${member.name}`;
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;
    website.setAttribute('href', member.website);
    membership.textContent = `Membership Level:\xa0\xa0\xa0\xa0\xa0${member.membership}`;
    
    website.setAttribute('target', '_blank');
    website.setAttribute('href', member.website);
    address.setAttribute('class', 'address');

    card.appendChild(logo);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    return card;
    })
};