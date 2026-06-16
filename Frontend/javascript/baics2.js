var firstname = 0;
var firstname = "Ria";

firstnameLength = firstname.length;
console.log(firstnameLength);

firstletter = firstname[0];
console.log(firstletter);


// Strings are immutable, means we cannot change the string once it is created. We can only create a new string and assign it to the variable.

/* var hey = "Hello World";
hey[0] = "J";

this is not possible
we have to rewrite the whole string like


hey = "Jello World";
*/

var firstname = "Ria";
var lastletter = firstname[firstname.length - 1];
console.log(lastletter);


function wordblanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}
console.log(wordblanks("dog", "big", "ran", "quickly"));
console.log(wordblanks("bike", "slow", "flew", "slowly"));
