// 1.1. Write a program to find the sum and average of all elements in an array.

let Tests = [1,23,44,42,44,22,44,55];
let sum=0, average;
Tests.forEach(function(Test){
    //  console.log(`subejects: ${index +1} = ${Test} `);
    sum+=Test;
});
average = (sum / Tests.length).toFixed(2);
// console.log(average);
//  console.log(`iskudarka waa : ${sum} , averagekiisan waa ${average}`);


//2. Remove duplicates from an array using a Set.
let setnumbers = new Set(Tests);
// console.log(Tests);
// console.log(setnumbers);


//3. Write a function that checks if a given element exists in an array using a loop.
function checksElementExist(arr, element){
    for(let i = 0; i<Tests.length; i++){
        if(arr[i] === element){
            return true
        }
    }
    return false
}
// console.log(checksElementExist(Tests, 33));


//4. Create a program that sorts an array of numbers in ascending and descending order.
function sort(a, b){
    return a,b
}
// console.log(Tests.sort());

//5. Write a program to merge two arrays and remove duplicates
let number1 = [1, 2,3,4,5,8,3,7,10,3 ];
let number2 = [6,7,8,9,10,5,6];
let numbers = number1.concat(number2);
let uniqueNumbrs = new Set(numbers);
// console.log(numbers);
// console.log(uniqueNumbrs);


// 6. Find the intersection of two arrays (common elements) using Set.
let Newset = new Set([1,2,3,4,5]);
// console.log(uniqueNumbrs.symmetricDifference(Newset));

//7. Write a program to find the largest and smallest numbers in an array.
function max_numbers(arr){
    let max= arr[0];
    let min = arr[0];
    for(let i = 0; i<arr.length; i++){
        if( arr[i] > max ){
           max = arr[i];
        } 
        if(arr[i] < min){
            min = arr[i]
        }
        
    }
    return {min,max};
    
}
let arr = [1,2,3,5,6,75,6,8];
console.log(max_numbers(arr));
