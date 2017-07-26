var inquirer = require('inquirer');
var flashCards = require(./flashCards.js);
var questions = require(./questions.js).questions;
var closeQuestions = [];

for (var i = 0; i < questions.length; i++) {
	var a = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(a);
}