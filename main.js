canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mars_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
var random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_img=mars_array[random_number];
 rover_img="rover.png";
 rover_width=100;
 rover_height=80;
 rover_x=10;
 rover_y=10;

function add(){
    backgroud_imgTag=new Image();
    backgroud_imgTag.onload=upload_background();
    backgroud_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=upload_rover();
    rover_imgTag.src=rover_img;
}

function upload_background(){
    ctx.drawImage(backgroud_imgTag,0,0,canvas.width,canvas.height);
    
}

function upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        console.log("up Key is pressed");
        up();
    }
    if(keyPressed=='40'){
        console.log("down Key is pressed");
        down();
    }
    if(keyPressed=='37'){
        console.log("left Key is pressed");
        left();
    }
    if(keyPressed=='39'){
        console.log("right Key is pressed");
        right();
    }
}
function up(){
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up is pressed x = "+ rover_x +", y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}
function down(){
    if(rover_y<=550)
    {
        rover_y=rover_y+10;
        console.log("when down is pressed x = "+ rover_x +", y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}
function left(){
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left is pressed x = "+ rover_x +", y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}
function right(){
    if(rover_x<=750)
    {
        rover_x=rover_x+10;
        console.log("when right is pressed x = "+ rover_x +", y = "+ rover_y);
        upload_background();
        upload_rover();
    }
}