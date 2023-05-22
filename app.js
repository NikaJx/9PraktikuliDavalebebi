//დავალება 1

const openBtn = document.querySelector('#myBtn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

//დავალება 2

const btnColor = document.querySelector('.btn');

btnColor.addEventListener('click', () => {
    let inputColor = document.querySelector('.input-color').value;

    if(inputColor === 'red' || inputColor === 'blue' || inputColor === 'green' || inputColor === 'black' || inputColor === 'white') {
        
        document.body.style.background = inputColor;
        inputColor.value = '';
    } else {
        alert('ეს ფერი არ შეიძლება ძმაოო');
    }
});


//დავალება 3

const btnAve = document.querySelector('.btn-ave');

btnAve.addEventListener('click', () => {
    const numbers = document.querySelector('.input-ave').value
    .split(':')
    .map(i => i.trim())
    .filter(i => i.length)
    .map(i => Number(i));

    const sum = numbers.reduce((a, b) => a + b);
    console.log(sum / numbers.length);
});