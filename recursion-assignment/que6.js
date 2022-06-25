// Question No.-6:  Print sum of all the numbers in the given range.

function sum(a,b,s){
    if(a<=b){
        s=s+a
        return sum(a+1,b,s)
    }
    console.log(s)
}

console.log(sum(10,20,0))