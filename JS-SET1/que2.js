// Question No.-2: Print the sum of all even numbers in a range from a to b. (Including a,b)

sum=0 ;
a=parseInt(process.argv[2]) ;
b=parseInt(process.argv[3]) ;
for(let i=a; i<=b; i++){

    sum=sum+i ;
    
}
console.log(sum)