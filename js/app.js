'use strict';
console.log('ready to rock');

var Seattle = {
  minCust : 23,
  maxCust : 65,
  customers : 0,
  avgCustCookies : 6.3,
  setCust : function() {
    this.customers = randomCust(this.minCust, this.maxCust);
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

function randomCust(minCust, maxCust) {
  return Math.floor(Math.random()*(maxCust-minCust+1)+minCust);
}

Seattle.setCust();
Tokyo.setCust();
Dubai.setCust();
Paris.setCust();
Lima.setCust();

console.log(Seattle.customers);
console.log(Tokyo.customers);
console.log(Dubai.customers);
console.log(Paris.customers);
console.log(Lima.customers);
