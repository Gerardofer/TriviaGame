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
					$('.content').remove();
					failed1();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed1();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;	
					$('.content').remove();
					failed1();
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
					$('.content').remove();
					failed2();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed2();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed2();
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
					$('.content').remove();
					failed3();
					stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed3();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed3();
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
					$('.content').remove();
					failed4();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed4();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed4();
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
					$('.content').remove();
					celebration5();
					stop();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed5();
					stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed5();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed5();
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
					$('.content').remove();
					celebration6();
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
					$('.content').remove();
					failed2();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed2();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed2();
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
					$('.content').remove();
					celebration7();
					stop();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed1();
					stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed1();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed1();
					stop();	
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
					$('.content').remove();
					celebration8();
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
					$('.content').remove();
					failed5();
					stop();

				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed5();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed5();
					stop();	
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
					$('.content').remove();
					celebration9();
					stop();
				});
			},
			incorrectAnswers: function(){
				$('#answerA').append(this.answerA);
				$('#answerB').append(this.answerB);
				$('#answerC').append(this.answerC);
				$('#answerA').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed4();
					stop();
				});
				$('#answerB').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed4();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed4();
					stop();	
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
					$('.content').remove();
					celebration10();
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
					$('.content').remove();
					failed2();
					stop();
				});
				$('#answerC').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed2();
					stop();
				});
				$('#answerD').on('click', function(){
					console.log("no way!");
					totalLosses++;
					$('.content').remove();
					failed2();
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
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:58%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/l2JJO2teeAvDMZvva" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function celebration2(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:58%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/l2JJyDYEX1tXFmCd2" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function celebration3(){
	$('#imageHolder').append('<div style="width:80%;height:0; padding-bottom:75%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/aMh59aKR8vjdC" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
}

function celebration4(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:72%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/QWrClN3mlYtHO" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function celebration5(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:65%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/xT1XGXgtj8PWdvCLFS" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
}

function celebration6(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:57%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/12UlfHpF05ielO" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
}

function celebration7(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:60%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/pT66TpcUQPEGc" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
}

function celebration8(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:66%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/G9yZMzJe6pMYw" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/happy-excited-seinfeld-G9yZMzJe6pMYw">via GIPHY</a></p>');
};

function celebration9(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:83%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/PuZ17QhVIoNFK" width="80%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/excited-seinfeld-PuZ17QhVIoNFK">via GIPHY</a></p>');
};

function celebration10(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:60%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/qGFKMntShELTy" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function failed1(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:71%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/6Q2KA5ly49368" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function failed2(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:75%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/PEtL0mS2JXMBi" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function failed3(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:75%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/10o3Um2U3wa4DK" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function failed4(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:74%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/QMcamps7Gzj2g" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
};

function failed5(){
	$('#imageHolder').append('<div style="width:80%;height:0;padding-bottom:75%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/1UBEgUWneaVVu" width="80%" height="80%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');

};

run();
seinfeld.data[9].postQuestion();
seinfeld.data[9].correctAnswer();
seinfeld.data[9].incorrectAnswers();








	
