let a;
let b;
let answersCounter = 0;
let rightAnswersCounter = 0;


function CheckBtn() {
	let multiplication;
	let number = document.querySelector('.answer').value;
	number = Number.parseInt(number.match(/\d+/));
	multiplication = a * b;
	if(number != multiplication){
		document.querySelector('.show_result').innerHTML = `Помилка, правильна відповідь "${multiplication}"`;
		answersCounter = answersCounter + 1;
	}
	else{
		document.querySelector('.show_result').innerHTML = `Відповідь правильна`;
		rightAnswersCounter = rightAnswersCounter + 1;
		answersCounter = answersCounter + 1;
	}
}

function NextBtn(){
	document.querySelector('.answer').value = "";
	document.querySelector('.show_result').innerHTML = '';
	document.querySelector('.show_stats').innerHTML = '';
	a = Math.random() * 10;
	b = Math.random() * 10;
	a = Math.ceil(a);
	b = Math.ceil(b);
	let string = `${a} * ${b} =`;
	document.querySelector('.question').innerHTML = string;
}

function StatsCalculation(){
	let winRate = rightAnswersCounter * 10;
	if(answersCounter === 10){
		document.querySelector('.show_stats').innerHTML = `Загальний рахунок ${winRate}% (${rightAnswersCounter} правильних відповідей із ${answersCounter})`;
		answersCounter = 0;
		rightAnswersCounter = 0;
	}
}

