"use strict"

/*1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10*/

   let n = 4; 
   let num = "";
   let count = 1;

    for (let i = 1; i <= n; i++) {
  
       for (let j = 1; j <= i; j++) {
           num += count;
             count++;
    }
    num += "\n";
  }
   console.log(num);




/*2. Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153*/ 

function armstrong(n){
   let number = new String(n)

   n = number.length
   let output = 0
   for(let i of number)
    output = output + parseInt(i)**n

     if (output == parseInt(number))
       return("True")
    else
       return("False")
}

console.log(armstrong(153));


/*3. Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14 */


function factorial(n1)
{
    let fact = 1;
      
    while (n1 != 0)
    {
        fact = fact * n1;
        n1--;
    }
      
    return fact;
}

function isSpecialNumber(n1)
{
    let sum = 0;
      
   
    let temp = n1;
      
    while (temp != 0)
    {
        sum = sum + factorial(temp % 10);
          
        temp = parseInt(temp / 10);
    }
      
    
    return sum == n1;
}
  

   let n1 = 145;
  
   if (isSpecialNumber(n1))
     console.log("True");
   else
     console.log("False");

  