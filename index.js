/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById("btn");
button.addEventListener("click", convert);
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
let value = ""

function convert() {
    value = document.getElementById("unit").value
    if (value == "") {
        alert("Please Enter Number to Convert")
    } else {
        console.log(value)
        modify()
        return value
    }
}

function modify() {
    let resultFeet = value * 3.281;
    let resultMeters = value / 3.281;
    length.innerHTML = `${value} meters = ${resultFeet.toFixed(2)} feet | ${value} feet = ${parseFloat(resultMeters).toFixed(2)} meters`;
    
    let resultGallon = value * 0.264;
    let resultLiter = value / 0.264;
    volume.innerHTML = `${value} meters = ${resultGallon.toFixed(2)} | ${value} feet = ${resultLiter.toFixed(2)}`;
    
    let resultPound= value * 2.204;
    let resultKilogram = value / 2.204;
    mass.innerHTML = `${value} kilogram = 65.616 ${resultGallon.toFixed(2)} | ${value} pound = ${resultKilogram.toFixed(2)}`;
}