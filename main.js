function preloaded()
{

}


function setup()
{
    canvas = createCanvas(620 , 480);
    canvas.position(420 , 250);
    video = createCapture(VIDEO);
    video.hide();



}

  function draw() 
{
                                               
    image(video , 190 , 150 , 250 , 200);        
    stroke(255,0,255)
    fill(205,181,218)                                
    circle( 70,70,80)
    
  circle(560,70,80);

  circle(70,430,80);
  
  circle(560,430,80);

fill(79,225,181)
rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);


}


function take_snapshot()
{
save('Happy_birthday_natasha.png');
}

