let reset = document.querySelector('#reset')
let typed = document.querySelector('#typed')
let pressed = [];
let secretCode = 'coding';
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    typed.innerHTML = pressed;
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)) {
        console.log('coding is fun!')
        cornify_add();
        reset.addEventListener('click', function () {
            pressed = []
        })

    }
    console.log(pressed)
})