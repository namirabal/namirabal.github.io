 var header = document.querySelector('header');
        var section = document.querySelector('section');

        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';/*to store the URL of the JSON we want to retrieve in a variable*/
        var request = new XMLHttpRequest();/*To create a request*/
        request.open('GET', requestURL);/*to open a new request using the open() method*/

        request.responseType = 'json'; /*here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object.*/
        request.send(); /*Then we send the request with the send() method*/

        request.onload = function() {
        var townData = request.response;
        populateHeader(townData);
        showtown(townData);
        }/*this section involves waiting for the response to return from the server, then dealing with it.*/

       function populateHeader(jsonObj) {/* jsonObj, to remind ourselves that this JavaScript object originated from JSON.*/

       function showTowns(jsonObj) {
       var towns = jsonObj['towns'];

       for (var i = 0; i < towns.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = towns[i].name;
        myPara1.textContent = 'Name: ' + towns[i].name;
        myPara2.textContent = 'Motto: ' + towns[i].motto;
        myPara3.textContent = 'Year Founded:' + towns[i].yearFounded;
        myPara2.textContent = 'Current Population: ' + towns[i].currentPopulation;
        myPara2.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;

         var superPowers = towns[i].events;
         for (var j = 0; j < tonwEvents.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = tonwEvents[j];
          myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
      }
    }