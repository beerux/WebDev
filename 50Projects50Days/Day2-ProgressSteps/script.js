const progress = document.getElementById('progress')
const previous = document.getElementById('prev')
const next = document.getElementById('next')

//Use "queryselectorAll" since there's more than 1
const circleNodes = document.querySelectorAll('.circle')
// console.log(circleNodes)

//Highlights active circlenode
let currentActive = 1
console.log(currentActive)

//Listen for a click and add 1 to any element with "active" class
next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circleNodes.length) {
    currentActive = circleNodes.length
  }

    update()

  console.log('currentActive', currentActive)
})

previous.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circleNodes.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}
