//variables & objects
var muted = 0;
var keys;
var frameNo = 0;
var frame = 0;
var mouseX;
var mouseY;
var fps;
var redrawInterval;
var sounds = [
    { name: "punch", src: "../ASSETS/SOUND/Punch.mp3" }
];
var achievements = [
    { name: "Tekken style", text: "That's how they did it back in the old days", obtained: 0 },
    { name: "Smash the keyboard", text: "I dont know how I did it but it worked", obtained: 0 },
    { name: "Mama I'm a criminal", text: "Are you stil proud of your only son", obtained: 0 },
    { name: "Street Fighter feelings", text: "Now I feel poweeer!!!", obtained: 0 },
    { name: "Greatest fail of all time", text: "Nobody has attended your funeral", obtained: 0 },



]
var audioType;

var neonWariorPlayArea = {
    canvas: document.createElement('canvas'),
    createCanvas: function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
        document.body.insertBefore(this.canvas, document.body.childNodes['body']);
        this.context = this.canvas.getContext('2d');
        this.offsetX = parseInt(window.getComputedStyle(this.canvas).marginLeft);
        this.offsetY = parseInt(window.getComputedStyle(this.canvas).marginTop);
    },
    clearCanvas: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

//arena object

function arena(type) {
    this.x = 0;
    this.y = 0;
    this.arenaType = type;
    this.width = neonWariorPlayArea.canvas.width;
    this.height = neonWariorPlayArea.canvas.height;
    this.drawMe = function() {
        switch (true) {
            case (this.arenaType == 1):
                neonWariorPlayArea.context.drawImage(img_arena01, this.x, this.y);
        }
    }
}
//end of arena object

//stickman object
function stickman(size, color, x, y, health) {
    var that = this;
    this.damage = 0;
    this.myHealth = health;
    this.myWidth = size;
    this.myHeight = size;
    this.mySpeedX = 0;
    this.mySpeedY = 0;
    this.myGravitySpeed = 0;
    this.gravity = 0.15;
    this.myX = x;
    this.myY = y;
    this.momentum = 0;
    this.onGround = 1;
    this.bounce = 0.4;
    this.attackAbility = 1;
    this.ai = function() {
        let distance = myPlayer.myX - enemy.myX;
        if (this.myX < myPlayer.myX)
            this.mySpeedX = 3;
        if (this.myX > myPlayer.myX)
            this.mySpeedX = -3;
        if (Math.abs(distance) <= 30)
            this.mySpeedX = 0;
        if (this.myHealth < myPlayer.myHealth && (this.myX >= (myPlayer.myX - 200) || this.myX <= (myPlayer.myX + 200)))
            this.mySpeedX *= -1;
        if (this.myHealth < myPlayer.myHealth && (this.myX >= (myPlayer.myX - 200) || this.myX <= (myPlayer.myX + 200)))
            this.mySpeedX *= -1;
        if (Math.abs(distance) <= 30 && this.attackAbility == 1) {
            myPlayer.reciveDamage(50);
            console.log("Dealt Damage")
            enemy.attackAbility = 0;
            setTimeout(enemy.resetAttackAbility, 3000);
        }
    };
    this.drawMe = function() {
        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
    };
    this.move = function() {
        this.myGravitySpeed += this.gravity;
        this.myX += this.mySpeedX;
        this.myY += this.mySpeedY + this.myGravitySpeed;
        this.hitBottom();
        this.hitLeftSide();
        this.hitRightSide();
    };
    this.hitBottom = function() {
        var rockbottom = neonWariorPlayArea.canvas.height - this.myHeight / 2 - 70;
        if (this.myY > rockbottom) {
            this.myY = rockbottom;
            this.myGravitySpeed = -(this.myGravitySpeed * this.bounce);;
            this.onGround = 1;
        }
    };
    this.hitLeftSide = function() {
        var side = 0 - this.myWidth;
        if (this.myX < side) {
            this.myX = neonWariorPlayArea.canvas.width + this.myWidth;
        }
    };
    this.hitRightSide = function() {
        var side = neonWariorPlayArea.canvas.width + this.myWidth;
        if (this.myX > side) {
            this.myX = 0 - this.myWidth;
        }
    };
    this.jump = function() {
        this.myGravitySpeed = -4;
        console.log("jumped");
        this.onGround = 0;
    };
    this.updatePlayer = function() {
        this.mySpeedX = 0;
        this.mySpeedY = 0;
        this.keyPressed();
        this.move();
        if (this.mySpeedX != 0) this.animatePlayerRunning();
        if (this.mySpeedX == 0) this.animatePlayerStanding();
    };
    this.updateEnemy = function() {
        this.mySpeedX = 0;
        this.mySpeedY = 0;
        this.ai();
        this.move();
        this.animateEnemy();
    };
    this.resetAttackAbility = function() {
        that.attackAbility = 1;
    };
    this.animatePlayerRunning = function() {
            if (this.mySpeedX < 0) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[5], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
            if (this.mySpeedX > 0) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[5], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
        },
        this.animatePlayerStanding = function() {
            if (enemy.myX >= this.myX) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 6:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 7:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStanding[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
            if (enemy.myX < this.myX) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 6:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 7:
                        neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
        },
        this.animatePlayerJumping = function() {


        },
        this.animateEnemy = function() {
            if (this.mySpeedX < 0) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunningFlipped[5], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
            if (this.mySpeedX > 0) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsRunning[5], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;

                }
            }
            if (this.mySpeedX == 0) {
                if (myPlayer.myX >= this.myX) {
                    switch (frame) {
                        case 0:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[0], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 1:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[1], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 2:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[2], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 3:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[3], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 4:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[4], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 5:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[3], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 6:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[2], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 7:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStanding[1], that.myX, that.myY, that.myWidth, this.myHeight);
                            frame = 0;
                            break;
                    }
                }
                if (myPlayer.myX < this.myX) {
                    switch (frame) {
                        case 0:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 1:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 2:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 3:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 4:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[4], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 5:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 6:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                            break;
                        case 7:
                            neonWariorPlayArea.context.drawImage(playerAnimationsStandingFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                            frame = 0;
                            break;
                    }
                }
            }

        }
}

