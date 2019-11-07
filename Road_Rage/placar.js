function mostraPlacar(){
  textSize(30);
  
  fill("whiteSmoke");
  text("Score: ", 10, 30);
  text(meuPlacar, 100, 30);
  text("Lifes: ", 10, 65);
  text(minhaVida, 100, 65);
}

let contadorDePonto = 100;

function ponto(){

if(xCarro > 5){
  if(frameCount >  contadorDePonto){
    meuPlacar += 1;
    contadorDePonto += 100;
  }
}

    
 if(meuPlacar >= 50){
    image(imgVitoria,0,0,600,400);
    textSize(50)
  fill("White");
  text("Victory",200,60);
  }
    
  if(minhaVida <= 0){
  image(imgGameover,0,0,600,400);
    textSize(50)
  fill("White");
  text("GameOver",180,60);
  }
    
  }
  if(meuPlacar == 50){
    image(imgVitoria,0,0,600,400);
    textSize(50)
  fill("White");
  text("Victory",200,60);
  }
  if(minhaVida <= 0){
  image(imgGameover,0,0,600,400);
    textSize(50)
  fill("White");
  text("GameOver",180,60);
}
