$(function() {

  var location = "http://ip-api.com/json";
  $.getJSON(location, function(data) {
    var lat = data.lat;
    var lon = data.lon;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5f7bcf238dc7056a7325948af9cb61be", function(data) {
      $(".cityName").html(data.name);
      var temp = Math.round(((data.main.temp) * (9 / 5) - 459.567));
      $(".temp").html(temp + "°F");

      var icon = data.weather[0].description;
      $(".weatherdes").html(icon + "");
    })
  })
});