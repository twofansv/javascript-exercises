const repeatString = function(word, times) {
    if (times < 0) return "ERROR";

    let result = "";

    for (let i = 0; i < times; i++){
        word += result;
    }
    return word;

};

// Do not edit below this line
module.exports = repeatString;
