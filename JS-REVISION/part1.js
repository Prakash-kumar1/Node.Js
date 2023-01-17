// Question:-1 What is JavaScript ??
// Answer=>   JavaScript was invented by Brendan Eich in 1995.
//            JavaScript is a scripting language that enables you to create dynamically updating content,
//            control multimedia, animate images, and pretty much everything else.


// Question:-2 => what is variable in javascript ??
// Answer=>    A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable 
//             and global variable. There are some rules while declaring a JavaScript variable (also known as identifiers). Javascript is
//             case-Sensetitive. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.

// Difference Between Var, Let and Const must read this 
//                                 https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/


// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "harshit";
console.log(typeof age);


// convert number to string:- For converting we just add an Empty string.
age = age + "";
console.log(typeof(age)); 


// // convert string to number:- For converting we just add an plus " + " sign before string
let myStr = +"34";
console.log(typeof myStr);

let agee = "18";
// Number is an inBuilt method for converting string to number
agee = Number(agee);
console.log(typeof agee);


// String Concatenation :- Joining 2 strings.

let fname = "Prakash" ;
let mname = "kumar" ;
let lname = "Singh" ;
let name = fname + mname + lname
console.log(name) ;
name = fname + " " + mname + " "+ lname
console.log(name) ;


let string1 = "12" ;
let string2 = "10" ;
let newString = string1 + string2 ;
console.log(newString) ;

// Converting into number
    newString = +string1 + +string2 ;
console.log(newString) ;

// Using Template String
let first = "Prakash" ;
let year = 23 ;

let aboutMe = `my name is ${first} and my age is ${year}`
console.log(aboutMe) ;


// Question:-3=> difference between undefined and null ??
// Answer:->     Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript. 
//               Undefined: It means the value does not exist in the compiler.

// Declaring variable but not assigning value means undefined
let pet ;
console.log(typeof pet)

let my = null ;
console.log(typeof my)
// In javascript, type of null is Object which is a bug (error) in JavaScript.


// == checks only value but ===  checks value as well as Data type.


// Falsey values :- undefined, False, null, 0, "" (always execute Else block)
// Truthy values :- leaving falsey value everything is Truthy value
// Example :- 
 
firstName = 0;
if(firstName){
    console.log(firstName)
}else{
    console.log("FirstName is kinda empty")
}


// Ternary Operator OR Conditional Operator :- 
age = 21 ;
let drink;

if(age >= 21){
    drink = "Bear, Rum"
}else{
    drink = "Fruit juice"
}
console.log(drink) ;

// OR we can use Ternary operator

age = 18 ;
let drive = age >= 18  ? "you can Drive" : "Get Driving License"
console.log(drive) ;

// !!!@@@###$$$%%%^^&&&****==>>> !!!@@@###$$$%%%^^&&&****==>>>

firstName = "Monika" ;
age = 24 ;

// And (&&) operator :-  it checks both condition
if(firstName[3] === "i" && age == 24){
    console.log("Buy your own Mercerdies")
}else{
    console.log("any one condition is wrong")
}

// OR (||)  operator :-   it checks only one condition
if(firstName[5] === "a" || age == 42){
    console.log("Your name is correct not your age")
}else{
    console.log("both condition is wrong")
}


// // Nested if else

// let winNumber =  10 ;
// // prompt takes in string. so, we need to convert in a Number
// let userGuess = +prompt("Guess a number")
// console.log(typeof userGuess) ;

// if(userGuess === winNumber){
//     console.log("Your guess is right !!")
// }else{
//    if(userGuess < winNumber){
//     console.log("too low !!")
//    }else{
//     console.log("too high !!")
//    }
// }


// if else if else :- 

let tempInDegree = 50;

if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("weather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}


 tempInDegree = 25;

if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}


 tempInDegree = 4;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}

console.log("Examples of if else if else");


// Switch statement :-
let day = 6;
switch(day){
    case 0:
        console.log("Sunday");
        break ;
    case 1:
        console.log("Monday")
        break ;
    case 2:
        console.log("Tuesday") ;
        break ;
    case 3:
        console.log("Wednesday")
        break ;
    case 4:
        console.log("Thursday") ;
        break ;
    case 5:
        console.log("Friday") 
        break ;
    case 6:
        console.log("saturday") ;
        break ;
    case 7:
        console.log("Week ends")
        break ;
    default:
        console.log("Invalid day")
}

// DRY (don't repeat yourself)

// While loop :-  
let i = 0 ;
while(i<=5){
   console.log(i)
   i++ ; 
} 
console.log(`current value of i is ${i}`)

