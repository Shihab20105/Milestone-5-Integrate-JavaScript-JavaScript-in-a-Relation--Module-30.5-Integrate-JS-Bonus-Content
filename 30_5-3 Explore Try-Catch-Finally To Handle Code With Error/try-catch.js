/*                      30_5-3 Explore Try-catch-finally to handle code with error */

/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
Output: It is beautiful day outside
25
*/

/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
console.log(district);
let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

Output: It is beautiful day outside
25
D:\Web Development\Milestone-5 Integrate JS(JS in A Relation)\Module-30.5 Integrate JavaScript Bonus Content\30_5-3 Explore Try-Catch-Finally To Handle Code With Error\try-catch.js:15
console.log(district);
            ^

ReferenceError: Cannot access 'district' before initialization
*/


/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
//console.log(district);
//let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

try{
    console.log('Inside try');
}
catch(error){
    console.log('Inside catch');
    console.log(error);
}
finally{
    console.log('Finally done');
}

Output: It is beautiful day outside
25
100
100
100
Inside try
Finally done
*/


/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
//console.log(district);
//let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

try{
    console.log('Inside try');
    console.log(student);
}
catch(error){
    console.log('Inside catch');
    console.log(error);
}
finally{
    console.log('Finally done');
}

Output: It is beautiful day outside
25
100
100
100
Inside try
Inside catch
ReferenceError: student is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-5 Integrate JS(JS in A Relation)\Module-30.5 Integrate JavaScript Bonus Content\30_5-3 Explore Try-Catch-Finally To Handle Code With Error\try-catch.js:70:17)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
Finally done
*/


/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
//console.log(district);
//let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

try{
    console.log('Inside try');
    console.log(student);
}
catch(error){
    console.log('Inside catch');
    //console.log(error);
}
finally{
    console.log('Finally done');
}

Output: It is beautiful day outside
25
100
100
100
Inside try
Inside catch
Finally done
*/


/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
console.log(district);
let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

try{
    console.log('Inside try');
    console.log(student);
}
catch(error){
    console.log('Inside catch');
    //console.log(error);
}
finally{
    console.log('Finally done');
}

Output: It is beautiful day outside
25
D:\Web Development\Milestone-5 Integrate JS(JS in A Relation)\Module-30.5 Integrate JavaScript Bonus Content\30_5-3 Explore Try-Catch-Finally To Handle Code With Error\try-catch.js:138
console.log(district);
            ^

ReferenceError: Cannot access 'district' before initialization
*/


/*
const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
//console.log(district);
//let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

try{
    console.log('Inside try');
    //console.log(student);
    console.log(district);
    let district = 'Moulvibazar';
}
catch(error){
    console.log('Inside catch');
    //console.log(error);
}
finally{
    console.log('Finally done');
}
console.log('Last line of the code');

Output: It is beautiful day outside
25
100
100
100
Inside try
Inside catch
Finally done
Last line of the code
*/


const day = 'It is beautiful day outside';
console.log(day);
console.log(25);
//console.log(district);
//let district = 'Moulvibazar';
console.log(100);
console.log(100);
console.log(100);

try{
    console.log('Inside try');
    //console.log(student);
    console.log(district);
    let district = 'Moulvibazar';
    console.log('After error');
}
catch(error){
    console.log('Inside catch');
    //console.log(error);
}
finally{
    console.log('Finally done');
}
console.log('Last line of the code');

/* 
Output: It is beautiful day outside
25
100
100
100
Inside try
Inside catch
Finally done
Last line of the code 
*/