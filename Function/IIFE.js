// This is a Immediately Invoked Function Expression (IIFE).

let ans = (function sumofsquareofDigits(num){
    let sum = 0 
    while(num != 0){
        let rem = num % 10;
        sum += rem**2
        num = Math.floor(num/10);
    }
    return sum ;
})(49)
// let ans =  sumofsquareofDigits(49) ;
console.log(ans)