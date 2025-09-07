function oddOrEven(num) {
    res = num % 2 == 0 ? 'Even' : 'Odd';
    return res;
}
console.log(oddOrEven(10));
console.log(oddOrEven(11));

function larger(num1, num2) {
    res = num1 > num2 ? num1 : num2;
    return res;
}
console.log(larger(9, 1));
console.log(larger(8, 10));

function tempConversion(C) {
    F = ((9 / 5) * C) + 32;
    return F;
}
console.log(tempConversion(27));
console.log(tempConversion(0));
console.log(tempConversion(100));
