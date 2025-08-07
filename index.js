const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".cityInput");
const card = document . querySelector(".card-content");
const cityDisplay = document.querySelector(".cityDisplay");
const descDisplay = document.querySelector(".descDisplay");
const weatherEmoji = document.querySelector(".weatherEmoji");
const tempDisplay = document.querySelector(".tempDisplay"); 
const humidityDisplay = document.querySelector(".humiditydisplay"); 
const cloudy = document.getElementById("cloudy");
const sunnny = document.getElementById("sunnny");
const winter = document.getElementById("winter");
const rainny = document.getElementById("rainny");
const apiKey = "c334699d67487efa86e141b4f7a29e97";

weatherForm.addEventListener("submit" , async event =>{
    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try{
            const getWeatherdata = await getWeatherData(city);
            displayWeatherInfo (getWeatherdata);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error ("could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data){

    const { name: city ,
         main :{temp , humidity} 
         ,weather : [{description , id}]} = data;

    cityDisplay.textContent= city;
    tempDisplay.textContent=`${Math.round(temp-273.15)}°C`;
    humidityDisplay.textContent= `humidity ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent= getweatherEmoji(id);

    hideAllImg();
    showWeatherImage(id);

    card.style.display = "flex";
}
function hideAllImg(){
    sunnny.style.display= "none";
    winter.style.display= "none";
    rainny.style.display= "none";
    cloudy.style.display= "none";
}
function showWeatherImage(weatherid){
    
}

function getweatherEmoji(weatherid){

    switch(true){
        case (weatherid >= 200 && weatherid < 300):
            return "⛈";
        case (weatherid >= 300 && weatherid < 400):
            return "🌧";
        case (weatherid >= 500 && weatherid < 600):
            return "🌨";
        case (weatherid >= 600 && weatherid < 700):
            return "❄";
        case (weatherid >= 700 && weatherid < 800):
            return "🌫";
        case (weatherid === 800):
            return "☀";
        case (weatherid >= 801 && weatherid < 810):
            return "☁";
        default :
            return "?";
    }
}
function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent= message;
    errorDisplay.classList.add("errorDisplay");

    const existingError = document.querySelector(".errorDisplay");
    if(existingError) {
        existingError.remove();
    }

    const cardContent = document.querySelector(".card-content");
    
    cardContent.appendChild(errorDisplay);
}