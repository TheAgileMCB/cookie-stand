'use strict';
console.log('ready to rock');
var hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
/////////////////////functions////////////////////////
function randomCust(minCust, maxCust) {
  return Math.floor(Math.random()*(maxCust - minCust + 1) + minCust);
}




////////////////////object literals//////////////////
var Seattle = {
  minCust : 23,
  maxCust : 65,
  avgCustCookies : 6.3,
  custHour : [],
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
  custHour : [],
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

var Dubai = {
  minCust : 11,
  maxCust : 38,
  customers : 0,
  avgCustCookies : 3.7,
  custHour : [],
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

var Paris = {
  minCust : 20,
  maxCust : 38,
  customers : 0,
  avgCustCookies : 2.3,
  custHour : [],
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

var Lima = {
  minCust : 2,
  maxCust : 16,
  customers : 0,
  avgCustCookies : 4.6,
  custHour : [],
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
Seattle.setCust();
Tokyo.setCust();
Dubai.setCust();
Paris.setCust();
Lima.setCust();
Seattle.setCookieHour();
Tokyo.setCookieHour();
Dubai.setCookieHour();
Paris.setCookieHour();
Lima.setCookieHour();



////////////////HTML Rendering///////////////////
var salmonMain = document.getElementById('sales-main');

var h2 = document.createElement('h2');
h2.textContent = 'Cookie Sales';
salmonMain.appendChild(h2);


////////////////////Seattle///////////////////////
var section1 = document.createElement('section');
salmonMain.appendChild(section1);

var salmonParagraph3 = document.createElement('p');
salmonParagraph3.textContent = 'Hour';
section1.appendChild(salmonParagraph3);

var salmonUl3 = document.createElement('ul');
section1.appendChild(salmonUl3);

for (var k = 0; k < hours.length; k ++) {
  var salmonLi3 = document.createElement('li');
  salmonLi3.textContent = hours[k];
  salmonUl3.appendChild(salmonLi3);
}

var section2 = document.createElement('section');
salmonMain.appendChild(section2);

var salmonParagraph = document.createElement('p');
salmonParagraph.textContent = 'Guests';
section2.appendChild(salmonParagraph);


var salmonUl = document.createElement('ul');
section2.appendChild(salmonUl);

for (var i = 0; i <Seattle.custHour.length; i ++) {
  var salmonLi = document.createElement('li');
  salmonLi.textContent = Seattle.custHour[i];
  salmonUl.appendChild(salmonLi);
}

var section3 = document.createElement('section');
salmonMain.appendChild(section3);

var salmonParagraph2 = document.createElement('p');
salmonParagraph2.textContent = 'Cookies Sold';
section3.appendChild(salmonParagraph2);

var salmonUl2 = document.createElement('ul');
section3.appendChild(salmonUl2);

for (var j = 0; j <= hours.length; j ++) {
  var salmonLi2 = document.createElement('li');
  salmonLi2.textContent = Seattle.avgCookieHour[j];
  salmonUl2.appendChild(salmonLi2);
}

/////////////////Tokyo////////////////////////////
var section4 = document.createElement('section');
salmonMain.appendChild(section4);

var salmonParagraph3 = document.createElement('p');
salmonParagraph3.textContent = 'Hour';
section4.appendChild(salmonParagraph3);

var salmonUl3 = document.createElement('ul');
section4.appendChild(salmonUl3);

for (var l = 0; l < hours.length; l ++) {
  var salmonLi3 = document.createElement('li');
  salmonLi3.textContent = hours[l];
  salmonUl3.appendChild(salmonLi3);
}

var section5 = document.createElement('section');
salmonMain.appendChild(section5);

var salmonParagraph = document.createElement('p');
salmonParagraph.textContent = 'Guests';
section5.appendChild(salmonParagraph);


var salmonUl = document.createElement('ul');
section5.appendChild(salmonUl);

for (var m = 0; m <Tokyo.custHour.length; m ++) {
  var salmonLi = document.createElement('li');
  salmonLi.textContent = Tokyo.custHour[m];
  salmonUl.appendChild(salmonLi);
}

var section6 = document.createElement('section');
salmonMain.appendChild(section6);

var salmonParagraph2 = document.createElement('p');
salmonParagraph2.textContent = 'Cookies Sold';
section6.appendChild(salmonParagraph2);

var salmonUl2 = document.createElement('ul');
section6.appendChild(salmonUl2);

for (var n = 0; n <= hours.length; n ++) {
  var salmonLi2 = document.createElement('li');
  salmonLi2.textContent = Tokyo.avgCookieHour[n];
  salmonUl2.appendChild(salmonLi2);


/////////////////Dubai/////////////////////////////
var section7 = document.createElement('section');
salmonMain.appendChild(section7);

var salmonParagraph3 = document.createElement('p');
salmonParagraph3.textContent = 'Hour';
section7.appendChild(salmonParagraph3);

var salmonUl3 = document.createElement('ul');
section7.appendChild(salmonUl3);

for (var o = 0; o < hours.length; o ++) {
  var salmonLi3 = document.createElement('li');
  salmonLi3.textContent = hours[o];
  salmonUl3.appendChild(salmonLi3);
}

var section8 = document.createElement('section');
salmonMain.appendChild(section8);

var salmonParagraph = document.createElement('p');
salmonParagraph.textContent = 'Guests';
section8.appendChild(salmonParagraph);


var salmonUl = document.createElement('ul');
section8.appendChild(salmonUl);

for (var p = 0; p <Dubai.custHour.length; p ++) {
  var salmonLi = document.createElement('li');
  salmonLi.textContent = Dubai.custHour[p];
  salmonUl.appendChild(salmonLi);
}

var section9 = document.createElement('section');
salmonMain.appendChild(section9);

var salmonParagraph2 = document.createElement('p');
salmonParagraph2.textContent = 'Cookies Sold';
section9.appendChild(salmonParagraph2);

var salmonUl2 = document.createElement('ul');
section9.appendChild(salmonUl2);

for (var q = 0; q <= hours.length; q ++) {
  var salmonLi2 = document.createElement('li');
  salmonLi2.textContent = Dubai.avgCookieHour[q];
  salmonUl2.appendChild(salmonLi2);


///////////////////Paris/////////////////////////
var section10 = document.createElement('section');
salmonMain.appendChild(section10);

var salmonParagraph3 = document.createElement('p');
salmonParagraph3.textContent = 'Hour';
section10.appendChild(salmonParagraph3);

var salmonUl3 = document.createElement('ul');
section10.appendChild(salmonUl3);

for (var r = 0; r < hours.length; r ++) {
  var salmonLi3 = document.createElement('li');
  salmonLi3.textContent = hours[r];
  salmonUl3.appendChild(salmonLi3);
}

var section11 = document.createElement('section');
salmonMain.appendChild(section11);

var salmonParagraph = document.createElement('p');
salmonParagraph.textContent = 'Guests';
section11.appendChild(salmonParagraph);


var salmonUl = document.createElement('ul');
section11.appendChild(salmonUl);

for (var s = 0; s <Paris.custHour.length; s ++) {
  var salmonLi = document.createElement('li');
  salmonLi.textContent = Paris.custHour[s];
  salmonUl.appendChild(salmonLi);
}

var section12 = document.createElement('section');
salmonMain.appendChild(section12);

var salmonParagraph2 = document.createElement('p');
salmonParagraph2.textContent = 'Cookies Sold';
section12.appendChild(salmonParagraph2);

var salmonUl2 = document.createElement('ul');
section12.appendChild(salmonUl2);

for (var t = 0; t <= hours.length; t ++) {
  var salmonLi2 = document.createElement('li');
  salmonLi2.textContent = Paris.avgCookieHour[t];
  salmonUl2.appendChild(salmonLi2);


///////////////////Lima///////////////////////////
var section13 = document.createElement('section');
salmonMain.appendChild(section13);

var salmonParagraph3 = document.createElement('p');
salmonParagraph3.textContent = 'Hour';
section13.appendChild(salmonParagraph3);

var salmonUl3 = document.createElement('ul');
section13.appendChild(salmonUl3);

for (var u = 0; u < hours.length; u ++) {
  var salmonLi3 = document.createElement('li');
  salmonLi3.textContent = hours[u];
  salmonUl3.appendChild(salmonLi3);
}

var section14 = document.createElement('section');
salmonMain.appendChild(section14);

var salmonParagraph = document.createElement('p');
salmonParagraph.textContent = 'Guests';
section14.appendChild(salmonParagraph);


var salmonUl = document.createElement('ul');
section14.appendChild(salmonUl);

for (var v = 0; v <Lima.custHour.length; v ++) {
  var salmonLi = document.createElement('li');
  salmonLi.textContent = Lima.custHour[v];
  salmonUl.appendChild(salmonLi);
}

var section15 = document.createElement('section');
salmonMain.appendChild(section15);

var salmonParagraph2 = document.createElement('p');
salmonParagraph2.textContent = 'Cookies Sold';
section15.appendChild(salmonParagraph2);

var salmonUl2 = document.createElement('ul');
section15.appendChild(salmonUl2);

for (var w = 0; w <= hours.length; w ++) {
  var salmonLi2 = document.createElement('li');
  salmonLi2.textContent = Lima.avgCookieHour[w];
  salmonUl2.appendChild(salmonLi2);
