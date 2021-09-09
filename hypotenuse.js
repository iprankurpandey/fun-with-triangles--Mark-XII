const base = document.querySelector('#base')
const opposite = document.querySelector('#opposite')
const button = document.querySelector('#button')
const outputBox = document.querySelector('#outputbox')

function calculateHypotenis(){
const hypotenus = Math.sqrt((base.value*base.value)+(opposite.value*opposite.value))
outputBox.innerHTML ='the hypotenus is : '+ hypotenus;	
return hypotenus;
}
button.addEventListener('click',calculateHypotenis)