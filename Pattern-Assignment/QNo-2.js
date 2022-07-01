let n=3;
for(i=1;i<=n;i++){
 let str=''
 for(j=n;j>i;j--){
   str=str+`${'   '}`
 }
 for(k=1;k<(i*2);k++){
  str=str+" * "
 }
 console.log(str)
}