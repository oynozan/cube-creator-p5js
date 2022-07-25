let x, y, z;

function setup() {
    createCanvas(538, 400, WEBGL);
}

function draw() {
    background(230);

    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);
    z = parseInt(document.getElementById("z").value);

    rotateX(PI/4);
    rotateZ(PI/4);

    strokeWeight(0.7);
    fill("#02cf17");
    box(x,y,z);
}