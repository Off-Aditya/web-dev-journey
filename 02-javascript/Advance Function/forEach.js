let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(num => {
    if (num === 5) {
        return;
    }
    console.log(`Visited: ${num}`);
});

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };
// // OR
// arr.forEach(function (num) {
//     console.log(num);
// });
// // OR
// arr.forEach((num) => console.log(num));

// function search(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             console.log(`Element ${num} is at ${i}`);
//             return;
//         }
//     }
//     console.log("Element not found !!");
// }
// search(arr, 6);


