// T-001: Create an array of 5 elements using the Array Constructor.

const array1 = Array(1,2,3,4,5)
console.log(array1)

// T-002: Create an array of 3 empty slots.

const array2 = Array(3)
console.log(array2)

// T-003: Create an array of 6 elements using the Array literals and
//        access the fourth element in the array using its length property.

let array3 = [1,2,3,4,5,6]
console.log(array3[array3.length - 3])

// T-004: Use the for loop on the above array to print elements in the odd index.

for(i=1; i<array3.length; i+=2){
    console.log(array3[i])
}

// T-005: Add one element at the front and the end of an array.

array3.unshift(0)
array3.push(7)

console.log(array3)

// T-006: Remove an element from the front and the end of an array.

console.log(`Remove element from first : ${array3.shift()}`)
console.log(`Remove element from last : ${array3.pop()}`)
console.log(array3)

// T-007: Create an array containing the name of your favourite foods(10 foods).
//        Destructure the 6th food element from the array using destructuring.

let array4 = ["Biryani","Karahi","Pizza","Zinger Burger","Platter","Shami Burger","Broast","Russian Chart","Tawa Chicken","Nihari"]
const [,,,,,favouriteFood] = array4
console.log(favouriteFood)

// T-008: Take out the last 8 food items from the above array using the Array destructuring.
//        Hint: rest parameter.

const [,,...restFoods] = array4
console.log(restFoods)

// T-009: Clone an Array(Shallow cloning)

const cloneArray = [...array4]
console.log(cloneArray)

// T-010: Empty an array using its length property

array4.length = 0
console.log(array4)

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to
//         length 6 once you find the number 5 in that array. Hint: Use for-loop.

let array5 = [1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<array5.length; i++){
    if(array5[i] == 5){
        array5.length = 6
        break
    }
}

console.log(array5)


// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

let array6 = [1,2,3,4,5,6,7,8,9,10]
array6.splice(0,array6.length)
console.log(array6)

// T-013: Create an Array of 10 elements. You can empty the array in multiple ways:
//        using the length property, using the pop() method, using the shift() method, 
//        setting the array with [], or the splice() method. Which among these methods are 
//        most efficient and why?

// Answer : I think the most Efficient method to empty an array using length  or setting array with [] then splice
//          --> It directly remove the elements at once not required to perform method multiple times

// T-014: What happens when you concatenate two empty arrays?

// Answer : It combine both arrays properly in seqence manner --> Like --> array1.concate(array2) or [...[],...[]]
//          and returns a complete new array 

// T-015: How can you check if a value is partially matching with any of the elements of an Array?

// Answer : To check for a partial match, we cannot use array.includes() because it checks for 
//          an exact match. Instead, we use the array.some() method combined with string.includes(). 
//          The some() method tests whether at least one element in the array passes the condition.

let array7 = ['apple', 'banana', 'orange'];
let searchKeyword = 'app';

let isPartialMatch = array7.some(element => element.includes(searchKeyword));

console.log(isPartialMatch); // Output: true

// T-016: What is the difference between the slice() and splice() methods?

// Answer : slice() --> method give the part or slice of an array, how much we want
//          splice() --> method is used for removing, adding or replacing and element in the array

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders.
//        You must be doing this in an immutable way such that the source array never gets modified.

let array8 = ["Hafiz12","Ahmed34","Bilal45","Ali56","Nayab67","Junaid78","Mutahir89"]
const ascendingSort = array8.toSorted()
console.log(ascendingSort)

const descendingSort = array8.toSorted((a, b) => {
    if (a < b) return 1    // If 'a' is smaller than 'b', move 'b' first
    if (a > b) return -1   // If 'a' is bigger than 'b', keep 'a' first
    return 0;              // If they are equal, do nothing
})

console.log(descendingSort)
console.log(array8)

// T-018: Can you give examples of sparse and dense arrays?

// 1. Dense Array: Every index has a dedicated value (no holes).
const denseArray = ["apple", "banana", "cherry"];
console.log("Dense Array:", denseArray);

// 2. Sparse Array: Contains completely empty slots (holes) in memory.
const sparseArray = ["apple", , "cherry"]; // Index 1 is completely empty
console.log("Sparse Array:", sparseArray); 

// T-019: Give a practical usages of the .fill() method

