//selectores
let numeroSecreto = 0;
let intentos = 0;
//Lista o array para los numeros sorteaods 
let listaNumerosSorteados = [];
let numeroMaximo = 2;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroUsuario === numeroSecreto);
    //console.log(numeroSecreto);
    //console.log(intentos);
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste Papu, en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','Numero Secreto es menor')
        }else{
            asignarTextoElemento('p','numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('valorUsuario').value = '';
    //valorCaja.value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; 
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        juegoTerminado();
    }else{
        // si e numero generado está incluido en la lista  
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número Secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar Caja
    limpiarCaja();
    //Indicar Mensaje de intervalo de numeros
    //Generar el numero Aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function juegoTerminado(){
        setInterval ("location.reload()",5000);
      return;
   
}

condicionesIniciales();