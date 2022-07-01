 let n=11;
 for(i=1;i<=n;i++){
  let str=''
  for(j=1;j<=n;j++){
    if(i==j || (i+j==n+1)){
        str=str+`${' * '}`
    }
         else{
            str=str+`${'   '}`
                 }
  }
  console.log(str)
 }