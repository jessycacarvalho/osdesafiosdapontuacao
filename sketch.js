var tela = 0;
var largura = 240;
var altura = 50;
var xMenu = 125;
var yMenu1 = 155;
var yMenu2 = 215;
var yMenu3 = 275;

function preload(){  
//IMAGENS
  imgfloresta = loadImage('assets/floresta.jpg');
  imgmenina1 = loadImage('assets/menina1.png');
  imgmarcia = loadImage('assets/marcia.jpg');
  imgjessyca = loadImage('assets/jessyca.jpg');
  imginterrogacao = loadImage('assets/interrogacao.jpg');
  imgexclamacao = loadImage('assets/exclamacao.jpg');
  imgpontofinal = loadImage('assets/pontofinal.jpg');
  imgtravessao = loadImage('assets/travessao.jpg');
  imgdoispontos = loadImage('assets/doispontos.jpg');
  
  //ÁUDIOS
  soundFormats('mp3');
  floresta1 = loadSound('assets/Floresta01.mp3');
  clique = loadSound('assets/clique.mp3');
}

function setup(){
  createCanvas(500, 500);
  floresta1.play();
}

function mouseClicked(){
  clique.play();
}

function draw(){
// TELA DO MENU
  if (tela == 0){
    background(color(255));
    // Menu com três opções
    textAlign(CENTER);
    textSize(35);
    textFont('monotype corsiva');
    image(imginterrogacao, 40, 120, 80, 100);
    image(imgexclamacao, 45, 295, 80, 100);
    image(imgpontofinal, 200, 370, 45, 60);
    image(imgtravessao, 370, 150, 100, 60);
    image(imgdoispontos, 365, 320, 50, 75);
   
// INICIAR O JOGO
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke(176,224,230);
    fill(230,230,250);
    rect(xMenu, yMenu1, largura, altura, 20);
    if (mouseIsPressed){
      tela = 3; 
    }
  }
    fill(0,191,255);
    stroke(0,0,255);
    strokeWeight(3);
    text("OS DESAFIOS DA PONTUAÇÃO", 245, 100);
    text("Jogar", 245, 190);
    
// INSTRUÇÕES DO JOGO
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(176,224,230);
    fill(230,230,250);
    rect(xMenu,yMenu2, largura, altura, 20);
    if (mouseIsPressed){
      tela = 1; 
    }
  }
    fill(0,191,255);
    stroke(0,0,255);
    strokeWeight(3);
    text("Instruções",245, 250);
    
// CRÉDITOS DO JOGO
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(176,224,230);
    fill(230,230,250);
    rect(xMenu,yMenu3, largura, altura, 20);
    if (mouseIsPressed){
      tela = 2 
    }
  }
    fill(0,191,255);
    stroke(0,0,255);
    strokeWeight(3);
    text("Créditos",245, 310);  
  }
  
// JOGO EM AÇÃO
  else if (tela == 3){
//NÍVEL 1
    background(imgfloresta);
    image(imgmenina1,250,265,75,120);
    textStyle(NORMAL);
    noStroke();
    fill(255);
    rect(20, 400, 100, 40, 15);
    
    stroke(255);
    fill(255);
    rect(15, 130, 470, 70, 20);
    
    stroke(255);
    fill(255);
    rect(135, 400, 100, 40, 15);
    
    stroke(255);
    fill(255);
    rect(250, 400, 100, 40, 15);
    
    stroke(255);
    fill(255);
    rect(365, 400, 100, 40, 15);
    
    fill(0,191,255);
    textSize(40);
    stroke(20);
    strokeWeight(4)
    textFont('cursiva');
    textAlign(LEFT);
    text("?", 65, 435);
    text(":", 180, 430);
    text("!", 295, 435);
    text(".", 410, 425);
     
    fill(0,191,255);
    textSize(22);
    textFont('comic sans ms');
    stroke(0,0,255);
    strokeWeight(5)
    textAlign(CENTER);
    text("NÍVEL 1", 10, 65, 500, 250);
    
    fill(0,191,255);
    textSize(20);
    textFont('comic sans ms');
    stroke(20);
    strokeWeight(3)
    textAlign(LEFT);
    text("     Cuidado__ Não se deve atravessar a rua sem\n olhar para os dois lados.", 20, 145, 500, 250);
    
    fill(255);
    textSize(17);
    textFont('comic sans ms');
    stroke(20);
    textAlign(LEFT);
    text("Aperte ESC para voltar", 25, 30, 500, 250);

// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 3.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 3.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 3.2;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 3.1;  
      }
    } 
  }    

  else if (tela == 3.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  }
  else if (tela == 3.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 4; 
      }
  }
 }    
