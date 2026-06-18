function ourReusableFunction(){
    console.log("Heyya, World");

}

ourReusableFunction();

function ourReusableFunction2(a, b){
    console.log(a - b);
}
ourReusableFunction2(10, 5);

//variables declared outside the function are global scope and can be accessed anywhere in the program. 
//Variables declared inside the function are local scope and can only be accessed inside the function.


// if we declare a variable  inside a function without var, let or const, it becomes global variable and can be accessed anywhere in the program. It is not recommended to declare variables without var, let or const as it can lead to unexpected behavior.

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5; // this is a global variable since it is not declared with var and can be accessed anywhere in the program. 
    
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);


function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));


function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));


var sum = 0;
function addThree(){
    sum += 3;
}
function addFive(){
    sum += 5;
}

console.log(sum);
addThree();
console.log(sum);
addFive();
console.log(sum);

var changed = 0;
function change(num){
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

var processed = 0;
function processArg(num){
    return (num + 3) / 5;
}
processed = processArg(5);  
console.log(processed);

