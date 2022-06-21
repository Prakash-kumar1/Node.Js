// passing function into another function ;
// a is a higher order function beacause it accepts and returns the function

function b(x,y){
    return x+y ;
}

function a(b){
    return b(5,7);
}

console.log(a(b)) ;