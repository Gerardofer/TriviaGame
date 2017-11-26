//================ Seinfeld Trivia ===================

// -- Create 15 multiple choice questions
// -- theme will be Seinfeld
// -- use the setTimeOut() function to set up a runninig clock as well as set a time for the gif to show up after each question has been answered
// -- create and array of objects for the questions.  Each object will have the question, the possible answers and a gif corresonding to the right or wrong answer


var number = 30;
var intervalId = false;
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
					$('.content').remove();
					celebration1();
					stop();

				});
			},
			incorrectAnswers: function(){
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
					stop();
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
					$('.content').remove();
					celebration2();
					stop();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();	
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
				$('#answerC').append(this.answerC);
				$('#answerC').on('click', function(){
					console.log("Got it!!!");
					totalWins++;
					$('.content').remove();
					celebration3();
					stop();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();	
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
					$('.content').remove();
					celebration4();
					stop();
				});
			},
			incorrectAnswers: function(){
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();	
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
					celebration();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();	
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
					celebration();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();	
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
					celebration();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();	
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
					celebration();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerD').append(this.answerD);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();	
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
					celebration();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();	
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
					celebration();
				});
			},
			incorrectAnswers: function(){
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerD').append(this.answerD);
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					stop();	
				});
			}
		},
	]
}


function run(){
	if(!intervalId){
		intervalId = setInterval(decrement, 1000)
	}return;
};

function decrement(){
	number--;
	$('#seconds').html(number);
	if (number <= 0){
		stop();
	}
};

function stop(){
	clearInterval(intervalId);
	intervalId = false;
};

function celebration1(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:58%;position:relative; padding-left: 11%;"><iframe src="https://giphy.com/embed/l2JJO2teeAvDMZvva" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>')
};

function celebration2(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:58%;position:relative; padding-left: 11%;"><iframe src="https://giphy.com/embed/l2JJyDYEX1tXFmCd2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function celebration3(){
	$('#imageHolder').append('<div style="width:80%;height:0; padding-bottom:75%;position:relative; padding-left: 11%;"><iframe src="https://giphy.com/embed/aMh59aKR8vjdC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>')
}

function celebration4(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:72%;position:relative; padding-left: 11%;"><iframe src="https://giphy.com/embed/QWrClN3mlYtHO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>')
};


run();
seinfeld.data[3].postQuestion();
seinfeld.data[3].correctAnswer();
seinfeld.data[3].incorrectAnswers();


// function celebration(){
// 	var celebration = $.get("http://api.giphy.com/v1/gifs/search?q=seinfeld&api_key=dc6zaTOxFJmzC&limit=5");
// 		celebration.done(function(element) { 
// 		// $('#imageHolder').html(element.data[2].images.looping.mp4);
// 		console.log(element.data);
// 		// console.log(element.data[2].images.looping) 
// 		});
	// };






	
