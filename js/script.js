'use strict';
console.log('ready to rock');

/////////////////////Global Variables//////////////////////
var hours = ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

/////////////////////Constructor////////////////////////
function Store(storeName, minCustomers, maxCustomers, unitsPerCustomer) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.unitsPerCustomer = unitsPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  // this.totalCookies = this.getTotal();
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

// Store.prototype.getTotal = function(){
//   return (this.cookiesPerHour.reduce((a, b) => a+b));
// };

//////////////////////New Stores///////////////////////////
var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

Seattle.getCustomers();
Seattle.getCookies();
Seattle.getTotal();
console.log(Seattle.customersPerHour);
console.log(Seattle.cookiesPerHour);
console.log(Seattle.totalCookies);
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

var stores = [Seattle, Tokyo, Dubai, Paris, Lima];

///////////////////////Render////////////////////////////////
var salesTable = document.getElementById('sales-table');
var headRow = document.createElement('tr');
var headRowBlank = document.createElement('th');
headRowBlank.setAttribute('scope', 'row');
headRowBlank.textContent = '';
headRow.appendChild(headRowBlank);
for ( let i = 0; i < hours.length; i++ ) {
  var hourHead = document.createElement('th');
  hourHead.setAttribute('scope', 'col');
  hourHead.textContent = hours[i];
  headRow.appendChild(hourHead);
  salesTable.appendChild(headRow);
}

Store.prototype.render = function() {
  var storeRow = document.createElement('tr');
  var storeCell = document.createElement('td');
  storeCell.textContent = this.storeName;
  storeRow.appendChild(storeCell);
  for ( let i = 0; i < hours.length; i++ ) {
    var salesCell = document.createElement('td');
    salesCell.textContent = this.cookiesPerHour[i];
    storeRow.appendChild(salesCell);
  }
  salesTable.appendChild(storeRow);
};

// for ( let i = 0; i < hours.length; i++ ) {
//   var totalFoot = document.createElement('th');
//   totalFoot.textContent = ;
//   footRow.appendChild(totalFoot);
//   storeTable.appendChild(footRow);
// }

for( let i = 0; i < stores.length; i++ ) {
  stores[i].render();
}
