const apaga = document.querySelector(".output-text");
const mensagem = document.querySelector(".mensagem");

    //função de encriptação

function encrypt() {    

    var text = document.getElementById("textInput").value.toLowerCase();
    var encryptedText = text.replace(/e/igm,"enter");
    var encryptedText = encryptedText.replace(/o/igm,"ober");
    var encryptedText = encryptedText.replace(/i/igm,"imes");
    var encryptedText = encryptedText.replace(/a/igm,"ai");
    var encryptedText = encryptedText.replace(/u/igm,"ufat");

    document.getElementById("output-text").innerHTML = encryptedText;
    apaga.style.backgroundImage='none'; //apaga a imagem quando o texto encriptado/desencriptado aparece
    mensagem.style.display='none';      //apaga a mensagem quando o texto encriptado/desencriptado aparece
}

    //função de desencriptação

function decrypt() {     

    var text = document.getElementById("textInput").value.toLowerCase();
    var encryptedText = text.replace(/enter/igm,"e");
    var encryptedText = encryptedText.replace(/ober/igm,"o");
    var encryptedText = encryptedText.replace(/imes/igm,"i");
    var encryptedText = encryptedText.replace(/ai/igm,"a");
    var encryptedText = encryptedText.replace(/ufat/igm,"u");

    document.getElementById("output-text").innerHTML = encryptedText;
    apaga.style.backgroundImage='none';
    mensagem.style.display='none';
}

    //função copiar

function copy() {

    var copiedtext = document.getElementById("output-text");
    copiedtext.select();
    navigator.clipboard.writeText(copiedtext.value);
    document.location.reload(true);     //recarrega após o clique no botão copiar
}