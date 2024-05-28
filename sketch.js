function setup() {
  createCanvas(windowWidth, windowHeight);
  lifeYears = 1//floor(random(1,80));
  lifeMonths = floor(random(1,12));
  lifeDays = floor(random(1,365));
  totalSteps = lifeYears*12*31+lifeMonths*31+lifeDays;
  d=0;
  m=0;
  y=0;
  counter = 0;
  colour = 255;
  textAlign(CENTER);
}

function draw() {
  frameRate(300);
  if(counter<=totalSteps){
    probability = floor(random(0,5));
    timeToWait = floor(random(0,probability));
    if(timeToWait===0){
      background(255-colour);
      counter++;
      
      d++;
      if(d === 32){
        m++;
        d=1;
        if(m===13){
          y++;
          m=1;
        }
      }
      ytd = 2024+y;
      mtd = m;
      dtd = d;
      if(m<10){
        mtd = "0" + str(m);
      }
      if(d<10){
        dtd = "0" + str(d);
      }
      textSize(50);
      fill(colour,0,0);
      text(ytd, windowWidth/6, height/2+25);//width*1/12,height/2+25);
      text(mtd, windowWidth*3/6, height/2+25);//width*5/12+25,height/2+25);
      text(dtd, windowWidth*5/6, height/2+25);//width*9/12+25,height/2+25);
      text("/", windowWidth*2/6, height/2+25);//width*2/3,height/2+25);
      text("/", windowWidth*4/6, height/2+25);//width*1/3,height/2+25);
      
      if(counter > totalSteps/2){
        textSize(15);
        fill(colour);
        text("time never seems to pass the same",windowWidth*1/2,height-100);

      }
      colour = floor(counter*255/totalSteps);
    }
    
  }
  else{
    frameRate(0.3);
    background(0);
    fill(255,0,0);
    textSize(50);
    text("IT'S OVER.",windowWidth/2,height/2+25);
    fill(255);
    textSize(15);
    text("would you play again?",windowWidth/2,height-100);
    counter = 0;
  }
}