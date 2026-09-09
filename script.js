const painel = document.querySelector(".painel");

// Função para adicionar texto ao painel
function adicionar(valor) {

    if (painel.textContent === "0" || painel.textContent === "Erro") {
        painel.textContent = valor;
    } else {
        painel.textContent += valor;
    }
}


// Números

document.querySelector(".zero").onclick = () => adicionar("0");

document.querySelector(".um").onclick = () => adicionar("1");

document.querySelector(".dois").onclick = () => adicionar("2");

document.querySelector(".tres").onclick = () => adicionar("3");

document.querySelector(".quatro").onclick = () => adicionar("4");

document.querySelector(".cinco").onclick = () => adicionar("5");

document.querySelector(".seis").onclick = () => adicionar("6");

document.querySelector(".sete").onclick = () => adicionar("7");

document.querySelector(".oito").onclick = () => adicionar("8");

document.querySelector(".nove").onclick = () => adicionar("9");


// Operações

document.querySelector(".mais").onclick = () => adicionar("+");

document.querySelector(".menos").onclick = () => adicionar("-");

document.querySelector(".vezes").onclick = () => adicionar("*");

document.querySelector(".divisao").onclick = () => adicionar("/");

document.querySelector(".ponto").onclick = () => adicionar(".");


// BOTÃO C

document.querySelector(".limpar").onclick = () => {

    painel.textContent = "0";

};


// BOTÃO IGUAL

document.querySelector(".igual").onclick = () => {

    try {

        painel.textContent = eval(painel.textContent);

    } catch {

        painel.textContent = "Erro";

    }

};
