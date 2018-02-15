function Letter(charValue, ) {
	this.charValue = charValue; //need a way to parse this.charValue from a word, placeholderf
	this.guessBool =  || false;
	this.display = function() {
		if (this.guessBool === true) {
			console.log(this.charValue);
		} else {
			console.log("_");
		};
	};
	this.makeTrue = function(char) {
		if (char === this.charValue && this.guessBool === false) {  //placeholder is for a statement that takes an argument in and checks it against this.charValue
			this.guessBool = true;
		};
	};
};

module.exports = Letter;