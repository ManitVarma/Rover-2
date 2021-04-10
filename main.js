canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

//Rover Width & Hegiht//
hegiht_rover = 100;
Width_rover = 90;

//BG Image path//
background_img = "mars.jpg";
//Rover Image Path//
rover_img = "rover.png";
//Placement of the Rover//
rover_X = 10;
rover_Y = 10;


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBG;
    background_imgTag.src=background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBG(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_X,rover_Y, Width_rover,hegiht_rover);
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e){
    keypressed = e.keyCode
    if(keypressed == '38'){
        up()
        console.log("up")
    }
    if(keypressed == '40'){
        down()
        console.log("down")
    }
    if(keypressed == '37'){
        left()
        console.log("left")
    }
    if(keypressed == '39'){
        right();
        console.log("right")
    }
}

function up(){
    if(rover_Y >=0){
        rover_Y=rover_Y - 10
        uploadBG()
        uploadRover()
    }
}
function down(){
    if(rover_Y <=500){
        rover_Y=rover_Y + 10
        uploadBG()
        uploadRover()
    }
}
function left(){
    if(rover_X >=0){
        rover_X=rover_X - 10
        uploadBG()
        uploadRover()
    }
}
function right(){
    if(rover_X <=700){
        rover_X=rover_X + 10
        uploadBG()
        uploadRover()
    }
}