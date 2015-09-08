<<<<<<< HEAD
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
	incrementCounter();
	$("#userGuess").val("");
	$("#userGuess").focus();
	//checkGuess(guess);

});

	function newNumber() {

		number =Math.floor((Math.random() * 100) + 1);
	};
=======

$(document).ready(function(){
>>>>>>> 209c990e47738728b5a7e870f496e9ac69125bf2
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

<<<<<<< HEAD
  	$(".new").on('click', function() {
		window.location.reload(true);
  	
	});

=======
>>>>>>> 209c990e47738728b5a7e870f496e9ac69125bf2
});