// Practical Usage: Instantly creating a blank game board (like Tic-Tac-Toe) 
// filled with placeholder strings before the game starts.
const blankBoard = Array(9).fill(""); 
console.log("Initialized Board:", blankBoard); 

// T-020: How to convert an array to a string?

const fruits = ["Apple", "Banana", "Orange"];

// Method A: Using .join() (Best practice - lets you choose the separator)
const sentence = fruits.join(" and ");
console.log("Using join():", sentence); // Output: "Apple and Banana and Orange"

// Method B: Using .toString() (Simple - always separates elements with a comma)
const basicString = fruits.toString();
console.log("Using toString():", basicString); // Output: "Apple,Banana,Orange"

// ========================================================================================================

// Consider these input arrays for question T-21 to T-48

// employees array: An array of emplyees working in a department.

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

// departments array: An array of departments where employees work.

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// T-021: Can you filter employees who work in the "Engineering" department?

const engineerEmployees = employees.filter((employee) => {
    if(employee.departmentId === 2){
           return employee
    }
})

console.log(engineerEmployees)

// T-022: Create a new array that combines employee names and department names
//        in the format: "Alice (HR)".

const employeeNamesModification = employees.map((employee) =>{
    const findDept = departments.find(dept => dept.id === employee.departmentId)
    const deptName = findDept ? findDept.name : "Unknown Department"
    return `${employee.name} (${deptName})`
})

console.log(employeeNamesModification)

// T-023: Find the highest salary among employees.

const highestSalary = employees.reduce((highest, current) => {
    return current.salary > highest ? current.salary : highest;
}, employees[0].salary);

console.log(highestSalary);

// T-024: Check if there is at least one employee in the "Sales" department.

const checkSalesEmployee = employees.some((employee) =>{
    return employee.departmentId === 4
})

console.log(checkSalesEmployee)

// T-025: Write a function to filter employees earning more than 6000.

const employeeMoreThan6000 = employees.filter((employee) => {
    return employee.salary > 6000
})

console.log(employeeMoreThan6000)

// T-026: Create an array of employee names only.

const employeeNames = employees.map((employee) =>{
    return employee.name
})

console.log(employeeNames)

// T-027: Calculate the total salary of all employees using

const totalSalaryofEmployees = employees.reduce((total,empSalary) =>{
    return total + empSalary.salary
},0)

console.log(totalSalaryofEmployees)

// T-028: Is there any employee earning less than 5000?

const employeeLessThan5000 = employees.some((employee) =>{
    return employee.salary < 5000
})

console.log(employeeLessThan5000)

// T-029: Find the first employee who earns exactly 5100.

const employeeEarns5100 = employees.find((employee) =>{
    return employee.salary === 5100
})

console.log(employeeEarns5100)

// T-030: Find the last employee in the "HR" department.

const lastHRdepartmentEmployee = employees.findLast((employee) =>{
    return employee.departmentId === 1
})

console.log(lastHRdepartmentEmployee)

// T-031: Find the first employee in the "Marketing" department.

const firstMarketingDepartmentEmployee = employees.find((employee) =>{
    return employee.departmentId === 3
})

console.log(firstMarketingDepartmentEmployee)

// T-032: Check if all employees earn more than 4000.

const allEmployeesEarnMoreThan4000 = employees.every((employee) =>{
    return employee.salary > 4000
})

console.log(allEmployeesEarnMoreThan4000)

// T-033: Find the first employee in the "Sales" and "HR" department.

const firstHRorSales = employees.find(employee => 
    employee.departmentId === 1 || employee.departmentId === 4
);

console.log(firstHRorSales);


// T-034: Verify if all employees belong to a department listed in the departments array.

const checkAllEmployeesDept = employees.every(employee => 
    departments.some(dept => dept.id === employee.departmentId)
);

console.log(checkAllEmployeesDept);

// T-035: Log each employee's name and department name to the console.

const logEmployeeNameAndDept = employees.forEach((employee) =>{
       
    const findDeptName = departments.find(dept => dept.id === employee.departmentId)
    console.log("============================================================")
    console.log(`Employee Name = ${employee.name}`)
    console.log(`Employee Department Name = ${findDeptName.name}`)
})


// T-036: Extract all employee names into a single array.

