// current weather
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial
    // 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'


// geocode
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial

// load current weather
var currentWeatherEl = document.getElementById("current-weather")
var inputCityEl = document.getElementById("search-city")
var dayOfWeekEl = document.getElementById("current-day");
var dateTodayEl = document.getElementById("current-date");
var cityEl = document.getElementById("current-city");
var iconEl = document.getElementById("icon-today");
var tempNowEl = document.getElementById("current-temp");
var humidityNowEl = document.getElementById("current-humidity");
var windNowEl = document.getElementById("current-wind");
var uvNowEl = document.getElementById("current-uv");

// 'https://api.openweathermap.org/data/2.5/weather?q=' + inputText.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'

// 5-day forecast that displays the date, an icon representation of weather conditions, temperature, wind speed,  humidity
var dayEl = document.querySelector(".day");
var dateEl = document.querySelector(".date");
var iconEl = document.querySelector(".icon");
var tempEl = document.querySelector("temp");
var humidityEl = document.querySelector(".humidity");
var windEl = document.querySelector(".wind");



$(document).ready(function () {
  $("#search-city").val(localStorage.getItem("search-city"));
});
$("#search-btn").click(function () {
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
 
    //     });
    //   });
    // };
    // getLatLon();
  
    var latEl = data[0].lat;
    var lonEl = data[0].lon;
    var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getWeather = function () {
      fetch(apiUrlCity).then(function (response) {
        response.json().then(function (data) {

          console.log(data);
        });
      });
    };
    getWeather();



});
});
};
getLatLon();


  localStorage.setItem("search-city", document.getElementById("search-city").value);
});




// search Atlanta
$("#atlanta").click(function () {
  inputCityEl = "Atlanta";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
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
  inputCityEl.value = "Boston";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    });
  };
  getWeather();
});

$("#chicago").click(function () {
  inputCityEl.value = "Chicago";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
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
  inputCityEl.value = "Dallas";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
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
  inputCityEl.value = "Houston";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
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
  inputCityEl.value = "Washington, D.C.";
  var apiUrlCity = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputCityEl.value + '&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
  var getWeather = function () {
    fetch(apiUrlCity).then(function (response) {
      response.json().then(function (data) {
        console.log(data);

        
      //  = data['name']
      // = data['list'][0]['main']['temp'];
      //   = data['list'][0]['main']['humidty'];
      // = data['list'][0]['main']['weather']['icon'];
      // var wind = data['list'][0]['win']['speed'];


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