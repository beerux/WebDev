const progress = document.getElementById('progress');
const previous = document.getElementById('prev');
const next = document.getElementById('next');

//Use "queryselectorAll" since there's more than 1
const circleNodes = document.querySelectorAll('.circle');

//Highlights active circlenode
let currentActive = 1;

//Listen for a click and add 1 to any element with "active" class asdasd as
next.addEventListener('click', () => {
     currentActive++ 
})