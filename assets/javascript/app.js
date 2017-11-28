//================ Seinfeld Trivia ===================

// -- Create 15 multiple choice questions
// -- theme will be Seinfeld
// -- use the setTimeOut() function to set up a runninig clock as well as set a time for the gif to show up after each question has been answered
// -- create and array of objects for the questions.  Each object will have the question, the possible answers and a gif corresonding to the right or wrong answer
// $(document).ready(function(){


$(document).ready(function(){
	var start = $('#start-button');
	$('.content').hide();
	$('#clock').hide();
	start.show();
	start.on('click', function(){
		startTrivia();
		$('#clock').show();
		$('.content').show();
		start.remove();
	})


	var number = 30;
	var intervalId = false;
	var images = ["../../seinfeld_Celebration.gif"]
	var totalWins = 0;
	var totalLosses = 0;
	var count = 0;
	var showQuestion;

	var seinfeld = {

		data:[
			{
				question: "What episode is played backwards, from end to beginning?",
				answerA: "The Betrayal",
				answerB: "The Maid",
				answerC: "The Blood",
				answerD: "The Butter Shave",
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerA').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration1();
						setTimeout(nextQuestion, 1000);
						stop();

					});
				},
				incorrectAnswers: function(){
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "The Betrayal"');
						setTimeout(failed1, 3000);
						nextQuestion();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "The Betrayal"');
						setTimeout(failed1, 3000);
						nextQuestion();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;	
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "The Betrayal"');
						setTimeout(failed1, 3000);
						nextQuestion();
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerB').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration2();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Peter"');
						failed2();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Peter"');
						failed2();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Peter"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerC').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration3();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Newman"');
						failed3();
						stop();
					});
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Newman"');
						failed3();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Newman"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerA').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration4();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "No"');
						failed4();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "No"');
						failed4();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "No"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerD').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration5();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "High Five!"');
						failed5();
						stop();
					});
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "High Five!"');
						failed5();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "High Five!"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerB').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration6();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Serenity Now!"');
						failed2();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Serenity Now!"');
						failed2();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Serenity Now!"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerD').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration7();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Absolutely"');
						failed1();
						stop();
					});
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Absolutely"');
						failed1();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Absolutely"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerC').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration8();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "the Voice"');
						failed5();
						stop();
					});
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "the Voice"');
						failed5();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "the Voice"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerD').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration9();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerA').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Absolutely"');
						failed4();
						stop();
					});
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Absolutely"');
						failed4();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "Absolutely"');
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
				postQuestAns: function(){
					$('#question').append(this.question);
					$('#answerA').append(this.answerA);
					$('#answerB').append(this.answerB);
					$('#answerC').append(this.answerC);
					$('#answerD').append(this.answerD);
				},
				correctAnswer: function(){
					$('#answerA').on('click', function(){
						console.log("Got it!!!");
						totalWins++;
						$('.content').remove();
						celebration10();
						stop();
					});
				},
				incorrectAnswers: function(){
					$('#answerB').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "No"');
						failed2();
						stop();
					});
					$('#answerC').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "No"');
						failed2();
						stop();
					});
					$('#answerD').on('click', function(){
						console.log("no way!");
						totalLosses++;
						$('.content').remove();
						$('#correct-answer').html('<p>The correct answer was: "No"');
						failed2();
						stop();	
					});
				}
			},
		]
	}

//======================== Seconds counter ====================
	function run(){
		if(!intervalId){
			intervalId = setInterval(decrement, 1000)
		}return;
	};

	function decrement(){
		number--;
		$('#seconds').html(number);
		if (number <= 0){
			totalLosses++;
			failed1();
			nextQuestion();
			stop();
		}
	};

	function stop(){
		clearInterval(intervalId);
		intervalId = false;
	};


// ==================== Start game ===================================
	function startTrivia(){
		showQuestion = setInterval(nextQuestion, run());
	};
//===================== Question display function ====================
	function questionDisplay (){
		seinfeld.data[count].postQuestAns();
		seinfeld.data[count].correctAnswer();
		seinfeld.data[count].incorrectAnswers();
	};

//===================== Next question function =======================

	function nextQuestion (){
		count++;
		
	};

//===================== Celebrations GIF ============================= 	

	function celebration1(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/l2JJO2teeAvDMZvva" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function celebration2(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/l2JJyDYEX1tXFmCd2" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function celebration3(){
		$('#imageHolder').append('<div style="width:35%;height:0; padding-bottom:75%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/aMh59aKR8vjdC" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	}

	function celebration4(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/QWrClN3mlYtHO" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function celebration5(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left: 20%;"><iframe src="https://giphy.com/embed/xT1XGXgtj8PWdvCLFS" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	}

	function celebration6(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/12UlfHpF05ielO" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	}

	function celebration7(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/pT66TpcUQPEGc" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	}

	function celebration8(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/G9yZMzJe6pMYw" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/happy-excited-seinfeld-G9yZMzJe6pMYw">via GIPHY</a></p>');
	};

	function celebration9(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/PuZ17QhVIoNFK" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/excited-seinfeld-PuZ17QhVIoNFK">via GIPHY</a></p>');
	};

	function celebration10(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/qGFKMntShELTy" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function failed1(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/6Q2KA5ly49368" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function failed2(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/PEtL0mS2JXMBi" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function failed3(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/10o3Um2U3wa4DK" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function failed4(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/QMcamps7Gzj2g" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');
	};

	function failed5(){
		$('#imageHolder').append('<div style="width:60%;height:0;padding-bottom:25%;position:relative; padding-left:20%;"><iframe src="https://giphy.com/embed/1UBEgUWneaVVu" width="60%" height="60%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');

	};

	
	questionDisplay();

});





	
