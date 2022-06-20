function sumofsquareofDigits(num){
    let sum = 0 
    while(num != 0){
        let rem = num%10;
        sum += rem**2;
        num = Math.floor(num/10);
    }
    return sum ;
}
let ans =  sumofsquareofDigits(49) ;
console.log(ans);
console.log(sumofsquareofDigits(491))
console.log(sumofsquareofDigits(4151))
console.log(sumofsquareofDigits(78991))