const temp = document.getElementById("temp").innerHTML;
const speed = document.getElementById("speed").innerHTML;

if (temp <= 50 && speed >=3) {
    var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

    var windChill = Math.round(windChill);
    document.querySelector("#windChill").textcontent = windChill;
}

else {
    document.querySelector("#windChill").textContent = "NA"
}