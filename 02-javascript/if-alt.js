let age1 = 11;
let age2;
// let result;

// if (age > 18) {
//     result = 'Adult';
// } else {
//     result = 'Kid';
// }
let finalAge1 = age1 || 18;  // guard operator
let result = finalAge1 > 18 ? 'Adult' : 'Kid';  // ternary operator 


let finalAge2 = age2 ?? 21;


console.log(finalAge1)
console.log(finalAge2)
console.log(result)