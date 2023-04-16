let dibujo = document.querySelector('#dibujo');
let botoncopy = document.querySelector("#copy");
let hide = document.querySelector("#hide");
var errorSpan = document.getElementById("formError");
function encriptar (){
    var texto = document.querySelector("#inputT").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#salida").value = textoCifrado;
    document.querySelector("#inputT").value;
    var dibujovalue = document.querySelector("#dibujo").value;
    if(texto != "") {
        dibujo.style.display = 'none';
        botoncopy.style.display = 'initial';
        hide.style.display = 'none';
        errorSpan.innerHTML = "" ;// plain javascript
    }
    else{
        dibujo.style.display = ''
        hide.style.display = '';
        botoncopy.style.display = 'none';
        errorSpan.innerHTML = "⚠️ Agregue un texto para encriptar" // plain javascript
    }
}
function desencriptar (){ 
    var texto = document.querySelector("#inputT").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#salida").value = textoCifrado; 
    document.querySelector("#inputT").value;
    if(texto != "") {
        dibujo.style.display = 'none'
    }
    else{
        dibujo.style.display = '';
        errorSpan.innerHTML = "⚠️ Agregue un texto para desencriptar";
    }
}
boton1= document.querySelector("#encriptar"); boton1.onclick = encriptar;
boton2= document.querySelector("#desencriptar"); boton2.onclick = desencriptar;
boton3= document.querySelector("#copy");