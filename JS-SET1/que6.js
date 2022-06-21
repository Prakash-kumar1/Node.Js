n=parseInt(process.argv[2])
let i=1
while(n!=0){
    rem=n%10
    n=Math.floor(n/10)
    i++
    if(i%2==0){
        console.log(rem);
    }   
}