function mostraCarros(){

  for(let i = 0; i < imgCarros.length; i++)
    image(imgCarros[i], xCarros[i], yCarros[i], 30, 50);

}

function movimentaCarros(){
  
  for(let i = 0; i < imgCarros.length; i++){
    //Carros indo para baixo
       yCarros[i] += velocidadeCarro[i];
      
      //Carro chegou no fim do percurso
      if(yCarros[i] > 405){
    yCarros[i] = -30;
    velocidadeCarro[i] = ceil(random(3,5));
    }
  }
}