stickman.prototype.keyPressed = function() {
    if (keys && keys[37]) { this.mySpeedX = -4; }
    if (keys && keys[39]) { this.mySpeedX = 4; }
    if (keys && keys[38] && this.onGround == 1) {
        this.jump();
        this.onGround = 0;
    }
    if (keys && keys[83] && this.attackAbility == 1) {
        enemy.reciveDamage(100);
        this.attackAbility = 0;
        setTimeout(myPlayer.resetAttackAbility, 3000);
    }
    if (keys && keys[65] && this.attackAbility == 1) {
        for (var i = 0; i < 50; i++) {
            myPlayer.pushAway();
        }
        this.attackAbility = 0;
        setTimeout(myPlayer.resetAttackAbility, 5000);
    }
}

stickman.prototype.reciveDamage = function(a) {
    this.myHealth -= a;
    if (this.myHealth <= 0) {
        stopGame();
    }
    if (muted != 1) {
        var obj = sounds.find(o => o.name === 'punch');
        mySound = new playSound(obj.src);
        mySound.play();
    }
}

stickman.prototype.pushAway = function() {
    switch (true) {
        case (myPlayer.myX < enemy.myX):
            enemy.myGravitySpeed = -2;
            enemy.mySpeedX = 10;
            enemy.move();
            break;
        case (myPlayer.myX > enemy.myX):
            enemy.myGravitySpeed = -2;
            enemy.mySpeedX = -10;
            enemy.move();
            break;
    }
}

//end of stickman object

// button object

function button(xL, xR, yT, yB) {
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBottom = yB;
    this.width = xR - xL;
    this.height = yB - yT;
    this.drawMe = function() {
        neonWariorPlayArea.context.strokeStyle = "blue";
        neonWariorPlayArea.context.beginPath();
        neonWariorPlayArea.context.rect(this.xLeft, this.yTop, this.width, this.height);
        neonWariorPlayArea.context.stroke();
    }
}

button.prototype.clicked = function() {
    if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBottom) {
        return true;

    }
}



//end of button object



//end of variables & objects

