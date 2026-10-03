// Expense Tracker Project
// You have just finished the module 2. You have learned many important concepts
// till the session(day) 16. It is time to put everything together and do a project.

// Project Requirements
// Create a simple expense tracker where user can add, remove, edit, and categorize expenses.

// Please Note: This will be a console-based project (no DOM), focusing only on JavaScript logic.

// Features to Implement
// Create a createExpenseTracker() function that takes a username and an initial budget
// to expose the following functioanlities:

// Adding Expense
// Removing Expense
// Updating Expense
// Getting total expenses done by the user
// Getting expense by category
// Get the Highest Expense
// Get the Lowest Expense
// Get the user info
// Show all the expenses
// Update User data

// Please make use of the factory function, closure to keep data private and return only
// the required features/methods.

// Sample User Data Structure
//  user: {
//     name: "Tapas",
//     budget: 5000,
//   },

// Sample Expense Data Structure
// expenses: [
//     { id: 1, amount: 200, category: "Food", description: "Lunch" },
//     { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
// ],

function createExpenseTracker(userName, initialBudget) {
  let id = 0;

  const user = {
    name: userName,
    budget: initialBudget,
  };

  let expenses = [];

  return {
    addExpense: function (amount, category, description) {
      const newExpense = {
        id: ++id,
        amount: amount,
        category: category,
        description: description,
      };

      expenses.push(newExpense);
      return newExpense;
    },

    removeExpense: function (id) {
      const findIdIndex = expenses.findIndex((expense) => expense.id === id);

      if (findIdIndex !== -1) {
        const removed = expenses.splice(findIdIndex, 1);
        return `Successfully removed expense with ID: ${id}`;
      } else {
        return `Expense not found with ID: ${id}`;
      }
    },

    updateExpense: function (id, amount, category, description) {
      const expenseObject = expenses.find((expense) => expense.id === id);

      if (expenseObject !== undefined) {
        expenseObject.amount = amount;
        expenseObject.category = category;
        expenseObject.description = description;
        return `Successfully Update expense with ID: ${id}`;
      } else {
        return `Expense not found with ID: ${id}`;
      }
    },

    totalExpense: function () {
      const totalExpense = expenses.reduce((total, object) => {
        return total + object.amount;
      }, 0);

      return totalExpense;
    },

    expenseByCategory: function (category) {
      const categoryExpense = expenses.filter(
        (expense) => expense.category.toLowerCase() === category.toLowerCase(),
      );

      return categoryExpense;
    },

    highestExpense: function () {
      if (expenses.length === 0) return "No expenses recorded.";

      const highest = expenses.reduce((max, expense) => {
        return expense.amount > max.amount ? expense : max;
      }, expenses[0]);

      return highest;
    },

    lowestExpense: function () {
      if (expenses.length === 0) return "No expenses recorded.";

      const lowest = expenses.reduce((min, expense) => {
        return expense.amount < min.amount ? expense : min;
      }, expenses[0]);

      return lowest;
    },

    userInfo: function () {
      console.log(`======== User Info ========`);
      console.log(`User Name : ${user.name}`);
      console.log(`User Initial Budget : ${user.budget}`);
      console.log(`======== User Expenses ========`);
      expenses.forEach((expense) => {
        console.log(`=====================`);
        console.log(`Expense ID : ${expense.id}`);
        console.log(`Expense Amount : ${expense.amount}`);
        console.log(`EXpense Category : ${expense.category}`);
        console.log(`Expense Description : ${expense.description}`);
      });
    },

    allExpenses: function () {
      if (expenses.length === 0) {
        return "No expenses recorded yet.";
      }

      console.log(`======== ALL Expenses ========`);
      expenses.forEach((expense) => {
        console.log(`---------------------`);
        console.log(`Expense ID : ${expense.id}`);
        console.log(`Expense Amount : ${expense.amount}`);
        console.log(`Expense Category : ${expense.category}`);
        console.log(`Expense Description : ${expense.description}`);
      });
    },

    updateUser: function (name, budget) {
      user.name = name;
      user.budget = budget;
      console.log(`User is Update SucessFully`);
      console.log(`======== User Info Now ========`);
      console.log(`User Name : ${user.name}`);
      console.log(`User Initial Budget : ${user.budget}`);
    },
  };
}

// ==========================================
// 1. INITIALIZING MULTIPLE TRACKERS
// ==========================================
console.log("--- Creating Trackers ---");
const tracker1 = createExpenseTracker("Tapas", 5000);
const tracker2 = createExpenseTracker("Alice", 3000);

// ==========================================
// 2. TESTING TRACKER 1: ADDING EXPENSES
// ==========================================
console.log("\n--- Testing addExpense (Tracker 1) ---");
tracker1.addExpense(200, "Food", "Lunch");
tracker1.addExpense(1500, "Shopping", "New Shoes");
tracker1.addExpense(450, "Food", "Dinner");
tracker1.addExpense(100, "Transport", "Bus Ticket");

// Show all expenses for Tracker 1
tracker1.allExpenses();

// ==========================================
// 3. TESTING TRACKER 1: USER INFO
// ==========================================
console.log("\n--- Testing userInfo (Tracker 1) ---");
tracker1.userInfo();

// ==========================================
// 4. TESTING TRACKER 1: CALCULATIONS & ANALYTICS
// ==========================================
console.log("\n--- Testing Total, Category, Highest, Lowest ---");

// Total Expense
console.log("Total Expense:", tracker1.totalExpense()); // Should be 2250

// Expense By Category
console.log("Food Expenses:", tracker1.expenseByCategory("Food"));

// Highest Expense
console.log("Highest Expense:", tracker1.highestExpense()); // Should be Shopping - 1500

// Lowest Expense
console.log("Lowest Expense:", tracker1.lowestExpense()); // Should be Transport - 100

// ==========================================
// 5. TESTING TRACKER 1: UPDATE & REMOVE
// ==========================================
console.log("\n--- Testing updateExpense & removeExpense ---");

// Update expense with ID 1
console.log(tracker1.updateExpense(1, 250, "Food", "Big Lunch with Friend"));

// Remove expense with ID 4 (Transport)
console.log(tracker1.removeExpense(4));

// View expenses after updates/removals
tracker1.allExpenses();
console.log("New Total Expense:", tracker1.totalExpense());

// ==========================================
// 6. TESTING TRACKER 1: UPDATE USER
// ==========================================
console.log("\n--- Testing updateUser (Tracker 1) ---");
tracker1.updateUser("Tapas Kumar", 7000);

// ==========================================
// 7. PROVING ISOLATION (Multiple Trackers)
// ==========================================
console.log("\n--- Testing Tracker 2 (Isolation Check) ---");
tracker2.addExpense(50, "Coffee", "Morning Latte");

console.log("Tracker 2 User Info & Expenses:");
tracker2.userInfo();

console.log("\nTracker 1 Expenses (Should NOT contain Alice's Coffee):");
tracker1.allExpenses();
