/*                      30_5-2 Different types of error in JavaScript */

/* 
Not in JavaScript that frequently: RangeError
const numbers = [3, 4, 5, 8];
console.log(numbers[25]);
    Output: undefined
console.log(numbers.length);
    Output: 4 
 */


 /*
const numbers = [3, 4, 5, 8];
numbers.length = 2; // You should not do it most of the time
console.log(numbers)
console.log(numbers.length);
 
Output: [ 3, 4 ]
2 
*/


/*
const numbers = [3, 4, 5, 8];
numbers.length = 2;
console.log(numbers)
console.log(numbers.length);
console.log(money); 
Output: ReferenceError: money is not defined 
*/

/* 
console.log(money);
let money = 80;

Output: console.log(money);
            ^

ReferenceError: Cannot access 'money' before initialization
*/



/*
const numbers = [3, 4, 5, 8];
numbers.length = 2;
console.log(numbers)
console.log(numbers.length);

console.log(money);
var money = 80;
 
Output: [ 3, 4 ]
2
undefined
*/


/*
ReferenceError:
const numbers = [3, 4, 5, 8];
numbers.length = 2;
console.log(numbers)
console.log(numbers.length);

console.log(money);
const money = 80;

Output: 
console.log(money);
            ^

ReferenceError: Cannot access 'money' before initialization
*/


/*
const numbers = [3, 4, 5, 8];
numbers.length = 2;
console.log(numbers)
console.log(numbers.length);

const money = 80;
            //SyntaxError
for(let i = 0; i < 5 i++){

}
 
Output: for(let i = 0; i < 5 i++){
                     ^

SyntaxError: Unexpected identifier 'i'
*/


/*
let student = {};
console.log(student.name);
    Output: undefined
*/

/*
let student = {};
console.log(student.address);
    Output: undefined
*/



/*
let student = {};
console.log(student.address.city);

Output:
console.log(student.address.city);
                            ^

TypeError: Cannot read properties of undefined (reading 'city')
*/

/*
let student = {address: {city: 'Dhaka'}};
console.log(student.address.city);
    Output: Dhaka
*/



let student = {address: 'Dhaka'};
console.log(student.address.city);
// Output: undefined

// ============================== Common native errors in JavaScript: =======================
/* 
What are the 7 types of native errors in JavaScript?
Common native errors in JavaScript:
1. RangeError
-------------->
This is thrown when a number is outside an allowable range of values.

Example 1
const l = console.log

const arr = [90, 88]
arr.length = 90**99

2. Reference Error
------------------>
This error is thrown when a reference made to a variable/item is broken, which means the variable/item doesn’t exist.

Example 2
const l=console.log

const cat = "cat"
cat
dog

3. SyntaxError
--------------->
This is the most common error we encounter. This error occurs when we type code that the JS engine can’t understand.

This error is caught by the JS engine during parsing. There are different stages in the JS engine that our code is put through before we see those results on the terminal.

Example 3
const l = console.log
let cat h = "cat"

4. TypeError
------------->
TypeError is used to indicate an unsuccessful operation when none of the other NativeError objects are an appropriate indication of the failure cause.

TypeError occurs when an operation is performed on a wrong data type. Maybe a boolean is expected, but a string is found.

Example 4
If we try to convert a number to uppercase like this:

const num = 123
num.toUpperCase()

5. URIError
------------>
URI (Uniform Resource Indicator) in JS has the functions: decodeURI(), decodeURIComponent(), etc.

This indicates that one of the global URI handling functions was used in an incompatible way with its definition.

Example 5
We will get a URIError if we call any of them with the wrong parameter:

decodeURI("%")
^

URIError: URI malformed

6. EvalError
------------->
This is used to identify errors when using the global eval() function.

According to EcmaSpec 2018 edition:

“This exception is not currently used within this specification. This object remains for compatibility with previous editions of this specification.”

7. InternalError
----------------->
This error occurs internally in the JS engine, especially when it has too much data to handle and the stack grows way over its critical limit.

This also occurs when the JS engine is overwhelmed by too many recursions, switch cases, etc.

Example 6
switch(num) {
 case 1:
 ...
 break
 case 2:
 ...
 break
 case 3:
 ...
 break
 case 4:
 ...
 break
 case 5:
 ...
 break
 case 6:
 ...
 break
 case 7:
 ...
 break
 ... up to 1000 cases
 }
*/