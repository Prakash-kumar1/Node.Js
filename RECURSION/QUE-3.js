// Question-3: Given a number n, print numbers from n to 1 using recursion.


function num(n,i){
    if(i<=n){
        console.log(n)
        return num(n-1,i)
    }
}
console.log(num(10,1))