const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const num3 = document.querySelector('#num3');
    let num1Value = 0;
    let num2Value = 0;
    let num3Value = 0;
    const boton = document.querySelector('#boton');

        // Contador de creditos
    let ingreso = prompt('¿Cuanto dinero juegas?');

    const creditos = document.querySelector('#creditos');
    let cuenta = apuesta(ingreso);
    let activo = true;


    // Funciones
    function apuesta(cantidad) {
        const ingresado = parseFloat(cantidad);
        creditos.textContent = cantidad;
        return ingresado;
    }

    function numerosAleatorios() {
        num1Value = _.random(0, 9);
        num2Value = _.random(0, 9);
        num3Value = _.random(0, 9);
    }

    function mostrarNumeros() {
        num1.textContent = num1Value;
        num2.textContent = num2Value;
        num3.textContent = num3Value;
    }

    function restarDinero() {
        cuenta = cuenta - 1;
        ingreso = cuenta;
        mostrar();
    }

    function sumarDinero() {
        cuenta = cuenta + 10;
        ingreso = cuenta;
        mostrar();
    }

    function comprobar() {
        activo = num1Value === num2Value && num2Value === num3Value;
    }

    function mostrar() {
        creditos.textContent = cuenta;
    }

    function suerte() {
        if (activo) {
            // Se suma el dinero
            sumarDinero();
        } else {
            // Se resta el dinero
            restarDinero();
        }
        if (cuenta === 0) {
            alert('¡Has perdido!');
            ingreso = prompt('¿Cuanto dinero juegas?');
            cuenta = apuesta(ingreso);
        }
    }

    function jugar() {
        numerosAleatorios();
        comprobar();
        mostrarNumeros();
        suerte();
        console.log(''.concat(num1Value, num2Value, num3Value,' - ', activo, ' ---> cuenta: ',cuenta));
    }

    // Eventos
    boton.addEventListener('click', jugar);