// current weather
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial


// geocode
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial

// load current weather
var inputCity = document.getElementById("search-city")
var dayOfWeek = document.getElementById("current-day");
var dateToday = document.getElementById("current-date");
var city = document.getElementById("current-city");
var icon = document.getElementById("icon-today");
var tempNow = document.getElementById("current-temp");
var humidityNow = document.getElementById("current-humidity");
var windNow = document.getElementById("current-wind");
var uvNow = document.getElementById("current-uv");

// 'https://api.openweathermap.org/data/2.5/weather?q=' + inputText.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'

// 5-day forecast that displays the date, an icon representation of weather conditions, temperature, wind speed,  humidity
var futureDay = document.querySelector(".day");
var futureDate = document.querySelector(".date");
var futureIcon = document.querySelector(".icon");
var futureTemp = document.querySelector("temp");
var futureHumidity = document.querySelector(".humidity");
var futureWind = document.querySelector(".wind");

// weather data

$(document).ready(function () {
  $("#search-city").val(localStorage.getItem("search-city"));
});
  $("#search-btn").click(function () {
    var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getWeather = function () {
      fetch(apiUrlCity).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
        });
      });
    };
    getWeather();
  localStorage.setItem("search-city", document.getElementById("search-city").value);
});




// click pre-selected city
// save city to local storage

// var cityData =
// { "city" : "Atlanta";
//   "latitude" : 33.749;
//   "longitude" : -84.388
// }, 
// { "city" : "Boston";
//   "latitude" : 42.3584;
//   "longitude" : -71.0598
// },
// { "city" : "Chicago",
//   "latitude" : 41.85,
//   "longitude" : -87.65
// }
// { "city" : "Dallas",
//   "latitude" : 32.7668,
//   "longitude" : -96.7836
// },
// { "city" : "Houston",
//   "latitude" : 29.7633,
//   "longitude": -95.3633
// },
// { "city" : "Washington, D.C.",
//   "latitude" : 47.5001,
//   "longitude" : -120.5015
// };


// search Atlanta

$("#atlanta").click(function () {
  inputCity.value = "Atlanta";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
  getWeather();
});

// search Boston
$("#boston").click(function () {
  inputCity.value = "Boston";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
  getWeather();
});

// search Chicago
// var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + 33.44 + "&lon=" + -94.04 + "&exclude=minutely,hourly&appid=3a0cc64f74febe3d2b029f4d03b00c0f";

// var apiUrlChi = 'https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
// var getWeather = function () {
//   fetch(apiUrlChi).then(function (response) {
//     response.json().then(function (data) {


//       console.log(data);
//     });
//   });
// };

$("#chicago").click(function () {
  inputCity.value = "Chicago";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
  getWeather();
});



// search Dallas
$(".dallas").click(function () {
  inputCity.value = "Dallas";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
getWeather();
});

// Search Houston
$("#houston").click(function () {
  inputCity.value = "Houston";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
getWeather();
});

// search Washington, DC
$("#washington-dc").click(function () {
  inputCity.value = "Washington, D.C.";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCity.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
getWeather();
});


// click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// n icon representation of weather conditions, the temperature, the wind speed, and the humidity
// for (var i = 0; i < 5; i++) {
  
  // var date = list[i].dt;
  // var temp = list[i].main.temp;
  // var icon = list[i].main.weather.icon;
  // var humidity = list[i].main.humidity;
// };