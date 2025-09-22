let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let odd = arr.map(array.forEach(num => {
//     if(num % 2 ===1){
//         return;
//     }
// }))
let odd = arr.filter((num, index)=> {
    if(num % 2 == 1){
        return true;
    }else{
        return false;
    }
})
// console.log(odd);

// OR

let newOdd = arr.filter(
    (num, index) => (num % 2 == 1)
);
// console.log(newOdd);



let squares = arr.map(
    // (num) =>{
    //     return num*num;
    // }
    (num => num * num)
);
console.log(squares);