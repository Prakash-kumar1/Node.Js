// Question No.-10: Write a recursive program to find the power of given number and exponent.
//  (without using Math.pow and exponent operator(**)).

function power(no,exp,ans){
    if(exp>0){
        ans=ans*no
        return (power(no,exp-1,ans)) ;
    }
    console.log(ans) ;
}

console.log(power(2,4,1)) ;