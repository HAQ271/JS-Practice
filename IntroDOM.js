// 1. Find the Most Frequent Word in a Paragraph
// Consider the follwoing HTML:

// <div id="text">This is a test. This test is only a test.</div>
// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

// Hints:

// Use document.querySelector() or getElementById() to select the paragraph.
// Convert the text into an array of words.
// Use querySelector() to display the most frequent word along with the count inside another <div>.

const textElem = document.getElementById("text");
const text = textElem.textContent.toLowerCase();

const cleanText = text.replaceAll(".", "");

const textArray = cleanText.split(" ");

const countWords = textArray.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log("Word Counts:", countWords);

let maxWord = "";
let maxCount = 0;

for (let word in countWords) {
  if (countWords[word] > maxCount) {
    maxCount = countWords[word];
    maxWord = word;
  }
}

const outputDiv = document.querySelector("#output");
outputDiv.textContent = `Most frequent word: "${maxWord}" (Appears ${maxCount} times)`;

// 2. Create a zebra pattern
// Consider the following HTML:

// <ul id="cars">
//     <li>BMW</li>
//     <li>Mahindra</li>
//     <li>Audi</li>
//     <li>Toyota</li>
//     <li>Honda</li>
//     <li>Hundai</li>
//     <li>Tata</li>
//     <li>Suzuki</li>
// </ul>

// Now put alternate colors and background colors to each of the list tags. for example,

// If the BMW is in white color text, the background should be in black color.
// Then for the next car it will be reversed, the color is black and the background is white.
// Then again the next one is white color and background black
// So on.

const carsElem = document.querySelectorAll("#cars li");

carsElem.forEach((car, index) => {
  if (index % 2 === 0) {
    car.style.color = "white";
    car.style.backgroundColor = "black";
  } else {
    car.style.color = "black";
    car.style.backgroundColor = "white";
  }
});

// 3. Write different ways we can access DOM and what they returns

/*
====================================================================================================
MASTER REFERENCE: DOM SELECTION METHODS, DESCRIPTIONS, AND RETURN TYPES
====================================================================================================

| Method Name                 | Description / Purpose            | What It Returns                 | Example Code Snippet               |
|-----------------------------|----------------------------------|---------------------------------|------------------------------------|
| document.getElementById     | Selects an element by its unique | A single Element object         | const el = document.getElementById |
|                             | ID attribute.                    | (or null if not found).         | ("my-id");                         |
|-----------------------------|----------------------------------|---------------------------------|------------------------------------|
| document.querySelector      | Selects the *FIRST* element      | A single Element object         | const el = document.querySelector  |
|                             | matching any valid CSS selector. | (or null if not found).         | (".card");                         |
|-----------------------------|----------------------------------|---------------------------------|------------------------------------|
| document.querySelectorAll   | Selects *ALL* elements matching  | A static NodeList               | const items = document.querySelectorAll|
|                             | any valid CSS selector.          | (can use .forEach()).           | ("li");                            |
|-----------------------------|----------------------------------|---------------------------------|------------------------------------|
| document.getElementsByClassName| Selects all elements with a   | A live HTMLCollection           | const boxes = document.            |
|                             | specific class name.             | (updates automatically).        | getElementsByClassName("box");     |
|-----------------------------|----------------------------------|---------------------------------|------------------------------------|
| document.getElementsByTagName  | Selects all elements with a   | A live HTMLCollection           | const paragraphs = document.       |
|                             | specific HTML tag name.          | (updates automatically).        | getElementsByTagName("p");         |

====================================================================================================
CRITICAL PRO TIPS TO REMEMBER:
1. NodeList vs HTMLCollection: querySelectorAll returns a "NodeList" which supports built-in 
   methods like .forEach() directly. getElementsBy... returns a "HTMLCollection" which does NOT 
   have .forEach() unless you convert it to an array first using Array.from().
2. Live vs Static: HTMLCollections are "live" (they auto-update if elements are added/removed from 
   the DOM). NodeLists from querySelectorAll are "static" (snapshots frozen in time).
====================================================================================================
*/

