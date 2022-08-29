//Question no - 6: Factorial function passing into Multiple variable ??

function facto(num){
    let fact = 1 ;
    for(let i=num; i>0; i--){           
        fact*= i ;
    }
    return fact
}                                 
//  Function are Ist class citizens it means we can pass into variable

   let b = facto ;
   console.log(b(5)) ;
   console.log(b(2)) ;
   console.log(b(3)) ;

   let c = facto ;
   console.log(c(4))

   let d = facto ;
   console.log(d(3))