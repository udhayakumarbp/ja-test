'use strict'
var country = {
	"countries": [
		"US",
		"India",
		"China",
		"Japan"
	]
}


var perCountries = {
	"permittedCountries": [
		"US",
		"India"
	]
}
var countries = country.countries;
var perCountries = perCountries.permittedCountries;
countries.filter(function (nonPerCountry, index) {
	if (perCountries.indexOf(nonPerCountry) < 0) {
		console.log(nonPerCountry);
	}
	// body...
})