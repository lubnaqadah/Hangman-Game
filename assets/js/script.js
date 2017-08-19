var score = 0, input, tries = 5;
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersGuessed = [];
var players = ["ronaldo", "messi", "totti", "rooney", "suarez"]

var imgArray = ["assets/images/ronaldo.jpg","assets/images/messi.jpg","assets/images/totti.jpg",
  "assets/images/rooney.jpg","assets/images/suarez.jpg"];

var random = Math.floor(Math.random()*5);
var word = players[random];
var dashes = [];

for (var x = 0; x < word.length; x++) {
    dashes.push("-");
	};

	var check = function(){	
	document.onkeyup= function(event){
	input = (event.key).toLowerCase();
	
	if (alpha.indexOf(input) !== -1){
	
	document.getElementById("hold").innerHTML= dashes;
		
	lettersGuessed.push(input);
	document.getElementById("guessed").innerHTML = lettersGuessed;
	
	var j = "";
	if(word.indexOf(input) !== -1){
		for(var i =0;i< word.length; i++){
			
			
			if (input == word[i]){
				dashes[i] = input;
				};
			document.getElementById("hold").innerHTML= dashes.join(" ");
			
//		dashes = dashes.join("");
		}
		if(dashes.join("") == word){
				window.alert("You got it!!");
				score++;
			};
		document.getElementById("score").innerHTML= score;
		
	}else{
		
	tries -= 1;
	if (tries == 0){
		window.alert("You lost!!");
		};
	};
	};	
		};
	};


document.onkeyup= function(event){
	if (event.keyCode == 13){
	document.getElementById("clue").setAttribute("src",imgArray[random]);
		check();
	};	
	
};








