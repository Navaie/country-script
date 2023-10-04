const countries = require("./heroku_7bzt9drg.stippldestinations.json");
const lookup = require("country-code-lookup");
const { lookUp: lookUpCountry } = require("geojson-places");
const countryCoder = require("@rapideditor/country-coder");

// console.log("Lookup");
// console.log(lookup.byCountry("United Kingdom"));
// console.log(lookUpCountry(55.68, 12.57));

const showCountries = () => {
  countries.forEach(({ city, country, latitude, longitude }) => {
    console.log(city, country, parseFloat(latitude.toFixed(5)), parseFloat(longitude.toFixed(5)));
    let foundCountry = lookUpCountry(
      parseFloat(latitude.toFixed(5)),
      parseFloat(longitude.toFixed(5))
    );
    if (!foundCountry) {
      console.log(city, country, parseFloat(latitude.toFixed(4)), parseFloat(longitude.toFixed(4)));
      foundCountry = lookUpCountry(
        parseFloat(latitude.toFixed(4)),
        parseFloat(longitude.toFixed(4))
      );
    }
    if (!foundCountry) {
      console.log(city, country, parseFloat(latitude.toFixed(3)), parseFloat(longitude.toFixed(3)));
      foundCountry = lookUpCountry(
        parseFloat(latitude.toFixed(3)),
        parseFloat(longitude.toFixed(3))
      );
    }
    if (!foundCountry) {
      console.log(city, country, parseFloat(latitude.toFixed(2)), parseFloat(longitude.toFixed(2)));
      foundCountry = lookUpCountry(
        parseFloat(latitude.toFixed(2)),
        parseFloat(longitude.toFixed(2))
      );
    }
    if (!foundCountry) {
      console.log(city, country, parseFloat(latitude.toFixed(1)), parseFloat(longitude.toFixed(1)));
      foundCountry = lookUpCountry(
        parseFloat(latitude.toFixed(1)),
        parseFloat(longitude.toFixed(1))
      );
    }
    if (!foundCountry) {
      foundCountry = lookup.byCountry(country);
    }
    console.log(foundCountry);
    console.log();
  });
};

const showOtherCountries = () => {
  countries.slice(0, 100).map(({ city, country, latitude, longitude }) => {
    console.log(city, country, parseFloat(latitude.toFixed(2)), parseFloat(longitude.toFixed(2)));
    console.log(
      countryCoder.iso1A2Code([parseFloat(latitude.toFixed(1)), parseFloat(longitude.toFixed(1))], {
        level: "country",
      })
    );
    console.log();
  });
};

showOtherCountries();
// showCountries();
