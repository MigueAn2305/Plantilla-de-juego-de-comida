var INICIO = 0;
var LEVEL = 1;
var PLAY = 2;
var LVL1 = 3;
var LVL2 = 4;
var LVL3 = 5;
var gameState = INICIO;
var gameLevel;
var tiempo = 60;
var tiempoDecimal;
var play, lvl1, lvl2, lvl3;
var salchicha_cruda, salchicha_caliente, pan, ripio;
var perro_caliente, perro_crudo, perro_calienteR, perro_crudoR, panR;



function preload() {

}

function setup() {
    createCanvas(1240,600);
    play = createSprite(620,300,200,40);

    lvl1 = createSprite(400,400,20,20);
    lvl1.visible = false;

    lvl2 = createSprite(600,400,20,20);
    lvl2.visible = false;
    
    lvl3 = createSprite(800,400,20,20);
    lvl3.visible = false;

    perro_caliente = pan + salchicha_caliente;
    perro_crudo = pan + salchicha_cruda;
    perro_calienteR = pan + salchicha_caliente + ripio;
    perro_crudoR = pan + salchicha_cruda + ripio;
    panR = pan + ripio;


}

function draw() {
    background(200);
    if(gameState === INICIO) {
        if(mousePressedOver(play)){
            play.visible = false;
            gameState = LEVEL;
        }
    }
    if(gameState === LEVEL) {
        lvl1.visible = true;
        if(mousePressedOver(lvl1)) {
            gameState = PLAY;
            gameLevel = LVL1;
        }

        lvl2.visible = true;
        if(mousePressedOver(lvl2)) {
            gameState = PLAY;
            gameLevel = LVL2;
        }

        lvl3.visible = true;
        if(mousePressedOver(lvl3)) {
            gameState = PLAY;
            gameLevel = LVL3;
        }

    }

    if(gameState === PLAY) {

        lvl1.visible = false;
        if(gameLevel === LVL1) {
            plantilla_lvl1();

        }

        lvl2.visible = false;
        if(gameLevel === LVL2) {
            plantilla_lvl2();

        }

        lvl3.visible = false;
        if(gameLevel === LVL3) {
            plantilla_lvl3();

        }
    }

    tiempoDecimal = tiempo.toFixed(0);
    text(tiempoDecimal,200,200);

    drawSprites();

}

function plantilla_lvl1() {
    var obstacle = createSprite(200,200);
}

function plantilla_lvl2() {
    var obstacle = createSprite(400,200);
}

function plantilla_lvl3() {
    var obstacle = createSprite(600,200);
}