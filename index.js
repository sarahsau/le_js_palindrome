module.exports = Phrase;

// Add 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content
  // For example:
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const letterRegex = /[a-z]/gi;
    return Array.from(this.content).filter(c => c.match(letterRegex)).join("");
    return (this.content.match(letterRegex) || []).join("");
  }

  // Method that returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
