// question 1 ; To find factorial of a number using function

function facto(num){
    let fact = 1 ;
    for(let i = num; i>0; i--){
        fact*=i;
    }
      return fact 
}
let ans = facto(5);
let x = facto(4);
let y = facto(3);
console.log(ans);
console.log(x);
console.log(y);