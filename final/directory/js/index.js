document.querySelector('#theyear').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified; 

const requestURL = '../vernallocal.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let contactInfo = document.createElement('p');
        let website = document.createElement('p');
        let logo = document.createElement('img');        


       for (let i = 0; i < businesses.length; i++) {
           const element = businesses[i];
          console.log(element);
          let card = document.createElement('section');
          let businessName = document.createElement('h2');
          let contactInfo = document.createElement('p');
          let website = document.createElement('p');
          let logo = document.createElement('img'); 
        businessName.innerHTML = businesses[i].businessName;
        contactInfo.textContent = 'Phone Number: ' + businesses[i].contactInfo;
        website.textContent = 'Website: ' +businesses[i].website;
        logo.setAttribute('src', 'images/' +businesses[i].logo);
        logo.setAttribute('alt', businesses[i].businessName+' logo');
        logo.setAttribute('class', 'picture');
       
        card.appendChild(businessName);
        card.appendChild(contactInfo);
        card.appendChild(website);
        card.appendChild(logo);
        card.classList.add("businessCard");
        
        document.querySelector('div.cards').append(card);
       }

    });


    function listview() {
        let cards = document.getElementsByClassName("businessCard");
                cards.forEach(classList.remove("grid"));
                cards.forEach(classList.add("list"));


    }

    
    function gridview() {
        let cards = document.getElementsByClassName("businessCard");
        cards.forEach(classList.remove("list"));
        cards.forEach(classList.add("grid"));


    };