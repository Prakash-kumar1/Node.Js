// Question-2: Given a number n, print numbers from 1 to n using recursion.

function loop(i,n){
    if(i<n){
        console.log(i)
        return loop (i+1,n)
    }
}
loop(1,12)