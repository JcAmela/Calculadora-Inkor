(function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('num'));
    let operators = Array.from(document.getElementsByClassName('op'));
    let equals = document.getElementById('equals');
    let clear = document.getElementById('clear');

    buttons.map( button => {
        button.addEventListener('click', (e) => {
            display.value += e.target.innerText;
        });
    });

    operators.map( operator => {
        operator.addEventListener('click', (e) => {
            display.value += e.target.innerText;
        });
    });

    equals.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
            setTimeout(() => display.value = "", 1000);
        }
    });

    clear.addEventListener('click', () => {
        display.value = "";
    });

    // Escuchador de eventos del teclado
    document.addEventListener('keydown', (e) => {
        let key = e.key;

        // Si la tecla es un número o un operador, añádela al display
        if (!isNaN(key) || ['/', '*', '-', '+', '.'].includes(key)) {
            display.value += key;
        } else if (key === 'Enter') {  // Si la tecla es 'Enter', realiza la operación
            e.preventDefault();
            equals.click();
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {  // Si la tecla es 'Escape' o 'c', limpia el display
            clear.click();
        }
    });
})();
