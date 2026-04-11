const palindromes = function (str) {

   const reversed = str.split(' ').join('').split(',').join('').split('.').join('');

   if (reversed === str) {
    return true
   }
   else
    return false;

};

// Do not edit below this line
module.exports = palindromes;
