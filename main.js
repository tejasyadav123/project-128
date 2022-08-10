song =""
song2 =""

leftwristX=""
leftwristY=""
rightwristX=""
rightwristY=""

function preload(){
    song = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600 , 400)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video , modelloaded)
    poseNet.on("pose" , gotposeas)
}

function draw(){
    image(video , 0 , 0 , 600 , 400)
}

function modelloaded(){
    console.log("Posenet is loaded")
}

function gotposeas(result){
    if(result.lentgh > 0){
        console.log(result)

        leftwristX = result[0].pose.leftWrist.x
        leftwristY = result[0].pose.leftwrist.y
        rightwristX = result[0].pose.rightwrist.x
        rightwristY = result[0].pose.rightwrist.y

        console.log("leftwristX" + leftwristX + "leftwristY" + leftwristY)
        console.log("rightwristX" + rightwristX + "rightwristY" + rightwristY)
    }
}