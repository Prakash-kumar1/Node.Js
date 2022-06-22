// Nested Function of Multiplication

function b(x,y){
    return x*y ;
}
function a(d,e){
    return b(d,e);
}
// console.log(a(5,7)) ;

function c(){
    return a(10,7);
}
console.log(c()) ;



// Using setTimeout and setInterval function


// function c(){
//     console.log("Hello World")
//     console.log("Hello Prakash")
//     console.log("I Am The Best")
// }
// setTimeout(c,300);
// setInterval(c,30000)