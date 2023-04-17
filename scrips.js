let dibujo = document.querySelector('#dibujo');
let botoncopy = document.querySelector("#copy");
let hide = document.querySelector("#hide");
var errorSpan = document.getElementById("formError");
salida = document.getElementById("salida")
function copiar(){
    navigator.clipboard.writeText(salida.value)
    errorSpan.innerHTML = "&#10003 Mensaje copiado"
    setTimeout(mostrarMensaje,2000)

}
function mostrarMensaje(){
    errorSpan.innerHTML = "";
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
        errorSpan.innerHTML = "⛔ Agregue un texto para encriptar"
        setTimeout(mostrarMensaje,2000)
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
        dibujo.style.display = '';
        errorSpan.innerHTML = "&#10060 Agregue un texto para desencriptar";
    }
    document.querySelector("#inputT").value = "";
}
boton1= document.querySelector("#encriptar"); boton1.onclick = encriptar;
boton2= document.querySelector("#desencriptar"); boton2.onclick = desencriptar;
boton3= document.querySelector("#copy"); boton3.onclick = copiar;
