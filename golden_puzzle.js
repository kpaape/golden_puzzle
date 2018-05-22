var boxes = ["!this", "!this", 0];
var reqTF = [1, 2];	// this puzzle requires one true and two false

function checkPossibilities(arr) {
	var msg = "";
	for(var i = 0; i < arr.length; i++) {	// i is the index we are assuming has gold
		var numTrue = 0;
		var numFalse = 0;
		for(var j = 0; j < arr.length; j++) {	// j is testing against i being gold
			if(i === j) {	// this is when we assume the gold is in the current tested box
				if(arr[i] === "!this"){	// if the current index is being tested as the one with gold but is labeled as not having it, it is a lie
					numFalse++;
				} else {
					if(arr[j] === i) {
						numTrue++;
					} else {
						numFalse++;
					}
				}
			} else {
				if(arr[j] === "!this"){
					numTrue++;
				} else {
					if(arr[j] === i) {
						numTrue++;
					} else {
						numFalse++;
					}
				}
			}
			alert("i: " + i + " j: " + j + " numTrue: " + numTrue + " numFalse: " + numFalse);
		}
		console.log("i: " + i + " j: " + j + " numTrue: " + numTrue + " numFalse: " + numFalse);
		if(numTrue === reqTF[0] && numFalse === reqTF[1]) {
			msg += "The gold can be in box " + (i + 1);
		}
	}
	alert(msg);
}

checkPossibilities(boxes);