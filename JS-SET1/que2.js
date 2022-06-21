sum=0
a=parseInt(process.argv[2])
b=parseInt(process.argv[3])
for(let i=a; i<=b; i++){
    sum=sum+i
}
console.log(sum)