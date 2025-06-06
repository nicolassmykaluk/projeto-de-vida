const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i botoes.length; j++) {
botoes[i].onclick = function () {
     
    for (let j = 0; j < botoes.length; j++) {
         botoes[j].classList.remove("ativo");
         textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[j].classList.remove("ativo");
}
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new date("2025-12-20T00:00:00"); 
const tempoObjetivo2 = new date("2025-12-20T00:00:00");
const tempoObjetivo3 = new date("2025-12-20T00:00:00");
const tempoObjetivo4 = new date("2025-12-20T00:00:00");

const tempo = 


contadores[0].textContent = calculatempo(tempoObjetivo1);

function calculatempo(tempoObjetivo) {
    let tempoAtual = new date();
    let tempofinal = tempoObjetivo -tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + hora + " horas " + minutos + " minutos " + segundos + " segundos ";
}
