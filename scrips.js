let dibujo = document.querySelector('#dibujo');
let botoncopy = document.querySelector("#copy");
let hide = document.querySelector("#hide");
var errorSpan = document.getElementById("formError");
salida = document.getElementById("salida")
var avisoEncriptar = ("⛔ Agregue un texto para encriptar")
var avisoDesencriptar = ("⛔ Agregue un texto para desencriptar")
var avisoCopiado = ("&#10003 Mensaje copiado")
var o = 0;

function animation(){
    if (o < 0.5){
        o = o + 0.3;
    }
    if ((o > 0.5) && (o < 1)){
        o = o + 0.02;
    }
    errorSpan.style.color = "rgba(0, 0, 0, " + o + ")"
    errorSpan.style.transform="scale(" + (0.2 + o) + ")"
}

function clear(){
    errorSpan.innerHTML = "";
    clearInterval(intervalid);
    o = 0;
}
function copiar(){
    navigator.clipboard.writeText(salida.value)
    mostrarMensaje(avisoCopiado);

}
function mostrarMensaje(mensaje){
    o = 0;
    a = true;
    errorSpan.innerHTML = mensaje;
    setTimeout(clear,2500);
}
function encriptar (){
    var texto = document.querySelector("#inputT").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#salida").value = textoCifrado;
    document.querySelector("#inputT").value = "";
    if(texto != "") {
        dibujo.style.display = 'none';
        botoncopy.style.display = 'initial';
        hide.style.display = 'none';
    }
    else{
        dibujo.style.display = ''
        hide.style.display = '';
        botoncopy.style.display = 'none';
        intervalid=setInterval(animation,25);
        mostrarMensaje(avisoEncriptar);
    }
}
function desencriptar (){ 
    var texto = document.querySelector("#inputT").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#salida").value = textoCifrado; 
    document.querySelector("#inputT").value;
    if(texto != "") {
        dibujo.style.display = 'none';
        botoncopy.style.display = 'initial';
        hide.style.display = 'none';
        errorSpan.innerHTML = "" ;
    }
    else{
        dibujo.style.display = ''
        hide.style.display = '';
        botoncopy.style.display = 'none';
        intervalid=setInterval(animation,25);
        mostrarMensaje(avisoDesencriptar)
    }
    document.querySelector("#inputT").value = "";
}
boton1= document.querySelector("#encriptar"); boton1.onclick = encriptar;
boton2= document.querySelector("#desencriptar"); boton2.onclick = desencriptar;
boton3= document.querySelector("#copy"); boton3.onclick = copiar;