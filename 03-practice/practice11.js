let product = {
    name: 'Jean',
    size: 'S',
    fit: 'Slim Fit',
    'delivery-time': 'Same Day Delivery',
};

// let copyProduct = product;

// console.log(product);
// copyProduct.size = 'M';
// console.log(product);

// copyProduct.fit = 'regular';
// console.log(product);

console.log(product['delivery-time'])

let obj = {
    message: 'Good Job',
    status: 'Complete',
};
console.log(obj);

let { message, status } = obj;
console.log(message);
console.log(status);


function isIdenticalProduct(product1, product2) {
    if (typeof product1 !== 'object' || typeof product2 !== 'object') {
        console.warn('Parameter passed was not an object.');
        return false;
    }

    if (product1 == product2) {
        return true;
    }

    if (product1.name === product2.name && product1.size === product2.size && product1.fit === product2.fit) {
        return true;
    } else {
        return false;
    }
}

let product1 = {
    name: 'Jean',
    size: 'S',
    fit: 'Slim Fit',
    'delivery-time': 'Same Day Delivery',
};
let product2 = {
    name: 'Jean',
    size: 'S',
    fit: 'Slim Fit',
    'delivery-time': 'Same Day Delivery',
};
let product3 = 'Jean';

console.log(isIdenticalProduct(product1, ''));
console.log(isIdenticalProduct(product1, product1));
console.log(isIdenticalProduct(product1, product2));
console.log(isIdenticalProduct(product1, product3));
