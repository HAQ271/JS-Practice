// 1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();  

// Answer : Output = 1 and 2 --> Because Inner Function Remembers the Value of outer Variable Functions


// 2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

// Answer : Output = 100 -> Beacuse first it outer function returns the inner function then next bracket ()
//          call that method which it returns the output of 100.


// 3. Create a button dynamically and attach a click event handler using a closure.
//    The handler should count and log how many times the button was clicked.

const btn = document.createElement("button");
btn.id = "clickBtn";
btn.textContent = "Click Me";
document.body.appendChild(btn)

function createClickHandler() {
    let count = 0; 

    return function() {
        count++;
        console.log(`Button clicked ${count} times.`);
    };
}

btn.addEventListener("click", createClickHandler());


// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier){

    return (number)=>{
        return number * multiplier
    }
}

const multiply  = createMultiplier(8)
console.log(multiply(2))
console.log(multiply(8))


// 5. What happens if a closure references an object?

// i- The object is garbage collected immediately
// ii- The object remains in memory as long as the closure exists
// iii- The object is automatically cloned
// iv- None of the Above.

// Answer : ii- (Correct) -> Because the reference remains in memory on that time till the closure exist or program exist 


// 6. Write a function factory of counter to increment, decrement,
//   and reset a counter. Use closure to refer the count value across the functuions.

function Counter(){
    let count = 0

    return {
        increment: ()=>{
            count++
            return count
        },
        
        decrement: ()=>{
            count--
            return count
        }, 

        resetCounter: ()=>{
            return count = 0
        }
    }
}

const startCounter = Counter()
console.log(startCounter.increment())
console.log(startCounter.increment())
console.log(startCounter.decrement())
console.log(startCounter.increment())
console.log(startCounter.increment())
console.log(startCounter.decrement())
console.log(startCounter.resetCounter())