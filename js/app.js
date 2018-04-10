'use strict';
/*
Pat's Salmon Cookies, soon with franchises all over town, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

- The minimum number of customers per hour.
- The maximum number of customers per hour.
- The average number of cookies purchased per customer.
*/

// create a function to return a random int between the provided min and max
function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// crete object literals for each of the stores
// var stores = [
//   firstAndPike,
//   seaTac,
//   seattleCenter,
//   capitolHill,
//   alki
// ];

var storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

// store #1 - 1st and Pike.
var firstAndPike = {
  // 1. store the min/max hourly customers, and the average cookies per customer in the object properties
  storeId: 'firstAndPike',
  hourlyCustomersMin: 23,
  hourlyCustomersMax: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

  // 2. use a method of that object to generate a random number of customers per hour
  randCustomerQuantity: function () {
    return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
  },

  // 3. calculate and store the simulated amounts of cookies purchase and the random number of customers generated
  estimateCustomers: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var customers = this.randCustomerQuantity();
      this.customersEachHour.push(customers);
    }
    return this.customersEachHour;
  },

  // 4. store the results for each location in a separate array, perhaps as a property of the object representing that location
  estimateCookies: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var cookies = this.customersEachHour[i] * this.averageCookiesPerCustomer;
      cookies = Math.round(cookies);
      this.cookiesEachHour.push(cookies);
    }
    return this.cookiesEachHour;
  },

  estimateTotalCookies: function () {
    this.totalCookies = 0;
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      this.totalCookies += this.cookiesEachHour[i];
    }
    return this.totalCookies;
  },

  estimateAll: function () {
    this.estimateCustomers();
    this.estimateCookies();
    this.estimateTotalCookies();
  },

  // 5. display the values of each array as unordered lists in the browswer
  renderHourlyEstimates: function () {
    var ulEL = document.getElementById(this.storeId);
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
      ulEL.appendChild(liEL);
    }
  },

  // 6. calculating the sum of these hourly totals; your ourput for each location shoud look like this:
  renderTotalEstimate: function () {
    var ulEL = document.getElementById(this.storeId);
    var liEL = document.createElement('li');
    liEL.textContent = 'Total: ' + this.totalCookies;
    ulEL.appendChild(liEL);

  },

  renderAllEstimates: function () {
    this.estimateAll();
    this.renderHourlyEstimates();
    this.renderTotalEstimate();
  }

};

firstAndPike.renderAllEstimates();

// store #2 - SeaTac Airport


// store #3 - Seattle Center


// store #4 - Capitol Hill


// store #5 - Alki



// 1. store the min/max hourly customers, and the average cookies per customer in the object properties

// 2. use a method of that object to generate a random number of customers per hour

// 3. calculate and store the simulated amounts of cookies purchase and the random number of customers generated

// 4. store the results for each location in a separate array, perhaps as a property of the object representing that location

// 5. display the values of each array as unordered lists in the browswer

// 6. calculating the sum of these hourly totals; your ourput for each location shoud look like this:
/*
    1st and Pike
    - 6am: 16 cookies
    - 7am: 20 cookies
    - 8am: 35 cookies
    - 9am: 48 cookies
    - 10am: 56 cookies
    - 11am: 77 cookies
    - 12pm: 93 cookies
    - 1pm: 144 cookies
    - 2pm: 119 cookies
    - 3pm: 84 cookies
    - 4pm: 61 cookies
    - 5pm: 23 cookies
    - 6pm: 42 cookies
    - 7pm: 57 cookies
    - 8pm: 29 cookies
    - Total: 657 cookies

starting numbers to build these objects:

Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
----------------|------------|------------|-------------------
1st and Pike    |      23    |     65     |        6.3
SeaTac Airport  |      3     |     24     |        1.2
Seattle Center  |      11    |     38     |        3.7
Capitol Hill    |      20    |     38     |        2.3
Alki            |      2     |     16     |        4.6

*/

//