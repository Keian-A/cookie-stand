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

for (let i = -1; i < hoursOfOperation.length + 1; i++) {

  const thElem = document.createElement("th");

  if (i === -1) {

    thElem.textContent = ``;
    trElem.appendChild(thElem);

  } else if (i === hoursOfOperation.length) {

    thElem.textContent = `Totals:`;
    trElem.appendChild(thElem);

  } else if (i < hoursOfOperation.length) {

    let currentHour = hoursOfOperation[i];
    thElem.textContent = `${currentHour}`;
    trElem.appendChild(thElem);
  }
}

for (let i = 0; i < locationList.length; i++) {

  //Sets a variable equal to the current location
  let currentLocation = locationList[i];

  let totalCookiesHere = currentLocation.grandTotal;

  //Creates new row for each location
  const trElem1 = document.createElement("tr");
  tableElem.appendChild(trElem1);

  //Runs through all the values for hours of operation
  for (let i = -1; i < hoursOfOperation.length + 1; i++) {
    if (i === -1) {

      const tdElem = document.createElement("td");
      tdElem.textContent = `${currentLocation.name}`;
      trElem1.appendChild(tdElem);

    } else if (i >= 0 && i !== hoursOfOperation.length) {

      //Creates variable to specify exactly which hour of which location is going in the specified table data cell
      let currentHrSales = currentLocation.hourlySalesArray[i];

      const tdElem = document.createElement("td");
      tdElem.textContent = `${currentHrSales}`;
      trElem1.appendChild(tdElem);

    } else if (i === hoursOfOperation.length) {

      const tdElem = document.createElement("td");
      tdElem.textContent = `${totalCookiesHere}`;
      trElem1.appendChild(tdElem);
    }
  }
}


function renderFooter() {

  const trElemFoot = document.createElement("tr");
  tableElem.appendChild(trElemFoot);

  const thElem = document.createElement("th");
  thElem.textContent = `Hourly Total:`;
  trElemFoot.appendChild(thElem);

  let dailyTotal = 0;

  for (let i = 0; i < hoursOfOperation.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < locationList.length; j++) {
      let currentLocation = locationList[j];
      let currentHourSales = currentLocation.hourlySalesArray[i];
      hourlyTotal += currentHourSales;
    }
    const tdElem = document.createElement("td");
    tdElem.textContent = `${hourlyTotal}`;
    trElemFoot.appendChild(tdElem);

    dailyTotal += hourlyTotal;

  }
  const tdElem2 = document.createElement("td");
  tdElem2.textContent = `${dailyTotal}`;
  trElemFoot.appendChild(tdElem2);
}

renderFooter();