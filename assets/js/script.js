// 7 day forecast w alerts
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f


// load local weather
// show local weather conditions, temperature, humidity, wind speed, UV index
// favorable, moderate, or severe
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
var futureTemp = document.querySelector(".temp");
var futureHumidity = document.querySelector(".humidity");
var futureWind = document.querySelector(".wind");


// search a different city
// click "search" to choose city
// search saved to local storage
// 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// save city search history to local storage
$(document).ready(function () {
  $("#city").val(localStorage.getItem("city"));
});
// click button to get weather
$("#search-btn").click(function () {

  // link to weather info

  localStorage.setItem("city", document.getElementById("city").value);
});


// click pre-selected city
// save city to local storage

// search Atlanta
$("#atlanta").click(function () {

  console.log("atl")
});

// search Boston
$("#boston").click(function () {
  console.log("boston")
});

// search Chicago

// var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + 33.44 + "&lon=" + -94.04 + "&exclude=minutely,hourly&appid=3a0cc64f74febe3d2b029f4d03b00c0f";

var apiUrlChi ="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly&appid=3a0cc64f74febe3d2b029f4d03b00c0f"
var getWeather = function() {
  fetch(apiUrlChi).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

$("#chicago").click(function () {
  getWeather();
  console.log("chi")
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