// NÍVEL 1.1
else if (tela == 4){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(20, 400, 100, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 125, 470, 85, 20);
    
   stroke(255);
   fill(255);
   rect(135, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(250, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(365, 400, 100, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4)
   textFont('cursiva');
   textAlign(LEFT);
   text(", , , .", 40, 400, 500, 250);
   text(", , , !", 148, 400, 500, 250);
   text("? , , .", 260, 400, 500, 250);
   text(", , , ?", 378, 400, 500, 250);
    
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("   Laís e Sofia vão à feira comprar banana__ \nmaçã__ mamão__ morango e manga para a salada\nde frutas__", 20, 135, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 4.2;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 4.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 4.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 4.1;  
      }
    } 
}
else if (tela == 4.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 4.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
    strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
    rect(380,450, 90, 40, 20);
    if (mouseIsPressed){
      tela = 5; 
    }
  }
}    
// NÍVEL 2
else if (tela == 5){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(20, 400, 100, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 140, 470, 70, 20);
    
   stroke(255);
   fill(255);
   rect(135, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(250, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(365, 400, 100, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(". .", 55, 400, 500, 250);
   text(". !", 170, 400, 500, 250);
   text("! ?", 278, 400, 500, 250);
   text(", .", 400, 400, 500, 250);
  
   fill(0,191,255);
   textSize(22);
   stroke(0,0,255);
   strokeWeight(5)
   textAlign(CENTER);
   text("NÍVEL 2", 10, 65, 500, 250);
    
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("   Que dia lindo__ Você quer convidar seus amigos\n para um piquenique hoje__", 15, 153, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 5.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 5.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 5.2;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 5.1;  
      }
    }
}
else if (tela == 5.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 5.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 6; 
      }
  }
}
// NÍVEL 2.1
else if (tela == 6){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(20, 400, 100, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 120, 470, 80, 20);
    
   stroke(255);
   fill(255);
   rect(135, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(250, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(365, 400, 100, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(", , , .", 35, 400, 500, 250);
   text("? , , .", 148, 400, 500, 250);
   text(": , , .", 260, 400, 500, 250);
   text(", , , !", 378, 400, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("  Os materiais que a professora pediu para a aula\nde artes foram__ tesoura__ cola__ cartolina e canetinhas coloridas__", 20, 124, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 6.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 6.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 6.2;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 6.1;  
      }
    }
}
else if (tela == 6.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   //fill(255);
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 6.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 7; 
      }
  }
}
// NÍVEL 3
else if (tela == 7){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(20, 400, 100, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 120, 470, 80, 20);
    
   stroke(255);
   fill(255);
   rect(135, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(250, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(365, 400, 100, 40, 15);
   
   fill(0,191,255);
   textSize(22);
   stroke(0,0,255);
   strokeWeight(5)
   textAlign(CENTER);
   text("NÍVEL 3", 10, 65, 500, 250);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text("! . , .", 35, 400, 500, 250);
   text("! : , .", 148, 400, 500, 250);
   text(". . , .", 260, 400, 500, 250);
   text("? . , !", 378, 400, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("   Nossa__ Estou atrasada para a aula__ Hoje\nvamos ter as disciplinas de português__ história\ne artes__", 23, 125, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 7.2;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 7.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 7.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 7.1;  
      }
    }
}
else if (tela == 7.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 7.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 8; 
      }
  }
}
// Nível 3.1
else if (tela == 8){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(20, 400, 100, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 120, 475, 80, 20);
    
   stroke(255);
   fill(255);
   rect(135, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(250, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(365, 400, 100, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(", – , !", 30, 400, 500, 250);
   text(": – , .", 145, 400, 500, 250);
   text("! – : .", 260, 400, 500, 250);
   text("? – , !", 375, 400, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text(" Então minha mãe falou__ \n__ Leve um casaco__ porque o tempo vai esfriar__", 16, 130, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 8.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 8.2;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 8.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 8.1;  
      }
    }
}
 else if (tela == 8.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   //fill(255);
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }
 else if (tela == 8.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 9; 
      }
  }
}
// NÍVEL 4
else if (tela == 9){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(10, 400, 115, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 120, 470, 80, 20);
    
   stroke(255);
   fill(255);
   rect(132, 400, 115, 40, 15);
    
   stroke(255);
   fill(255);
   rect(253, 400, 115, 40, 15);
    
   stroke(255);
   fill(255);
   rect(375, 400, 115, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(", : – ! .", 14, 400, 500, 250);
   text(": , – . .", 142, 400, 500, 250);
   text("! , – , .", 265, 400, 500, 250);
   text(", ? – , !", 377, 400, 500, 250);
  
   fill(0,191,255);
   textSize(22);
   stroke(0,0,255);
   strokeWeight(5)
   textAlign(CENTER);
   text("NÍVEL 4", 10, 65, 500, 250); 
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("  Gabriel chegou em casa com os amigos Luis__ Letícia e Augusto e sua mãe alertou__ \n__ Silêncio__ O bebê está dormindo__", 30, 125, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 9.2;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 9.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 9.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 9.1;  
      }
    }
}
else if (tela == 9.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   //fill(255);
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 9.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 10; 
      }
  }
}
// NÍVEL 4.1
else if (tela == 10){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(20, 400, 100, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 120, 478, 80, 20);
    
   stroke(255);
   fill(255);
   rect(135, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(250, 400, 100, 40, 15);
    
   stroke(255);
   fill(255);
   rect(365, 400, 100, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(": , – .", 20, 400, 500, 250);
   text(", : – !", 145, 400, 500, 250);
   text(", ! , .", 262, 400, 500, 250);
   text(", ? – .", 369, 400, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text(" Antes que aula acabasse__ a professora avisou__\n__ Não esqueçam de trazer o trabalho amanhã__", 15, 133, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 10.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 10.2;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 10.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 10.1;  
      }
    }
}
else if (tela == 10.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 10.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 11; 
      }
  }
}
// NÍVEL 5
else if (tela == 11){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(10, 400, 115, 40, 15);
   
   stroke(255);
   fill(255);
   rect(15, 120, 470, 130, 20);
    
   stroke(255);
   fill(255);
   rect(132, 400, 115, 40, 15);
    
   stroke(255);
   fill(255);
   rect(253, 400, 115, 40, 15);
    
   stroke(255);
   fill(255);
   rect(375, 400, 115, 40, 15);
    
   fill(0,191,255);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(", : – !.!", 14, 400, 500, 250);
   text("! , – .!!", 138, 400, 500, 250);
   text(", , – !.?", 258, 400, 500, 250);
   text(", : – !,?", 377, 400, 500, 250);
  
   fill(0,191,255);
   textSize(22);
   stroke(0,0,255);
   strokeWeight(5)
   textAlign(CENTER);
   text("NÍVEL 5", 10, 65, 500, 250); 
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("  No primeiro dia de aula__ Pedro falou__\n __ Viajei para praia nessas férias. O mar estava com ondas tão altas__ Nós nadamos__ surfamos\ne brincamos na areia. Você também gosta de\npraia__", 20, 124, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 11.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 11.1;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 11.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 11.2;  
      }
    }
}
else if (tela == 11.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 11.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 12; 
      }
  }
}
// NÍVEL 5.1
else if (tela == 12){
   textStyle(NORMAL);
   background(imgfloresta);
   image(imgmenina1,250,265,75,120);
   stroke(255);
   textFont('comic sans ms');
   fill(255);
   rect(10, 400, 115, 40, 15);
  
   stroke(255);
   fill(255);
   rect(15, 90, 470, 155, 20);
    
   stroke(255);
   fill(255);
   rect(132, 400, 115, 40, 15);
    
   stroke(255);
   fill(255);
   rect(253, 400, 115, 40, 15);
    
   stroke(255);
   fill(255);
   rect(375, 400, 115, 40, 15);
    
   fill(0,191,255);
   textSize(35);
   stroke(20);
   strokeWeight(4);
   textFont('cursiva');
   textAlign(LEFT);
   text(", , . – : !", 14, 400, 500, 250);
   text(": –?– ,?", 138, 400, 500, 250);
   text(", – , – ,?", 258, 400, 500, 250);
   text(": – , –. .", 377, 400, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(20);
   strokeWeight(3);
   textFont('comic sans ms');
   textAlign(LEFT);
   text("  Enquanto a formiga só trabalhava, a cigarra se divertia. Ela dizia__\n __ Para quê trabalhar tanto__ O verão é para passear e se divertir. \n __ Mas__ esforço de formiga é compensado no final. Você já leu esta fábula__", 24, 95, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
// OPÇÃO 1
    if (mouseX > 20 && mouseX < 20 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(20, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 12.1;  
      }
    } 
// OPÇÃO 2
    if (mouseX > 135 && mouseX < 135 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(135, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 12.2;  
      }
    } 
// OPÇÃO 3
    if (mouseX > 250 && mouseX < 250 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(250, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 12.1;  
      }
    } 
// OPÇÃO 4
    if (mouseX > 365 && mouseX < 365 + 100 && mouseY > 400 && mouseY < 400 + 40){
      noStroke();
      noFill();
      rect(365, 400, 100, 40, 15);
      if (mouseIsPressed){
        tela = 12.1;  
      }
    }
}
else if (tela == 12.1){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Que pena, você errou. :(\nMas não desista, volte para o início.)", 15, 220, 500, 250);
    
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
 }

  else if (tela == 12.2){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(4);
   textAlign(CENTER);
   text("Parabéns, você acertou!\nContinue assim :)", 15, 220, 500, 250);
  
   fill(0,191,255);
   textSize(20);
   stroke(0,0,255);
   strokeWeight(3);
   text("Próxima", 170, 450, 500, 250);
    
// PRÓXIMA
  if (mouseX > 380 && mouseX < 200 + 400 && mouseY > 430 && mouseY < 350 + 200){
    noStroke();
    noFill();
     
    rect(380,450, 90, 40, 20);
      if (mouseIsPressed){
        tela = 13; 
      }
  }
}
// FINAL
else if (tela == 13){
   textStyle(NORMAL);
   background(imgfloresta);
   stroke(255);
   textFont('comic sans ms');
   
   fill(255);
   textSize(17);
   stroke(20);
   textAlign(LEFT);
   text("Aperte ESC para voltar", 25, 30, 500, 250);
  
   fill(255,215,0);
   textSize(40);
   stroke(20);
   strokeWeight(5);
   textAlign(CENTER);
   text("PARABÉNS!\nVOCÊ ESTÁ FERA NA PONTUAÇÃO!", 15, 220, 500, 250);
}
// INSTRUÇÕES SOBRE O JOGO
  else if (tela == 1){
    background(color(255));
    fill(0,191,255);
    textSize(35);
    stroke(0,0,255);
    strokeWeight(3);
    textFont('monotype corsiva');
    textAlign(LEFT);
    text("INSTRUÇÕES" , 180, 30, 500, 260);
    
    fill(0,0,255);
    textSize(21);
    noStroke();
    textAlign(LEFT);
    text("➥ Ano: 4º ano do ensino fundamental.",25, 95, 500, 260);
    text("➥ Matéria: Língua Portuguesa.",25, 135, 500, 260);
    text("➥ Habilidade: Identificar a função na leitura e usar, adequadamente, na escrita ponto final, de interrogação, de exclamação, dois-pontos e travessão em diálogos (discurso direto),vírgula e em separação de vocativo e de aposto.",25, 180, 470, 200);
    text("➥ Resumo: Jogo composto por 5 fases e 1 jogador. Objetivo: Ajudar Luiza a escolher qual a pontuação correta nos trechos apresentados em cada nível usando o mouse. Se errar, começa tudo de novo.",25, 300, 470, 250);
    text("Aperte ESC para voltar", 25, 450, 500, 250);
  }
 
  //CRÉDITOS
  else if (tela == 2){
    background(color(255));
    fill(0,191,255);
    textSize(35);
    stroke(0,0,255);
    strokeWeight(3);
    textFont('monotype corsiva');
    textAlign(LEFT);
    text("CRÉDITOS \n", 200, 30, 500, 260);
    
    image(imgjessyca, 20, 100, 110, 120);
    stroke(200);
    fill(200);
    rect(140, 110, 330, 100, 30);
    
    textSize(25);
    fill(0,0,255);
    
    text("Jéssyca Ferreira Carvalho", 190, 145);
    text("PROGRAMADORA", 200, 170);
    
    image(imgmarcia, 20, 295, 110, 120);
    stroke(200);
    fill(200);
    rect(140, 300, 330, 100, 30);
    
    textSize(25);
    fill(0,0,255);
    text("Márcia Ximenes Sampaio", 190, 335);
    text("EDUCADORA", 225, 360); 
    
    fill(0,0,255);
    textSize(21);
    noStroke();
    textAlign(LEFT);
    text("Aperte ESC para voltar", 25, 450, 500, 250);
  }  
} 

function keyPressed(){
  if(keyCode==ESCAPE){
    if(tela==1 || tela==2 || tela==3 || tela==3.1 || tela==3.2 || tela==4 || tela==4.1 || tela==4.2 || tela==5 || tela==5.1 || tela==5.2 || tela==6 || tela==6.1 || tela==6.2 || tela==7 || tela==7.1 || tela==7.2 || tela==8 || tela ||8.1 || tela==8.2 || tela==9 || tela==9.1 || tela==9.2 || tela==10 || tela==10.1 || tela==10.2 || tela==11 || tela==11.1 || tela==11.2 || tela==12 || tela==12.1 || tela==12.2 || tela==13){
      tela = 0;
    }
  } 
}  