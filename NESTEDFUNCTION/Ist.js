// Nested Function of Multiplication

function b(x,y){
    return x*y ;
}

function a(b){
    return b(5,7);
}

console.log(a(b)) ;


// Using setTimeout and setInterval function


function c(){
    console.log("Hello World")
    console.log("Hello Prakash")
    console.log("I Am The Best")
}
setTimeout(c,300);
setInterval(c,30000)