//functions
function initialize() {
    window.addEventListener('keydown', keyPressed);
    window.addEventListener('keyup', keyReleased);
    window.addEventListener('click', mouseClicked);
    preloadAssets();
    neonWariorPlayArea.createCanvas();
    fps = 60;
    setTimeout(drawMainMenu, 200);
}

function preloadAssets() {
    //preload menus
    this.mainMenu = new Image();
    this.mainMenu.src = "../ASSETS/Images/MenuBackground/mainMenu.png";
    this.modeSelect = new Image();
    this.modeSelect.src = "../ASSETS/Images/MenuBackground/modeSelect.png";
    this.chapterSelect = new Image();
    this.chapterSelect.src = "../ASSETS/Images/MenuBackground/chapterSelect.png";
    this.chapterSelectBeaten01 = new Image();
    this.chapterSelectBeaten01.src = "../ASSETS/Images/MenuBackground/chapterSelectB1.png";
    this.chapterSelectBeaten02 = new Image();
    this.chapterSelectBeaten02.src = "../ASSETS/Images/MenuBackground/chapterSelectB2.png";
    this.chapterSelectBeaten03 = new Image();
    this.chapterSelectBeaten03.src = "../ASSETS/Images/MenuBackground/chapterSelectB3.png";
    this.chapterSelectBeaten04 = new Image();
    this.chapterSelectBeaten04.src = "../ASSETS/Images/MenuBackground/chapterSelectB4.png";
    this.chapterSelectBeaten05 = new Image();
    this.chapterSelectBeaten05.src = "../ASSETS/Images/MenuBackground/chapterSelectB5.png";
    this.levelSelect = new Image();
    this.levelSelect.src = "../ASSETS/Images/MenuBackground/levelsSelect.png";
    this.gameOver = new Image();
    this.gameOver.src = "../ASSETS/Images/MenuBackground/gameover.png";
    this.won = new Image();
    this.won.src = "../ASSETS/Images/MenuBackground/won.png";
    this.tutorial = new Image();
    this.tutorial.src = "../ASSETS/Images/MenuBackground/tutorial.png";

    //preload icons
    this.mutedIcon = new Image();
    this.mutedIcon.src = "../ASSETS/Images/icons/muted.png";
    this.unmuted = new Image();
    this.unmuted.src = "../ASSETS/Images/icons/unmuted.png";

    //preload arenas
    this.img_arena01 = new Image();
    this.img_arena01.src = "../ASSETS/Images/Arenas/Arena1.png";
    //preload animations
    this.playerAnimationsStanding = new Array();
    this.playerAnimationsStanding[0] = new Image();
    this.playerAnimationsStanding[0].src = "../ASSETS/Shapes/StickmanAnimations/Standing/frame01.png";
    this.playerAnimationsStanding[1] = new Image();
    this.playerAnimationsStanding[1].src = "../ASSETS/Shapes/StickmanAnimations/Standing/frame02.png";
    this.playerAnimationsStanding[2] = new Image();
    this.playerAnimationsStanding[2].src = "../ASSETS/Shapes/StickmanAnimations/Standing/frame03.png";
    this.playerAnimationsStanding[3] = new Image();
    this.playerAnimationsStanding[3].src = "../ASSETS/Shapes/StickmanAnimations/Standing/frame04.png";
    this.playerAnimationsStanding[4] = new Image();
    this.playerAnimationsStanding[4].src = "../ASSETS/Shapes/StickmanAnimations/Standing/frame05.png";
    //flipped
    this.playerAnimationsStandingFlipped = new Array();
    this.playerAnimationsStandingFlipped[0] = new Image();
    this.playerAnimationsStandingFlipped[0].src = "../ASSETS/Shapes/StickmanAnimations/StandingFlipped/frame01.png";
    this.playerAnimationsStandingFlipped[1] = new Image();
    this.playerAnimationsStandingFlipped[1].src = "../ASSETS/Shapes/StickmanAnimations/StandingFlipped/frame02.png";
    this.playerAnimationsStandingFlipped[2] = new Image();
    this.playerAnimationsStandingFlipped[2].src = "../ASSETS/Shapes/StickmanAnimations/StandingFlipped/frame03.png";
    this.playerAnimationsStandingFlipped[3] = new Image();
    this.playerAnimationsStandingFlipped[3].src = "../ASSETS/Shapes/StickmanAnimations/StandingFlipped/frame04.png";
    this.playerAnimationsStandingFlipped[4] = new Image();
    this.playerAnimationsStandingFlipped[4].src = "../ASSETS/Shapes/StickmanAnimations/StandingFlipped/frame05.png";
    //preload running animation
    this.playerAnimationsRunning = new Array();
    this.playerAnimationsRunning[0] = new Image();
    this.playerAnimationsRunning[0].src = "../ASSETS/Shapes/StickmanAnimations/Running/frame01.png";
    this.playerAnimationsRunning[1] = new Image();
    this.playerAnimationsRunning[1].src = "../ASSETS/Shapes/StickmanAnimations/Running/frame02.png";
    this.playerAnimationsRunning[2] = new Image();
    this.playerAnimationsRunning[2].src = "../ASSETS/Shapes/StickmanAnimations/Running/frame03.png";
    this.playerAnimationsRunning[3] = new Image();
    this.playerAnimationsRunning[3].src = "../ASSETS/Shapes/StickmanAnimations/Running/frame04.png";
    this.playerAnimationsRunning[4] = new Image();
    this.playerAnimationsRunning[4].src = "../ASSETS/Shapes/StickmanAnimations/Running/frame05.png";
    this.playerAnimationsRunning[5] = new Image();
    this.playerAnimationsRunning[5].src = "../ASSETS/Shapes/StickmanAnimations/Running/frame06.png";
    //flipped
    this.playerAnimationsRunningFlipped = new Array();
    this.playerAnimationsRunningFlipped[0] = new Image();
    this.playerAnimationsRunningFlipped[0].src = "../ASSETS/Shapes/StickmanAnimations/RunningFlipped/frame01.png";
    this.playerAnimationsRunningFlipped[1] = new Image();
    this.playerAnimationsRunningFlipped[1].src = "../ASSETS/Shapes/StickmanAnimations/RunningFlipped/frame02.png";
    this.playerAnimationsRunningFlipped[2] = new Image();
    this.playerAnimationsRunningFlipped[2].src = "../ASSETS/Shapes/StickmanAnimations/RunningFlipped/frame03.png";
    this.playerAnimationsRunningFlipped[3] = new Image();
    this.playerAnimationsRunningFlipped[3].src = "../ASSETS/Shapes/StickmanAnimations/RunningFlipped/frame04.png";
    this.playerAnimationsRunningFlipped[4] = new Image();
    this.playerAnimationsRunningFlipped[4].src = "../ASSETS/Shapes/StickmanAnimations/RunningFlipped/frame05.png";
    this.playerAnimationsRunningFlipped[5] = new Image();
    this.playerAnimationsRunningFlipped[5].src = "../ASSETS/Shapes/StickmanAnimations/RunningFlipped/frame06.png";
}

