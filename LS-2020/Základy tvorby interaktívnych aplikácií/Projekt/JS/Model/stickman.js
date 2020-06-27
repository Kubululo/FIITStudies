//stickman object
function stickman(size, x, y, health) {
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
    this.cover = 0;
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
        if (Math.abs(distance) <= 20 && this.attackAbility == 1) {
            if (myPlayer.cover == 1) {
                myPlayer.reciveDamage(20);
                myPlayerHealthBar.damage += 20;
            } else {
                myPlayer.reciveDamage(60);
                myPlayerHealthBar.damage += 60;
            }
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
            if (typeof keys == "undefined" || (!keys[83] && !keys[69] && !keys[81] && !keys[68])) {
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
            }
        },
        this.animatePlayerStanding = function() {
            if (typeof keys == "undefined" || (!keys[83] && !keys[69] && !keys[81] && !keys[68])) {
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
            }
        },
        this.animatePlayerCover = function() {
            if (enemy.myX > this.myX)
                neonWariorPlayArea.context.drawImage(playerAnimationsCover, that.myX, that.myY, that.myWidth, this.myHeight);
            if (enemy.myX < this.myX)
                neonWariorPlayArea.context.drawImage(playerAnimationsCoverFlipped, that.myX, that.myY, that.myWidth, this.myHeight);
        },
        this.animatePlayerPunch = function() {
            if (enemy.myX >= this.myX) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 6:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 7:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunching[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
            if (enemy.myX < this.myX) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 6:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 7:
                        neonWariorPlayArea.context.drawImage(playerAnimationsPunchingFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }

        },
        this.animatePlayerKick = function() {
            if (enemy.myX >= this.myX) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 6:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 7:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKick[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }
            if (enemy.myX < this.myX) {
                switch (frame) {
                    case 0:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[0], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 1:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 2:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 3:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 4:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[4], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 5:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[3], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 6:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[2], that.myX, that.myY, that.myWidth, this.myHeight);
                        break;
                    case 7:
                        neonWariorPlayArea.context.drawImage(playerAnimationsKickFlipped[1], that.myX, that.myY, that.myWidth, this.myHeight);
                        frame = 0;
                        break;
                }
            }

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
    if (typeof myPlayer != "undefined") {
        if (keys && keys[37]) { this.mySpeedX = -4; }
        if (keys && keys[39]) { this.mySpeedX = 4; }
        if (keys && keys[38] && this.onGround == 1) {
            this.jump();
            this.onGround = 0;
        }
        let distance = myPlayer.myX - enemy.myX;
        if (keys && keys[83]) {
            this.animatePlayerPunch();
            if (this.attackAbility == 1 && Math.abs(distance) < 30) {
                enemy.reciveDamage(25);
                enemyHealthBar.damage += 25;
                this.attackAbility = 0;
                setTimeout(myPlayer.resetAttackAbility, 2000);
            }
        }
        if (keys && keys[65] && this.attackAbility == 1 && Math.abs(distance) < 30) {
            for (var i = 0; i < 50; i++) {
                myPlayer.pushAway();
            }
            this.attackAbility = 0;
            setTimeout(myPlayer.resetAttackAbility, 4000);
        }
        if (keys && keys[81]) {
            this.cover = 1;
            this.animatePlayerCover();
        }

        if (keys && keys[69]) {
            this.animatePlayerPunch();

            if (this.attackAbility == 1 && Math.abs(distance) < 30) {
                enemy.reciveDamage(100);
                enemyHealthBar.damage += 100;
                this.attackAbility = 0;
                setTimeout(myPlayer.resetAttackAbility, 7000);
            }
        }
        if (keys && keys[68]) {
            this.animatePlayerKick();
            if (this.attackAbility == 1 && Math.abs(distance) < 30) {
                enemy.reciveDamage(50);
                enemyHealthBar.damage += 50;
                this.attackAbility = 0;
                setTimeout(myPlayer.resetAttackAbility, 7000);
            }
        }
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

function healthBar(maxHealth) {
    this.width = maxHealth;
    this.damage = 0;

    this.drawMe = function(x, y) {
        let grd = neonWariorPlayArea.context.createLinearGradient(0, 0, 170, 0);
        grd.addColorStop(0.2, "black");
        grd.addColorStop(0.8, "green");
        grd.addColorStop(1, "white");
        neonWariorPlayArea.context.fillStyle = grd;
        neonWariorPlayArea.context.beginPath();
        neonWariorPlayArea.context.rect(x, y, this.width - this.damage, 10);
        neonWariorPlayArea.context.fill();
        this.drawMeOutline(x, y)
    }
    this.drawMeOutline = function(x, y) {
        neonWariorPlayArea.context.beginPath();
        neonWariorPlayArea.context.lineWidth = 2;
        neonWariorPlayArea.context.strokeStyle = 'black';
        neonWariorPlayArea.context.rect(x, y, this.width, 10);
        neonWariorPlayArea.context.stroke();
        neonWariorPlayArea.context.lineWidth = 1;
    }
}