// 1. Create a Dynamic Tabbed Interface
// Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content. It mimics real-world use like dashboards, profile settings, or pricing plans.

// Functional Requirements
// ✅ Clicking a tab title shows the corresponding content.

// ✅ Only one tab content is visible at a time.

// ✅ The active tab should have a visual highlight.

// ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.

// Example:

// document.addEventListener("keydown", (e) => {
//     if (e.key === "1") switchToTab(1);
//     if (e.key === "2") switchToTab(2);
//     if (e.key === "3") switchToTab(3);
//     });
// ✅ Use event delegation to handle tab clicks.

// ✅ Use classList to manage active state.

// ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).

// ✅ Use stopPropagation() if needed during advanced control.

// Basic HTML Structure
// <div class="tabs">
//   <div class="tab-headers">
//     <button class="tab active" data-tab="1">Home</button>
//     <button class="tab" data-tab="2">About</button>
//     <button class="tab" data-tab="3">Contact</button>
//   </div>
//   <div class="tab-contents">
//     <div class="content active" data-tab="1">Welcome to Home</div>
//     <div class="content" data-tab="2">About us page here.</div>
//     <div class="content" data-tab="3">Contact info displayed here.</div>
//   </div>
// </div>

const tabElem = document.querySelectorAll(".tab")
const contentElem = document.querySelectorAll(".content")

function switchToTab(tabId) {
  tabElem.forEach((tab) => tab.classList.remove("active"))
  contentElem.forEach((content) => content.classList.remove("active"))

  const targetTab = document.querySelector(`.tab[data-tab = "${tabId}"]`);
  const targetContent = document.querySelector( `.content[data-tab = "${tabId}"]`)

  targetTab.classList.add("active");
  targetContent.classList.add("active");

  const tabChangeEvent = new CustomEvent("tabChange", {
    detail: { tabId: tabId },
  });

  document.dispatchEvent(tabChangeEvent)
}

const tabHeadersElem = document.querySelector(".tab-headers")

tabHeadersElem.addEventListener("click", (event) => {
  const pressTab = event.target.closest(".tab")

  if (!pressTab) return

  const tabId = pressTab.dataset.tab
  switchToTab(tabId)
});

document.addEventListener("keydown", (event) => {
  if (event.key === "1") switchToTab(1)
  if (event.key === "2") switchToTab(2)
  if (event.key === "3") switchToTab(3)
});

document.addEventListener("tabChange", (event) => {
  console.log(`Tab changed to ID: ${event.detail.tabId}`)
})
