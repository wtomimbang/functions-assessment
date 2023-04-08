/*Part 1: Define a function named firstLetterName. It should take a string name as a parameter and alert the message 
"The name <NAME> starts with the letter <FIRSTLETTEROFNAME>
HINT: to get a single character of a string, you can use bracket syntax like you used to access array elements

Part 2:  Define a function divisibleByTwo. It should take a single parameter number and determine whether the number input 
is an even or odd number. If it's even, the function should return true. If it's odd, the function should return false.
HINT: You'll need to use the % operator.

Part 3:  Define a function named largestNum. It should take an array arr as a parameter and loop through that array. 
The function should return the largest number in the array.

Part 4: After defining all the functions, call each function at the bottom of the JavaScript file with the appropriate arguments.
*/

function firstLetterName(name) {     
  alert("The name " + name + " starts with the letter "+ name[0]);
 
}
 

function divisibleByTwo(x) {
    if (x % 2 ===0){
        console.log ("true");
    }
    else {
        console.log ("false");
        
     }
  }
  

function largestNum(arr) 
{
  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) { 
      max = arr[i];
    }
    
  }
  console.log (max); // code returns max but using console.log for testing
}
//function calls - arguments added to test codes.
firstLetterName("Mary");
divisibleByTwo(7); 
largestNum([3,6,2,8,11]);  