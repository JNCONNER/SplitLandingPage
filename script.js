const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () =>container.classList.add ('hover-left'))
// when mouse hovers over on the left side. it adds an event
left.addEventListener('mouseleave', () =>container.classList.remove ('hover-left'))
right.addEventListener('mouseenter', () =>container.classList.add ('hover-right'))
// when mouse hovers over on the left side. it adds an event
right.addEventListener('mouseleave', () =>container.classList.remove ('hover-right'))
// when mouse leaves, it removes the hover class 