function drawMainMenu() {
    delete button;
    playBtn = new button(500, 650, 50, 100);
    tutorialBtn = new button(500, 760, 110, 160);
    scoreBtn = new button(500, 670, 180, 230);
    if (muted != 1) {
        audioType = "menu";
        //user musi najprv interagovat zo strankou aby sa pustil zvuk... preto oneskorenie
        setTimeout(playAudio, 1000);
    }

    neonWariorPlayArea.context.drawImage(mainMenu, 0, 0);
}

function drawModeSelect() {
    delete button;
    mode01Btn = new button(80, 310, 140, 200);
    mode02Btn = new button(480, 710, 140, 200);
    backToMenuBtn = new button(250, 550, 320, 370);
    neonWariorPlayArea.context.drawImage(modeSelect, 0, 0);
}

function drawTurotial() {
    delete button;
    backToMenuBtn = new button(250, 550, 320, 370);
    neonWariorPlayArea.context.drawImage(tutorial, 0, 0);
}

function drawChapterSelect() {
    delete button;
    chapter1Btn = new button(150, 350, 50, 150);
    chapter2Btn = new button(450, 650, 50, 150);
    chapter3Btn = new button(50, 250, 200, 300);
    chapter4Btn = new button(300, 500, 200, 300);
    chapter5Btn = new button(550, 750, 200, 300);

    neonWariorPlayArea.context.drawImage(chapterSelect, 0, 0);

}

