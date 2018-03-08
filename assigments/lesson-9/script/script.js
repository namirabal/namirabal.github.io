var weatherObject= new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/4e2a1fd4930c6a3a/conditions/q/ID/Rexburg.json',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo =JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
     document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;    
}//en of onload