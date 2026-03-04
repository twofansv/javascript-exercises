const convertToCelsius = function(num) {

  num = num - 32;
  num = num * 5;
  num = num / 9;

  return num;

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