function drawGameOver() {
    neonWariorPlayArea.clearCanvas();

    if (myPlayer.myHealth > enemy.myHealth) {
        delete myPlayer;
        delete enemy;
        neonWariorPlayArea.context.drawImage(won, 0, 0);
    } else {
        neonWariorPlayArea.context.drawImage(gameOver, 0, 0);
        delete myPlayer;
        delete enemy;
    }


}

function playNeonWariorChaper01(level) {
    delete button;
    neonWariorPlayArea.clearCanvas();
    arenaImg = new arena(1);
    muteBtn = new button(760, 790, 5, 35);
    myPlayer = new stickman(100, "green", 100, 200, 200);
    enemy = new stickman(100, "red", 700, 200, 200);
    arenaImg.drawMe();
    myPlayer.drawMe();
    enemy.drawMe();
    startUpdating();
}

function playAudio() {
    delete audio;
    if (audioType == "menu") {
        this.audio = new Audio();
        this.audio.src = "../ASSETS/SOUND/Music/menu.mp3";
        this.audio.play();
        this.audio.onended = function() {

            playAudio();
        };
    }
}

function muteAudio() {
    if (audio.muted) {
        audio.muted = false;
        muted = 0;
    } else {
        audio.muted = true;
        muted = 1;
    }
}

function startUpdating() {
    stopUpdating();
    redrawInterval = setInterval(updateGameArea, 1000 / fps);
}

function stopUpdating() {
    clearInterval(redrawInterval);
}

function stopGame() {
    stopUpdating();
    neonWariorPlayArea.clearCanvas();
    drawGameOver();
}



function updateGameArea() {
    frameNo++;
    if (frameNo >= 9) {
        frameNo = 0;
        frame++;
    }
    neonWariorPlayArea.clearCanvas();
    arenaImg.drawMe();
    if (muted == 0)
        neonWariorPlayArea.context.drawImage(unmuted, 760, 5, 30, 30);
    else
        neonWariorPlayArea.context.drawImage(mutedIcon, 760, 5, 30, 30);
    enemy.updateEnemy();
    myPlayer.updatePlayer();

}

function displayAchievement() {
    delete button;
    modal = document.getElementById("myModal");
    span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.querySelector("p").innerHTML = "<u><strong>New Achievment</u></strong><br>  <i>" + achievements[1].name + ":</i><br><i>" + achievements[1].text + "</i>";
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            playBtn = new button(500, 650, 50, 100);
            tutorialBtn = new button(500, 760, 110, 160);
            scoreBtn = new button(500, 670, 180, 230);
        }
    }
}

function playSound(src) {
    this.sound = new Audio(src);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }

}
//end of functions

//eventHandlers
function keyPressed(e) {
    this.keys = (this.keys || []);
    this.keys[e.keyCode] = true;
}

function keyReleased(e) {
    this.keys[e.keyCode] = false;
}

function mouseClicked(e) {
    this.mouseX = e.pageX - neonWariorPlayArea.offsetX;
    this.mouseY = e.pageY - neonWariorPlayArea.offsetY;
    if (typeof playBtn != "undefined" && playBtn.clicked()) { drawModeSelect(); }
    if (typeof mode01Btn != "undefined" && mode01Btn.clicked()) { drawChapterSelect(); }
    if (typeof backToMenuBtn != "undefined" && backToMenuBtn.clicked()) { drawMainMenu() };
    if (typeof chapter1Btn != "undefined" && chapter1Btn.clicked()) { playNeonWariorChaper01() };
    if (typeof scoreBtn != "undefined" && scoreBtn.clicked()) { displayAchievement() };
    if (typeof tutorialBtn != "undefined" && tutorialBtn.clicked()) { drawTurotial() };
    if (typeof muteBtn != "undefined" && muteBtn.clicked()) { muteAudio() };
}



//end of eventHandlers