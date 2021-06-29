const temp = document.getElementById("temperature").innerHTML;
const speed = document.getElementById("windspeed").innerHTML;
let windchill = '';

if (temp <= 50 && speed >=3) {
    // var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    windChill = 37.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
    windChill = Math.round(windChill);
    document.querySelector("#windChill").innerHTML = windChill;
}