let arr = [1, 3, 5, 7];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

arr.forEach(function(num){
    console.log(num);
});

arr.forEach((num) => console.log(num));

function search(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]== num){
            console.log(`Element ${num} is at ${i}`);
        };
    };
};
search(arr, 7);


