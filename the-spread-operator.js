/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = arr1;
// Adding an extra element to the array. First array also gets element pushed despite only pushing to array 2.
arr2.push(7);
console.log("second array:", arr2);
console.log("first array:", arr1);

// Copying an array
let arr3 = [4, 5, 6];
/// ... notation for spread operator. Stops the arr4.push(72) being pushed into arr3 and easy to create new objects.
let arr4 = [...arr3];
arr4.push(72);
console.log("third array", arr3);
console.log("fourth array", arr4);

// Copying an object. Will define an object with 3 properties.

let obj1 = {a:1, b:2, c:3};
// To make a copy of obj1, using again ... for the spread operator allows us to add a new property d:4 to the object without changing obj1.
let obj2 = {...obj1, d:4};
console.log("obj1", obj1);
console.log("obj2", obj2);
// Can create a third object that can overide property b without effecting the other objects.
let obj3 = {...obj2, b:13, e:6};
console.log("obj3", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr2, {...obj2}];
console.log("array 5", arr5)