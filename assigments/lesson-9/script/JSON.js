var header = document.querySelector('header');
var section = document.querySelector('section');
    
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';/*to store the URL of the JSON we want to retrieve in a variable*/
    var request = new XMLHttpRequest();/*To create a request*/
    request.open('GET', requestURL);/*to open a new request using the open() method*/
    
    request.responseType = 'json'; /*here we are setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object.*/
    request.send(); /*Then we send the request with the send() method*/
    
    request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}/*this section involves waiting for the response to return from the server, then dealing with it.*/
    
function populateHeader(jsonObj) {/* jsonObj, to remind ourselves that this JavaScript object originated from JSON.*/
  var myH1 = document.createElement('h1');/*Here we first create an <h1> element with createElement()*/
  myH1.textContent = jsonObj['squadName'];/*set its textContent to equal the squadName property of the object*/
  header.appendChild(myH1);/* then append it to the header using appendChild()*/

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
  
  function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];
      
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
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