const wfURL = 'http://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&appid={c982ec73360c04a9960088f0e75fa842}';

fetch(wfURL)
 .then((response) => response.json())
 .then((jsObject) => {
   console.log(jsObject);
//    const days = document.querySelector('#dow');
//    days.textContent = jsObject.main.temp_max;


//    "weather"; [
//     {
//         "id": '#dow',
//         "main": jsObject.main.temp_max,
//         "description": "",
//         "icon": jsObject.weather[1],
//     }
// ]
//    let text = "";
//    let i = 0;

//     while (i < 5) {
//     text += "Day " + {days} + i;
//     i++;
//     }
// document.getElementById("dow").innerHTML = text;




 });
