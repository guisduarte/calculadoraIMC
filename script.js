// Pegando os elementos HTML via DOM
const botaoCalcular = document.querySelector(".botao-calcular");
const resultado = document.querySelector(".resultado");
const imagem = document.querySelector(".caixa-imagem");
const seuImc = document.querySelector(".seu-imc");

seuImc.style.display = "none";

// Evento de click para aparecer "seu imc é:" ao clicar.
botaoCalcular.addEventListener("click", () => {
    if (seuImc.style.display = "none") {
        seuImc.style.display = "block"
    } else {
        seuImc.style.display = "none"
    }
})

// Evento de click passando afunção exibir
botaoCalcular.addEventListener("click", exibir);

// Função para fazer o calculo do IMC
function calcularIMC (altura, peso) {
    return peso / (altura * altura);
}

// Função para exibir o resultado
function exibir() {   
    let inputAltura = document.getElementById("altura");
    let inputPeso = document.getElementById("peso");    

    let altura = parseFloat(inputAltura.value);
    let peso = parseFloat(inputPeso.value);

    resultado.innerHTML = calcularIMC(altura, peso).toFixed(2);
        
    if (resultado.innerHTML < 18.5) {
        imagem.innerHTML = ` <img src="img/abaixo-do-peso.png" alt="imagem abaixo do peso">`        
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
        imagem.innerHTML = "";
        resultado.innerHTML = "Resultado inválido!"
    }

    // limpar os campos de input
    inputAltura.value = "";
    inputPeso.value = "";

}

