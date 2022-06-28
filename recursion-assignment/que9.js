// Question No.-9: Print sum of all the first 10 even numbers.

function sum(a,i,s){
    if(i<=10){
        if(a%2==0){
            s=s+a
            return sum(a+1,i+1,s)
        }
        return sum(a+1,i,s) ;
    }
    console.log(s) ;
}

console.log(sum(1,1,0)) ;