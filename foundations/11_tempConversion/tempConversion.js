const convertToCelsius = function(fah) {

  fah = fah - 32;
  fah = fah * 5;
  fah = fah / 9;

  let result = Math.round(fah * 10) / 10;

  return result;

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
