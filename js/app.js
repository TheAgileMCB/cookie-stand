'use strict';
console.log('ready to rock');
var hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
/////////////////////functions////////////////////////
function randomCust(minCust, maxCust) {
  return Math.floor(Math.random()*(maxCust - minCust + 1) + minCust);
}
// function avgCookie() {
//   for(i = 0; i<opHours; i++) {
//     setCust[i]*avgCustCookies;
//   }
// }


////////////////////object literals//////////////////
var Seattle = {
  minCust : 23,
  maxCust : 65,
  custHour : [],
  avgCustCookies : 6.3,
  avgCookieHour : [],
  setCust : function() {
    for(var i=0;i<hours.length;i++){
      this.custHour[i] = randomCust(this.minCust, this.maxCust);
    }
  },
  setCookieHour : function() {
    for(var i = 0; i < hours.length ;i++){
      this.avgCookieHour[i] = Math.ceil(this.custHour[i] * this.avgCustCookies);
      console.log(this.avgCookieHour);
    }
  }
};


var Tokyo = {
  minCust : 3,
  maxCust : 24,
  customers : 0,
  avgCustCookies : 1.2,
  setCust : function() {
    this.customers = randomCust(this.minCust, this.maxCust);
  }
};

var Dubai = {
  minCust : 11,
  maxCust : 38,
  customers : 0,
  avgCustCookies : 3.7,
  setCust : function() {
    this.customers = randomCust(this.minCust, this.maxCust);
  }
};

var Paris = {
  minCust : 20,
  maxCust : 38,
  customers : 0,
  avgCustCookies : 2.3,
  setCust : function() {
    this.customers = randomCust(this.minCust, this.maxCust);
  }
};

var Lima = {
  minCust : 2,
  maxCust : 16,
  customers : 0,
  avgCustCookies : 4.6,
  setCust : function() {
    this.customers = randomCust(this.minCust, this.maxCust);
  }
};
Seattle.setCust();
// Tokyo.setCust();
// Dubai.setCust();
// Paris.setCust();
// Lima.setCust();
Seattle.setCookieHour();
// Tokyo.setCookieHour();
// Dubai.setCookieHour();
// Paris.setCookieHour();
// Lima.setCookieHour();



////////////////HTML Rendering///////////////////
var salmonBody = document.getElementById('sales-main');

// Create article
var article = document.createElement('article');
console.log(article);
salmonBody.appendChild(article);

// // Create h2
var h2 = document.createElement('h2');
h2.textContent = 'Cookie Sales';
article.appendChild(h2);

// // create <p>
var salmonParagraph = document.createElement('p');
salmonParagraph.textContent = 'Salmon cookies sales';
article.appendChild(salmonParagraph);

// // create a <ul>
var salmonUl = document.createElement('ul');
article.appendChild(salmonUl);

for (var i = 0; i <Seattle.custHour.length; i ++) {
  var salmonLi = document.createElement('li');
  salmonLi.textContent = Seattle.custHour[i];
  salmonUl.appendChild(salmonLi);
}

var salmonParagraph2 = document.createElement('p');
salmonParagraph2.textContent = 'Salmon cookies sales';
article.appendChild(salmonParagraph2);

var salmonUl2 = document.createElement('ul');
article.appendChild(salmonUl2);

for (var j = 0; j < hours.length; j ++) {
  var salmonLi2 = document.createElement('li');
  salmonLi2.textContent = Seattle.avgCookieHour[j];
  salmonUl2.appendChild(salmonLi2);
}
