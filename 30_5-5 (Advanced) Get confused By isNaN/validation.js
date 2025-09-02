/*                      30_5-5 (advanced) Get confused by isNaN */

/*
const number = '23';
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}
    Output: Value is not a number
*/


/*
const number = 23;
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}
    Output: Value is a number
*/


/*
const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}

const numbers = [3, 12, 78, 90];
console.log(typeof numbers);

Output: Value is a number
object
*/



/*
const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Hifzur Rahman', job: 'Working in restaurant'};
console.log(typeof numbers);
console.log(typeof student);

Output: Value is a number
object
object
*/



/*
const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Hifzur Rahman', job: 'Working in restaurant'};
console.log(Array .isArray (numbers));
console.log(typeof student);

Output: Value is a number
true
object
*/


/*
const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Hifzur Rahman', job: 'Working in restaurant'};
//console.log(Array .isArray (numbers));
console.log(Array .isArray (student));
console.log(typeof student);

Output: Value is a number
false
object
*/



const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('Value is a number');
}
else{
    console.log('Value is not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Hifzur Rahman', job: 'Working in restaurant'};
//console.log(Array .isArray (numbers));
console.log(Array .isArray (number));
console.log(typeof student);
/*
Output: Value is a number
false
object
*/




// ================== isNaN in JavaScript ========================
/*
The isNaN() function determines whether a value is NaN, first converting the value to a number if necessary. Because coercion inside the isNaN() function can be surprising, you may prefer to use Number.isNaN().
*/