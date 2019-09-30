let brush = document.getElementsByClassName('brush')[0]
let setColor = document.getElementById('set-color')

setColor.addEventListener('click', (e) => {
    e.preventDefault()
    let color = document.getElementById('color-field').value
    brush.style.backgroundColor = color
})

for (let i = 0; i <= 20; i ++) {
    let square = document.createElement('div')
    square.className = 'square'
    document.getElementsByTagName('body')[0].appendChild(square)
}

