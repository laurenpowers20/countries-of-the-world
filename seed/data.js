import db from "../db/connection.js";
import Country from "../Model/Country.js";
import countriesData from "../countries.json" assert { type: "json" };

let countryData = countriesData.map((item) => {
  const country = {};
  country.name = item.name.common;
  country.independent = item.independent;
  let currArray = [];
  for (const currency in item.currencies) {
    currArray.push(currency.name);
  }
  country.currencies = currArray[0];
  item.capital ? (country.capital = item.capital[0]) : (country.capital = "");
  country.region = item.region;
  country.languages = item.languages;
  country.landlocked = item.landlocked;
  country.population = item.population;
  country.continents = item.continents;
  return country;
});
console.log(countryData);

const insertData = async () => {
  await db.dropDatabase();
  await Country.create(countryData);
  await db.close();
};

insertData();
