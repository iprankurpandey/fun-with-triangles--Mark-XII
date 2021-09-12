const form = document.querySelector('.quiz-form')
const button = document.querySelector('#button')
const outputBox = document.querySelector('#outputbox')
const quizAnswers = ['90°', 'right angled','obtuse','acute','Isoceles']
function formResult() {
	let score=0;
	let index=0;
	const formFile = new FormData(form)
	for (let answer of formFile.values()) 
	{
		if (answer === quizAnswers[index]) {
			score++
			console.log(score)
		}
		index++
	}
	outputBox.innerHTML = 'your score is :' + score;
}

button.addEventListener('click', formResult)
