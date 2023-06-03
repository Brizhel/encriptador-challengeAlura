let dibujo = document.querySelector('#dibujo');
let botoncopy = document.querySelector("#copy");
let hide = document.querySelector("#hide");
var errorSpan = document.getElementById("formError");
salida = document.getElementById("salida")
var avisoEncriptar = ("⛔ Agregue un texto para encriptar")
var avisoDesencriptar = ("⛔ Agregue un texto para desencriptar")
var avisoCopiado = ("&#10003 Mensaje copiado")
var clear = ("");

function copiar(){
    navigator.clipboard.writeText(salida.value)
    mostrarMensaje(avisoCopiado);

}
function mostrarMensaje(mensaje){
    o = 0;
    a = true;
    errorSpan.innerHTML = mensaje;
    setTimeout(2500);
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
        errorSpan.innerHTML = "" ;
    }
    else{
        dibujo.style.display = ''
        hide.style.display = '';
        botoncopy.style.display = 'none';
        mostrarMensaje(avisoEncriptar);
        document.querySelector("#formError").classList.remove("selected");
        setTimeout(() => {
            document.querySelector("#formError").classList.add("selected");
          }, 10);
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
        mostrarMensaje(avisoDesencriptar);
        document.querySelector("#formError").classList.remove("selected");
        setTimeout(() => {
            document.querySelector("#formError").classList.add("selected");
          }, 10);
    }
    document.querySelector("#inputT").value = "";
}
boton1= document.querySelector("#encriptar"); boton1.onclick = encriptar;
boton2= document.querySelector("#desencriptar"); boton2.onclick = desencriptar;
boton3= document.querySelector("#copy"); boton3.onclick = copiar;