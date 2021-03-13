// carne - 400 g por pessoa + de  6H - 650g
// Cerveja - 1200 ml por pessoa + 6H - 2000 ml
// refrigerante/agua - 1000 ml por pessoa  + 6h 1500ml
// crianca valem por 0.5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPP(duracao) * adultos;
  let qtdTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 355,
  )} Latas de cerveja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebidas / 2000,
  )} Pet's 2l de bebidas</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else if (duracao >= 8) {
    return 1050;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
