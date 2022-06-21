size=parseInt(process.argv[2])
number=parseInt(process.argv[3])
num=number
let armstrong_num=0
let digit=0
let i=1
while(i<=size){
    digit=number%10
    armstrong_num=armstrong_num+(digit**size)
    number=Math.floor(number/10)
    i++
}
if(armstrong_num==num){
    console.log("yes")
}
else{
    console.log("no");
}