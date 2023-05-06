const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const botaoCalcular = document.querySelector(".botao-calcular");
const resultado = document.querySelector(".resultado");
const imagem = document.querySelector(".caixa-imagem");


altura.value = "";
peso.value = "";

botaoCalcular.addEventListener("click", exibir);

// resultado.innerHTML = 0;

function calcularIMC (altura, peso) {
    return peso / (altura * altura);
}

function exibir() {
    let inputAltura = document.getElementById("altura").value;
    let inputPeso = document.getElementById("peso").value;
    
    let altura = parseFloat(inputAltura);
    let peso = parseFloat(inputPeso);

    resultado.innerHTML = calcularIMC(altura, peso).toFixed(2);

    if (resultado.innerHTML < 18.5) {
        imagem.innerHTML = ` <img src="img/abaixo-do-peso.png" alt="imagem abaixo do peso"> `
    } else if (resultado.innerHTML >= 18.6 && resultado.innerHTML <= 24.99) {
       imagem.innerHTML = ` <img src="img/peso-normal.png" alt="imagem peso normal" > `
    } else if (resultado.innerHTML > 25 && resultado.innerHTML <= 29.99) {
        imagem.innerHTML = ` <img src="img/sobrepeso.png" alt="imagem sobrepeso" > `
    } else if (resultado.innerHTML > 30 && resultado.innerHTML <= 34.99) {
        imagem.innerHTML = ` <img src="img/obesidade-grau1.png" alt="imagem obesidade grau1" > `
    } else if (resultado.innerHTML > 35 && resultado.innerHTML <= 39.99) {
        imagem.innerHTML = ` <img src="img/obesidade-grau2.png" alt="imagem obesidade grau2" > `
    } else if (resultado.innerHTML > 40) {
        imagem.innerHTML = ` <img src="img/obesidade-grau3.png" alt="imagem obesidade grau3" >  `
    } else {
        resultado.innerHTML = "Resultado inválido!"
    }

}