const allEmployeeNames = employees.map(employee => employee.name)
console.log(allEmployeeNames)

// T-037: Increment each employee's salary by 10%

const incrementedSalaryEmployees = employees.map(employee => ({
    ...employee, 
    salary: employee.salary * 1.10
}));

console.log(incrementedSalaryEmployees);
console.log(employees); 

// T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
//        Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employeesWithSkills = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000, skills: ["Excel", "Management"] },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000, skills: ["JavaScript", "React", "Node.js"] },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500, skills: ["SEO", "Copywriting"] },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500, skills: ["Recruiting", "Communication"] },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000, skills: ["Python", "AWS", "Docker"] },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000, skills: ["Salesforce", "Negotiation"] },
  { id: 7, name: "George", departmentId: 3, salary: 5200, skills: ["Google Analytics", "Content Strategy"] },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200, skills: ["Cold Calling", "CRM"] },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800, skills: ["Java", "SQL"] },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100, skills: ["Onboarding", "Conflict Resolution"] },
];

const employeeSkills = employeesWithSkills.flatMap(employee => employee.skills)
console.log(employeeSkills)

// T-039: Find the total salary of all employees working in the "Engineering" department.

const totalSalaryEngineeringEmployee = employees.reduce((totalSalary,currentEmp) =>{
    if (currentEmp.departmentId === 2){
        return totalSalary + currentEmp.salary
    }

    return totalSalary
},0)

console.log(totalSalaryEngineeringEmployee)

// T-040: Check if there is any department where all employees earn more than 5000.

const deptMorethan5000 = departments.find((dept) => {

    const deptEmployees = employees.filter(emp => emp.departmentId === dept.id);

    return deptEmployees.every(emp => emp.salary > 5000);
});

console.log(deptMorethan5000)

// T-041: Assume each employee has a projects array
//        (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
//        Find the total number of unique projects being handled across all employees.

const employeesWithProjects = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000, projects: ["Project Alpha", "Project Beta"] },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000, projects: ["Project Gamma", "Project Delta"] },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500, projects: ["Project Epsilon"] },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500, projects: ["Project Alpha", "Project Zeta"] },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000, projects: ["Project Gamma", "Project Theta", "Project Delta"] },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000, projects: ["Project Iota"] },
  { id: 7, name: "George", departmentId: 3, salary: 5200, projects: ["Project Epsilon", "Project Kappa"] },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200, projects: ["Project Iota", "Project Lambda"] },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800, projects: ["Project Delta"] },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100, projects: ["Project Beta", "Project Mu"] },
];

const flatprojects = employeesWithProjects.flatMap(empProjects => empProjects.projects)
const uniqueProjects = flatprojects.filter((project,index) =>{
    return flatprojects.indexOf(project) === index
})

console.log(`Total Number : ${uniqueProjects.length}`)
console.log(uniqueProjects)

// T-042: For each employee, find their department name and return
//        an array of employee names with their department names.

const employeeWithDept = employees.map((employee) =>{

    const findDept = departments.find(dept => dept.id === employee.departmentId)

    return {
        "Employee Name": employee.name, 
        "DepartmentName": findDept ? findDept.name : "Unknown" 
    };

})

console.log(employeeWithDept)

// T-043: Get a list of names of employees earning more than 6000.

const empMoreThan6000 = employees.filter(employee => employee.salary > 6000)
                         .map(employee => employee.name)

console.log(empMoreThan6000)

// T-044: Write a for-of loop to print the names of all employees from the employees array.

for (const employee of employees){
    console.log(employee.name)
}

// T-045: Using a for-of loop, print the names of employees earning more than 5000.

for (const employee of employees){
    if (employee.salary > 5000){
         console.log(employee.name)
    }
}
 
// T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

for (const {name,salary} of employees){
    console.log(`Name = ${name} --> Salary ${salary}`)
}

// T-047: Write a for-of loop to match employees with their departments and print the results

for (const employee of employees){
    for(const dept of departments){
        if (employee.departmentId === dept.id){
            console.log(`${employee.id} --> ${employee.name} --> ${dept.name} --> ${employee.salary}`)
        }
    }
}

// T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

for (const [index, employee] of employees.entries()){
    console.log(`${index} --> ${employee.name}`);
}

//T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(arrayLike[1])

