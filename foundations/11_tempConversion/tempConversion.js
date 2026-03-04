const convertToCelsius = function(fah) {


  fah = (fah - 32) * 5 / 9;

  let result = Math.round(fah * 10) / 10;

  return result;

};

const convertToFahrenheit = function(cel) {

  cel = ((cel * 9) / 5 + 32);

  let result = Math.round(cel * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
