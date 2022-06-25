// Question No.-5: Find the nth digit of the fibonacci series.

function num(n,y,i,nth){
  if(i<nth){
        console.log (n)
        let c=n+y
    return num(y,c, i+1,nth)
  }
  console.log (n)
}
console.log(num(1,1,1,12))