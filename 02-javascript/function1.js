let age = 21

function printAge() {
    console.log(`Your age is ${age}.`);
}
printAge();

// age = 7;
// printAge();

// age = 15;
// printAge();

// age = 34;
// printAge();

function generateRandom() {
    let random = Math.random();
    let randomMove = random * 3;
    return randomMove;
}

console.log(generateRandom())

function determineDriverStatus(age) {
    let status;

    if (age > 18) {
        status = 'You can drive !';
    } else {
        status = 'Use a Bicycle'
    }
    return status;
}
console.log(determineDriverStatus(2));

function sum(a, b) {
    let res = a + b;
    return res;
}

console.log(sum(9, 3));


function greeting(name = 'Neon'){
    console.log(`Namaste ${name}.`);
}
greeting('JavaScript')
greeting()
