const convertToCelsius = function(num) {

  num = num - 32;
  num = num * 5;
  num = num / 9;

  let result = Math.round(num * 10) / 10;

  return result;

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
