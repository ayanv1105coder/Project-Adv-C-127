peter_pan_song = "";
Harry_Potter_Theme_song = "";

function setup() {
    canvas = createCanvas(550, 500)
    canvas.position(350, 175);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 550, 500);
}

function preload() {
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_theme_song = loadSound("music.mp3");
}

