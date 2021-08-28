const sides = document.querySelectorAll('.side-input')
const hypotenuseBtn=document.querySelector('#hypotenuse-btn')
const outputE1=document.querySelector("#output")


function calculateSumOfSquares(a,b){
 const sumOfSquares = a*a+b*b;
//  console.log(sumOfSquares)
return sumOfSquares;
}

function calculateHypotenuse(){
  const sumOfSquares  =  calculateSumOfSquares(Number (sides[0].value), Number(sides[1].value))
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
//   console.log(lengthOfHypotenuse)
outputE1.innerText = "length of hypotenuse is " + lengthOfHypotenuse;

}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)

