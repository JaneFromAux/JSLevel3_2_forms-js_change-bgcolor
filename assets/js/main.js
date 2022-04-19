

let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

function changeBackground() {
    console.log('changeBackground runs');
    document.body.style.backgroundColor = 'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
}
