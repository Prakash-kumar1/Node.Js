// Question No.-8:  Write the recursive function to check whether a given number is prime or not.

function prime(no,i){

    if(i<no){
        if(no%i==0){
            return( no+" is Not a Prime Number") ;
        }
        else {
            return prime(no,i+1) ;
        }
    }
    return (no+" is A Prime Number") ;
}

console.log(prime(23,2)) ;
console.log(prime(22,2)) ;
console.log(prime(29,2)) ;
console.log(prime(50,2)) ;
