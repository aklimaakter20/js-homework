// 1 no 
function calculateAverage(num) {
    let sum = 0;
    let avgNumber = 0;
    for ( let i = 0; i < num.length; i++){
        sum += num[i]
    }
    return avgNumber = sum / num.length
}
let array = [12,45,78,23]
console.log(calculateAverage(array));

// 2 no 
function isEven(num){
  
    if (num % 2 == 0){
        return number = " even"
    }else{
        return number = " odd"
    }
}
console.log(isEven(34));

// 3 no

function findMax(array) { 
    let i; 
    let max = array1[0]; 

    for (i = 1; i < array1.length; i++) {
        if (array1[i] > max) 
            max = array1[i]; 
    } 
     
    return max; 
} 

let array1 = [4,16,1,9,23];
console.log("Largest in given array is " + findMax(array1));

//  4 no

function concatString(string1,string2){
   
}
let string1 = "Frontend";
let string2 = "Development";
console.log(string1.concat(' ',string2));

 
// 5 no

function factorial(num)
{
    let fact = 1;
    for (let i = 1; i <= num; i++)
        fact *= i;
    return fact;
}


let num = 6;
console.log("Factorial of " + num + " is " + factorial(6));