//Variaveis da bolinha
let xBol = 300;  
let yBol = 200;
let diametro = 30;
let raio = diametro / 2;

//Velocidade da bolinha
let velXBol = 2;
let velYBol = 2;

//Variaveis das raquetes
let xRaq = 5;
let yRaq = 150;
let raqComp = 10;
let raqLarg = 90;

//raquete do oponente
let xRaqOp = 585;
let yRaqOp = 150;
let velYOp;

//pontuação do game
let meusPontos = 0;
let pontosOponente = 0;

//colisão cominidade
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  console.log("HELLO")
  //background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaq , yRaq);
  mostraRaquete(xRaqOp , yRaqOp);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaq, yRaq);
  colisaoRaqueteBiblioteca(xRaqOp, yRaqOp);
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBol , yBol, diametro);
}

function movimentaBolinha(){
  xBol += velXBol;
  yBol += velYBol;
}

function verificaColisaoBorda(){
  if (xBol + raio > width || xBol - raio < 0 ){
    velXBol *= -1;
  }
  if (yBol + raio> height || yBol - raio < 0){
    velYBol *= -1;
  }
}
function mostraRaquete(x , y) {
  rect(x, y, raqComp, raqLarg);
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaq -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaq += 10
  }
}
function verificaColisaoRaquete(){
  if(xBol - raio < xRaq + raqComp && yBol - raio < yRaq + raqLarg && yBol + raio > yRaq)
    velXBol *= -1; 
  }
function colisaoRaqueteBiblioteca(x , y){
  colidiu = collideRectCircle(x, y, raqComp, raqLarg, xBol, yBol, raio);
  if(colidiu){
    velXBol *= -1;
  }
}
function movimentaRaqueteOponente(){
  velYOp = yBol - yRaqOp - raqComp / 2 - 90;
  yRaqOp += velYOp;
}
function incluirPlacar(){
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosOponente, 321, 26);
}
function marcaPonto(){
  if(xBol > 590){
    meusPontos += 1;
  }
  
  if(xBol < 10){
    pontosOponente += 1;
  }
}