function setup(){
    video = createCapture(VIDEO);
    video.size(750, 800);

    canvas = createCanvas(800, 750);
    canvas.position(860.500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}

function draw(){
    background('#969A97');
}

function gotPoses(results){
    if(results.length> 0)
    {
        console.log(results);
    }
}