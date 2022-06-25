// Question No.-7: Print the product of all the numbers in given range

function product(a,b,p){
    if(a<=b){
        p=p*a
        // console.log(a)
        return product(a+1,b,p)
    }
    console.log(p)
}

console.log(product(10,20,1))