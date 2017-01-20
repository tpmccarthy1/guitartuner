(function(){

//Global variables & functions
//Array of notes for each string - default standard tuning.
var snd = ["E2", "A2", "D3", "G3", "B3", "E4"];

//Initialize audio variable
var audio = new Audio();
//Set initial volume
audio.volume = 50/100;
audio.loop = true;
// Volume control slider
var volumeSlider = document.getElementById("volumeslider");
volumeslider.addEventListener("mousemove", function(e){
	var volume = document.querySelector(('input[name="slider"]')).value;
	audio.volume = volume/100;
});

// hasClass functions
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

//Function to reset play buttons
function resetBtns(){
	var allBtns = document.getElementsByClassName("play");
		for(i=0; i<allBtns.length; i++){
			allBtns[i].classList.remove('active');
			audio.pause();
	}
}

//Click handlers  

var	app = document.getElementById("app");
app.addEventListener("click", function(e){
//Function set note and update box
function tuner(index, box){
		console.log("running");
		snd.splice(index, 1, e.target.value);
		console.log(snd[0]);
			if(e.target.value.indexOf("s") > -1){
				box.innerText = e.target.value.substring(0, 1).toUpperCase() + "#";
				}else{
					box.innerText = e.target.value.substring(0, 1).toUpperCase();
					}
		resetBtns();
		
	}
	//Function to play note
	function playNote(index, btn){
			if(hasClass(btn, 'active')){
			resetBtns();
			}
			else if(!hasClass(btn, 'active')){
			resetBtns();
			btn.classList.add('active');
			audio.src = "assets/"+snd[index]+".mp3";
			audio.play();
			}  

		}

	//Present tuning event
	if(e.target && e.target.id == "submitpreset"){
		var presets = document.getElementById("presets");
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
		default:
			console.log("tuning");		}

	}

	//Input events
	if(e.target && e.target.nodeName == "INPUT"){

		//Box variables to display active note
		var box6 = document.getElementById("box6"),
			box5 = document.getElementById("box5"),
			box4 = document.getElementById("box4"),
			box3 = document.getElementById("box3"),
			box2 = document.getElementById("box2"),
			box1 = document.getElementById("box1");

			//String 6
			if(e.target.parentNode.parentNode.id === "string6"){
			tuner(0, box6);
			}
			//String 5
			if(e.target.parentNode.parentNode.id === "string5"){
			tuner(1, box5);
			}
			//String 4
			if(e.target.parentNode.parentNode.id === "string4"){
			tuner(2, box4);
			}
			//String 3
			if(e.target.parentNode.parentNode.id === "string3"){
			tuner(3, box3);
			}
			//String 2
			if(e.target.parentNode.parentNode.id === "string2"){
			tuner(4, box2);
			}
			//String 1
			if(e.target.parentNode.parentNode.id === "string1"){
			tuner(5, box1);
		}
	}

	//Play button events
	if(e.target && e.target.nodeName == "A") {
		//Play button variables
		var btn6 = document.getElementById("str6"),
			btn5 = document.getElementById("str5"),
			btn4 = document.getElementById("str4"),
			btn3 = document.getElementById("str3"),
			btn2 = document.getElementById("str2"),
			btn1 = document.getElementById("str1");

			//String 6
			if(e.target.parentNode.parentNode.id === "string6"){
			playNote(0, btn6);
			}
			//String 5
			if(e.target.parentNode.parentNode.id === "string5"){
			playNote(1, btn5);
			}
			//String 4
			if(e.target.parentNode.parentNode.id === "string4"){
			playNote(2, btn4);
			}
			//String 3
			if(e.target.parentNode.parentNode.id === "string3"){
			playNote(3, btn3);
			}
			//String 2
			if(e.target.parentNode.parentNode.id === "string2"){
			playNote(4, btn2);
			}
			//String 1
			if(e.target.parentNode.parentNode.id === "string1"){
			playNote(5, btn1);
			}
		}
	});

//End Javascript
})();


