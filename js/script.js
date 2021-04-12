'use strict';

const seattleLocation = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCustomer: 6.3,
}

const tokyoLocation = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerCustomer: 1.2,
}

const dubaiLocation = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiePerCustomer: 3.7,
}

const parisLocation = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiePerCustomer: 2.3,
}

const limaLocation = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiePerCustomer: 4.6,
}

//Creates article within article with salesInfo id
const salesInfo = document.getElementById("salesInfo");
const articleElem = document.createElement('article');
salesInfo.appendChild(articleElem);

//Array for store locations
const storeLocations = [`seattle`, `tokyo`, `dubai`, `paris`, `lima`];

for (let i = 0; i < storeLocations.length; i++) {
  let currentLocation = storeLocations[i];
  console.log(currentLocation);
}
