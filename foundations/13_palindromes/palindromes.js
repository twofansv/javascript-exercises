const palindromes = function (str) {


   const cleanText = ((str) => {
    const lowerCased = str.toLowerCase();
    const filtered = lowerCased.split(' ').join('').split(',').join('').split('.').join('').split('!').join('');

    return filtered;
   });

   const cleaned = cleanText(str);

   const reversed = cleaned.split('').reverse().join('');

   

   if (reversed === cleaned) {
    return true
   }
   else
    return false;

};


// Do not edit below this line
module.exports = palindromes;
