
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
var _321 = new Audio();
_321.src = "./_321.wav";
var _0 = new Audio();
_0.src = "./_0.wav"
async function studying() {
    display_quote();
    let promise = new Promise((resolve, reject) => {
        var min = document.getElementById("study-min").value;
        document.getElementById("state").innerHTML = "STUDYING";
        var sec = min * 60;
        timer = setInterval(function () {
            minn = Math.floor(sec / 60);
            secc = sec % 60;
            document.getElementById("clock").innerHTML = getTime(minn, secc);
            // if(sec>0 && sec<=3){
            // 	_321.play();
            // }
            if(sec ==  0){
            	_0.play();
            }
            sec -= 1;
            if (sec == -1) {
                clearInterval(timer);
                resolve();
                return;
            }
        }, 1000);
    });

    return promise;
}
async function breaking() {
    display_quote();
    let promise = new Promise((resolve, reject) => {
        min = document.getElementById("break-min").value;
        document.getElementById("state").innerHTML = "BREAKING";
        sec = min * 60;
        timer = setInterval(function () {
            minn = Math.floor(sec / 60);
            secc = sec % 60;
            document.getElementById("clock").innerHTML = getTime(minn, secc);
            // if(sec>0 && sec<=3){
            // 	_321.play();
            // }
            if(sec ==  0){
            	_0.play();
            }
            sec -= 1;
            if (sec == -1) {
                clearInterval(timer);
                resolve();
                return;
            }
        }, 1000);
    });

    return promise;
}

async function start(){
	loop = document.getElementById("loop-times").value;
	// console.log(loop);
	for(var t=1;t<=loop;t++){
		await studying();
		await breaking();
	}
}