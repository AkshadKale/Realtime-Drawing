noseX = 0;
noseY = 0;
right_WristX = 0 ;
left_WristX = 0;
difference = 0 ;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550)
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video , modelLoaded);
}

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('#90093');
    stroke('#90093');
    square(noseX , noseY , difference);
}

function modelLoaded(){
    console.log('PoseNet is intialized');
}

function gotPoses(results)
{ 
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY);

        left_WristX = results[0].pose.leftWrist.x;
        right_WristX = results[0].pose.rightWrist.x;

        difference = floor(left_WristX - right_WristX);

        console.log("right Wrist = " + right_WristX + " left wrist " + left_WristX + " difference " + difference);

    }

}

