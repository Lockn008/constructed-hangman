var letter = require("./letter.js");

function Word(string) {
	this.word = string.split("");
	this.something = function(this.word) {
		var interimWord = "";
		for (var i = 0; i > this.word.length; i++) {
			interimWord += this.word[i]; //need a way to go into the constructed letters and 
		}
	};
	this.somethingElse = function(char) {
		var gaga = new Letter()
	}
};

module.exports = Word;