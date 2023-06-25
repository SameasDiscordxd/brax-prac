var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
    for (let i = 0; i < numbers.length; i++) {
        if ( numbers[i] > -1 ){
            countPositives++
        }
    }
console.log("there are " + countPositives + " positive values");
