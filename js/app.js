'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',];

var stores = [];

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Store = function(storeName, storeId, hourlyCustomersMin, hourlyCustomersMax, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.storeId = storeId;
  this.hourlyCustomersMin = hourlyCustomersMin;
  this.hourlyCustomersMax = hourlyCustomersMax;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = 0;
  stores.push(this);
  this.estimateAll();
};

Store.prototype.randCustomerQuantity = function() {
  return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
};

Store.prototype.estimateCustomers = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var customers = this.randCustomerQuantity();
    this.customersEachHour.push(customers);
  }
  return this.customersEachHour;
};

Store.prototype.estimateCookies = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var cookies = this.customersEachHour[i] * this.avgCookiesPerCustomer
  ;
    cookies = Math.round(cookies);
    this.cookiesEachHour.push(cookies);
  }
  return this.cookiesEachHour;
};

Store.prototype.estimateTotalCookies = function() {
  this.totalCookies = 0;
  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalCookies += this.cookiesEachHour[i];
  }
  return this.totalCookies;
};

Store.prototype.estimateAll = function() {
  this.estimateCustomers();
  this.estimateCookies();
  this.estimateTotalCookies();
},

Store.prototype.renderHourlyEstimates = function() {
  var ulEL = document.getElementById(this.storeId);
  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    var liEL = document.createElement('li');
    liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
    ulEL.appendChild(liEL);
  }
};

Store.prototype.renderTotalEstimate = function() {
  var ulEL = document.getElementById(this.storeId);
  var liEL = document.createElement('li');
  liEL.textContent = 'Total: ' + this.totalCookies;
  ulEL.appendChild(liEL);
};

Store.prototype.renderAllEstimates = function() {
  this.renderHourlyEstimates();
  this.renderTotalEstimate();
};

var firstAndPike = new Store('1st and Pike', 'firstAndPike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 'seaTac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 'seattleCenter', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3);
var alki = new Store('Alki', 'alki', 2, 16, 4.6);

Store.renderAllEstimates = function () {
  for (var i in stores) {
    stores[i].renderAllEstimates();
  }
};

Store.renderAllEstimates();