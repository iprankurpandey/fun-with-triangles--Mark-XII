const angle1 = document.querySelectorAll('.angle')
const button = document.querySelector('#button')
const outputBox = document.querySelector('#outputbox')

function isTriangle() {
const sum = Number(angle1[0].value)+Number(angle1[1].value)+Number(angle1[2].value);
console.log(sum)
if (sum == 180){
	outputBox.innerHTML= 'these angles forms a triangle'
}
else if (sum <= 0){
	outputBox.innerHTML= 'enter valid triangles'
}
else{
	outputBox.innerHTML= 'these angles doesnt form a triangle'
}
} 

button.addEventListener('click', isTriangle)
