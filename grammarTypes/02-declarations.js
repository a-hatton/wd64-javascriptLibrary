/*
**********
! Variables
**********
*/

console.log('hello');
// The console log is a debugging tool

let a = 2;

/*
 - let : is our KEYWORD
 - a : is our NAME of our variable
 - = : is our ASSIGNMENT OPERATOR
 - 2 : IS OUR variable VALUE
 */

 let b = 1;

 console.log(2  + b)

 //! RESTRICTIONS
 /*
        -  a variable name must begin with a letter, underscore, or a dollar sign.
        - numbers may follow the above characeters, BUT CANNOT come first.
        - javascript is case sensitive - 'hello' and 'Hello', these would be different variables.
        - no spaces are allowed in variable names.
        - camelcase is the best practice for naming Example: angelaHatton

*/

let camelCase;
let PascalCase;
let snake_case;

/*
*KEYWORDS

var, let, const

    - var: 'old' keyword that stands for variable
    - let: "new" keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a stadardization of JS)
    - const: also "new" keyword that declares an UNCHANGABLE, or constant, variable.
*/

var variable = 'var variable';
let letVariable = 'let variable';

/*
**********
! DECLARATIONS AND INITIALIZATIONS
**********
*/
// Declarations are the left side of the assignment operator
//let x;

// Initializations are the right side of the assignment operator
//let x = 10

// 10 is our initialization

let y;
console.log('declarations:', y);

y = 10;
console.log('initialization:', y);

y = 33;
console.log('initialization 2:', y);

// we've set our variable with our let keyword. with each iteration, we have delcared what it is. 


//? const

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa)

today = 'Awesome!';
console.log(today,efa);

// efa = 'super'; 
console.log(today,efa);
// efa was set as const - 'Wonderful!' so you can't change it

// const allows us to make a variable that we don't want to change. 