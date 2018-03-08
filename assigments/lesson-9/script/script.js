var weatherObject= new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json',true);

weatherObject.send();

weatherObject.onload = function(){
    var weatherInfo =JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
}//en of onload