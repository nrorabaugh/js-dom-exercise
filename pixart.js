let brush = document.getElementsByClassName('brush')[0]
let setColor = document.getElementById('set-color')
let color = ''

setColor.addEventListener('click', (e) => {
    e.preventDefault()
    color = document.getElementById('color-field').value
    brush.style.backgroundColor = color
})

for (let i = 0; i < 8000; i++) {
    let square = document.createElement('div')
    square.className = 'square'
    document.getElementsByTagName('body')[0].appendChild(square)
}



let squarez = document.getElementsByClassName('square')
for (let i = 0; i < squarez.length; i++) {
    squarez[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = color
    })
    squarez[i].style.margin = '0px'
    squarez[i].style.height = '10px'
    squarez[i].style.width = '10px'
}






