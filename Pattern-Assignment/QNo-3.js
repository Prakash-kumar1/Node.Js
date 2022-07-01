let num1=5;
let c=1

for(i=1;i<=num1;i++){
  let str="";
  for(j=1;j<=i;j++){
   
    if(c<=9){
        str=str+`${c}   `
        c++
    }
    else{
        str=str+`${c}  `
        c++ 
    }
  }
  console.log(str)
}