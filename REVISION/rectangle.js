//  Question no - 3: finding Area of Rectangle using Anoynomous IIFE Function ??

let ans = (function  (length,breadth){
    let area = length*breadth ;
    return area ;
})(10,10)

  console.log (ans) ;

  // it will just print 10,10 just run on terminal.
  console.log (10,10) ;