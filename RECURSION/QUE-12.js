// Question-12 : Given a number n, find 2^n using recursion.

function power(n,i){
    if(i<=n){
         p=2**i
    return (power(n,i+1))
    }
   
    return p
    
}
console.log(power(3,0))
