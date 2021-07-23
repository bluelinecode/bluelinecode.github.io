fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let img = document.createElement('img');        


        h2.innerHTML = towns[6].name;
        h3.innerHTML = towns[6].motto;
        year.textContent = 'Year Founded: ' + towns[6].yearFounded;
        population.textContent = 'Population: ' +towns[6].currentPopulation;
        rain.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;
        img.setAttribute('src', 'images/' +towns[6].photo);
        img.setAttribute('alt', 'Preston');
        img.setAttribute('class', 'picture');

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rain);
        card.appendChild(img);

        document.querySelector('div.cards').append(card);
    });