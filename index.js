/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertInput = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")
const lengthRes = document.getElementById("length-res")
const volumeRes = document.getElementById("volume-res")
const massRes = document.getElementById("mass-res")


convertBtn.addEventListener("click", function() {
    if (convertInput.value) {
        let unit = Number(convertInput.value)
        lengthRes.textContent = `${unit} meters = ${metersToFeet(unit)} feet | ${unit} feet = ${feetToMeters(unit)} meters`
        volumeRes.textContent = `${unit} liters = ${litersToGallons(unit)} gallons | ${unit} gallons = ${gallonsToLiters(unit)} liters`
        massRes.textContent = `${unit} kilos = ${kilosToPounds(unit)} pounds | ${unit} pounds = ${poundsToKilos(unit)} kilos`
    } else {
        alert("Please fill the unit number!")
    }
})

function metersToFeet(length) {
        return (length * 3.281).toFixed(3)   
}

function feetToMeters(length) {
    return (length / 3.281).toFixed(3)
}


function litersToGallons(volume) {
    return (volume * 0.264).toFixed(3)
}
function gallonsToLiters(volume) {
    return (volume / 0.264).toFixed(3)
}

function kilosToPounds(mass) {
    return (mass * 2.204).toFixed(3)
}

function poundsToKilos(mass) {
    return (mass / 2.204).toFixed(3)
}