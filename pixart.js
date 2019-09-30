let brush = document.getElementsByClassName('brush')[0]
let setColor = document.getElementById('set-color')

setColor.addEventListener('click', (e) => {
    e.preventDefault()
    let color = document.getElementById('color-field').value
    brush.style.backgroundColor = color
})


