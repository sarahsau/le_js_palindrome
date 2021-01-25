// Add 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Method that processes phrase for palindrome testing
  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

    // Method that returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Method that defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Return translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

// test the palindrome
frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome());
