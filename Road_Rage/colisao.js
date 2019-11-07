function batida(){
  //Teste carro a carro
  for(let i = 0; i < imgCarros.length; i++){
    batidaCarro = collideRectRect(xCarro, yCarro, 30, 50,
xCarros[i], yCarros[i], 50, 30);
    
    if(batidaCarro){
      xCarro = 5;
      
      if(minhaVida <= 3)
      minhaVida -= 1;

  
  }
}
}