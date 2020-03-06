'use strict';
console.log('ready to rock');

/////////////////////Constructor////////////////////////
function Store(storeName, minCustomers, maxCustomers, unitsPerCustomer) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.unitsPerCustomer = unitsPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  // Store.allStore.push(this);
}

//////////////////////New Stores/////////////////////////////
var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);

/////////////////////Global Variables/////////////////////////
var hours = ['6:00am','7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var stores = [Seattle, Tokyo, Dubai, Paris, Lima];
// var allStore = [];

////////////////////Prototype Functions////////////////////////
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

//////////////////////////Function Calls/////////////////////////
Seattle.getCustomers();
Seattle.getCookies();
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

///////////////////////Render////////////////////////////////
var salesTable = document.getElementById('sales-table');
var headRow = document.createElement('tr');
var headRowBlank = document.createElement('th');
headRowBlank.textContent = '';
headRow.appendChild(headRowBlank);

for ( let i = 0; i < hours.length; i++ ) {
  var hourHead = document.createElement('th');
  hourHead.textContent = hours[i];
  headRow.appendChild(hourHead);
  salesTable.appendChild(headRow);
}

var totalHead = document.createElement('th');
totalHead.textContent = 'Daily Location Totals';
headRow.appendChild(totalHead);

Store.prototype.render = function() {
  // var oldTotal = document.getElementById('removeTotal');
  // if (oldTotal) {
  //   oldTotal.parentNode.removeChild(oldTotal);
  // }
  var storeRow = document.createElement('tr');
  var storeCell = document.createElement('td');
  storeCell.textContent = this.storeName;
  storeRow.appendChild(storeCell);
  for ( let i = 0; i < hours.length; i++ ) {
    var salesCell = document.createElement('td');
    salesCell.textContent = this.cookiesPerHour[i];
    storeRow.appendChild(salesCell);
  }

  var totalCell = document.createElement('td');
  var total = this.cookiesPerHour.reduce( function(a, b){
    return a + b;
  });

  this.cookiesPerHour.push(total);
  totalCell.textContent = total;

  storeRow.appendChild(totalCell);
  salesTable.appendChild(storeRow);

};

for( let i = 0; i < stores.length; i++ ) {
  stores[i].render();
}

function totalFoot() {
  var footRow = document.createElement('tr');
  footRow.setAttribute('id', 'removeTotal');
  var totalFoot = document.createElement('th');
  totalFoot.setAttribute('scope', 'row');
  totalFoot.textContent = 'Totals';
  footRow.appendChild(totalFoot);

  for ( let i = 0; i < hours.length + 1; i++ ) {
    var storeFoot = document.createElement('td');
    var hourlyTotal = 0;
    for ( let j = 0; j < stores.length; j++ ) {
      hourlyTotal += stores[j].cookiesPerHour[i];
    }
    storeFoot.textContent = hourlyTotal;
    footRow.appendChild(storeFoot);
    salesTable.appendChild(footRow);
  }
}

totalFoot();
////////////////////Photobook////////////////////////
function photobook(imgs) {
  var expandImg =
  document.getElementById('expandedImg');
  var imgText =
  document.getElementById('imgtext');

  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display
  = 'block';
}

///////////////////////Form/////////////////////////
function handleFormSubmission(event){
  event.preventDefault();

  var storeInput = document.getElementById('storeName');
  var storeValue = storeInput.value;
  var minInput = document.getElementById('minCustomers');
  var minValue = minInput.value;
  var maxInput = document.getElementById('maxCustomers');
  var maxValue = maxInput.value;
  var avgCookieInput = document.getElementById('unitsPerCustomer');
  var avgCookieValue = avgCookieInput.value;

  var newStore = new Store(storeValue, minValue, maxValue, avgCookieValue);
  stores.push('newStore');
  console.log(stores);

  newStore.getCustomers();
  newStore.getCookies();
  newStore.render();
}

var formElement = document.getElementById('new-store');

formElement.addEventListener('submit', handleFormSubmission);
