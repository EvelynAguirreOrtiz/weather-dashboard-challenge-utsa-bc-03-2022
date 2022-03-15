// 7 day forecast w alerts
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f




// load local weather
var dayOfWeek = document.getElementById("current-day");
var dateToday = document.getElementById("current-date");
var city = document.getElementById("current-city");
var icon = document.getElementById("icon-today");
var tempNow = document.getElementById("current-temp");
var humidityNow = document.getElementById("current-humidity");
var windNow = document.getElementById("current-wind");
var uvNow = document.getElementById("current-uv");

// 5-day forecast that displays the date, an icon representation of weather conditions, temperature, wind speed,  humidity
var futureDay = document.querySelector(".day");
var futureDate = document.querySelector(".date");
var futureIcon = document.querySelector(".icon");
var futureTemp = document.querySelector("temp");
var futureHumidity = document.querySelector(".humidity");
var futureWind = document.querySelector(".wind");

// weather data
var weatherData



'http://api.openweathermap.org/data/2.5/forecast?q=' + inputText.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f'



$(document).ready(function () {
  $("#city").val(localStorage.getItem("city"));
});
// click button to get weather
$("#search-btn").click(function () {

  // search for data

  // save city search history to local storage
  localStorage.setItem("city", document.getElementById("city").value);
});


// click pre-selected city
// save city to local storage

var cityData =
{ "city" : "Atlanta";
  "latitude" : 33.749;
  "longitude" : -84.388
}, 
{ "city" : "Boston";
  "latitude" : 42.3584;
  "longitude" : -71.0598
},
{ "city" : "Chicago",
  "latitude" : 41.85,
  "longitude" : -87.65
}
{ "city" : "Dallas",
  "latitude" : 32.7668,
  "longitude" : -96.7836
},
{ "city" : "Houston",
  "latitude" : 29.7633,
  "longitude": -95.3633
},
{ "city" : "Washington, D.C.",
  "latitude" : 47.5001,
  "longitude" : -120.5015
};


// search Atlanta
$("#atlanta").click(function () {
  getWeather();
});

// search Boston
$("#boston").click(function () {
  console.log("boston")
});

// search Chicago
// var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + 33.44 + "&lon=" + -94.04 + "&exclude=minutely,hourly&appid=3a0cc64f74febe3d2b029f4d03b00c0f";

var apiUrlChi = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly&appid=3a0cc64f74febe3d2b029f4d03b00c0f"
var getWeather = function () {
  fetch(apiUrlChi).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

$("#chicago").click(function () {
  getWeather();
});



// search Dallas
$(".dallas").click(function () {
  console.log("dal")
});

// Search Houston
$("#houston").click(function () {
  console.log("hou")
});

// search Washington, DC
$("#washington-dc").click(function () {
  console.log("DC")
});


// click on a city in the search history
// THEN I am again presented with current and future conditions for that city