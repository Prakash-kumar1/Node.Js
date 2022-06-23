// Question-4 : Print ‘n’ numbers of Fibonacci series using recursion.

function range(a,b,count){
    console.log(a);
    if(count<10){
        let c = a+b ;
        return range(b,c,count+1)
    }
}
range(1,1,1)