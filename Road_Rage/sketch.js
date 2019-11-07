function setup() {
  createCanvas(600, 400);
}

function draw() {
 if(frameCount < 400){ 
   telaInicial();
 }else{
   jogar();
 }
if(meuPlacar == 50){
    image(imgVitoria,0,0,600,400);
    textSize(50)
  fill("White");
  text("Victory",200,60);
  }
    
  if(minhaVida == 0){
  image(imgGameover,0,0,600,400);
    textSize(50)
  fill("White");
  text("GameOver",180,60);
  }
}

function jogar(){
  background(imgEstrada);
  mostraCarro();
  movimentaCarro();
  mostraCarros();
  movimentaCarros();
  batida();
  mostraPlacar();
  ponto();
}

function telaInicial(){
background(imgLogo);
  textSize(50)
  fill("Black");
  text("Road-Rage",180,60);
  textSize(30)
  text("Amauri José",220,100);
  text("Linguagem de Programação Web",75,400);
  
}
