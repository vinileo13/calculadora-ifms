let soma = 0;
let numeroAtual = "";

const painel = document.querySelector(".painel");


// NÚMEROS
document.querySelector(".zero").addEventListener("click", () => adicionarNumero("0"));
document.querySelector(".um").addEventListener("click", () => adicionarNumero("1"));
document.querySelector(".dois").addEventListener("click", () => adicionarNumero("2"));
document.querySelector(".tres").addEventListener("click", () => adicionarNumero("3"));
document.querySelector(".quatro").addEventListener("click", () => adicionarNumero("4"));
document.querySelector(".cinco").addEventListener("click", () => adicionarNumero("5"));
document.querySelector(".seis").addEventListener("click", () => adicionarNumero("6"));
document.querySelector(".sete").addEventListener("click", () => adicionarNumero("7"));
document.querySelector(".oito").addEventListener("click", () => adicionarNumero("8"));
document.querySelector(".nove").addEventListener("click", () => adicionarNumero("9"));


// ADICIONAR NÚMERO
function adicionarNumero(numero) {

    numeroAtual += numero;

    painel.textContent = numeroAtual;
}


// BOTÃO +
document.querySelector(".mais").addEventListener("click", () => {

    if (numeroAtual !== "") {

        soma += Number(numeroAtual);

        numeroAtual = "";

        painel.textContent = soma;
    }

});


// BOTÃO =
document.querySelector(".igual").addEventListener("click", () => {

    if (numeroAtual !== "") {

        soma += Number(numeroAtual);

        numeroAtual = "";

    }

    painel.textContent = soma;

});