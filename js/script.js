'use strict';

const seattleLocation = {
  name: `Seattle`,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCustomer: 6.3,
}

const tokyoLocation = {
  name: `Tokyo`,
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerCustomer: 1.2,
}

const dubaiLocation = {
  name: `Dubai`,
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePerCustomer: 3.7,
}

const parisLocation = {
  name: `Paris`,
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiePerCustomer: 2.3,
}

const limaLocation = {
  name: `Lima`,
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiePerCustomer: 4.6,
}

let numOfCookies = 0;

function cookieCalculator(a, b, c) {
  let numOfCustomers = Math.floor(Math.random() * (b - a + 1)) + a;
  // let avgCookiePerCustomerHere = Math.floor(Math.random() * (c + 1));
  numOfCookies = Math.floor(c * numOfCustomers);
  return numOfCookies;
}

//Creates a pointer to the element with the id salesInfo
const salesInfo = document.getElementById("salesInfo");

//Array for hours of operation
const hoursOfOperation = [`6am`, `7am`, `8am`, `9am`, `10am`, `11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];

//Array for store locations
const storeLocations = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

for (let i = 0; i < storeLocations.length; i++) {

  const article = document.createElement('article');
  //This lives here
  salesInfo.appendChild(article);

  let currentLocation = storeLocations[i];

  let totalCookies = 0;

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = currentLocation.name;
  article.appendChild(h2Elem);

  const ulElem = document.createElement('ul');
  article.appendChild(ulElem);

  for (let j = 0; j < hoursOfOperation.length; j++) {
    let currentHour = hoursOfOperation[j];
    const liElem = document.createElement('li');
    liElem.textContent = `${currentHour}: ${cookieCalculator(currentLocation.minCustomer, currentLocation.maxCustomer, currentLocation.avgCookiePerCustomer)} cookies`;
    ulElem.appendChild(liElem);
    totalCookies += numOfCookies;
  }
  const liElem = document.createElement('li');
  liElem.textContent = `Total: ${totalCookies} cookies`;
  ulElem.appendChild(liElem);
}
