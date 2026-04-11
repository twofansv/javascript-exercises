const palindromes = function (str) {

   const reversed = str.split(',.').reverse().join(',.');

   if (reversed === str) {
    return true
   }
   else
    return reversed;

};

// Do not edit below this line
module.exports = palindromes;
