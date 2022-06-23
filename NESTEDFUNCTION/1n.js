function loop(i,n){
    if(i<=n){
        console.log(i);
        return loop(i+1,n);
    }
    return i ;
}
console.log(loop(1,10) , "From outside of function")