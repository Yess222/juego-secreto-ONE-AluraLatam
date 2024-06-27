let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = parseInt(prompt('Ingrese el número máximo para el juego'));

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }// El usuario no acerto.
    else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(listaNumerosSorteados);
    console.log(listaNumerosSorteados.length);
    console.log(numeroGenerado);
    // Si ya sorteamos todod los números
    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        if (confirm('¿Desea volver a jugar?')){
            location.reload();
        }else{
            asignarTextoElemento('p','Gracias por jugar');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled', true);
        }
    }else{
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego(){
    // limpiar caja
    limpiarCaja();
    //Indicar mensaje de inervalo de números
    //Generar el número  aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
    

}
// function reiniciarJuegoCompleto(){
//     listaNumerosSorteados = [];
//     numeroMaximo = parseInt(prompt('Ingrese el número máximo para el juego'));
//     // Asegúrate de que el usuario ingrese un número válido
//     if (isNaN(numeroMaximo) || numeroMaximo < 1) {
//         alert('Por favor, ingrese un número válido.');
//         return; // Detiene la ejecución si el número no es válido
//     }
//     numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; // Genera un nuevo número secreto
//     intentos = 0;
//     limpiarCaja();
//     asignarTextoElemento('h1','Juego del número secreto');
//     asignarTextoElemento('p',`Adivina el número secreto entre 1 y ${numeroMaximo}`);
//     document.getElementById('reiniciar').setAttribute('disabled', true);
//     document.getElementById('intentar').removeAttribute('disabled');
//     condicionesIniciales(); // Asegúrate de que esta función restablezca todo lo necesario
// }



condicionesIniciales();


