'use strict';

var storeHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

var stores = [];

var salesTableHead = document.getElementById('sales-table-head');
var salesTableBody = document.getElementById('sales-table-body');

// uncomment for stretch goal footer
// var salesTableFoot = document.getElementById('sales-table-foot');

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addTH(elementText) {
  var thEL = document.createElement('th');
  thEL.textContent = elementText;
  return thEL;
}

function addTD(elementText) {
  var tdEL = document.createElement('td');
  tdEL.textContent = elementText;
  return tdEL;
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
};

Store.prototype.renderSalesTableData = function () {
  // create a table row
  var trEL = document.createElement('tr');

  // create first td element (store name) and create/append to tr
  trEL.appendChild(addTD(this.storeName));

  // loop through cookiesEachHour array and create/append a td to tr
  for (var i in this.cookiesEachHour) {
    var sales = this.cookiesEachHour[i];
    trEL.appendChild(addTD(sales));
  }

  // create last td element (totalCookies) and create/append a td to tr
  trEL.appendChild(addTD(this.totalCookies));

  // append table row to table
  salesTableBody.appendChild(trEL);
};

Store.renderSalesTableHeader = function () {
  // create table row
  var trEL = document.createElement('tr');

  // create first th element (blank cell) and append to tr element
  trEL.appendChild(addTH(''));

  // loop through all store locations and append store names to tr
  for (var i in storeHours) {
    trEL.appendChild(addTH(storeHours[i]));
  }

  // create last th element (total's column) and append to tr
  trEL.appendChild(addTH('Daily Location Total'));

  // append table row to table
  salesTableHead.appendChild(trEL);
};

Store.renderSalesTable = function () {
  this.renderSalesTableHeader();
  for (var i in stores) {
    stores[i].renderSalesTableData();
  }
};

new Store('1st and Pike', 'firstAndPike', 23, 65, 6.3);
new Store('SeaTac Airport', 'seaTac', 3, 24, 1.2);
new Store('Seattle Center', 'seattleCenter', 11, 38, 3.7);
new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3);
new Store('Alki', 'alki', 2, 16, 4.6);

Store.renderSalesTable();