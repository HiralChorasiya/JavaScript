                                                           

//Arithmetic opeators
// let a=5;
// let b=10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(b%a);
// console.log(++a);
// console.log(--a);

//Assignment opeators
// let a=1;
// let c=5;
// console.log(a=c)
// console.log(a+=c); 
// console.log(a-=c);
// console.log(a*=c);
// console.log(a/=c);
// console.log(c%=a);


//Comparison operator
// let a=10;
// console.log (a==20);
// console.log (a===20);
// console.log (a!=20);
// console.log (a!==20);
// console.log (a>20);
// console.log (a>=20);
// console.log (a<20);
// console.log (a<=20);

//Logical Operators
// let a=20;
// console.log(a==20 && a==33);
// console.log(a==20||a==33);
// console.log(!(a==20));

//Bitwise operators

    // let x;
    // x=5&1;
    // x=5|1;
// x=5^1;
// x=~1;
// x=5<<1;
// x=5>>1;
// x=5>>>1;
// Object.assign()
let obj1 = { a: 1 }
let obj2 = { b: 2 }
let obj3 = Object.assign(obj1, obj2)
console.log(obj3) // Output: { a: 1, b: 2 }

// Object.is()
console.log(Object.is(25, '25')) // Output: false
console.log(Object.is(NaN, NaN)) // Output: true

// Object.entries()
let obj = { a: 1, b: 2, c: 3 }
let entries = Object.entries(obj)
console.log(entries) // Output: [ ['a', 1], ['b', 2], ['c', 3] ]

// Object.values()
let obj = { a: 1, b: 2, c: 3 }
let values = Object.values(obj)
console.log(values) // Output: [ 1, 2, 3 ]

// Object.keys()
let obj = { a: 1, b: 2, c: 3 }
let keys = Object.keys(obj)
console.log(keys) // Output: [ 'a', 'b', 'c' ]
    

//Ternary or Conditional operator
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