/*
  =============================================================================
  DAY 17: MASTERING DOM SELECTION METHODS (REFERENCE GUIDE)
  =============================================================================

  SUMMARY COMPARISON TABLE:
  +-----------------------------------+-----------------------------------+--------------------+--------------+
  | Method                            | What It Selects                   | Return Type        | Is It Live?  |
  +-----------------------------------+-----------------------------------+--------------------+--------------+
  | document.getElementById(id)       | A single element by its unique ID | Single Element     | N/A (Single) |
  | document.querySelector(selector)  | FIRST element matching CSS rule   | Single Element     | N/A (Single) |
  | document.querySelectorAll(sel)    | ALL elements matching CSS rule    | Static NodeList    | No (Static)  |
  | document.getElementsByClassName() | All elements with a class name    | Live HTMLColl.     | Yes (Live)   |
  | document.getElementsByTagName()   | All elements with a specific tag  | Live HTMLColl.     | Yes (Live)   |
  +-----------------------------------+-----------------------------------+--------------------+--------------+


  DETAILED BREAKDOWN & EXAMPLES:

  1. document.getElementById(id)
     - Description: The fastest and most specific way to select a single element using its id attribute.
     - Returns: A single Element object, or `null` if no match is found.
     - Example:
       const header = document.getElementById("main-title");
       console.log(header); // Returns the single element with id="main-title"


  2. document.querySelector(selector)
     - Description: Selects elements using standard CSS selectors (e.g., "#id", ".class", "tag", "div > p").
     - Returns: The *first* matching Element object it encounters in the DOM, or `null`.
     - Example:
       const firstButton = document.querySelector(".btn-submit");
       const firstItem = document.querySelector("ul li");


  3. document.querySelectorAll(selector)
     - Description: Selects *all* elements matching a CSS selector. 
     - Returns: A static `NodeList`. You can loop through it directly using `.forEach()`.
     - Example:
       const allCards = document.querySelectorAll(".card");
       allCards.forEach(card => {
           card.style.border = "1px solid gray";
       });


  4. document.getElementsByClassName(className)
     - Description: Selects all elements that share a specific class name.
     - Returns: A *Live HTMLCollection*. (Note: "Live" means if elements are added/removed from the DOM later, this collection updates automatically).
     - Example:
       const boxes = document.getElementsByClassName("box");
       // Note: HTMLCollections do NOT have a .forEach() method by default. 
       // You must convert them to an array first: Array.from(boxes).forEach(...)


  5. document.getElementsByTagName(tagName)
     - Description: Selects all elements matching a specific HTML tag name (e.g., "p", "div", "li").
     - Returns: A *Live HTMLCollection*.
     - Example:
       const allParagraphs = document.getElementsByTagName("p");
       console.log(allParagraphs.length); // Total number of <p> tags on the page

  =============================================================================
*/

// 4. Find and Replace Text Inside a Page
//    Write a script that finds all occurrences of a word inside
//    a <p> tag and replaces them with another word dynamically.

const myParagraphElem = document.querySelector("#my-paragraph");
const targetWordElem = document.querySelector("#target-word");
const replaceWordElem = document.querySelector("#replacement-word");
const replaceBtn = document.querySelector("#replace-btn");

replaceBtn.addEventListener("click", () => {
  const paraContent = myParagraphElem.textContent;
  const paraArray = paraContent.split(" ");

  const targetContent = targetWordElem.value;
  const replaceContent = replaceWordElem.value;

  if (targetContent === "") {
    alert("Please enter a word to find!");
    return;
  }

  paraArray.forEach((word, index) => {
    if (word.toLowerCase() === targetContent.toLowerCase()) {
      paraArray[index] = replaceContent;
    }
  });

  const newPara = paraArray.join(" ");
  myParagraphElem.textContent = newPara;
});

// 5. Extract and Count Unique Links from a Page
//    Count all the unique hyperlinks (<a>) in a page and display their count.

const countBtnElem = document.querySelector("#count-btn");
const countDisplayElem = document.querySelector("#link-count-display");

countBtnElem.addEventListener("click", () => {
  const links = document.querySelectorAll("a");
  const uniqueLinks = new Set();

  links.forEach((link) => uniqueLinks.add(link.href));

  countDisplayElem.textContent = `Total unique links found: ${uniqueLinks.size}`;
});
