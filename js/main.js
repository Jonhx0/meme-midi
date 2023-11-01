// Alterar o <h1> para um aviso //
const idButton = document.querySelectorAll('#botaoAviso');
const idTitulo = document.getElementById('mensagemAlterar');

const textoAntigo = idTitulo.textContent;
const textoNovo = 'Altere o volume antes, alguns memes são altos!';

let timeId;
idButton.forEach((botao) => {
    botao.addEventListener('mouseenter', function(){
        clearTimeout(timeId);
        timeId = setTimeout(function(){
            idTitulo.textContent = textoNovo;
        }, 150);
    });
});

idButton.forEach ((botao) => {
    botao.addEventListener('mouseleave', function () {
        clearTimeout(timeId);
        idTitulo.textContent = textoAntigo;
    });
});

// Primeiro teste de botão, mas acabou sendo muito instável
/* idButton.forEach((botao) => {
    botao.addEventListener('mouseover', function (){
        idTitulo.textContent = textoNovo;
    });
});  

idButton.forEach((botao) => {
    botao.addEventListener ('mouseout', function () {
        idTitulo.textContent = textoAntigo;
    });
}); */

// Controlar o Volume //
function atualizaVolume(valor) {
   const audios = document.querySelectorAll('audio');
   audios.forEach(audio => {
    audio.volume = valor;
   });
}

const controleDeVolume = document.getElementById('controleDeVolume');
controleDeVolume.value = 0.5;
atualizaVolume(controleDeVolume.value);

controleDeVolume.addEventListener('input', function () {
    atualizaVolume(controleDeVolume.value);
});

// Tocar o Som //
let audioAtual = null;
function tocaSom(audioElement) {
    const elemento = document.querySelector(audioElement);
    if (elemento && elemento.localName === 'audio') {
        if (audioAtual) {
            audioAtual.pause();
            audioAtual.currentTime = 0; // Linha opcional, apenas reseta o áudio.
        }
        elemento.play();
        audioAtual = elemento;
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

// Capturar todos os sons. //
const listaDeTeclas = document.querySelectorAll ('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //Template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
