
let product ={
    company : 'Mango',
    'item-name' : 'Cotton-Striped T-Shirt',
    price : 861,
};

console.log(typeof product);
console.log(product);
console.log(product.company);
console.log(product['item-name']);
console.log(product.price);
product.company = 'Berry';
console.log(product);

let productName = 'item-name';
console.log(product['company']);
console.log(product.productName);
console.log(product.price);

delete product['company'];
console.log(product)


product ={
    company : 'Mango',
    'item-name' : 'Cotton-Striped T-Shirt',
    price : 861,
    displayPrice : function(){
        console.log(`Price : ₹${this.price}`)
    },
};
product.displayPrice();


// AutoBoxing

console.log('Neon is my startup.'.toUpperCase())
console.log('Neon is my startup.'.toLowerCase())
console.log('Neon is my startup.'.length)
console.log('Neon is my startup.'.replace('my','our'))
console.log('Neon is my startup.'.replace('my','our').length)



let a = 5;
let b = a;
console.log(`a :${a}, b :${b}`);
a = 8;
console.log(`a :${a}, b :${b}`);


let x = {
    num : 5,
};
let y = x;
console.log(`x :${x.num}, y :${y.num}`);
x.num = 6;
console.log(`x :${x.num}, y :${y.num}`);


let p = {pop: 'adi'};
let q = {pop: 'adi'};
console.log(p == q)
console.log(p === q)
console.log(p.pop == q.pop)
console.log(p.pop === q.pop)


product ={
    company : 'Mango',
    'item-name' : 'Cotton-Striped T-Shirt',
    price : 861,
};
// Object Destructuring
// let company = product.company;
// let price = product.price;
let {company, price}  = product;
console.log(company);
console.log(price);

// Property Shorthand
price = 750;
// product = {
//     company : 'Mango',
//     'item-name' : 'Cotton-Striped T-Shirt',
//     price : price 
// };
product = {
    company : 'Mango',
    'item-name' : 'Cotton-Striped T-Shirt',
    price
};
{ price } product;
console.log(price)


// Method Shorthand
