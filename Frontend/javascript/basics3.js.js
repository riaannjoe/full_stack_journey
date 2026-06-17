
var ourArray = [18, 64, 99];
ourArray[1] = 45;
console.log(ourArray);

var myArray = [["Ria", 23], ["Ann", 25]];
console.log(myArray);

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray[2][1];
console.log(myData);

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy" , "joy"]);
console.log(ourArray);

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);
console.log(removedFromOurArray);

var ourArray = ["Stimpson", "J", ["cat"]];
// shift removes first element from array
var removedfromourArray = ourArray.shift();
console.log(ourArray);
console.log(removedfromourArray);


// unshift adds element to the beginning of array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

var myList = [["Ria", 23], ["Ann", 25], ["Joe", 30]];
myList.shift();
console.log(myList);
myList.unshift(["Ann", 23]);
console.log(myList);


