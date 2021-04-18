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
// var _321 = new Audio();
// _321.src = "./_321.wav";
// var _0 = new Audio();
// _0.src = "./_0.wav"
let min,sec;
let x;
async function studying() {
    display_quote();
    let promise = new Promise((resolve, reject) => {
        document.getElementById("state").innerHTML = "STUDYING";
        timer = setInterval(function () {
            minn = Math.floor(sec / 60);
            secc = sec % 60;
            document.getElementById("clock").innerHTML = getTime(minn, secc);
            // if(sec>0 && sec<=3){
            // 	_321.play();
            // }
            // if(sec ==  0){
            // 	_321.play();
            // }
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
        document.getElementById("state").innerHTML = "BREAKING";
        timer = setInterval(function () {
            minn = Math.floor(sec / 60);
            secc = sec % 60;
            document.getElementById("clock").innerHTML = getTime(minn, secc);
            // if(sec>0 && sec<=3){
            // 	_321.play();
            // }
            // if(sec ==  0){
            // 	_321.play();
            // }
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
async function pause(){
	if(document.getElementById("stop").innerHTML == "Continue"){
		continuee();
		return;
	}
	clearInterval(timer);
	document.getElementById("stop").innerHTML = "Continue";
}
async function continuee(){
	document.getElementById("stop").innerHTML = "Pause";
	state = document.getElementById("state").innerHTML;
	if(state == "STUDYING"){
		studying();
	}
	else if(state == "BREAKING"){
		breaking();
	}
}
async function restart(){
	clearInterval(timer);
	start();
}
async function start(){
	loop = document.getElementById("loop-times").value;
	// console.log(loop);
	clearInterval(timer)
	for(var t=1;t<=loop;t++){
		min = document.getElementById("study-min").value;
		sec = min*60;
		await studying();
		min = document.getElementById("break-min").value;
		sec = min*60;
		await breaking();
	}
}


//mark a task done

$(document).on('click', 'button', function () {
     var indexRow = this.parentNode.parentNode.rowIndex;
     console.log(indexRow,typeof(indexRow));
     if(indexRow!=1 && typeof (indexRow) !== "undefined"){
     	if(document.getElementById("Tasks").rows[indexRow].className == "undone"){
     		document.getElementById("Tasks").rows[indexRow].className = "done";
     		document.getElementById("Tasks").rows[indexRow].cells[1].innerHTML = "<button class = 'btn' id = 'markdone'>Undone</button>"
     	}
     	else{
     		document.getElementById("Tasks").rows[indexRow].className = "undone";
     		document.getElementById("Tasks").rows[indexRow].cells[1].innerHTML = "<button class = 'btn' id = 'markdone'>Done</button>"
     	}
     	
     }
})

//adding new tasks

inputText = document.getElementById("users-tasks");
inputText.addEventListener("keyup", function(event) {
  		if (event.keyCode === 13) {
   			event.preventDefault();
   			document.getElementById("add").click();
  	}
});
function addTasks(){
	inputText = document.getElementById("users-tasks").value;
	if(inputText=="")
		return;
	console.log(typeof(inputText))
	var table = document.getElementById("Tasks");
	var row = table.insertRow(-1);
	cell = row.insertCell(0);
	cell.innerHTML = inputText;
	cell.className = "undone";
	cell = row.insertCell(1);
	cell.innerHTML = "<button class = 'btn' id = 'markdone'>Done</button>";
	document.getElementById("users-tasks").value = "";
}
