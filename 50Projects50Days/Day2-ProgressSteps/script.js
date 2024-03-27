const progress = document.getElementById('progress')
const previous = document.getElementById('previous')
const next = document.getElementById('next')

//Use "queryselectorAll" since there's more than 1
const circleNodes = document.querySelectorAll('.circle')
// console.log(circleNodes)

//Highlights active circlenode
let currentActive = 1
console.log(currentActive)

//Listen for a click and add 1 to any element with "active" class
next.addEventListener('click',() => {
  currentActive++
  console.log('currentActive CLICK', currentActive)
})
