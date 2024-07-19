const numeroAleatorio = Math.floor(Math.random() * 10);

function adivinar() {
    let numeroIngresado;
    do {
        numeroIngresado = prompt("Elige un numero del 1 al 10");
    } while (parseInt(numeroIngresado) !== numeroAleatorio);
    
    if (parseInt(numeroIngresado) === numeroAleatorio) {
        alert("Adivinaste el número");
    } else {
        alert("No has adivinado el número");
    }
}

adivinar();