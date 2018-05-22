// feel free to play with the 2 var below, doing so will change the puzzle entirely

var boxes = ["!this", "!this", 0];	// index 2 (box 3) refers to box 1 (index 0) the testing is aware of this
var reqTF = [1, 2];	// this puzzle requires one true and two false

function checkData() {	// if you customize the puzzle, do it right
	if(boxes.length != reqTF[0] + reqTF[1]) {
		alert("The total number of t/f must match the number of boxes.");
		return true;
	}
}

function checkPossibilities(arr) {
	var msg = "";
	if(checkData()) {
		return;
	}
	for(var i = 0; i < arr.length; i++) {	// i is the index we are assuming has gold
		var numTrue = 0;
		var numFalse = 0;
		for(var j = 0; j < arr.length; j++) {	// j is testing against i being gold
			if(i === j) {	// this is when we assume the gold is in the current tested box
				if(arr[i] === "!this"){	// if the current index is being tested as the one with gold but is labeled as not having it, it is a lie
					numFalse++;
				} else {	// if testing the one that should have gold see if it directs it to itself (so you can play around with the puzzle)
					if(arr[j] === i) {
						numTrue++;
					} else {
						numFalse++;
					}
				}
			} else {
				if(arr[j] === "!this"){	// same as before but now you are testing the boxes that shouldn't have the gold
					numTrue++;
				} else {
					if(arr[j] === i) {
						numTrue++;
					} else {
						numFalse++;
					}
				}
			}
		}
		console.log("i: " + i + " j: " + j + " numTrue: " + numTrue + " numFalse: " + numFalse);
		if(numTrue === reqTF[0] && numFalse === reqTF[1]) {
			msg += "The gold can be in box " + (i + 1) + " ";	// log the possible outcomes that match all requirements
		}
	}
	if(msg === "") {
		msg = "None of the possibilities matched the required t/f.";	// added this so if you play with the variables, it'll let you know when it doesn't add up
	}
	alert(msg);
}

checkPossibilities(boxes);

// feel free to ask questions