// finding Area of Rectangle using Anoynomous IIFE Function

let ans = (function  (length,breadth){
    let area = length*breadth
    return area ;
})(12,10)
  console.log (ans)