// Example:1 - Sum of first 10 natural numbers
let num = 10 ;
let total = 0 ;
i = 0 ;

while(i<=num){
    total = total + i ;
    i++    ;
} 
console.log(total) ;


// for loop :-
for (let i = 0; i<10 ; i++){
    console.log("value of i in for loop", i) ;
}


// break keyword
for(let k = 1; k<=10; k++){
    if(k === 4){
        break ;
    }
    console.log("Break at four", k) ;
}

// continue keyword : it takes the loop on start.
for(let j = 1; j<=10; j++){
    if(j === 4){
        continue ;
    }
    console.log("Skip the four", j) ;
}


// do-while loop :-
let m = 10 ;
do{
    console.log(m) ;
    m++ ;
}while(m <= 9)
console.log("value of m is", m) ;

// Question:-4=> difference between while and do while loop ?? 
// Answer=>>  The difference between while and do while loop is that in the while loop the condition is checked prior to executing
//            any statements whereas in the case of do while loop, statements are run at least once, and then the condition is verified.



//  Primitive data types :-
 let num1 = 30 ;
 let num2 = num1 ;
 console.log(num1, num2) ;
// After Incrementing num1
num1++ ;
console.log(num1, num2) ;      // 31, 30


// Reference  data types :
let array1 = ["Prakash", "Anjali"]
let array2 = array1 ;
console.log(array1, array2) ;

array1.push("Aircampus")
console.log("After pushing element to array1")

console.log(array1, array2) ;
// Both will receive aircampus



// Clonning an Array :-
let arr1 = ["item1", "item2", "item3"]
let arr2 = arr1.slice(0) ;
console.log(arr2) ;
arr1.push("Cartoons")
console.log(arr1, arr2) ;
// Or
arr2 = [].concat(arr1) ;
console.log(arr2) ;
arr1.push("songs")
console.log(arr1, arr2) ;

// ### New way ==>>>   Spread Operator (...)

let names = ["Prakash", "Shivansh", "Govind", "Abhishek"]
// for clonning using Spread Operator
let newNames = [...names]
console.log(newNames) ;

names.push("Gayatari")
console.log (names)
console.log ("after pushing new name", newNames)

// Another example
let pets = ["cow", "ox", "Buffalo"] ;
let animals = pets.slice(0).concat(["Dogs", "Goat"])
console.log (animals)

// OR using spread Operator
let birds = ["pigeon", "crow", "sparrow", "owl"]
animals = [...pets, "Lions", "Hyena", "Wild Boar", ...birds, "Tiger"]
console.log (animals) ;


// For loop in array
let fruits = ["apple", "mango", "grapes", "banana"]
for(let i=0; i<fruits.length; i++){
    console.log (fruits[i])
}

// Forof  loop in array
let fruits1 = ["apple", "mango", "grapes", "banana", "guava", "papaya", "pear"]
for(let fruits of fruits1){
    console.log (fruits)
}

// Forin  loop in array
let fruits2 = ["strawberry", "Dragon-fruit", "grapes", "banana", "guava", "papaya", "pear"]
for(let index in fruits2){
    console.log ("For-in loop", fruits2[index])
}


// Array Destructuring

const myArray = ["value1", "value2"] ;

let myvar1 = myArray[0] ;
let myvar2 = myArray[1] ;
console.log("value of myvar1", myvar1) ;
console.log("value of myvar2", myvar2) ;

// OR we can simply write as

let  [myvar3, myvar4] = myArray ;
console.log("value of myvar3 =>>", myvar3) ;
console.log("value of myvar4 =>>", myvar4) ;

// Changing the value
myvar3 = "value changed" ;

console.log("value of myvar3", myvar3) ;
console.log("value of myvar4", myvar4) ;


// Another example
const data = ["shirt", "shocks", "vegetables"]

let [pant, shoes, kitchen] = data ;
console.log(pant, shoes, kitchen) ;


// Another example
const values = ["value1", "value2", "value3", "value4", "value5"]

let [val1, val2, ...newVal] = values ;
console.log("Ist value goes into val1 =>>", val1) ;
console.log("Ist value goes into val2 =>>", val2) ;
console.log("Rest value goes into newVal using spread operator =>>", newVal) ;


// Objects :- Object is reference type

// Question -5=>    What is object in JavaScript with example?
// Answer =>>      In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. 
//                 A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.
//                 The same way, JavaScript objects can have properties, which define their characteristics. Object is reference type.





































































































































































































