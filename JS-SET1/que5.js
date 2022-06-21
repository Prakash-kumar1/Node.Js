let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])
let p = 1
for(let i=a;i<=b;i++){
  let check=Math.floor(i/10)
  if(i%2==0 && check%10==4){
    p=p*i
  }
}  
if(p==0){
  console.log(0)
}
 console.log(p)