// functions of p5 (preload(), setup(), draw()) are called internally by p5.js itself


//This is a predefined function of p5.js, in this function
//you need to define all the things which you want to use throughout the code.
//For example if you want to use an image, then you need to define the image
//inside the preload() function.


function preload(){

}


//This is a predefined function of p5.js, this function is
//called by p5.js only once when the program starts. You need to write all the codes
//of your website. The setup(). Here we write code.
//For example code for setting canvas.

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

//This is a predefined function of p5.js, in this function you
//need to write all the codes related to drawing things on canvas. For example code
//for drawing a circle on the canvas. This function is called continuously by p5.js,
//and therefore whatever code you write inside the draw() function is continuously
//executed until we stop the program.

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color)
}

function save(){
    save('ur_selfie.png');
}

function colorb(){
    tint_color = document.getElementById("color_name").value;
}

