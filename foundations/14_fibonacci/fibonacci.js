const fibonacci = function(num) {

    num = +num
    let febSeq;
    let firstNum = 1;
    let secondNum = 0;

if (num === 0){
    return 0;
}
else if (num === 1){
    return 1;
}
else if (num < 0) {
    return 'OOPS'
}


for (let i = 2; i <= num; i++) {
    febSeq = firstNum + secondNum; // F = 1 + 0 = 1 // F1 = 1 + 1 = 2 // F2 = 2 + 1 = 3 // --F3 = 3 + 2 = 5 
    secondNum = firstNum; // 2 // 
    firstNum = febSeq; // 3 // 
}

return febSeq;
 
};

// Do not edit below this line
module.exports = fibonacci;
