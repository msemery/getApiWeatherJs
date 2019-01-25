

function getWeatherByCityName() {
  var cityName = document.getElementById("search-txt").value;
  var call = new XMLHttpRequest();
  call.onreadystatechange = function () {
    if (call.status == 200 && call.readyState == 4) {
      jsonParser(call.responseText);
    }
  };
  call.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=cb88d35e0e5f9a1dfd9f371c5ce2d9a7', true);
  call.send();

}


function jsonParser(data) {
  var jsonData = JSON.parse(data);
  console.log(jsonData);
  var container = document.getElementById("container");


  container.innerHTML = '<div id="coord">' + jsonData['coord'] + '</div>';
  container.innerHTML = ' <iframe src = "https://maps.google.com/maps?q=' + jsonData['coord']['lat'] + ',' + jsonData['coord']['lon'] + '&hl=es;z=14&amp;output=embed"></iframe>';


}

