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



// for (num = 20; num <=20; num++)
//         {     
        
//             if (num % 3 == 0 && num % 5 == 0)
//                 console.log(num + " ");
//         }
    
// Remember to commit your solution once it is working.


// Write a script that accomplishes the following:
// Declare an arbitrary number, n.

// let n = 40, count = 0;
// while (n % 2 === 0) {
//     count++;
//     num /= 2;
//     console.log('count is ', count)
// }


// Create a loop that searches for the next prime number, starting at n and incrementing from there.

// As soon as you find the prime number, log that number and exit the loop.
// let n = 1;
// while (n < 10) {
//     console.log(n);
//     n += 2;
// }
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// let num = 20, count = 0;
// while (num % 2 === 0) {
//     count++;
//     num /= 4;
//     console.log(num);
// }

// ? I dont know how to get the 7 and so fourth. What am I doing wrong?
// let num = 20, count = 0;
// while (num % 2 === 0) {
//     count++;
//     num /= 5;
//     console.log(num)
// }

let num = 20, count = 0;
while (num % 2 === 0) {
    count++;
    num /= 9;
    console.log(num)
}

// Be careful! If you set n to a number too large, your loop could take a long time to process.