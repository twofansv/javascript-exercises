const add = function(firstNum, secondNum) {
  const result = firstNum + secondNum;
  return result;
	
};

const subtract = function(firstNum, secondNum) {
	  const result = firstNum - secondNum;
    return result;


};

const sum = function(arr) {
	const forSum = arr.reduce((prev, current) => prev + current, 0);
  return forSum;
};

const multiply = function(arr) {
	const forMultiply = arr.reduce((prev, current) => prev * current);
  return forMultiply;
};

//4, 3 => 64
const power = function(num, toThePower) {

  let result = num;

	for (let i = 1; i < toThePower; i++) {
    //const sum = num * num;
    result *= num;
  }

  return result;

};




const factorial = function(num) {
	
let result = num;

	for (let i = 1; i < toThePower; i++) {
    //const sum = num * num;
    result *= num;
  }

  return result;

};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
