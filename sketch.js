function setup() {
	createCanvas(1000,600);
	ball_red = new Ball(200,300,32,0);
	ball_blue = new Ball(800,300,32,2);
	ball_green = new Ball(500,300,32,2);
	speed = 5;
}

function draw() {
	background(102,102,153);				//Dark blue background
	
	ball_red.show();
	ball_red.update();
	
	ball_blue.show();
	ball_green.show();
	ball_green.update();
	
	if (keyIsDown(87)) {		// Up
		ball_red.y -= speed;
	}
	if (keyIsDown(65)) {		// Left
		ball_red.x -= speed;
	}
	if (keyIsDown(83)) {		// Down
		ball_red.y += speed;
	}
	if (keyIsDown(68)) {		// Right
		ball_red.x += speed;
	}
	
	if (keyIsDown(UP_ARROW)) {		// Up
		ball_blue.y -= speed;
	}
	if (keyIsDown(LEFT_ARROW)) {		// Left
		ball_blue.x -= speed;
	}
	if (keyIsDown(DOWN_ARROW)) {		// Down
		ball_blue.y += speed;
	}
	if (keyIsDown(RIGHT_ARROW)) {		// Right
		ball_blue.x += speed;
	}

}
/*
function keyTyped() {
	if (keyIsDown(87)) {		// Up
		ball_red.y -= 5;
	}
	if (keyIsDown(65)) {		// Left
		ball_red.x -= 5;
	}
	if (keyIsDown(83)) {		// Down
		ball_red.y += 5;
	}
	if (keyIsDown(68)) {		// Right
		ball_red.x += 5;
	}
}

function keyReleased() {
	if (!keyIsPressed) {
		ball_red.xVelocity = 0;
		ball_red.yVelocity = 0;
	}

}*/
