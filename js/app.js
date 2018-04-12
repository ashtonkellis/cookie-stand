'use strict';

var storeHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var totalCookiesEachHour = [];
var totalCookiesAllStores = 0;
var staffEachHour = [];

var stores = [];

var salesTableHead = document.getElementById('sales-table-head');
var salesTableBody = document.getElementById('sales-table-body');
var salesTableFoot = document.getElementById('sales-table-foot');

// accepts two integers (min and max) and returns a random value between them (inclusive)
function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// accepts a text string and returns a table header element with that text string
function addTH(elementText) {
  var thEL = document.createElement('th');
  thEL.textContent = elementText;
  return thEL;
}

// accepts a text string and returns a table data element with that text string
function addTD(elementText) {
  var tdEL = document.createElement('td');
  tdEL.textContent = elementText;
  return tdEL;
}

// creates a new instance of the object Store, assigns properties, calculates its estimates, and pushes the new instance into the stores array
var Store = function(storeName, storeId, hourlyCustomersMin, hourlyCustomersMax, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.storeId = storeId;
  this.hourlyCustomersMin = hourlyCustomersMin;
  this.hourlyCustomersMax = hourlyCustomersMax;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = 0;
  this.estimateCustomers();
  this.estimateCookies();
  this.estimateTotalCookies();
  this.updateTotalCookies();
  this.renderSalesTableData();
  Store.renderSalesTableFooter();
  stores.push(this);
};

// returns a random number of customers between the hourCustomersMin and hourCustomersMax property
Store.prototype.randCustomerQuantity = function() {
  return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
};

// fills the customersEachHour array with estimates of customers for each hour
Store.prototype.estimateCustomers = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var customers = this.randCustomerQuantity();
    this.customersEachHour.push(customers);
  }
};

// fills the cookies EachHour array with estimates of cookies sold for each hour
Store.prototype.estimateCookies = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var cookies = this.customersEachHour[i] * this.avgCookiesPerCustomer
  ;
    cookies = Math.round(cookies);
    this.cookiesEachHour.push(cookies);
  }
};

// updates the totalCookies property to get the value of the sum of the cookiesEachHour array
Store.prototype.estimateTotalCookies = function() {
  this.totalCookies = 0;
  for (var i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalCookies += this.cookiesEachHour[i];
  }
};

// update the totalCookiesEachHour array with the values from the cookiesEachHour array, and updates totalCookiesAllStores
Store.prototype.updateTotalCookies = function () {
  for (var i in this.cookiesEachHour) {
    // populates the array if it is empty
    if (isNaN(totalCookiesEachHour[i])) {
      totalCookiesEachHour[i] = this.cookiesEachHour[i];
    } else { // increments the array if it already has values
      totalCookiesEachHour[i] += this.cookiesEachHour[i];
    }
    totalCookiesAllStores += this.cookiesEachHour[i];
  }
};

// renders the sales table data row
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

// renders the sales table header
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

// render table totals row (bottom row)
Store.renderSalesTableFooter = function () {
  //clear previous table footer
  while (salesTableFoot.hasChildNodes()) {
    salesTableFoot.removeChild(salesTableFoot.lastChild);
  }
  // create table row
  var trEL = document.createElement('tr');

  // append first cell
  trEL.appendChild(addTH('Total:'));

  // loop through all elements in totalCookiesEachHour array and append a new td to the tr
  for (var i in totalCookiesEachHour) {
    trEL.appendChild(addTH(totalCookiesEachHour[i]));
  }

  // append last cell with the total cookies sold for all stores
  trEL.appendChild(addTH(totalCookiesAllStores));

  // append tr to the sales table
  salesTableFoot.appendChild(trEL);
};

// event handler for form submission: creates a new store and resets the form
function handleFormSubmit(e) {
  e.preventDefault();
  new Store(
    e.target.storeName.value,
    e.target.storeId.value,
    e.target.minCustomers.value,
    e.target.maxCustomers.value,
    e.target.avgCookies.value
  );
  e.target.reset();
}

// adds an event listener to the new-store form
var newStoreForm = document.getElementById('new-store-form');
newStoreForm.addEventListener('submit', handleFormSubmit);

// render sales table header
Store.renderSalesTableHeader();

// create known store objects
new Store('1st and Pike', 'firstAndPike', 23, 65, 6.3);
new Store('SeaTac Airport', 'seaTac', 3, 24, 1.2);
new Store('Seattle Center', 'seattleCenter', 11, 38, 3.7);
new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3);
new Store('Alki', 'alki', 2, 16, 4.6);