const wind = document.getElementById("wind");

// Humidity Section
const humidity = document.getElementById("humidity");
const humidityPressure = document.getElementById("humidityPressure");

// Weather Section
const weatherIcon = document.getElementById("weatherIcon");
const temprature = document.getElementById("mainTemp");
const weatherDescr = document.getElementById("weatherDescr");
const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");
const feelsLike = document.getElementById("feelsLike");
const highTemp = document.getElementById("highTemp");
const lowTemp = document.getElementById("lowTemp");
const sunRise = document.getElementById("sunRise");
const sunSet = document.getElementById("sunSet");

// Wind Section
const windSpeed = document.getElementById("windSpeed");
const windDeg = document.getElementById("windDeg");

document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the value from the input field
    const city = document.getElementById("inpCity").value;

    // // Log or use the value in your logic
    // console.log(city);
    cityName.innerText = city.charAt(0).toUpperCase() + city.slice(1);

    getWeather(city);
  });

async function getWeather(city) {
  try {
    const geoResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=APiKey`
    );

    if (!geoResponse.ok) {
      console.log("Network response was not ok");
    }

    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      console.log("No data found for the specified city.");
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=APiKey`
    );

    if (!weatherResponse.ok) {
      console.log("Network response was not ok for the second API");
    }

    cityWeather = await weatherResponse.json();
    console.log(cityWeather);

    let wIcon = cityWeather.weather[0].icon;
    let hum = cityWeather.main.humidity;
    let pres = cityWeather.main.pressure;
    let temp = (cityWeather.main.temp - 273.15).toFixed(2);
    let wDescr = cityWeather.weather[0].main;
    let countName = cityWeather.sys.country;
    let fLike = (cityWeather.main.feels_like - 273.15).toFixed(2);
    let min = (cityWeather.main.temp_min - 273.15).toFixed(2);
    let max = (cityWeather.main.temp_max - 273.15).toFixed(2);
    let sRise = new Date(cityWeather.sys.sunrise * 1000).toLocaleTimeString(
      [],
      { hour: "2-digit", minute: "2-digit", hour12: true }
    );
    let sSet = new Date(cityWeather.sys.sunset * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    let wSpeed = cityWeather.wind.speed;
    let wDeg = cityWeather.wind.deg;

    weatherIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
    humidity.innerText = hum;
    humidityPressure.innerText = pres;
    temprature.innerText = temp;
    weatherDescr.innerText = wDescr;
    countryName.innerText = countName;
    feelsLike.innerText = fLike;
    highTemp.innerText = max;
    lowTemp.innerText = min;
    sunRise.innerText = sRise;
    sunSet.innerText = sSet;
    windSpeed.innerText = wSpeed;
    windDeg.innerText = wDeg;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Compare Cities

const cities = [
  "lahore",
  "islamabad",
  "karachi",
  "multan",
  "gujrat",
  "gujranwala",
];

async function getCompareWeather(citiesArr) {
  for (let i = 0; i < citiesArr.length; i++) {
    CompareCitiesWeather(citiesArr[i]);
  }
  // CompareCitiesWeather(citiesArr[0]);
}

getCompareWeather(cities);

// Lahore
const lhrWIcon = document.getElementById("lhrWeatherIcon");
const lhrTemp = document.getElementById("lhrTemp");
const lhrhumi = document.getElementById("lhrHumi");
const lhrwind = document.getElementById("lhrWind");
const lhrDes = document.getElementById("lhrDes");

// Islamabad
const islWIcon = document.getElementById("islWeatherIcon");
const islTemp = document.getElementById("islTemp");
const islhumi = document.getElementById("islHumi");
const islwind = document.getElementById("islWind");
const islDes = document.getElementById("islDes");

// Karachi
const karWIcon = document.getElementById("karWeatherIcon");
const karTemp = document.getElementById("karTemp");
const karhumi = document.getElementById("karHumi");
const karwind = document.getElementById("karWind");
const karDes = document.getElementById("karDes");

// Multan
const mulWIcon = document.getElementById("mulWeatherIcon");
const mulTemp = document.getElementById("mulTemp");
const mulhumi = document.getElementById("mulHumi");
const mulwind = document.getElementById("mulWind");
const mulDes = document.getElementById("mulDes");

// Gujrat
const gujWIcon = document.getElementById("gujWeatherIcon");
const gujTemp = document.getElementById("gujTemp");
const gujhumi = document.getElementById("gujHumi");
const gujwind = document.getElementById("gujWind");
const gujDes = document.getElementById("gujDes");

// Gujranwala
const grwWIcon = document.getElementById("grwWeatherIcon");
const grwTemp = document.getElementById("grwTemp");
const grwhumi = document.getElementById("grwHumi");
const grwwind = document.getElementById("grwWind");
const grwDes = document.getElementById("grwDes");

async function CompareCitiesWeather(city) {
  try {
    const geoResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=APiKey`
    );

    if (!geoResponse.ok) {
      console.log("Network response was not ok");
    }

    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      console.log("No data found for the specified city.");
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=APiKey`
    );

    if (!weatherResponse.ok) {
      console.log("Network response was not ok for the second API");
    }

    cityWeather = await weatherResponse.json();
    // console.log(cityWeather);

    let wIcon = cityWeather.weather[0].icon;
    let hum = cityWeather.main.humidity;
    let temp = (cityWeather.main.temp - 273.15).toFixed(2);
    let wDescr = cityWeather.weather[0].main;
    let wSpeed = cityWeather.wind.speed;

    if (city === "lahore") {
      lhrWIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
      lhrTemp.innerText = temp;
      lhrhumi.innerText = hum;
      lhrwind.innerText = wSpeed;
      lhrDes.innerText = wDescr;
    } else if (city === "islamabad") {
      islWIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
      islTemp.innerText = temp;
      islhumi.innerText = hum;
      islwind.innerText = wSpeed;
      islDes.innerText = wDescr;
    } else if (city === "karachi") {
      karWIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
      karTemp.innerText = temp;
      karhumi.innerText = hum;
      karwind.innerText = wSpeed;
      karDes.innerText = wDescr;
    } else if (city === "multan") {
      mulWIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
      mulTemp.innerText = temp;
      mulhumi.innerText = hum;
      mulwind.innerText = wSpeed;
      mulDes.innerText = wDescr;
    } else if (city === "gujrat") {
      gujWIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
      gujTemp.innerText = temp;
      gujhumi.innerText = hum;
      gujwind.innerText = wSpeed;
      gujDes.innerText = wDescr;
    } else if (city === "gujranwala") {
      grwWIcon.src = `http://openweathermap.org/img/wn/${wIcon}@2x.png`;
      grwTemp.innerText = temp;
      grwhumi.innerText = hum;
      grwwind.innerText = wSpeed;
      grwDes.innerText = wDescr;
    } else {
      console.log("Wrong City Entered");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
