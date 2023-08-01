const apiKey = "1187745dc4c8f6d63eb5a9f03b42ad4e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".textSearch input");
const searchBtn = document.querySelector(".textSearch button");
const WeatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (respone.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await respone.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main == "Clouds") {
            WeatherIcon.src = "Images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            WeatherIcon.src = "Images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            WeatherIcon.src = "Images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "Images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            WeatherIcon.src = "Images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})