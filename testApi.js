


function getWeatherByCityName() {
    var cityName = document.getElementById("search-txt").value;
    var call = new XMLHttpRequest();
    call.onreadystatechange = function(){
      if(call.status == 200 && call.readyState == 4){
        jsonParser(call.responseText);
      }
    };
  call.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid=cb88d35e0e5f9a1dfd9f371c5ce2d9a7', true);
  call.send();
  
}


function jsonParser(data) {
  var jsonData = JSON.parse(data);
  console.log(jsonData);
  var container = document.getElementById("container");
  var wheatherContainer = document.getElementById("dataWeather");
  //container.innerHTML = '<div id="coord">'+ jsonData['coord'] + '</div>';    
  container.innerHTML = ' <iframe src = "https://maps.google.com/maps?q='+jsonData['coord']['lat']+','+jsonData['coord']['lon']+'&hl=es;z=14&amp;output=embed"></iframe>';
//JSON.stringify transforme un objet javascript en texte json et le stock dans une chaine
//JSON.parse transforme une chaine de texte json en objet js
//wheatherContainer.innerHTML = '<div id="coord">'+ JSON.stringify(jsonData['main']) + '</div>';

  wheatherContainer.innerHTML = '<div id="coord">'+ jsonData['main']['temp'] + '</div>';
  
  for (let i = 0; i < jsonData.length; i++) {
    var wheatherW = jsonData['weather']['i'];
    wheatherContainer.innerHTML = '<div id="coord">'+ wheatherW + '</div>';
  }
}
