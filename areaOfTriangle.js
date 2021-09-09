// const base = document.querySelector('#base')
// const height = document.querySelector('#height')
// const button = document.querySelector('#button')
// const outputBox = document.querySelector('#output')


// function calculateArea(){
// const area = 1/2*(base.value)*(height.value)
// outputBox.innerHTML ='the area is : '+ area;	
// return area;
// }
// button.addEventListener('click',calculateArea)



const base = document.querySelector('#base')
const height = document.querySelector('#height')
const button = document.querySelector('#buttonid')
const outputBox = document.querySelector('#outputbox')

function calculateArea(){
const area = 1/2*(base.value)*(height.value)
outputBox.innerHTML ='the area is : '+ area;	
return area;
}
button.addEventListener('click',calculateArea)