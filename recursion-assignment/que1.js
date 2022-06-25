//Question no. 1: Print all the numbers in the given range.


function allNumber(a,b){
    if(a<=b){
        console.log(a)
        return allNumber(a+1,b)
    }
}
console.log(allNumber(10,20))