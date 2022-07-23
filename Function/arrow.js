// This is a Arrow Function.

let sumofsquareofDigits = (num) => {
    let sum = 0 
    while(num != 0){
        let rem = num%10;
        sum += rem**2;
        num = Math.floor(num/10);
    }
    return sum ;
}
let ans =  sumofsquareofDigits(49) ;
console.log(ans)
console.log(sumofsquareofDigits(491))

// this keyword in arrow function

let obj = {
    firstname : "santosh",
    lastname  : "gond" ,
    age : 33,
    getfullName : function(){
        console.log(this.firstname , this.lastname);
    },
    getarrowName : function(){
        fname : "rinki" ,
        console.log(this) ,
        console.log(this.fname , this.lastname);
    }
}
obj.getfullName() ;
obj.getarrowName() ;