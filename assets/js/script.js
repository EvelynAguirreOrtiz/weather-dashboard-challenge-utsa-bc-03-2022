// 7 day forecast w alerts
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// load local weather
// show local weather conditions, temperature, humidity, wind speed, UV index
// favorable, moderate, or severe
$("#current-day") 
$("current-date")
$("#current-city")
$("#icon-today")
$("#current-temp")
$("#current-humidity")
$("#current-wind")
$("#current-uv")

// 5-day forecast that displays the date, an icon representation of weather conditions, temperature, wind speed,  humidity
$("day")
$("date")
$("icon")
$("temp")
$("humidity")
$("wind")


// search a different city
// click "search" to choose city
// search saved to local storage
// 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// save search history to local storage
$(document).ready(function () {
	$(".search-text").val(localStorage.getItem("search-text"));
});
// search for city
$("#search-btn").click(function(){
  	localStorage.setItem(".search-text", $(".search-text").value);

    console.log("click")
});



// click pre-selected city
// save city to local storage

// click Atlanta
$("#atlanta").click(function(){
  console.log("atl")
});

// click Boston
$("#boston").click(function(){
  console.log("click")
});

// click Chicago
$("#chicago").click(function(){
  console.log("click")
});

// Click Dallas
$(".dallas").click(function(){
  console.log("click")
});

// Search Houston
$("#houston").click(function(){
  console.log("click")
});

// search Washington, DC
$("#washington-dc").click(function(){
  console.log("click")
});






// click on a city in the search history
// THEN I am again presented with current and future conditions for that city