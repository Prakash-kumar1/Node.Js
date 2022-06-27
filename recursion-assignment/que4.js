// Question No.-4: Find the factorial of a given number n.

function fact(no,p){
    if(no>0){
        p=p*no
        return fact(no-1,p)
    }
    console.log(p)
}
console.log(fact(3,1));
console.log(fact(5,1));