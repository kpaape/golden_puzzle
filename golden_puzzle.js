// feel free to play with the 2 variables below, doing so will change the puzzle entirely

var boxes = ["!this", "!this", 0];	// index 2 (box 3) refers to index 0 (box 1)
var reqTF = [1, 2];	// this puzzle requires one true and two false

function checkData() {	// if you customize the puzzle, do it right
	if(boxes.length != reqTF[0] + reqTF[1]) {
		return true;
	}
}

function checkPossibilities(arr) {
	var msg = "";
	if(!checkData()) {
		for(var i = 0; i < arr.length; i++) {	// iterate through the array assuming index i contains the gold
			var numTrue = 0;
			var numFalse = 0;
			for(var j = 0; j < arr.length; j++) {	// test each index, j, as if i contains the gold
				if(arr[j] === "!this"){	// if j is labeled as not having the gold and j is also i, it is false, otherwise it is labeled correctly
					if(i === j) {
						numFalse++;
					} else {
						numTrue++;
					}
				} else {	// if the box is instead pointing to another box...
					if(arr[j] === i) {
						numTrue++;		// if the box points to the current box being tested as if it were the one with gold, i, then it is labeled correctly
					} else {
						numFalse++;		// if the box points to a different index, then it is incorrect
					}
				}
			}
			console.log("i: " + i + " j: " + j + " numTrue: " + numTrue + " numFalse: " + numFalse);
			if(numTrue === reqTF[0] && numFalse === reqTF[1]) {
				msg += "The gold can be in box " + (i + 1);	// log the possible outcomes that match all requirements
			}
		}
		if(msg === "") {
			msg = "None of the possibilities matched the required t/f.";	// added this so if you play with the variables, it'll let you know when it doesn't add up
		}
		alert(msg);
		return msg;
	}
	msg = "The total number of true & false must match the number of boxes.";
	alert(msg);
	return msg;
}

checkPossibilities(boxes);