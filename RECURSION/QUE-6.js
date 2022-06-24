function digit(num,count){
    if(num>0){
        count++;
        num = Math.floor(num / 10);
        return digit(num,count);
    }
    console.log(count);
}
digit(789536,0)
