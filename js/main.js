document.addEventListener("DOMContentLoaded", function(e) { 


//Create array of notes for each string.
var snd = ["e2", "a2", "d3", "g3", "b3", "e4"];

//Initialize audio variable
var audio = new Audio();
//Set initial volume
audio.volume = 50/100;
// Volume slider
var volumeSlider = document.getElementById("volumeslider");
function setVolume(){
	var volume = document.querySelector(('input[name="slider"]')).value;
	audio.volume = volume/100;
	console.log(volume);
    }
volumeslider.addEventListener("mousemove", setVolume);

//String variables
var string6 = document.getElementById("string6");
var string5 = document.getElementById("string5");
var string4 = document.getElementById("string4");
var string3 = document.getElementById("string3");
var string2 = document.getElementById("string2");
var string1 = document.getElementById("string1");


//Boxes to display active note
var box6 = document.getElementById("box6");
var box5 = document.getElementById("box5");
var box4 = document.getElementById("box4");
var box3 = document.getElementById("box3");
var box2 = document.getElementById("box2");
var box1 = document.getElementById("box1");


// Event listeners for each string
string6.addEventListener("click", function(e) {
	// Display active note and load sound into array
	if(e.target && e.target.nodeName == "INPUT") {
		snd.splice(0, 1, e.target.value);
		// display value
		box6.innerText = e.target.value.substring(0, 1).toUpperCase();
	}
	//Play sound
	if(e.target && e.target.nodeName == "BUTTON") {
		audio.src = 'assets/'+snd[0]+".mp3";
	    audio.play();
	}
});

string5.addEventListener("click", function(e) {
	// Display active note and load sound into array
	if(e.target && e.target.nodeName == "INPUT") {
		// display value
		box5.innerText = e.target.value.substring(0, 1).toUpperCase();
		snd.splice(1, 1, e.target.value);
	}
	//Play sound
	if(e.target && e.target.nodeName == "BUTTON") {
		audio.src = 'assets/'+snd[1]+".mp3";
	    audio.play();
	}
});

string4.addEventListener("click", function(e) {
	// Display active note and load sound into array
	if(e.target && e.target.nodeName == "INPUT") {
		// display value
		box4.innerText = e.target.value.substring(0, 1).toUpperCase();
		snd.splice(2, 1, e.target.value);
	}
	//Play sound
	if(e.target && e.target.nodeName == "BUTTON") {
		audio.src = 'assets/'+snd[2]+".mp3";
	    audio.play();
	}
});

string3.addEventListener("click", function(e) {
	// Display active note and load sound into array
	if(e.target && e.target.nodeName == "INPUT") {
		// display value
		box3.innerText = e.target.value.substring(0, 1).toUpperCase();
		snd.splice(3, 1, e.target.value);
	}
	//Play sound
	if(e.target && e.target.nodeName == "BUTTON") {
		audio.src = 'assets/'+snd[3]+".mp3";
	    audio.play();
	}
});

string2.addEventListener("click", function(e) {
	// Display active note and load sound into array
	if(e.target && e.target.nodeName == "INPUT") {
		// display value
		box2.innerText = e.target.value.substring(0, 1).toUpperCase();
		snd.splice(4, 1, e.target.value);
	}
	//Play sound
	if(e.target && e.target.nodeName == "BUTTON") {
		audio.src = 'assets/'+snd[4]+".mp3";
	    audio.play();
	}
});

string1.addEventListener("click", function(e) {
	// Display active note and load sound into array
	if(e.target && e.target.nodeName == "INPUT") {
		// display value
		box1.innerText = e.target.value.substring(0, 1).toUpperCase();
		snd.splice(5, 0, e.target.value);
	}
	//Play sound
	if(e.target && e.target.nodeName == "BUTTON") {
		audio.src = 'assets/'+snd[5]+".mp3";
	    audio.play();
	}
});


//Preset tunings switch statement

	var presets = document.getElementById("presets");
	var btn = document.getElementById("submitpreset");

	btn.addEventListener("click", function(){
		var value = presets.options[presets.selectedIndex].value;
		switch (value) {
		case "std":
			document.getElementById('str6e2').click();
			document.getElementById('str5a2').click();
			document.getElementById('str4d3').click();
			document.getElementById('str3g3').click();
			document.getElementById('str2b3').click();
			document.getElementById('str1e4').click();
			break;
		case "dropd":
			document.getElementById('str6d2').click();
			document.getElementById('str5a2').click();
			document.getElementById('str4d3').click();
			document.getElementById('str3g3').click();
			document.getElementById('str2b3').click();
			document.getElementById('str1e4').click();
			break;
		case "halfstep":
			document.getElementById('str6ds2').click();
			document.getElementById('str5gs2').click();
			document.getElementById('str4cs3').click();
			document.getElementById('str3fs3').click();
			document.getElementById('str2as3').click();
			document.getElementById('str1ds4').click();
			break;
		case "fullstep":
			document.getElementById('str6d2').click();
			document.getElementById('str5g2').click();
			document.getElementById('str4c3').click();
			document.getElementById('str3f3').click();
			document.getElementById('str2a3').click();
			document.getElementById('str1d4').click();
			break;
		}

	})


	
});

