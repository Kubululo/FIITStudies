function startNeonWarior() {
    neonWariorPlayArea.play();
    size = 300;
    myStickman = new component(size, "green", 20, 20, 400);
    oponent = new component(size, "red", 420, 20, 200);
    myHealth = new component("20px", "black", 280, 40, 0, "text");
    oponentHealth = new component("20px", "black", 280, 60, 0, "text");
    won = new component("200px", "black", window.innerWidth / 4, window.innerHeight / 2, 0, "text");
}

function drawMenu() {
    neonWariorPlayArea.play();
    neonWariorPlayArea.context.font = this.height + " Arial";
    neonWariorPlayArea.context.fillStyle = color;
    neonWariorPlayArea.context.fillText("PLAY", neonWariorPlayArea.canvas.width / 2, neonWariorPlayArea.canvas.height / 2);
}

function restartNeonWarior() {
    clearInterval(interval);
    neonWariorPlayArea.clear();
}

function updateGameArea() {
    neonWariorPlayArea.clear();
    neonWariorPlayArea.frameNo += 1;
    neonWariorPlayArea.canvas.width = window.innerWidth - 2;;
    neonWariorPlayArea.canvas.height = window.innerHeight - 2;;
    myStickman.speedX = 0;
    myStickman.speedY = 0;
    distanceToOponent.distance();
    distance = distanceToOponent.toOponent;
    if (neonWariorPlayArea.keys && neonWariorPlayArea.keys[37]) { myStickman.speedX = -4; }
    if (neonWariorPlayArea.keys && neonWariorPlayArea.keys[39]) { myStickman.speedX = 4; }
    if (neonWariorPlayArea.keys && neonWariorPlayArea.keys[38]) { myStickman.jump(); }
    if (neonWariorPlayArea.keys && neonWariorPlayArea.keys[40]) { myStickman.speedY = 2; }
    if (neonWariorPlayArea.keys && neonWariorPlayArea.keys[83] && neonWariorPlayArea.frameNo % 20 == 0 && distance < 100) {
        oponent.damage = 20;
        if (myStickman.x > oponent.x) { oponent.speedX = 50; }
        if (myStickman.x <= oponent.x) { oponent.speedX = -50; }
    }
    if (neonWariorPlayArea.frameNo % 50 == 0 && distance < 100) {
        myStickman.damage = 10;
        if (myStickman.x > oponent.x) { myStickman.speedX = 50; }
        if (myStickman.x <= oponent.x) { myStickman.speedX = -50; }
    }

    if (myStickman.x < oponent.x) { oponent.speedX = -2; }
    if (myStickman.x == oponent.x) { oponent.speedX = 0; }
    if (myStickman.x > oponent.x) { oponent.speedX = 2; }
    if (myStickman.y < oponent.y) { oponent.speedY = -5; }
    if (myStickman.y >= oponent.y) { oponent.speedY = 0 };
    if (myStickman.health <= 0 || oponent.health <= 0) {
        neonWariorPlayArea.clear();
        neonWariorPlayArea.stop();

    }
    myHealth.text = "Player Health:  " + myStickman.health;
    oponentHealth.text = "Oponent Health:  " + oponent.health;
    myHealth.update();
    oponentHealth.update();
    myStickman.move();
    oponent.move();
    oponent.update();
    myStickman.update();

}

var neonWariorPlayArea = {
    canvas: document.createElement('canvas'),
    frameNo: 0,
    play: function() {
        this.canvas.width = window.innerWidth - 2;
        this.canvas.height = window.innerHeight - 2;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes['button']);
        this.interval = setInterval(updateGameArea, 1000 / 60);
        window.addEventListener('keydown', function(e) {
            neonWariorPlayArea.keys = (neonWariorPlayArea.keys || []);
            neonWariorPlayArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function(e) {
            neonWariorPlayArea.keys[e.keyCode] = false;
        })
        window.addEventListener('mousemove', function(e) {
            neonWariorPlayArea.x = e.pageX;
            neonWariorPlayArea.y = e.pageY;
        })
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        this.clear();
        clearInterval(this.interval);
        this.clear();
        won.text = "Great";
        won.update();
    }
}

function component(size, color, x, y, health, type) {
    this.damage = 0;
    this.health = health;
    this.type = type;
    this.width = size / 4;
    this.height = size;
    this.speedX = 0;
    this.speedY = 0;
    this.jumpAbility = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0.15;
    this.gravitySpeed = 0;
    this.update = function() {
            context = neonWariorPlayArea.context;
            if (this.type == "text") {
                context.font = this.height + " Arial";
                context.fillStyle = color;
                context.fillText(this.text, this.x, this.y);
            } else {

                
                this.attack();
            }
        },
        this.move = function() {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;
            this.hitBottom();
            this.hitLeftSide();
            this.hitRightSide();
        },
        this.hitBottom = function() {
            var rockbottom = neonWariorPlayArea.canvas.height - this.height / 2;
            if (this.y > rockbottom) {
                this.y = rockbottom;
                this.gravitySpeed = 0;
                this.jumpAbility = 10;
            }
        },
        this.hitLeftSide = function() {
            var side = 0 + this.width / 2;
            if (this.x < side) {
                this.x = side;
            }
        },
        this.hitRightSide = function() {
            var side = neonWariorPlayArea.canvas.width - this.width / 2;
            if (this.x > side) {
                this.x = side;
            }
        },
        this.jump = function() {
            if (this.jumpAbility >= 1) {
                this.speedY = -10;
                this.jumpAbility--;
            }

        },
        this.attack = function() {
            this.health -= this.damage;
            this.damage = 0;
        }
}

var distanceToOponent = {
    toOponent: 0,
    distance: function() {
        this.toOponent = Math.abs(myStickman.x - oponent.x);
    }
}