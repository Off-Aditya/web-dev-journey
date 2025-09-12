let product = {
    name: 'TShirt',
    price: 789,
    rating: {
        stars: 4.5,
        noOfReviews: 453,
    },
};

console.log(typeof product)
console.log(product)

let str = JSON.stringify(product);

console.log(typeof str);
console.log(str);

console.log(JSON.parse(str))
