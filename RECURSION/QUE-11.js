// Question-11 : Write a javascript program to check whether the given string is palindrome or not using recursion.

function p(no,sum ,new_no){
        // new_no= no
        if(no!=0){
            let r=no%10
            sum=sum*10+r
            no=Math.floor(no/10)
            return p(no,sum,new_no)
        }
        console.log(sum)
    
        if(new_no==sum){
            return "palindrome"
        }
        else{
            return "not a palindrome"
        }
    }
    console.log(p(121,0,121))