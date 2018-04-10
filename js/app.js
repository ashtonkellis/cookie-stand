'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',];

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// store #1 - 1st and Pike.
var firstAndPike = {
  storeId: 'firstAndPike',
  hourlyCustomersMin: 23,
  hourlyCustomersMax: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

  randCustomerQuantity: function () {
    return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
  },

  estimateCustomers: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var customers = this.randCustomerQuantity();
      this.customersEachHour.push(customers);
    }
    return this.customersEachHour;
  },

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

  renderHourlyEstimates: function () {
    var ulEL = document.getElementById(this.storeId);
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
      ulEL.appendChild(liEL);
    }
  },

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
}; // end of store #1 - 1st and pike object

// store #2 - SeaTac Airport
var seaTac = {
  storeId: 'seaTac',
  hourlyCustomersMin: 3,
  hourlyCustomersMax: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

  randCustomerQuantity: function () {
    return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
  },

  estimateCustomers: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var customers = this.randCustomerQuantity();
      this.customersEachHour.push(customers);
    }
    return this.customersEachHour;
  },

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

  renderHourlyEstimates: function () {
    var ulEL = document.getElementById(this.storeId);
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
      ulEL.appendChild(liEL);
    }
  },

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
}; // end of store #2 - seatac airport object

// store #3 - Seattle Center
var seattleCenter = {
  storeId: 'seattleCenter',
  hourlyCustomersMin: 11,
  hourlyCustomersMax: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

  randCustomerQuantity: function () {
    return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
  },

  estimateCustomers: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var customers = this.randCustomerQuantity();
      this.customersEachHour.push(customers);
    }
    return this.customersEachHour;
  },

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

  renderHourlyEstimates: function () {
    var ulEL = document.getElementById(this.storeId);
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
      ulEL.appendChild(liEL);
    }
  },

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
  },
}; // end of store #3 - Seattle Center object


// store #4 - Capitol Hill
var capitolHill = {
  storeId: 'capitolHill',
  hourlyCustomersMin: 20,
  hourlyCustomersMax: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

  randCustomerQuantity: function () {
    return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
  },

  estimateCustomers: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var customers = this.randCustomerQuantity();
      this.customersEachHour.push(customers);
    }
    return this.customersEachHour;
  },

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

  renderHourlyEstimates: function () {
    var ulEL = document.getElementById(this.storeId);
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
      ulEL.appendChild(liEL);
    }
  },

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
}; // end of store 4 - capitol hill object

// store #5 - Alki
var alki = {
  storeId: 'alki',
  hourlyCustomersMin: 2,
  hourlyCustomersMax: 16,
  averageCookiesPerCustomer: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

  randCustomerQuantity: function () {
    return randIntBetween(this.hourlyCustomersMin, this.hourlyCustomersMax);
  },

  estimateCustomers: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var customers = this.randCustomerQuantity();
      this.customersEachHour.push(customers);
    }
    return this.customersEachHour;
  },

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

  renderHourlyEstimates: function () {
    var ulEL = document.getElementById(this.storeId);
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ': ' + this.cookiesEachHour[i];
      ulEL.appendChild(liEL);
    }
  },

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
}; // end of store #5 - alki object



// Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// Alki            |      2     |     16     |        4.6

firstAndPike.renderAllEstimates();
seaTac.renderAllEstimates();
seattleCenter.renderAllEstimates();
capitolHill.renderAllEstimates();
alki.renderAllEstimates();


