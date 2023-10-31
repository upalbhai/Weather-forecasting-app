let inp = document.querySelector("input");
let btn = document.querySelector("button");
let temp = document.querySelector("h1");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let city = document.querySelector(".city");
let weatherIcon = document.querySelector(".weather-icon");
btn.addEventListener("click", async () => {
  let weather = await getWeather();
  temp.innerText = weather.data.main.temp;
  humidity.innerText = weather.data.main.humidity;
  city.innerText = weather.data.name;
  wind.innerText = weather.data.wind.speed;
  //   console.log(weather.data.weather[0]);
  //   console.log(weather.weather.main);
  //   if (weather.weather[0].main == "Clouds") {
  //     weatherIcon.src = "";
  //   }
  if (weather.data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weather.data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weather.data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weather.data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weather.data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  //   console.log(weather.data.main.temp);
  //   console.log(weather.data.main.humidity);
  //   console.log(weather);
  inp.value = "";
});
async function getWeather() {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=
      ${inp.value}&appid=3e6e0745728bb1588d17dd47df823687&units=metric`;
    let res = await axios.get(url);
    return res;
  } catch (error) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    console.log("Error:", error);
    return error;
  }
}
