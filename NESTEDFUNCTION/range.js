function range(a,b){
    console.log(a);
    while(a<b){
        return range(a+1,b);
    }
}
range(40,50)