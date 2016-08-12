//Create array of radio buttons

var buttons = document.getElementsByTagName("input");


//Create array of notes for each string.

var snd = [];
var audio;

function getRadioValue(){
snd.length = 0;
for (var i=0; i < buttons.length; i++){
   if (buttons[i].checked){
      snd.push("assets/"+buttons[i].value+".wav");
  		}
    }
}

//Preset tunings

//Note variables preset tunings;

var e = document.getElementById("e3");
var a = document.getElementById("a3");
var d = document.getElementById("d");
var g = document.getElementById("g");
var g = document.getElementById("b");
var e5 = document.getElementById("e5");
var d2 = document.getElementById("d2");

function presetTune(){
	var presets = document.getElementById("presets");
	var value = presets.options[presets.selectedIndex].value;
	if(value === "1"){
		e.checked = true;
		a.checked = true;
		d.checked = true;
		g.checked = true;
		b.checked = true;
		e5.checked = true;
	}else if(value === "2"){
		d2.checked = true;
		a.checked = true;
		d.checked = true;
		g.checked = true;
		b.checked = true;
		e5.checked = true;
	}
}
	
//Function to play selected notes


function playString(s){
	getRadioValue();
	if(s === 6 ){
		var audio = new Audio(snd[0]);
	} else if(s === 5){
		var audio = new Audio(snd[1]);
	} else if(s === 4){
		var audio = new Audio(snd[2]);
	} else if(s === 3){
		var audio = new Audio(snd[3]);
	} else if(s === 2){
		var audio = new Audio(snd[4]);
	} else if(s === 1){
		var audio = new Audio(snd[5]);
	}
	audio.play()
	
}

function stopString(){
	audio.pause();
}




