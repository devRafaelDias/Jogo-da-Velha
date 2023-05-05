let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');

// Grid de casas
// 0 1 2
// 3 4 5
// 6 7 8

mostradorJogador.innerHTML = jogadorAtual;

// Liga todas as células na função jogar
for (const casa of casas) {
  casa.onclick = jogar;
}

function jogar() {  
  // TODO: verificar se o quadro já não está preenchido!
    if(this.textContent != '')
        return;
  // Coloca o conteúdo na célula atual
  this.textContent = jogadorAtual;

  trocaTurno();
  trocaJogador();
  mostradorJogador.innerHTML = jogadorAtual;
}

function trocaJogador() {
  if (jogadorAtual === 'X') {
    jogadorAtual = 'O';
  } else {
    jogadorAtual = 'X';
  }
}

function trocaTurno() {
  let ganhou = verificaFim();

  if (ganhou) {
    cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
    bloqueiaCelulas();
  }
}

function verificaFim() {
    let posGanha = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8]]
    for(i of posGanha) {
        if(casas[i[0]].innerHTML == casas[i[1]].innerHTML && casas[i[1]].innerHTML == casas[i[2]].innerHTML && casas[i[1]].innerHTML !== '')
            return true;
    }
    return false;
}

function bloqueiaCelulas() {
  if(verificaFim()) {
      for(i of casas) {
          i.textContent = ''
      }
  }
  return false;
} 