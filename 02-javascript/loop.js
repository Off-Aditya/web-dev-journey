// let num = 1;

// while (num <= 1000) {
//     console.log(num);
//     num++;
// }

// let i = 0;
// while (i < 1) {
//     console.log(i);
//     i = Math.random() * 2;
// }
// console.log('Final Value of i : ' + i);

// let n = 0;
// do {
//     console.log(n);
//     n++;
// } while (n < 15);


let nums = [4, 2, 3, 3, 11, 43, 21, 32, 11];
let sum = 0; 
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    sum += nums[i];
}
console.log(sum);

let squares = [];
for (let i = 0; i < nums.length; i++){
    // squares[i] = nums[i] * nums[i];
    squares.push(nums[i] * nums[i]);
}
console.log(squares);

for (let i = 0; i < nums.length; i++) {
    console.log(squares[i]);
}

