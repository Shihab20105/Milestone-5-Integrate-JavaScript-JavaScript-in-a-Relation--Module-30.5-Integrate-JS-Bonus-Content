/*               30_5-4 (semi-advanced) A simple introduction to Date object in JavaScript */


const today = new Date();
//console.log(today);
// Output: 2025-09-02T15:48:06.991Z


/*
const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1 > date2){
    console.log('Mach was before December');
}                                               // You can not compare Date like this
else{
    console.log('March was not before December');
}

    Output: March was not before December
*/


/*
const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1.getTime() > date2.getTime()){
    console.log('Mach was before December');
}                                               // You can not compare Date like this
else{
    console.log('March was not before December');
}
    Output: March was not before December
*/


const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1.getTime() < date2.getTime()){
    console.log('Mach was before December');
}                                               // You can not compare Date like this
else{
    console.log('March was not before December');
}
// Output: Mach was before December

// ========= https://momentjs.com/ ============
/*
Moment.js was a very popular JavaScript library for parsing, validating, manipulating, and formatting dates. However, it is now considered a legacy project in maintenance mode. The Moment.js team recommends that developers do not use it in new projects and instead migrate to modern alternatives
*/

// ============================ Google Debug =======================================

/*
new Date()
Tue Sep 02 2025 16:49:48 GMT+0100 (British Summer Time)
new Date('1971-12-16')
Thu Dec 16 1971 00:00:00 GMT+0000 (Greenwich Mean Time)
*/