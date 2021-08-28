const sides = document.querySelectorAll('.side-input')
const hypotenuseBtn=document.querySelector('#hypotenuse-btn')
const outputE1=document.querySelector("#output")


function calculateSum(b,h){
 const productofbaseandheight =1/2* b*h;
//  console.log(productofbaseandheight)
return productofbaseandheight;
}

function calculateArea(){
  const  area  = calculateSum(Number (sides[0].value), Number(sides[1].value))
  const areaOfTriangle = Math.abs(area)
outputE1.innerText = "area of triangle is " + areaOfTriangle;

}

hypotenuseBtn.addEventListener("click", calculateArea)

