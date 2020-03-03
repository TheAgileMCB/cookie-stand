'use strict';
console.log('ready to rock');

/////////////////////Global Variables//////////////////////
var hours = ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var stores = [Seattle, Tokyo, Dubai, Paris, Lima];
/////////////////////Constructor////////////////////////
function Store(minCustomers, maxCustomers, unitsPerCustomer) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.unitsPerCustomer = unitsPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
}

////////////////////Functions///////////////////////////


Store.prototype.getCustomers = function() {
  for(let i = 0; i < hours.length; i ++) {
    this.customersPerHour[i] = Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};

Store.prototype.getCookies = function() {
  for(let i = 0; i < hours.length; i ++) {
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.unitsPerCustomer);
  }
};

//////////////////////New Stores///////////////////////////
var Seattle = new Store(23, 65, 6.3);
var Tokyo = new Store(3, 24, 1.2);
var Dubai = new Store(11, 38, 3.7);
var Paris = new Store(20, 38, 2.3);
var Lima = new Store(2, 16, 4.6);

Seattle.getCustomers();
Seattle.getCookies();
console.log(Seattle.customersPerHour);
console.log(Seattle.cookiesPerHour);
Tokyo.getCustomers();
Tokyo.getCookies();
console.log(Tokyo.customersPerHour);
console.log(Tokyo.cookiesPerHour);
Dubai.getCustomers();
Dubai.getCookies();
console.log(Dubai.customersPerHour);
console.log(Dubai.cookiesPerHour);
Paris.getCustomers();
Paris.getCookies();
console.log(Paris.customersPerHour);
console.log(Paris.cookiesPerHour);
Lima.getCustomers();
Lima.getCookies();
console.log(Lima.customersPerHour);
console.log(Lima.cookiesPerHour);

///////////////////////Render////////////////////////////////
var storeTable = document.getElementById('sales-table');
var headRow = document.createElement('tr');
for ( let i = 0; i < hours.length; i++ ) {
  var hourHead = document.createElement('th');
  hourHead.setAttribute('scope', 'col');
  hourHead.textContent = hours[i];
  headRow.appendChild(hourHead);
  storeTable.appendChild(headRow);
}

Store.prototype.render = function() {
  



  
};

for( let i = 0; i < stores.length; i++ ) {
  stores[i].render();
}
