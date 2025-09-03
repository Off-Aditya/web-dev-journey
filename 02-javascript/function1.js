let age = 21

function printAge(){
    console.log(`Your age is ${age}.`);
}
printAge();

// age = 7;
// printAge();

// age = 15;
// printAge();

// age = 34;
// printAge();

function generateRandom(){
    let random = Math.random();
    let randomMove = random * 3;
    return randomMove;
}

console.log(generateRandom())
