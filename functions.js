function showMessage() {
	alert('Hello Everyone!');
}

function anotherMsg(from, to) {
	alert(from + ': Hello ' + to + ' !!');
}

showMessage();

let from = prompt('Who is the message from?') ;
let to = prompt('Ok, who is it for?'); 

showMessage();
anotherMsg(from, to);

