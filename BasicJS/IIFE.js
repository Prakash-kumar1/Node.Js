// functions are Ist class citizens means we can pass into a variable.

function a(x,y){
    return x+y
}
// passing "a" function into "b" variable
let b = a;
console.log(b(6,7)) ;