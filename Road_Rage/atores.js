function mostraCarro(){

  image(imgCarro, xCarro, yCarro, 30, 50);
}

function movimentaCarro(){
  
  
  if(keyIsDown(RIGHT_ARROW)){
    if(xCarro < 515)
      xCarro += 5;
    
  
  }
  if(keyIsDown(LEFT_ARROW))
    if(xCarro > 55)
      xCarro -= 5;
                    
  
                         }