function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,34,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
 
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

trueOrFalse(true);
console.log(trueOrFalse(true));
trueOrFalse(false);
console.log(trueOrFalse(false));



// strict equality operator === checks type equality too

function testStrict(val) {
    if (val === 7) { 
        return "Equal";
    }
    return "Not Equal";
}

testStrict(7);
console.log(testStrict(7));
testStrict("7");
console.log(testStrict("7"));

function compareEquality(a, b) {
    if (a === b) { 
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality(10, 10));

function testNotEqual(val) {
    if (val != 99) { 
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

function testStrictNotEqual(val) {
    if (val !== 17) { 
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual("17"));

function testGreaterThan(val) {
    if (val > 100) { 
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(101));

