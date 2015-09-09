$(document).ready(function(){

var guessCount = 0;
var number;


function incrementCounter() {
	guessCount++;
	$("#count").text(guessCount);
};

$("#guessButton").click(function(e) {
	e.preventDefault();
	var guess = $("#userGuess").val();
	var guessOne = ('<li>' +guess+ '</li>');
	$("#guessList").append(guessOne)
	$("#userGuess").val("");
	$("#userGuess").focus();
	incrementCounter();
	checkGuess(guess);

});

	function checkGuess(guess) {
		var guessDifference;
		var guessInt = parseInt(guess);

		if (guess == number) {
			$("#feedback").text("Correct !");
		} else if (guessInt > number) {
			guessDifference = guessInt - number;
		} else if (guessInt < number) {
			guessDifference = number - guessInt;
		}

		if (guessDifference >=1 && guessDifference <= 10) {
			$("#feedback").text("Smoking Hot !!");
		} else if (guessDifference < 10 && guessDifference <= 20) {
			$("#feedback").text("Hot !");
		}
			else if (guessDifference < 20 && guessDifference <= 30) {
				$("feedback").text("Warm");
			}
			else if (guessDifference < 30 && guessDifference <= 50) {
				$("#feedback").text("Frigid");
			}
			else if (guessDifference > 50) {
				$("#feedback").text("You're are in the Tundra");
			}
	};

	function newNumber() {
	number =Math.floor((Math.random() * 100) + 1);
	console.log(number);
	};

	newNumber()
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").on('click', function() {
		window.location.reload(true);
  	
	});

});


