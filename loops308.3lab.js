// Use for loops to iterate a specific number of times.

for (let i=15; i>=0; i--)
 {
     console.log(i);
 }

// Use for of loops to iterate through iterable data-like strings.
const myNumbers = [14, 24, 35, 14, 23, ];
for (const item of myNumbers) {
    console.log(item);
}

// Use while loops to iterate based on a condition.
let num = 100, count = 0;
while (num % 5 === 0) {
    count++;
    num /= 5;
    console.log(num)
}
console.log(`count is ${count}`)



// Use the break and continue statements to control loop flow.
let i = 0;
while (i < 10) {
    if (i == 4) {
        i++; 
        continue;
    }
    console.log(i);
    i++;
}