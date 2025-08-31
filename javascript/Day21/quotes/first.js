const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" }
];

let index = 0;
const textEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteBox = document.querySelector(".quote-box");

// Colors for background transitions
const colors = ["#f4f4f9", "#e0f7fa", "#ffe0b2", "#dcedc8", "#f8bbd0", "#c5cae9"];
let colorIndex = 0;

function showQuote() {
  // fade out
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    const { text, author } = quotes[index];
    typeWriter(text, textEl, () => {
      authorEl.textContent = `— ${author}`;
    });
    // fade in
    quoteBox.style.opacity = 1;
  }, 600);

  index = (index + 1) % quotes.length;
}

// Typing effect
function typeWriter(text, element, callback) {
  element.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

// Background color changer
function changeBackground() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

// Auto-change quote every 4 sec
setInterval(showQuote, 4000);

// Change background every 5 sec
setInterval(changeBackground, 5000);

// Button for manual change
document.getElementById("nextBtn").addEventListener("click", showQuote);

// Show first quote
showQuote();
