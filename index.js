var word = require("./word.js");
var inquirer = require("inquirer");


var wordArray = ["hamburger", "sandwich", "taco", "ramen"];

//function to choose a word from above, for now just using "hamburger"
var wordSelect = wordArray[0];

//create a Word using constructor
var newWord = new Word(wordSelect);

//use inquirer to create a prompt, an

function runPrompt() {
	inquirer.prompt([
		{
			type: "input",
			message: word.something() + "\nPlease enter a letter",
			name: "guess"
		}
	]).then([function(response) {

	}
	])
}