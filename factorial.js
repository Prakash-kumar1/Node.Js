// Print Factorial number program
let a = 1 ;
let i = parseInt(process.argv[2]) ;
if (a == 0 || a == 1){
    console.log(a);
    }else{
     for(let i = a ; i >=1; i--){
        a = a * i ;
     }   
console.log(a);
   }
             



