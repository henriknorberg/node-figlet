var figlet = require('../index'),
	   num = 11;

	 if (process.stdout.getWindowSize) var lines = process.stdout.getWindowSize()[1] / 4;

draw("Initiating Take Off...");

// Draw a number every second for 10 seconds
var t = setInterval(countDown, 1000);

function countDown(){
	num --;
	draw(num);

	if (num <= 0 ){
		clearInterval(t);
		draw("Take Off !");
	}
}

function draw(st){
	figlet(st,["-c"], function (ascii){
		drawBlankHalfPage();
		console.log(ascii.toString());	
		drawBlankHalfPage();
	});
}

//Hack to center text in console
function drawBlankHalfPage(){
	if (!lines) return
	for(var i = 0; i < lines; i++) {
	    console.log('\r\n');
	}
}