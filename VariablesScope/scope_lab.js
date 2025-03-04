// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}

show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    let letVar = "I'm a block-scoped let";
    const constVar = "I'm a block-scoped const";
    var varVar = "I'm a function-scoped var";

    // letVar = 1
    // constVar = 2
    // varVar = 3
}

letVar = 1
constVar = 2
varVar = 3

// Types of variables

// Primitive data types

{
    // String: Text
    let name = "Alice"

    // Number: Integer and Floating points
    let age = 30;
    let price = 9.99;

    // Boolean: True or False
    let isAdmin = true;

    // Undefined: Declared but not assigned a value
    let x;

    // Null: Empty value
    let emptyValue = null;
}

// Composite data types

{
    // Array: List-like data structure
    my_array = [1, 2, 3, 4, 5];

    // Objects: Collection of key-value pairs
    var Person = {
        name: "Alice",
        age: 30,
        city: {
            name: "New York",
            country: "USA"
        }
    }
}

