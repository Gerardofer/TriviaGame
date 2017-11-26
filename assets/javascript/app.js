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
			answerD: "The Butter Shave",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerA').append(this.answerA);
				$('#answerA').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}
		},
		{
			question: "In the episode 'The Betrayal' who did Elaine sleep with before the trip?",
			answerA: "FDR",
			answerB: "Peter",
			answerC: "George",
			answerD: "Jerry",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerB').append(this.answerB);
				$('#answerB').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}
		},
		{
			question: "Who was with Kramer when he found the set to the 'Merv Griffin Show'?",
			answerA: "Elaine",
			answerB: "Jerry",
			answerC: "Newman",
			answerD: "Putty",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerC').append(this.answerB);
				$('#answerC').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}

		},
		{
			question: "The Wizard Planner that Jerry bought his father, was it stolen?",
			answerA: "No",
			answerB: "Perhaps",
			answerC: "What was the question?",
			answerD: "Absolutely",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerA').append(this.answerA);
				$('#answerA').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}

		},
		{
			question: "In the episode 'The Dealership', what is it Putty does to annoy Jerry?",
			answerA: "Shake Hands",
			answerB: "Hug",
			answerC: "Kiss",
			answerD: "High Five!",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerD').append(this.answerD);
				$('#answerD').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}
		},
		{
			question: "What are the words George's Father uses when his blood pressure gets high?",
			answerA: "Calm Down!",
			answerB: "Serenity Now!",
			answerC: "1!, 2!!, 3!!!",
			answerD: "Help me Now!",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerB').append(this.answerB);
				$('#answerB').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}
		},
		{
			question: "Does Jerry sleep with George's girlfriend?",
			answerA: "No",
			answerB: "Perhaps",
			answerC: "What was the question?",
			answerD: "Absolutely",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerD').append(this.answerD);
				$('#answerD').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}

		},
		{
			question: "In which episode is Jerry's girlfriend's belly button made fun of by everyone?",
			answerA: "The Strongbox",
			answerB: "The Cartoon",
			answerC: "The Voice",
			answerD: "The Junkmail",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerC').append(this.answerC);
				$('#answerC').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}
		},
		{
			question: "Did Kramer ever work at a bagel shop?",
			answerA: "No",
			answerB: "Forget about it!",
			answerC: "What was the question?",
			answerD: "Absolutely",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerD').append(this.answerD);
				$('#answerD').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}

		},
		{
			question: "Does George ever sleep with his cousin?",
			answerA: "No",
			answerB: "Say what now?",
			answerC: "What was the question?",
			answerD: "Absolutely",
			postQuestion: function(){
				$('#question').append(this.question);
			},
			correctAnswer: function(){
				$('#answerA').append(this.answerA);
				$('#answerA').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
				});
			},
			incorrectAnswers: function(){
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
				});
			}
		},
	]
}
seinfeld.data[9].postQuestion();
seinfeld.data[9].correctAnswer();
seinfeld.data[9].incorrectAnswers();






	
