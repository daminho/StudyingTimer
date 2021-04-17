
// randomly display a quote
function display_quote(){
	n = quotes.length;
	x = Math.floor(Math.random()*quotes.length);
	console.log(quotes[x])
	document.getElementById("quotes").innerHTML = quotes[x];
}
// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

function getTime(min,sec){
	var pre = min.toString();
	var suf = sec.toString();
	if(min<10){
		pre = "0"+pre;
	}
	if(sec<10){
		suf = "0"+sec;
	}
	return pre+":"+suf;
}
let timer;
function studying(){
	display_quote();
	var min = document.getElementById("study-min").value;
	document.getElementById("state").innerHTML = "STUDYING";
	var sec = min*60;
	timer = setInterval(function(){
		minn = Math.floor(sec/60);
		secc = sec%60;
		document.getElementById("clock").innerHTML = getTime(minn,secc);
		sec-=1;
		if(sec==-1){
			clearInterval(timer);
			return;
		}
	},1000)
}
function breaking(){
	display_quote();
	min = document.getElementById("break-min").value;
	document.getElementById("state").innerHTML = "BREAKING";
	sec = min*60;
	timer = setInterval(function(){
		minn = Math.floor(sec/60);
		secc = sec%60;
		document.getElementById("clock").innerHTML = getTime(minn,secc);
		sec-=1;
		if(sec==-1){
			clearInterval(timer);
			return;
		}
	},1000)
}
let studied = 0;
function start(){
	loop = document.getElementById("loop-times").value;
	// console.log(loop);
	for(var t=1;t<=2*loop;t++){
		if(studied == 0){
			studying();
			studied = 1;
		}
		else{
			breaking();
			studied = 0;
		}
		
	}
}