var requestURL = 'http://api.wunderground.com/api/4e2a1fd4930c6a3a/forecast/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload=function(){
    var franklinWheather = JSON.parse(request.responseText);
    
   }