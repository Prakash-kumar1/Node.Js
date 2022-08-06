//  Question-10 : Given a number n, print all the even numbers from 1 to n using recursion.

function odd(n,i){
    if(i<=n){
        if(i%2==0){
            console.log(i) ;
        }
        return odd(n,i+1) ;
    }
}
console.log(odd(20,1)) ;