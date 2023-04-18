let letras = ["a", "e", "i", "o", "u"];
let codigos = ["ai", "enter", "imes", "ober", "ufat"];
let origen = [""];
let destino = [""];
let resultado = "";
const patron = /[^a-z ]/;

function start() {
    ingreso = document.getElementById("ingreso-texto");
    conresultado = document.getElementById('con-resultado');
    conresultado.style.display = 'none';
    botonEncriptar = document.getElementById("encriptar");
    botonEncriptar.addEventListener('click', Encriptar);
    botonDesencriptar = document.getElementById("desencriptar");
    botonDesencriptar.addEventListener('click', Desencriptar);
    botonCopiar = document.getElementById("copiarTexto");
    botonCopiar.addEventListener('click', CopiarTexto);
}


function Encriptar () {
    origen = ingreso.value;
    let validar = origen.toString();
    console.log(patron.test(validar));
    if (!origen) {
        alert("Por favor ingresa el texto")
    } else {
        if (patron.test(validar)) {
            alert("Ingresa solo minusculas sin acentos");
            location.reload();
        } else {
            for (let i = 0; i < origen.length; i++) {
                for (let j = 0; j < letras.length; j++) {
                    if (origen[i] == letras[j]) {
                        destino[i] = codigos[j];
                        break;
                    } else {
                        destino[i] = origen[i];
                    }
                }
            }
            resultado = destino.join('');
            console.log(resultado);
            if (resultado != "") {
                enviarResultado(resultado);
             }
        }
    }
}

function Desencriptar() {
    origen = ingreso.value;
    let validar = origen.toString();
    console.log(patron.test(validar));
    if (!origen) {
        alert("Por favor ingresa el texto")
    } else {
        if (patron.test(validar)) {
            alert("Ingresa solo minusculas sin acentos");
            location.reload();
        } else {
            
           // for (let i = 0; i < origen.length; i++) {
                for (let j = 0; j < codigos.length; j++) {
                    origen = origen.replaceAll(codigos[j], letras[j]);
                   /* if (origen[i] == codigos[j]) {
                        destino[i] = letras[j];
                        break;
                    } else {
                        destino[i] = origen[i];
                    }*/
               // }
            }
            resultado = origen;
            console.log(resultado);
            if (resultado != "") {
                enviarResultado(resultado);
             }
        }
    }
}

function CopiarTexto() {
    navigator.clipboard.writeText(resultado);
    alert("Texto copiado al portapapeles");
    LimpiaOrigen();
  
    console.log(resultado.value);
}

function enviarResultado(texto) {
    let muestraResultado = document.getElementById("resultado");
    let noencuentratexto = document.getElementById("sin-resultado");
    noencuentratexto.style.display = 'none';
    conresultado.style.display = '';
    muestraResultado.innerHTML = texto; 
}

function LimpiaOrigen() {
    ingreso.value = "";
}

window.addEventListener('load', start);