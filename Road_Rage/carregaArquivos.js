//Variaveis para as imagens
let imgEstrada;
let imgCarro;
let imgCarros = [];
let imgVitoria;
let imgGameover;

//Váriaveis do Placar
let meuPlacar = 0;
let minhaVida = 3;


//Variaveis da Tela

let alturaTela = 400;
let larguraTela = 600;

function preload(){
  imgVitoria = loadImage('imagens/final.png');
  imgGameover = loadImage('imagens/gameover.png');
  imgLogo = loadImage('imagens/logo.png');
  imgEstrada = loadImage('imagens/estrada.png');
  imgCarro = loadImage('imagens/carro.png');
  imgCarros[0] = loadImage('imagens/carro-1.png');
  imgCarros[1] = loadImage('imagens/carro-2.png');
  imgCarros[2] = loadImage('imagens/carro-1.png');
  imgCarros[3] = loadImage('imagens/carro-2.png');
  imgCarros[4] = loadImage('imagens/carro-1.png');
  imgCarros[5] = loadImage('imagens/carro-2.png');
  imgInicio = loadImage('imagens/inicio.png');
  imgJogar = loadImage('imagens/jogar.png');
  imgCarrega1 = loadImage('imagens/carrega1.png');
  imgCarrega2 = loadImage('imagens/carrega2.png');
  imgColisao = loadImage('imagens/colisao.png');
  imgMovimento = loadImage('imagens/movimento.png');
  imgIcone = loadImage('imagens/icone.png');
}
//Variáveis do carro
let yCarro = 350;
let xCarro = 5;

//Variáveis de movimento
let xCarros = [78,160, 240, 330, 410, 495];
let yCarros = [-50, -50, -50, -50, -50,-50];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];