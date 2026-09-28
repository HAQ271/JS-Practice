// 1. What will be the output of the following code?

try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}

// i-   ReferenceError
// ii-  SyntaxError
// iii- TypeError
// iv-  No error, it prints 10

// Answer : i (Correct) --> It gave Reference Error --> Because p is defined or declare in any above code.


// 2. Write a function processPayment(amount) that checks if the amount is positive
//    and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount){
    if(amount<=0 || amount>balance){
        throw new Error("Amount Should be Positive and not exceed Balance")
    }

    return balance-amount
}

let balance = 1000

try{
   amount = -45
   const myAmount = processPayment(amount)
   console.log(`Remaining Amount = ${myAmount}`)
}
catch(error){
     console.log(error.message)
}


// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

// UserError
// PaymentError
// ServerError
// EmailError

function UserError(message){
    this.message = message
    this.name = "UserError"
}

function PaymentError(message){
    this.message = message
    this.name = "PaymentError"
}

function ServerError(message){
    this.message = message
    this.name = "ServerError"
}

function EmailError(message){
    this.message = message
    this.name = "EmailError"
}


// 4. Simulate an API call function fetchData(url). If the URL does not start
//    with "https", throw an "Invalid URL" error. Handle it using try...catch


function fetchData(url){
    if (!url.startsWith("https")){
        throw new Error("Invalid URL")
    }

    return "Here is Your Requested Data"
}

try{
    const requestedData = fetchData("amazon.com")
    console.log(requestedData)
}
catch(error){
    console.log(error.message)
}


// 5. Implement a custom error type ValidationError using constructor functions to
//    handle form validation errors
// Example:

// const userInput = { username: "", age: -2 };
// validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number


function ValidationError(message){
    this.message = message
    this.name = "ValidationError"
}

function validateUser(user){
    if (user.username === ""){
        throw new ValidationError("Username cannot be empty")
    }
    if (user.age <=0){
          throw new ValidationError("Age must be a positive number")
    }

    return true
}

try{
    const userInput = { username: "", age: -2 };
    if(validateUser(userInput)){
       console.log("User is Validated Correctly")
   }
}
catch(error){
   console.log(`${error.name} : ${error.message}`)
}



// 6. Write a function readFile(filePath) that simulates reading a file.
//  If the file does not exist (simulate with a condition),
//  throw a "File not found" error. Handle the error with try...catch. 
// Make sure you have code to handle releasing the IO resources

// Please note, you do not have to implement the actual IO operation here. 
// Just use the console.log to simulate them.

function readFile(filePath) {
    console.log(`-> Opening connection to: ${filePath}`);
    
    try {
        if (filePath !== "value.txt") {
            throw new Error("File Not Found");
        }
        return "Here is Your File Data: Hello World!";
    } 
    finally {
        console.log("<- Releasing IO resources / Closing file connection.");
    }
}

try {
    const data = readFile("noValue.txt");
    console.log(data);
} catch (error) {
    console.log("Caught Error:", error.message);
}


// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse().
//    If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
    try {
        JSON.parse(str)
        return "Your JSON Data Parsed Correctly"
    } 
    catch (error) {
        return "Invalid JSON"
    }
}

console.log(parseJson('{"name": "Hafiz"}')) 
console.log(parseJson("Hafiz Abdul Qadir")) 


// 8. What is the purpose of throw in JavaScript?

// It catches an error
// It stops the execution of a program
// It creates a new error manually
// It prints an error message

// Answer : It Creates a new error manually --> and pass to the catch block to caught the error.


// 9. What does the finally block do in a try...catch statement?

// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not
// Stops the execution of the script


// Answer : Runs regardless of whether an error occurs or not --> Beacuse it uses for releasing the resources
//          from the program


// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

/**
 * ============================================================================
 * JAVASCRIPT ERROR HANDLING REFERENCE TABLE
 * ============================================================================
 * 
 * | Keyword / Object | Purpose & Description                        | Example Scenario                      |
 * |------------------|----------------------------------------------|---------------------------------------|
 * | try              | Wraps risky code that might fail.            | Parsing incoming JSON from an API.    |
 * | catch            | Handles the error if one occurs in `try`.    | Fallback behavior when JSON is invalid.|
 * | throw            | Manually generates a custom error.           | Validating if a user's age is negative.|
 * | rethrow          | Passes a caught error up to the caller.      | Logging an error locally, then aborting.|
 * | Error Object     | Built-in object with .name and .message.     | Creating a new Error('Invalid input').|
 * 
 * ============================================================================
 * WORKING CODE EXAMPLES
 * ============================================================================
 */

// 1. THE ERROR OBJECT & THROWING CUSTOM ERRORS

function validateAge(age) {
    if (typeof age !== 'number') {
        // Throwing a native Error object with a custom message
        throw new TypeError("Age must be a number");
    }
    if (age < 0 || age > 120) {
        throw new RangeError("Age must be between 0 and 120");
    }
    return "Age is valid!";
}

// 2. TRY, CATCH, AND RETHROW DEMONSTRATION

function processUserData(rawJsonString) {
    try {
        // Risky operation: Parsing JSON
        const user = JSON.parse(rawJsonString);
        
        // Risky operation: Custom validation that might throw
        validateAge(user.age);
        
        console.log("User processed successfully:", user.name);
    }
    catch (error) {
        // Catching the error to inspect it locally
        console.error(`[Local Logger]: Caught an error -> ${error.name}: ${error.message}`);
        
        if (error instanceof SyntaxError) {
            console.log("-> Action: Handling bad JSON specifically.");
        }
        else {
            // RETHROWING: We cannot handle this business logic error here, 
            // so we pass it up to the parent function/global handler.
            throw error; 
        }
    }
}

// ============================================================================
// EXECUTION TESTS
// ============================================================================

console.log("--- Test 1: Valid Data ---");
try {
    processUserData('{"name": "Alice", "age": 25}');
} 
catch (e) {
    console.log("Global handler caught:", e.message);
}

console.log("\n--- Test 2: Rethrowing Example (Invalid Age) ---");
try {
    // This will throw a RangeError inside, log it locally, and rethrow it here
    processUserData('{"name": "Bob", "age": 150}');
}
catch (e) {
    console.log("-> Global handler successfully caught the RETHROWN error:", e.message);
}

