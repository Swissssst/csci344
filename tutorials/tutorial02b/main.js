let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5Circles();
    // draw5RedSquares();
    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircles(10);
    drawNCirclesFlexible(30,25,400,0);
    drawNShapeFlexible(10,25,350,0,"circle");
    drawNShapeDirectionFlexible(10,25,300,50,"circle","row");

    drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
    noFill();
    // fill('red');
    circle(100, 200, 50); // centerX, centerY, radius
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

function draw5CirclesWhile() {
    let i = 0;
    while (i < 5) {
        noFill();
        circle(450, 200+i*50, 50);
        i++;
    }
}

function draw5CirclesFor() {
    for (let i = 0; i < 5; i++) {
        fill("blue");
        circle(550, 200+i*50, 50);
    }
}

function drawNCircles(n) {
    for (let i = 0; i < n; i++) {
        fill("red");
        circle(650, 100+i*50, 50);
    }
}

function drawNCirclesFlexible(n, size, x, y) {
    for (let i = 0; i < n; i++) {
        fill("purple");
        circle(x, y+i*size, size);
    }
}

function drawNShapeFlexible(n, size, x, y, shape) {
    if (shape ==="circle") {
        for (let i = 0; i < n; i++) {
            fill("green");
            circle(x, y+i*size, size);
        }
    } else {
        for (let i = 0; i < n; i++) {
            fill("green");
            square(x, y+i*size, size);
        }
    }
}

function drawNShapeDirectionFlexible(n,size,x,y,shape,direction) {
    for (let i = 0; i < n; i++) {
        if (shape === "circle") {
            fill("black");
            circle(x, y, size);
        } else {
            fill("green");
            square(x, y, size);
        }

        if (direction === "row") {
            x += size;
        } else {
            y+= size;
        }
    }
}