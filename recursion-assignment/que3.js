// Question No. -3: Print all the even numbers in the given range

function evenNumber(a,b){
    if(a<=b){
        if(a%2==0){
            console.log(a)
        }
        return evenNumber(a+1,b)
    }
}

console.log(evenNumber(10,30))