// // Use for loops to iterate a specific number of times.

// for (let i=15; i>=0; i--)
//  {
//      console.log(i);
//  }

// // Use for of loops to iterate through iterable data-like strings.
// const myNumbers = [14, 24, 35, 14, 23, ];
// for (const item of myNumbers) {
//     console.log(item);
// }

// // Use while loops to iterate based on a condition.
// let num = 100, count = 0;
// while (num % 5 === 0) {
//     count++;
//     num /= 5;
//     console.log(num)
// }
// console.log(`count is ${count}`)



// // Use the break and continue statements to control loop flow.
// let i = 0;
// while (i < 10) {
//     if (i == 4) {
//         i++; 
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// for (let i=100; i>=0; i--)
//  {
//      console.log(i);
//  }
// If a number is divisible by 3, log “Fizz.”
// for(i=1;i<=20;i++){
//     if(i %3 ===0)
//         console.log("Fizz");
//     }

// If a number is divisible by 5, log “Buzz.”
// for(i=1;i<=20;i++){
//     if(i %5 ===0)
//         console.log("Buzz");
//     }

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// for(i=1;i<=20;i++){
//     if(i %5===0 && i %3===0)
//     console.log("FizzBuzz");
//     }

// If a number is not divisible by either 3 or 5, log the number.



for (num = 20; num <=20; num++)
        {     
        
            if (num % 3 == 0 && num % 5 == 0)
                console.log(num + " ");
        }
    
// Remember to commit your solution once it is working.