// T-050: Write a function that takes a variable number of arguments and converts the
//        arguments object into a real array using Array.from.

function convertToArrayLike(){
    const realArray = Array.from(arguments)
    return realArray  
}

const realArray = convertToArrayLike(1,2,3,4,5,6,7,8,9,10)
console.log(realArray)

//T-051: Write a snippet to select all div elements on a webpage 
//       (using document.querySelectorAll) and convert the resulting NodeList into an array.

const divNodeList = document.querySelectorAll("div");
const divArray = Array.from(divNodeList);

// Alternative Expert Way (Using the Spread Operator):
// const divArray = [...divNodeList];

console.log(divArray); 

// T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1,...arr2]
console.log(arr3)

// T-053: Create an array of n duplicate values using Array.from.
//        Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

const array9 = Array.from({length : 5}, () => "A")
console.log(array9)

// T-054: Use Array.from to convert a string like "Hello" into an array of characters.

const array10 = Array.from("Hello")
console.log(array10)

// T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'],
//        group words by their first letter using group().

const array11 = ['apple', 'banana', 'apricot', 'mango', 'blueberry']
const groupByArray11 = Object.groupBy(array11,(fruit) => fruit[0])
console.log(groupByArray11)

// T-056: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

const numbers = [3, 7, 3, 2, 3, 8, 7, 7]

const countNumber = numbers.reduce((count,currentNumber) =>{
    count[currentNumber] = (count[currentNumber] || 0) + 1
    return count
},{})

let mostRepeated = null;
let maxCount = 0;

for (const num in countNumber) {
    if (countNumber[num] > maxCount) {
        maxCount = countNumber[num];
        mostRepeated = num;
    }
}

console.log(`The most repeated number is: ${mostRepeated} (it appears ${maxCount} times)`);

// T-057: Find the median of [5, 2, 9, 1, 3, 6, 8].

const medianArray = [5, 2, 9, 1, 3, 6, 8]
const sortArray = medianArray.sort((a,b) => a-b)
const midElement = Math.floor(sortArray.length/2)

if(sortArray.length % 2 == 0){
    const medianElement = (sortArray[midElement - 1] + sortArray[midElement]) / 2
    console.log(medianElement) 
}
else{
    console.log(sortArray[midElement])
}

// T-058: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

const array12 = [['a', 1], ['b', 2], ['c', 3]]
const objFromEntries = Object.fromEntries(array12);
console.log(objFromEntries)

// T-059: Flatten and convert all letters to uppercase in one step using flatMap(). 
//        Here is input array: [['a', 'b'], ['c', 'd']].

const array13 = [['a', 'b'], ['c', 'd']]
const uppercaseArray = array13.flatMap(subArray => 
    subArray.map(char => char.toUpperCase())
);

console.log(uppercaseArray);

// T-060: Count the occurrences of each fruit in this array:
//        ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']


const array14 = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
const countOccurrences = array14.reduce((acc,fruit) =>{
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
},{})
console.log(countOccurrences) 

// T-061: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const array15 = ['a', 'b', 'c', 'd', 'e']
const sliceArray = array15.slice(1,4)
console.log(sliceArray)

// T-062: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

const array16 = [9, 3, 1, 6, 8]
const sortArray16 = array16.toSorted((a,b) => a-b)
console.log(sortArray16)

// T-063: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()


const array17 = [1, 2, 3, 4, 5]
const reverseArray17 = array17.toReversed()

console.log(reverseArray17)
console.log(array17)
console.log(array17 === reverseArray17)


// T-064: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

const groupUsers = Object.groupBy(users,(user) => user.age > 18 ? "Adult" : "Non-Adult")
console.log(groupUsers)

// T-065: Find the longest word in this sentence using Array and Array methods:
//        "40 Days of JavaScript by tapaScript is a powerful initiative".

let array18 = "40 Days of JavaScript by tapaScript is a powerful initiative"
array18 = array18.split(" ")

const longestWord = array18.reduce((lWord,currentWord) =>{
    return lWord.length < currentWord.length ? currentWord : lWord
},array18[0])

console.log(longestWord)

// T-066: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

const array19 = [1,2,3,4]
const array20 = [3,4,5,6]
const commonElements = array19.filter((num) =>{
    return array20.includes(num)
})
console.log(commonElements)
