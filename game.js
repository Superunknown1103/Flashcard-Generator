var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');
var questions = require('./questions.js').questions;
var closeQuestions = [];

for (var i = 0; i < questions.length; i++) {
	var a = new clozeCard.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(a);
}

var currentQuestion = 0;
var answerRight = 0;
var anwserWrong = 0;

function askQuestion() {
	inquirer.prompt([
	{
		type: 'input',
		message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
		name: 'userGuess'
	}

	]).then(function (answers) {
		console.log('\n');

		if (answers.userGuess.toLowerCase() === closeQuestions[currentQuestion].cloze.toLowerCase()) {
			console.log('Correct!');
			answerRight++;
		} else {
			console.log('Incorrect!');
			answerWrong++;
		}

		console.log(closeQuestions[currentQuestion].full);
		console.log('----------------------\n');
	})

}