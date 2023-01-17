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


const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);


// how to add key value pair to objects
person["person"] = "male";
console.log(person);

person.brother = "Prakash" ;
console.log(person);

//####==>>>  I want to add this key in objects
const key = "email" ;

person[key] = "harshi8745@gmail.com" ;
console.log(person) ;


// How to iterate objects : Iteration object done by two methods :
//                       1:- for in loop    2:- Object.keys

let data1 = {
    name : "Prakash kumar",
    age : 23,
    student : "Aircampus",
    job : "Frontend Developer"
}

for(let key in data1){
// it gives all key 
    console.log(key) ;

// it gives all value
    console.log(data1[key])

// we can also write this way, it will give key-value pair
    console.log(`${key} => ${data1[key]}`)
}

// We can use these methods also for iteration :-
console.log(Object.keys(data1))
console.log(Object.values(data1))
console.log(Object.entries(data1))


// Spread operator: it will spread elements
let newArr = [..."abc"] ;
console.log(newArr) ;

 newArr = [..."123gsjhgsdj43547684j"] ;
console.log(newArr) ;


// Spread operator in Objects :-

const obj1 = {
    key1 : "value11" ,
    key2 : "value12" ,
} ;

const obj2 = {
    key3 : "value14" ,
    key4 : "value15" ,
}

// const newObj = {...obj1, ...obj2 }
const newObj = {...obj1, ...obj2, name: "anjali", branch: "Electric"}
console.log(newObj) ;


// Object Destructuring

const band = {
    bandName: "Led zeppline",
    song: "stairway to heaven",
    year: 1978,
    otherSong: "kashima is mine",
    album: "Despacito",
    singer: "Louis fonsi",
    plateform: "You Tube",
    company: "Google",
    ceo: "Sunder pitchai",
    country: "America",
};

let ourBand = band.bandName ;
let famousSong = band.song ;
console.log(ourBand, famousSong)

const {bandName, otherSong} = band ;
console.log(bandName, otherSong) ;

const {ceo, singer,  ...restProps} = band ;
console.log(restProps) ;


// @@###$$%%%==>>  Objects Inside Array 

const users = [
    {userId: 1, fname: "harshit", lname: "Vashitha", gender: "male"} ,
    {userId: 2, fname: "Gayatri", lname: "Bhagwat", gender: "Female"} ,
    {userId: 3, fname: "Madhur", gender: "Transgender"} ,
]

for(let user of users){
    console.log(user) ;
    console.log(user.userId) ;
    console.log(user.lname) ;
}


// nested destructuring 
const usersData = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [user1, user2, user3] = usersData ;
console.log(user2) ;

// if i want user1 name and user3 gender
// const [{firstName}, , {gender}] = usersData;

// We can also change the name

const [{firstName: user1firstName}, , {gender: user3gender}] = usersData;
console.log(user1firstName);
console.log(user3gender);


// @@@@####$$$$%%^^&&&***==>>  Functions  @@@@####$$$$%%^^&&&***==>>

// Question:-7     what is function in javascript ??
// Answer =>>       A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, 
//                 but for a procedure to qualify as a function,it should take some input and 
//                  return an output where there is some obvious relationship between the input and the output.


console.log(undefined + undefined);       // Not a number (NaN)
console.log(undefined * undefined);       // Not a number (NaN)
console.log(2 + 4 + undefined);           // Not a number (NaN)


// Question:-8  print First character of any string ??
function firstChar(string){
    return string[0] ;
}
console.log(firstChar("Rajesh"))


// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray1 = [1,3,8,90,56,78,23,98,12,45]
const ans = findTarget(myArray1, 4);
console.log(ans);


// Difference between Function Declaration and Function Expression:

//  	Function Declaration	                                                 Function Expression
// 1.	A function declaration must have a function name.	            A function expression is similar to a function declaration 
//                                                                     without the function name.
// 2.	Function declaration does not require a variable assignment. 	Function expressions can be stored in a variable assignment.
// 3.	These are executed before any other code.	                    Function expressions load and execute only when the program interpreter reaches the line of code.
// 4.	The function in function declaration can be accessed before 	The function in function expression can be accessed only after 
//     and after the function definition.                              the function definition.
// 5.	Function declarations are hoisted	                            Function expressions are not hoisted
// 6.	Syntax: function geeksforGeeks(paramA, paramB)               	Syntax: var geeksforGeeks= function(paramA, paramB) { // Set of statements }
//     { // Set of statements }


// Hoisting :=> Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. 

hello() ;

function hello(){
    console.log("an example of Hoisting")
}

//  functions inside function 
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();


// Question:-8 =>>   What is Lexical Scope in JavaScript? 
// Answer =>>      Lexical scope is the definition area of an expression. IOW, an item's lexical scope is the place in which 
                //    the item got created.
//              Lexical Environment is the environment of the function where it is written. 

// Example :- 
const myVar = "<<=>>> value1 in global scope outside of function <<=>>>" ;

// when JS don't get value of myVar then it serached into myApp Lexical Environment which is Global scope
function myApp(){
    // const myVar = "<<=>>> value1 in myApp <<=>>>" ;
     
// when JS don't get value of myVar then it serached into myFunc Lexical Environment which is myApp
    function myFunc(){
        // const myVar = "value45 in myFunc" ;
        console.log("Inside myFunc --->>>", myVar)
    }

    console.log(myVar) ;
    myFunc() ;
}

myApp() ;



// / block scope vs function scope 


// let and const are block scope but var is function scope 

// In case of var
{
    var firstNam = "harshit";
    console.log(firstNam);
}
console.log(firstNam);


// In case of let and const
{
   let lastNam = "bhardwaj";
    console.log(lastNam);
}

// console.log(lastNam);   // it gives error because let can be only access in Block


function myBlock(){
    if(true){
        var firstName = "Shivansh Rawat";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myBlock();


// default parameters 

function addTwo(a,b=0){
    return a+b;
}

const ans1 = addTwo(4, 8);
const ans2 = addTwo(4);
console.log(ans1);
console.log(ans2);


//  rest parameters 

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(3,4,5,6,7,8,9);


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans3 = addAll(4,5,4,2,10);
console.log(ans3);























































































































