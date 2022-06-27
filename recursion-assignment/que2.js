// Question No.-2: Print all the numbers in descending order in the given range

function allNumber(a,b){
    if(a<=b){
        console.log(b)
        return allNumber(a,b-1)
    }
}
console.log(allNumber(190,200)) ;
console.log(allNumber(10,20)) ;