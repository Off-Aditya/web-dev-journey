let sum = function (num1, num2) {
    return num1 + num2;
};
let newSum =sum;

console.log(sum(4, 5));
console.log(newSum(4, 5));


let sumThreeNumber = function(num1, num2, num3, sumTwoNumber){
    let sum1 = sumTwoNumber(num1, num2);
    return sumTwoNumber(sum1, num3);
};
console.log(sumThreeNumber(4, 5, 6, sum));
console.log(sumThreeNumber);
console.log(typeof sumThreeNumber);
