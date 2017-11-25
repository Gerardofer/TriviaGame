//================ Seinfeld Trivia ===================

// -- Create 15 multiple choice questions
// -- theme will be Seinfeld
// -- use the setTimeOut() function to set up a runninig clock as well as set a time for the gif to show up after each question has been answered
// -- create and array of objects for the questions.  Each object will have the question, the possible answers and a gif corresonding to the right or wrong answer


var number = 30;
var intervalId = false;

function run(){
	if(!intervalId){
		intervalId = setInterval(decrement, 1000)
	}return;
}

function decrement(){
	number--;
	$('#seconds').html(number);
	if (number <= 0){
		stop();
	}
}

function stop(){
	clearInterval(intervalId);
	intervalId = false;
}

// run();

var images = ["../../seinfeld_Celebration.gif"]
var totalWins = 0;
var totalLosses = 0;




var seinfeld = {

	data:[
		{
			question: "What episode is played backwards, from end to beginning?",
			answerA: "The Betrayal",
			answerB: "The Maid",
			answerC: "The Blood",
			answerD: "The Butter Shave"
		},
		{
			question: "In the episode 'The Betrayal' who did Elaine sleep with before the trip?",
			answerA: "FDR",
			correctAnswer: "Peter",
			answerB: "George",
			answerC: "Jerry"
		},
		{
			question: "Who was with Kramer when he found the set to the 'Merv Griffin Show'?",
			answerA: "Elaine",
			answerB: "Jerry",
			correctAnswer: "Newman",
			answerC: "Putty"

		},
		{
			question: "The Wizard Planner that Jerry bought his father, was it stolen?",
			answerA: "No",
			answerB: "Perhaps",
			answerC: "What was the question?",
			correctAnswer: "Absolutely"

		},
		{
			question: "In the episode 'The Dealership', what is it Putty does to annoy Jerry?",
			correctAnswer: "High Five",
			answerA: "Hug",
			answerB: "Kiss",
			answerC: "Shake Hands"
		},
		{
			question: "What are the words George's Father uses when his blood pressure gets high?",
			answerA: "Calm Down!",
			correctAnswer: "Serenity Now!",
			answerB: "1!, 2!!, 3!!!",
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
			question: "In which episode is Jerry's girlfriend's belly button made fun of by everyone?",
			correctAnswer: "The Voice",
			answerA: "The Cartoon",
			answerB: "The Junkmail",
			answerC: "The Strongbox"
		},
		{
			question: "Did Kramer ever work at a bagel shop?",
			answerA: "No",
			answerB: "Forget about it!",
			answerC: "What was the question?",
			correctAnswer: "Absolutely"
		},
		{
			question: "Does George ever sleep with his cousin?",
			correctAnswer: "No",
			answerA: "Say what now?",
			answerB: "What was the question?",
			answerC: "Absolutely"
		},
	]
}

function question(i){
		$('#question').append(seinfeld.data[i].question);
		$('#answerA').append(seinfeld.data[i].answerA);
		$('#answerB').append(seinfeld.data[i].answerB);
		$('#answerC').append(seinfeld.data[i].answerC);	
		$('#answerD').append(seinfeld.data[i].answerD);

		answerCheck();
}

function answerCheck(){
	$('button').on('click', function(){
		if (seinfeld.data.answerA === "The Betrayal"){
			console.log("That's right!")	
			totalWins++;
			displayImageCorrect();
		}
		else {
			totalLosses++;
			displayImageIncorrect();
		}
	})
}

function displayImageIncorrect(){
	$('#question1').html("<img id='celebrate1' src='https://i1.wp.com/jacksonupperco.com/wp-content/uploads/2017/06/screen-shot-2016-12-13-at-1-41-09-pm.png?ssl=1'>")
}

function displayImageCorrect(){
	$('#question1').html("<img id='incorrect' src='http://cdn1.theodysseyonline.com/files/2016/01/10/635880618762451515-697028522_Seinfeld.png'>")
}
	
question(0);
answerCheck();





	
