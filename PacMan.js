//game board
let board;

//game board will have 25 rows and 20 columns
const boardRows = 23;
const boardCols = 19;
const tileSize = 32;
const boardWidth = boardCols * tileSize;
const boardHeight = boardRows * tileSize;
let context;

//initializing the images
let blueGhost; 
let redGhost;
let orangeGhost;
let pinkGhost;
let pacManRight;
let pacManLeft;
let pacManUp;
let pacManDown;
let wall;
let pellet;
let powerPellet;

// 0 = PacMan, 1 = Blue Ghost, 2 = Red Ghost, 3 = Orange Ghost, 4 = Pink Ghost
// 5 = pellet, 6 = power pellet, 7 = wall, 8 = skip
const GameMap = [
    "7777777777777777777",
    "7655555557555555567",
    "7577577757577757757",
    "7555555555555555557",
    "7577575777775757757",
    "7555575555555755557",
    "7777577775777757777",
    "8887575555555757888",
    "7777575772775757777",
    "6555555713475555556",
    "7777575777775757777",
    "8887575555555757888",
    "7777575777775757777",
    "7555555557555555557",
    "7577577757577757757",
    "7557555550555557557",
    "7757575777775757577",
    "7555575557555755557",
    "7577777757577777757",
    "7555555555555555557",
    "7577577757577757757",
    "7655555557555555567",
    "7777777777777777777"
];

//when the window loads
window.onload = function() {
    board = document.getElementById("gameCanvas");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");//context is used when drawing on the board
    loadImages();
    draw();
    update();
    }

function loadImages(){
    blueGhost = new Image();
    blueGhost.src = "Images/blueGhost.png";
    redGhost = new Image();
    redGhost.src = "Images/redGhost.png";
    orangeGhost = new Image();
    orangeGhost.src = "Images/orangeGhost.png";
    pinkGhost = new Image();
    pinkGhost.src = "Images/pinkGhost.png";


    pacManRight = new Image();
    pacManRight.src = "Images/pacManRight.png";
    pacManLeft = new Image();
    pacManLeft.src = "Images/pacManLeft.png";
    pacManUp = new Image();
    pacManUp.src = "Images/pacManUp.png";
    pacManDown = new Image();
    pacManDown.src = "Images/pacManDown.png";
    
    wall = new Image();
    wall.src = "Images/wall.png";
    pellet = new Image();
    pellet.src = "Images/pellet.png";
    cherry = new Image();
    cherry.src = "Images/cherry.png";

}

              //sprites
    //moving
//blue ghost
//red ghost
//orange ghost
//pink ghost
//pacman
    //still
//pellet
//power pellet
//cherry
//wall

               //functions needed
    //game start
//clearing map
//loading game
//loading map
//ghost moving
//score reset to 0
//lives reset to 3
//sprites position reset to start

    //ongoing game
//ghost movement logic
//pacman moving
//collision with walls
//collision with pellets
//collision with power pellets
//collision with cherry
//collision with ghost reset

    //end of game
//game over screen
//score printed
//pellets picked up
//reset game option speed increased
//score resetted if lost continued if lives left

//for managing the non moving images
class Sprites{
                //(the sprite, location, size, if moving sprite or still sprite)
    constructor(image, x, y, width, height, update_fn){
        this.image = image;
        this.image.src = new Image();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.update = update_fn;
        this.px = x;
        this.py = y;
        this.speed = 10;
        this.isValid = true;
        this.update = update_fn;
        }
        drawYourself(g){
                g.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        Colliding(){

        }
}


//load game function to initial starting point
//clear everything used for resetting game and starting game on load


//movement for sprites function


//counting score function


function update(){
    draw();
    //1000 ms = 1 second
    //1000 / 30 = 30 fps
    //redraws everything, once redrawing is done then it recurses
    setTimeout(update, 1000/30);

    // 0 = PacMan, 1 = Blue Ghost, 2 = Red Ghost, 3 = Orange Ghost, 4 = Pink Ghost
// 5 = pellet, 6 = power pellet, 7 = wall, 8 = skip
}
function draw(){
    for(let row = 0; row < boardRows; row++){
        for(let col = 0; col < boardCols; col++){
            let map = GameMap[row][col];
            //drawing the map based on the 2d array
            switch(map){
                case "0": // PacMan
                    context.drawImage(pacManRight, col * tileSize, row * tileSize, tileSize, tileSize);
                    break;
                case "1": // Blue Ghost
                    context.drawImage(blueGhost, col * tileSize, row * tileSize, tileSize, tileSize);
                    break;
                case "2": // Red Ghost
                    context.drawImage(redGhost, col * tileSize, row * tileSize, tileSize, tileSize);
                    break;
                case "3": // Orange Ghost
                    context.drawImage(orangeGhost, col * tileSize, row * tileSize, tileSize, tileSize);
                    break;
                case "4": // Pink Ghost
                    context.drawImage(pinkGhost, col * tileSize, row * tileSize, tileSize, tileSize);
                    break;
                case "5": // pellet
                    context.drawImage(pellet, col * tileSize + 10, row * tileSize + 10, tileSize - 20, tileSize - 20);
                    break;
                case "6": // power pellet
                    context.drawImage(pellet, col * tileSize + 5, row * tileSize + 5, tileSize - 10, tileSize - 10);
                    break;
                case "7": // wall
                    context.drawImage(wall, col * tileSize, row * tileSize, tileSize, tileSize);
                    break;
                case "8": // skip
                    break;
                default:
                    break;

            }
        }
    }
}