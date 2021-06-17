const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    prophets.forEach (prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        
        let birthplace = document.createElement('birthplace');
        let dob= document.createElement('birthdate');
        let img = document.createElement('img');

        birthplace.innerHTML = `${prophet.birthplace}`;
        dob.innerHTML = `${prophet.birthdate}`;

        h2.innerHTML = `${prophet.name} <span> ${prophet.lastname}</span>`;
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `The official portrait of ${prophet.name} ${prophet.lastname}!`);

        card.appendChild(h2);
        card.append(birthplace);
        card.append(dob);
        card.append(img);

        document.querySelector('div.cards').append(card);
    })
    


        document.querySelector('div.cards').appendChild(card);
    }

  );

