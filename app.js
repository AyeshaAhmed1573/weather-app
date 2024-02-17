const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const image = document.getElementById('main'); // Assuming 'main' is the ID of the image element

const searchbtn = document.querySelector('button');
const searchinp = document.getElementById('input');

function checkweather(city) {
    // Assume 'data' is already defined and contains weather data
    
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = Math.round(data.main.humidity) + "%";
    wind.innerHTML = Math.round(data.wind.speed) + "Km/h";

    if (data.weather[0].main == "Clear") {
        image.setAttribute('src', "https://cdn-icons-png.flaticon.com/512/3222/3222691.png");
    } else if (data.weather[0].main == "Mist") {
        image.setAttribute('src', "mist.png");
    } else if (data.weather[0].main == "Clouds") {
        image.setAttribute('src', "scatteredclouds.png");
    } else if (data.weather[0].main == "Drizzle") {
        image.setAttribute('src', "rain.png");
    } else if (data.weather[0].main == "Rain") {
        image.setAttribute('src', "showerrain.png");
    } else if (data.weather[0].main == "Snow") {
        image.setAttribute('src', "snow.png");
    }

    document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchinp.value);
});
