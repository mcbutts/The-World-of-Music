// The World of Music - homepage interaction
// Shows a random "Did you know?" fact each time the button is clicked.

const facts = [
  "The 45 rpm single was introduced by RCA Victor in 1949.",
  "The Fender Telecaster, one of the first mass-produced solid-body electric guitars, appeared in 1950.",
  "Philips introduced the compact cassette in 1963.",
  "Chuck Berry's \"Johnny B. Goode\" was included on the Golden Record sent into space aboard Voyager in 1977.",
  "Multitrack recording let engineers record vocals, guitars, and strings separately and mix them together later."
];

const factButton = document.getElementById("fact-button");
const factText = document.getElementById("fact-text");
let lastIndex = -1;

factButton.addEventListener("click", function () {
  // Pick a random fact, avoiding the same one twice in a row
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastIndex && facts.length > 1);
  lastIndex = index;

  factText.textContent = facts[index];

  // Restart the highlight animation on every click
  factText.classList.remove("flash");
  void factText.offsetWidth;
  factText.classList.add("flash");
});
