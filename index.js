const weatherForm = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const card = document . querySelector("card-content");
const cityDisplay = document.querySelector(".cityDisplay");
const descDisplay = document.querySelector(".descDisplay");
const weatherEmoji = document.querySelector(".weatherEmoji");
const apiKey = c334699d67487efa86e141b4f7a29e97;

weatherForm.addEventListener("sumit" , event =>{
    event.preventDefault();

    const city = cityInput.value;
    if(city){

    }
    else{
        displayError("please enter a city");
    }
});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getweatherEmoji(weatherid){

}
function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent= message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent ="";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}