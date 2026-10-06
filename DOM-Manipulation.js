// 1. Create a form dynamically using JavaScript and manipulate its behavior

// Add input fields dynamically based on user selection e.g., text, email, number
// Add a submit button that logs all the input values as an object.
// Add a reset button that clears the form.
// Use createElement, appendChild, setAttribute, and addEventListener.

const formContainer = document.getElementById("form-container")

const selectionDiv = document.createElement('div')
const optionsArray = ['Text', 'Number', 'Email']
const selectElem = document.createElement('select')
const addFieldBtn = document.createElement('button')

addFieldBtn.textContent = "Add Field"
addFieldBtn.type = "button"

optionsArray.forEach((option) => {
    const value = option.toLowerCase()
    selectElem.add(new Option(option, value))
})

selectionDiv.appendChild(selectElem)
selectionDiv.appendChild(addFieldBtn)
formContainer.appendChild(selectionDiv)

const formElem = document.createElement('form')
formContainer.appendChild(formElem)

const buttonContainer = document.createElement('div')
buttonContainer.style.marginTop = "15px"

const submitBtn = document.createElement('button')
submitBtn.type = "submit"
submitBtn.textContent = "Submit Form"

const resetBtn = document.createElement('button')
resetBtn.type = "button"
resetBtn.textContent = "Reset Form"
resetBtn.style.marginLeft = "10px"

buttonContainer.appendChild(submitBtn)
buttonContainer.appendChild(resetBtn)
formElem.appendChild(buttonContainer)

function addInputField() {
    const currentValue = selectElem.value
    
    const fieldWrapper = document.createElement('div')
    fieldWrapper.style.marginBottom = "10px"

    const labelElem = document.createElement('label')
    labelElem.textContent = currentValue.charAt(0).toUpperCase() + currentValue.slice(1) + ": "

    const inputElem = document.createElement('input')
    
    inputElem.setAttribute('type', currentValue)
    inputElem.setAttribute('placeholder', `Enter Your ${currentValue}`)
    inputElem.setAttribute('name', currentValue)
    inputElem.required = true 

    fieldWrapper.appendChild(labelElem)
    fieldWrapper.appendChild(inputElem)
    
    formElem.insertBefore(fieldWrapper, buttonContainer)
}

addFieldBtn.addEventListener('click', addInputField)

function submitDetails(event) {
    event.preventDefault() 

    const allInputsElem = formElem.querySelectorAll('input')

    if (allInputsElem.length === 0) {
        alert("Please add at least one input field before submitting!")
        return
    }

    const tempObj = {}

    allInputsElem.forEach((input, index) => {
        const key = `${input.name}_${index + 1}`
        tempObj[key] = input.value
    })

    console.log("Submitted Form Data:", tempObj)
    formElem.reset()
}

formElem.addEventListener('submit', submitDetails)

function resetFormFields() {
    const allFieldWrappers = formElem.querySelectorAll('div')
    
    allFieldWrappers.forEach(div => {
        if (div !== buttonContainer) {
            div.remove()
        }
    })
}

resetBtn.addEventListener('click', resetFormFields)


// 2. Add, delete, and search rows in a dynamic table

// A form to add rows (Name, Age, Role).
// Each row should have a “Delete” button to remove it.
// Add a search input that filters the rows by name.
// Use insertRow, deleteRow, and textContent/innerText.

const addFormElem = document.querySelector("#add-form")
const nameInputElem = document.querySelector("#name-input")
const ageInputElem = document.querySelector("#age-input")
const roleInputElem = document.querySelector("#role-input")
const searchInputElem = document.querySelector("#search-input")
const tableBodyElem = document.querySelector("#table-body")

function addRow(event) {
  
    event.preventDefault()


    const nameContent = nameInputElem.value.trim()
    const ageContent = Number(ageInputElem.value)
    const roleContent = roleInputElem.value.trim()

    if (ageContent < 0 || ageContent > 120) {
        alert("Age is not valid. Please enter a valid age between 0 and 120.")
        return
    }


    const newRow = tableBodyElem.insertRow()

    const nameCell = newRow.insertCell(0)
    const ageCell = newRow.insertCell(1)
    const roleCell = newRow.insertCell(2)
    const deleteCell = newRow.insertCell(3)

    nameCell.textContent = nameContent
    ageCell.textContent = ageContent
    roleCell.textContent = roleContent

  
    const deleteRowBtn = document.createElement("button")
    deleteRowBtn.textContent = "Delete"
    deleteRowBtn.className = "delete-btn" 

    deleteRowBtn.addEventListener('click', function () {
        newRow.remove() 
    })

    deleteCell.appendChild(deleteRowBtn)

    addFormElem.reset()
}


addFormElem.addEventListener('submit', addRow)

searchInputElem.addEventListener('input', function (event) {

    const searchQuery = event.target.value.toLowerCase()
    const allRows = tableBodyElem.querySelectorAll('tr')

    allRows.forEach(row => {
        
        const nameCellText = row.cells[0].textContent.toLowerCase()
        
       
        if (nameCellText.includes(searchQuery)) {
            row.style.display = ""
        }
         else {
            row.style.display = "none"
        }
    })
})


// 3. Theme Switcher with Persistence

// Toggle theme using a button or switch.
// Persist the theme in localStorage and apply on page load.
// Change background and text color based on the theme.

const themeToggleBtn = document.querySelector("#theme-toggle-btn")

const checkTheme = localStorage.getItem("theme")

if (checkTheme === 'dark') {
    document.body.classList.add('dark-mode')
    themeToggleBtn.textContent = '☀️ Light Mode'
}
else {
    themeToggleBtn.textContent = '🌙 Dark Mode'
}


function changeTheme(event) {
    document.body.classList.toggle('dark-mode');

    const checkDark = document.body.classList.contains('dark-mode');

    if (checkDark) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode'
    }
    else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode'
    }
}

themeToggleBtn.addEventListener('click', changeTheme)