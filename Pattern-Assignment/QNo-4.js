let a=0;
let b=1;
let i=1;
let x=5

for(j=1;j<=x;j++){
    let str=""
for(k=1;k<=j;k++){
    while(i<=((j*(j+1)/2))){
        // console.log(a)
        str=str+`${a} `
        c=a+b ;
        a=b  ;
        b=c  ;
        i++  ;
    } 
}
console.log(str) ;
}