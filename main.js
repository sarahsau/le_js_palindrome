let Phrase = require("mhartl-palindrome");
let string = prompt("Please enter a string for palindrome testing:");
let userPhrase = new Phrase(string);

if (userPhrase.palindrome()) {
  alert(`"${userPhrase.content} is a palindrome!"`);
} else {
  alert(`"${userPhrase.content}" is not a palindrome.`)
};
