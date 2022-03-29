var inputCityEl = document.getElementById("search-city");
var dayOfWeekEl = document.getElementById("current-day");
var dateTodayEl = document.getElementById("current-date");
var cityEl = document.getElementById("current-city");
var iconEl = document.getElementById("icon-today");
var tempNowEl = document.getElementById("current-temp");
var humidityNowEl = document.getElementById("current-humidity");
var windNowEl = document.getElementById("current-wind");
var uvNowEl = document.getElementById("current-uv");
var histBox = document.querySelector(".control");
// create empty array to store search history
var searchHistory = [];

$(document).ready(function () {
  $("#search-city").val(localStorage.getItem("search-city"));
  $("#current-date").val(localStorage.getItem("current-date"));
  $("#current-temp").val(localStorage.getItem("current-temp"));
  $("#icon-today").val(localStorage.getItem("icon-today"));
  $("#current-humidity").val(localStorage.getItem("current-humidity"));
  $("#current-wind").val(localStorage.getItem("current-wind")); 
  $("current-uv").val(localStorage.getItem("current-uv")); 
});
// search city 
$("#search-btn").click(function () {
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    // push city into search history array
    searchHistory.push(inputCityEl.value)
    localStorage.setItem("search-history", JSON.stringify(searchHistory))
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
localStorage.setItem("search-city", document.getElementById("search-city").value);
localStorage.setItem("current-date", document.getElementById("current-date").value);
localStorage.setItem("current-temp", document.getElementById("current-temp").value);
localStorage.setItem("icon-today", document.getElementById("icon-today"));
localStorage.setItem("current-humidity", document.getElementById("current-humidity").value);
localStorage.setItem("current-wind", document.getElementById("current-wind").value); 
localStorage.setItem("current-uv", document.getElementById("current-uv").value); 
});

// write a function to get search history from local storage
function getHistory(){
  var localStorageArr = JSON.parse(localStorage.getItem("search-history"));
  console.log(localStorageArr);
  localStorageArr.forEach(city => {
    searchHistory.push(city);
    var btn = document.createElement("button");
    btn.innerText = city
    btn.classList.add("hist-btn")
    histBox.appendChild(btn)
  })
}
getHistory();
// search Atlanta
$("#atlanta").click(function () {
  inputCityEl.value = "Atlanta";
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
});

// search Boston
$("#boston").click(function () {
  inputCityEl.value = "Boston";
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
});

$("#chicago").click(function () {
  inputCityEl.value = "Chicago";
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
});

// search Dallas
$("#dallas").click(function () {
  inputCityEl.value = "Dallas";
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
});
// Search Houston
$("#houston").click(function () {
  inputCityEl.value = "Houston";
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
});
// search Washington, DC
$("#washington-dc").click(function () { 
  inputCityEl.value = "Washington, D.C.";
    // find city geolocation
    var apiUrlGeoLoc = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputCityEl.value + '&limit=1&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
    var getLatLon = function () {
      fetch(apiUrlGeoLoc).then(function (response) {
        response.json().then(function (data) {
          // find search city conditions
          var latEl = data[0].lat;
          var lonEl = data[0].lon;
          var apiUrlCity = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&exclude=minutely,hourly,&appid=3a0cc64f74febe3d2b029f4d03b00c0f&units=imperial'
          var getWeather = function () {
            fetch(apiUrlCity).then(function (response) {
              response.json().then(function (data) {
              console.log(data);
              // convert to date
              var currentDateEl = new Date(data.current.dt * 1000).toDateString("en", { weekday: "long", });
              document.getElementById("current-date").innerHTML = currentDateEl;
              // get icon src 
              var apiIconCode = data.daily[0].weather[0].icon;
              var apiIconUrl = 'https://openweathermap.org/img/wn/' + apiIconCode + '@2x.png';
              $('#icon').attr('src', apiIconUrl);

              cityEl.innerHTML = inputCityEl.value;
              tempNowEl.innerHTML = data.current.temp;
              uvNowEl.innerHTML = data.daily[0].uvi;
              humidityNowEl.innerHTML = data.daily[0].humidity;
              windNowEl.innerHTML = data.daily[0].wind_speed;
              uvNowEl.innerHTML = data.daily[0].uvi;
              
              var getFutureData = function() {
                for (let i=1; i<=5; i++) { 
                // document.getElementById("date" + i).innerHTML = data.daily[i].dt;
                document.getElementById("humidity" + i).innerHTML = data.daily[i].humidity;
                document.getElementById("wind" + i).innerHTML = data.daily[i].wind_speed;
                document.getElementById("temp" + i).innerHTML = data.daily[i].temp.max;
              
                var apiFutureIconCode = data.daily[i].weather[0].icon;
                var apiFutureIconUrl = 'https://openweathermap.org/img/wn/' + apiFutureIconCode + '@2x.png';
                $('#icon' + i).attr('src', apiFutureIconUrl);

                var futureDateEl = new Date(data.daily[i].dt * 1000).toDateString("en", { weekday: "long", });
                document.getElementById("date" + i).innerHTML = futureDateEl;
                };
              };
              getFutureData();
            });
          });
        };
        getWeather();
      });
    });
  };
getLatLon();
});
