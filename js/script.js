// GIVEN a weather dashboard with form inputs
var baseURL = "https://api.openweathermap.org/data/2.5";
var apiKey = "739f08e9e25ee468eee70e10ee48cc2f";

// DOM Elements
var input = document.querySelector(".input");
var searchBtn = document.querySelector(".search-button");
var cityList = document.querySelector(".city-list");

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

var cityName = localStorage.getItem("cityNameList");

function recordCity() {
  localStorage.setItem("cityNameList", input.value);
}

for (var i = 0; i < localStorage.length; i++) {
  $(".city-list").append(
    "<p>" + localStorage.getItem(localStorage.key(i)) + "</p>"
  );
}

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
