//================ Seinfeld Trivia ===================

// -- Create 15 multiple choice questions
// -- theme will be Seinfeld
// -- use the setTimeOut() function to set up a runninig clock as well as set a time for the gif to show up after each question has been answered
// -- create and array of objects for the questions.  Each object will have the question, the possible answers and a gif corresonding to the right or wrong answer

var seinfeld = {

	data:[
		{
			question: "What episode is played backwards, from end to beginning?",
			correctAnswer: "The Betrayal",
			answerA: "The Maid",
			answerB: "The Blood",
			answerC: "The Butter Shave"
		},
		{
			question: "In the episode 'The Betrayal' who did elaine sleep with before the trip?",
			answerA: "FDR",
			correctAnswer: "Peter",
			answerB: "George",
			answerC: "Jerry"
		},
		{
			question: "Who was with kramer when he found the set to the 'Merv Griffin Show'?",
			answerA: "Elaine",
			answerB: "Jerry",
			correctAnswer: "Newman",
			answerC: "Putty"

		},
		{
			question: "The Wizard Planner that Jerry bought his father was it stolen?",
			answerA: "No",
			answerB: "Perhaps",
			answerC: "What was the question?",
			correctAnswer: "Absolutely"

		},
		{
			question: "In the episode 'The Dealership' what is it Putty does to annoy Jerry?",
			correctAnswer: "High Five",
			answerA: "Hug",
			answerB: "Kiss",
			answerC: "Shake Hands"
		},
		{
			question: "What are the words George's Father use when his blood pressure gets high?",
			answerA: "Calm Down",
			correctAnswer: "Serenity Now",
			answerB: "1, 2, 3",
			answerC: "Help me Now!"
		},
		{
			question: "Does Jerry sleep with George's girlfriend?",
			answerA: "No",
			answerB: "Perhaps",
			answerC: "What was the question?",
			correctAnswer: "Absolutely"

		},
		{
			question: "Which episode does everybody make fun of Jerry's girlfriend belly button talking?",
			correctAnswer: "The Voice",
			answerA: "The Cartoon",
			answerB: "The Junkmail",
			answerC: "The Strongbox"
		},
		{
			question: "Did Kramer ever work at a bagel shop?",
			question: "Does Jerry sleep with George's girlfriend?",
			answerA: "No",
			answerB: "Perhaps",
			answerC: "What was the question?",
			correctAnswer: "Absolutely"
		},
		{
			question: "Does George ever sleep with his cousin?",
			correctAnswer: "No",
			answerA: "Perhaps",
			answerB: "What was the question?",
			answerC: "Absolutely"
		},

	],
	succesfulAnswer: function(e){
		if(userinput === this.correctAnswer){
			console.log("You got it!");
		}
		else{
			console.log("You suck!");
		}
	}
};

$('#question').html(seinfeld.data[0].question);



	
