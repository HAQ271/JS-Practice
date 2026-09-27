// 1. What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// Answer : Output = Not Provided --> Because "nullish coalescing operator" it returns only right side
//            value when left side value is "null or undefined" 


// 2. What will happen if we try to modify a frozen object?

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// Answer : Output = Nothing Change --> Beacuse freeze method freeze the object which we cannot add 
//          modify delete an object attribute


// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name:myName, company:{name:myCompanyName,location:{city:myCity}}} = person

console.log(`My Name = ${myName}`)
console.log(`My Company = ${myCompanyName}`)
console.log(`My City = ${myCity}`)


// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const studentObj = {
    name:"Hafiz Abdul Qadir",
    age : 22,
    grades : [97.2,67.54,87.23,45.34,90.43],
    
    average: function(){
        let sum = 0;
        for(let i=0; i<this.grades.length; i++){
            sum += this.grades[i]
        }
        return sum/this.grades.length
    }
}

console.log(studentObj.name)
console.log(studentObj.age)
console.log(studentObj.grades)
console.log(studentObj.average())


// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

const bookstore = {
    inventory: {
        "JavaScript Guide": 5,
        "Clean Code": 0,
        "You Don't Know JS": 3
    },

    checkAvailability: function(bookTitle){
        if(bookTitle in this.inventory && this.inventory[bookTitle]>0){
            return `Yes This Book ${bookTitle} is Available`
        }
        else{
             return `No This Book ${bookTitle} is Not Available`
        }
    },
    
    restock: function(bookTitle, quantity){
        if(bookTitle in this.inventory){
            this.inventory[bookTitle] += quantity
        }
        else{
            this.inventory[bookTitle] = quantity
        }

        return `Successfully restocked "${bookTitle}". New stock: ${this.inventory[bookTitle]}`;
    }
}


console.log(bookstore.checkAvailability("JavaScript Guide")); 
console.log(bookstore.checkAvailability("Clean Code")); 
console.log(bookstore.restock("Clean Code", 10)); 
console.log(bookstore.checkAvailability("Clean Code")); 
console.log(bookstore.restock("Node.js Handbook", 4));


// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

// Answer :
// Object.keys() --> Only Gave the Keys of an Object Not values and return in Array Form
const user2 = {
    name: "Alice",
    age: 25,
    role: "Developer"
};

const keys = Object.keys(user2)
console.log(keys)

// Object.entries() --> Gave Both Keys and values in return in nested Array Form like [[key,valaue],[key,value]]
const user3 = {
    name: "Alice",
    age: 25,
    role: "Developer"
};

const entries = Object.entries(user3)
console.log(entries) 


// 7. How do you check if an object has a certain property?

// Answer : we can Check through the "in" Operator like "property in object" and "Object.hasOwn"

// property in Object
const user4 = { name: "Hafiz", age: 22 };

console.log("name" in user4)
console.log("toString" in user4)

// Object.hasOwn()
const user5 = { name: "Hafiz", age: 22 };

console.log(Object.hasOwn(user5, "name"));
console.log(Object.hasOwn(user5, "toString"));


// 8. What will be the output and why?

const person2 = { name: "John" };
const newPerson = person2;
newPerson.name = "Doe";
console.log(person2.name);

// Answer : Output = Doe --> Becuase it copies the reference of an Object not a Object Values


// 9. What’s the best way to deeply copy a nested object? Expalin with examples

// Answer : I think the best way to copy nested objects using structuredClone

const originalObj = {
    name: "Hafiz",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
};

const deepCopy = structuredClone(originalObj);

deepCopy.address.city = "Islamabad";

console.log(originalObj.address.city); 
console.log(deepCopy.address.city);    


// 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

// Answer

for (const { name, address, age } of users) {
    console.log(`${name} lives in ${address} and is ${age} years old.`);
}