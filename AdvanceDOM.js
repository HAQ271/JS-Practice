// 1. Traverse and Toggle Classes

// Build a navigation menu. On click of a list item:

// Traverse up to parent <ul>
// Remove .active class from all <li>
// Add .active only to the clicked <li>

const navMenu = document.querySelector(".nav-menu")

navMenu.addEventListener("click", (event) => {

    const clickedLi = event.target.closest("li")
    if (!clickedLi) return 

    const parentUl = clickedLi.parentElement

    const allLis = parentUl.querySelectorAll("li")
    allLis.forEach(li => li.classList.remove("active"))

    clickedLi.classList.add("active")
})


// 2. Highlight Text Using Range

// Use the Range API to highlight a portion of a paragraph by wrapping it with a <mark> tag.

const highlightBtn = document.querySelector("#highlight-btn")

highlightBtn.addEventListener("click", () => {
    const quoteElem = document.querySelector("#quote")
    const textNode = quoteElem.firstChild; 
    const markElem = document.createElement("mark")

    const textContent = textNode.textContent
    const targetPhrase = "quick brown fox"

    const startIndex = textContent.indexOf(targetPhrase)
    
    const endIndex = startIndex + targetPhrase.length

    const range = document.createRange()
    range.setStart(textNode, startIndex)
    range.setEnd(textNode, endIndex)

    range.surroundContents(markElem)
})

// 3. Use DocumentFragment for Performance

// Insert 100 list items into the DOM using:

// Plain DOM methods (one by one)
// DocumentFragment (all at once)

const plainBtn = document.querySelector("#plain-btn")
const fragmentBtn = document.querySelector("#fragment-btn")
const clearBtn = document.querySelector("#clear-btn")    
const perfTimerElem = document.querySelector("#perf-timer")
const perfListElem = document.querySelector("#perf-list")

plainBtn.addEventListener("click", (event) => {
    event.stopPropagation()
    perfListElem.innerHTML = ""

    const startTime = performance.now()

    for (let i = 0; i < 100; i++) {
        const createLiElem = document.createElement("li")
        createLiElem.textContent = `Li Content Item`
        perfListElem.append(createLiElem)
    }

    const endTime = performance.now()
    const totalTime = (endTime - startTime).toFixed(2)

    perfTimerElem.textContent = `Time Taken (Plain DOM): ${totalTime}ms`
})

fragmentBtn.addEventListener("click", (event) => {
    event.stopPropagation()
    perfListElem.innerHTML = ""

    const createFragment = document.createDocumentFragment()
    const startTime = performance.now()

    for (let i = 0; i < 100; i++) {
        const createLiElem = document.createElement("li")
        createLiElem.textContent = `Li Content Item`
        createFragment.append(createLiElem)
    }
    
  
    perfListElem.append(createFragment)

    const endTime = performance.now()
    const totalTime = (endTime - startTime).toFixed(2)
    
    perfTimerElem.textContent = `Time Taken (Fragment): ${totalTime}ms`
})

clearBtn.addEventListener("click", (event) => {
    perfListElem.innerHTML = ""
    perfTimerElem.textContent = "Time Taken : 0ms"
})


// 4. Build a “Smart Cloner”

// Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false)
// and show the difference visually.

const sourceCard = document.querySelector("#source-card")
const shallowBtn = document.querySelector("#shallow-btn")
const deepBtn = document.querySelector("#deep-btn")
const clearCloneBtn = document.querySelector("#clear-clone-btn")
const cloneOutput = document.querySelector("#clone-output")

shallowBtn.addEventListener("click", () => {
    const shallowClone = sourceCard.cloneNode(false)
    shallowClone.className = "cloned-item"
    shallowClone.innerHTML = "<strong>Shallow Clone (Children dropped!)</strong>"
    cloneOutput.appendChild(shallowClone)
})


deepBtn.addEventListener("click", () => {
    const deepClone = sourceCard.cloneNode(true)
    deepClone.className = "cloned-item"
    
    deepClone.removeAttribute("id")

    cloneOutput.appendChild(deepClone)
})

clearCloneBtn.addEventListener("click", () => {
    cloneOutput.innerHTML = ""
})


// 5. MutationObserver Watcher

// Create a div and use MutationObserver to log whenever:

// A new child is added
// The class attribute changes
// Text is modified


const addChildBtn = document.querySelector("#add-child-btn")
const changeClassBtn = document.querySelector("#change-class-btn")
const changeTextBtn = document.querySelector("#change-text-btn")

const observeTargetElem = document.querySelector("#observer-target")
const observerLogUL = document.querySelector("#observer-log")

const observer = new MutationObserver((mutationList) => {
    // Clear the "Waiting for mutations..." placeholder on first change
    if (observerLogUL.children.length === 1 && observerLogUL.children[0].style.color === "rgb(136, 136, 136)") {
        observerLogUL.innerHTML = ""
    }

    for (const mutation of mutationList) {
        const newLi = document.createElement("li")

        if (mutation.type === "childList") {
            newLi.textContent = "Mutation: A new child node was added or removed!"
            newLi.style.color = "#007bff"
        } 
        else if (mutation.type === "attributes") {
            newLi.textContent = `Mutation: Attribute '${mutation.attributeName}' changed!`
            newLi.style.color = "#28a745"
        } 
        else if (mutation.type === "characterData") {
            newLi.textContent = "Mutation: Text content was modified!"
            newLi.style.color = "#dc3545"
        }

        observerLogUL.appendChild(newLi)
    }
})

const config = {
    childList: true,      
    attributes: true,      
    characterData: true,   
    subtree: true          
}

observer.observe(observeTargetElem, config)

addChildBtn.addEventListener("click", () => {
    const createElem = document.createElement("p")
    createElem.textContent = "Yeh Content Add Kiya Hy"
    observeTargetElem.append(createElem)
})

changeClassBtn.addEventListener("click", () => {
    observeTargetElem.classList.toggle("highlighted")
})

changeTextBtn.addEventListener("click", () => {
    observeTargetElem.firstChild.textContent = "Yeh Text Change Kiya hy"
})