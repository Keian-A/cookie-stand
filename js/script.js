'use strict';

//Array for hours of operation
const hoursOfOperation = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];

//Constructor function to create location objects
function Location(name, minCustomer, maxCustomer, avgCookiePerCustomer) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.numOfCustomers = function () {
    let numOfCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + minCustomer;
    return numOfCustomers;
  }
}

//Creates the locatons using the construction function
const seattleLocation = new Location(`Seattle`, 23, 65, 6.3);
const tokyoLocation = new Location(`Tokyo`, 3, 24, 1.2);
const dubaiLocation = new Location(`Dubai`, 11, 38, 3.7);
const parisLocation = new Location(`Paris`, 20, 38, 2.3);
const limaLocation = new Location(`Lima`, 2, 16, 4.6);

//Array for all objects
const locationList = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

//function to generate a sales array for each location object
function generateSalesArray(currentLocation) {
  currentLocation.grandTotal = 0;
  currentLocation.hourlySalesArray = [];
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let customers = currentLocation.numOfCustomers();
    let cookiesSold = Math.floor(customers * currentLocation.avgCookiePerCustomer);
    currentLocation.grandTotal += cookiesSold;
    currentLocation.hourlySalesArray.push(cookiesSold);
  }
}

//calls the function to generate sales array for each location
for (let i = 0; i < locationList.length; i++) {
  let currentLocation = locationList[i];
  generateSalesArray(currentLocation);
}

const salesInfo = document.getElementById("salesInfo");
const articleElem = document.createElement("article");
salesInfo.appendChild(articleElem);
const tableElem = document.createElement("table");
articleElem.appendChild(tableElem);

const trElem = document.createElement("tr");
tableElem.appendChild(trElem);
// const tdElem = document.createElement("td");

for (let i = -1; i < hoursOfOperation.length; i++) {
  const thElem = document.createElement("th");
  if (i === -1) {
    thElem.textContent = ` `;
    trElem.appendChild(thElem);
  } else if (i >= 0) {
    let currentHour = hoursOfOperation[i];
    thElem.textContent = `${currentHour}`;
    trElem.appendChild(thElem);
  }
}

function generateTable() {
  for (let i = 0; i < locationList.length; i++) {

    //Sets a variable equal to the current location
    let currentLocation = locationList[i];

    //
    const trElem = document.createElement("tr");
    trElem.textContent = `${currentLocation}`;
    tableElem.appendChild(trElem);
    let currentHrSales = currentLocation.hourlySalesArray[i];
    for (let i = -1; i < hoursOfOperation.length; i++) {
      if (i === -1) {
        const tdElem = document.createElement("td");
        tdElem.textContent = `${currentLocation}`;
        trElem.appendChild(tdElem);
      } else if (i >= 0) {
        const tdElem = document.createElement("td");
        tdElem.textContent = `${currentHrSales}`;
        trElem.appendChild(tdElem);
      }
    }
  }
}