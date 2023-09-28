const lookup = require("country-code-lookup");
const { lookUp: lookUpCountry } = require("geojson-places");

console.log("Lookup");
console.log(lookup.byCountry("United Kingdom"));
console.log(lookUpCountry(50.05631, 14.459095));
