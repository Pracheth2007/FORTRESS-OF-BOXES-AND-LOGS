const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
// var pig1,pig2;
var log1,log2,log3,log4,log5;
// var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,60);
    box2 = new Box(920,320,70,60);
    box3 = new Box(700,240,70,60);
    box4 = new Box(920,240,70,60);
    box5 = new Box(150,240,70,60);
    box6 = new Box(370,240,70,60);
    box7 = new Box(150,240,70,60);    
    box8 = new Box(370,240,70,60);
    box9 = new Box(500,80,70,60);
    box10 = new Box(600,80,70,60);
    box11 = new Box(550,2,70,60);
    ground = new Ground(600,height,1200,20)
    // pig1 = new Pig(810,350);
    // pig2 = new Pig(810,220);
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log (260,260,300,PI/2);
    log4 = new Log (260,180,300,PI/2);
    log5 = new Log(530,90,300,PI/2);
    // bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
}