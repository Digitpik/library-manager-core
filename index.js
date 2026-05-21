// 1. Core Data Repository
const library = [
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "How to find the right audience and build a business in public.",
    pages: 310
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about: "An easy and proven way to build good habits and break bad ones.",
    pages: 320
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "The ultimate guide to starting, running, and bootstrapping a business.",
    pages: 490
  }
];

// 2. Functional Core Processing Modules
function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
}

function getBookSummaries(catalog) {
  return catalog.map(book => book.about).join("\n");
}

function getBooksByAuthor(catalog, authorName) {
  return catalog.filter(book => book.author === authorName);
}

function getTotalPages(catalog) {
  return catalog.reduce((acc, curr) => acc + curr.pages, 0);
}

// 3. Execution Pipeline & DOM Injection
// This checks if the script is running inside a browser window before rendering
if (typeof document !== 'undefined') {
    // Render formatted string layouts
    document.getElementById('catalog-list').textContent = getBookInformation(library);
    document.getElementById('summaries-list').textContent = getBookSummaries(library);
    
    // Render filtered queries as clean stringified JSON structures
    const filteredBooks = getBooksByAuthor(library, "Arvid Kahl");
    document.getElementById('filter-author').textContent = JSON.stringify(filteredBooks, null, 2);
    
    // Render statistical metrics computations
    document.getElementById('total-pages').textContent = `${getTotalPages(library)} Total Pages Calculated`;
}

// Keep standard workshop logging intact for backend terminal testing
console.log("--- System Diagnostics Output ---");
console.log(getBookInformation(library));
console.log(getTotalPages(library));
