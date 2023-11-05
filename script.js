document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.classList.contains('clear')) {
                display.value = '0';
            } else if (button.classList.contains('color-different')) {
                display.style.backgroundColor = 'yellow'; // Change color here
            } else if (button.classList.contains('operator')) {
                display.value += ' ' + button.textContent + ' ';
            } else if (button.classList.contains('equal')) {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                if (display.value === '0') {
                    display.value = button.textContent;
                } else {
                    display.value += button.textContent;
                }
            }
        });
    });
});