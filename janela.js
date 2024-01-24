img = "";
objects = [];
Status = "";

function setup() {
  canvas = createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
function preload() {
    img = loadImage('janela_e_armario.webp');
}
function modelLoaded()
{
    console.log("Model Loaded!")
    Status = true;
    objectDetector.detect(img, gotResult);
}
function draw() {
    image(img, 0, 0, 640, 420);

    if(Status != "")
    {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objeto Detectado";
            console.log("olá");
            fill("#FF0000");
            porcent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + porcent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}