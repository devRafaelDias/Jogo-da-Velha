let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let reinicar = document.getElementById('reiniciar')
reinicar.style.display = 'none'
let contVelha;

let jogX = document.getElementById('pontoX');
let jogO = document.getElementById('pontoO');
let contX = 0;
let contO = 0;
jogX.innerHTML = `Jogador X: ${contX}`;
jogO.innerHTML = `Jogador O: ${contO}`;
// Grid de casas
// 0 1 2
// 3 4 5
// 6 7 8

// Liga todas as células na função jogar
for (const casa of casas) {
  casa.onclick = jogar;
}

refresh();

function jogar() {  
  // TODO: verificar se o quadro já não está preenchido!
    if(this.textContent != '')
        return;
  // Coloca o conteúdo na célula atual
  document.onkeyup = false;
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
    if(jogadorAtual === 'X')
      contX++;
    else
      contO++;
    jogX.innerHTML = `Jogador X: ${contX}`;
    jogO.innerHTML = `Jogador O: ${contO}`;
  } else
      verificaVelha()
}

function verificaFim() {
    let posGanha = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
    for(i of posGanha) {
        if(casas[i[0]].innerHTML == casas[i[1]].innerHTML && casas[i[1]].innerHTML == casas[i[2]].innerHTML && casas[i[1]].innerHTML !== '')
          return true;
  }
  return false;
}

function bloqueiaCelulas() {
  if(verificaFim()) {
      for(i of casas) {
        i.onclick = false
      }
      reinicar.style.display = 'block'
      document.onkeyup = refresh;
  }
}
function verificaVelha() {
  contVelha = 0;
  for(i of casas) {
    if(i.textContent != ''){
      contVelha++
    }
  }
  if(contVelha == 9) {
    alert("Deu velha")
    reinicar.style.display = 'block'
  }
}
function refresh() {
  for(i of casas) {
    i.textContent = '';
    i.onclick = jogar;
    cabecalho.innerHTML = 'Jogando: <span id="jogador"></span>'
    mostradorJogador = document.getElementById('jogador');
    mostradorJogador.innerHTML = jogadorAtual;
}
  reinicar.style.display = 'none';
}