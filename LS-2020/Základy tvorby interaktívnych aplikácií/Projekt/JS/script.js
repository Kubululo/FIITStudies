//variables & objects
var muted = 0;
var keys;
var frameNo = 0;
var frame = 0;
var mouseX;
var mouseY;
var fps;
var redrawInterval;
var currentLevel;
var time = 0;
var completeTime = 0;
var start;
var end;
var sounds = [
    { name: "punch", src: "../ASSETS/SOUND/Punch.mp3" }
];
var achievements = [
    { name: "Tekken style", text: "That's how they did it back in the old days", obtained: 0 },
    { name: "Smash the keyboard", text: "I dont know how I did it but it worked", obtained: 0 },
    { name: "Mama I'm a criminal", text: "Finally I've done it", obtained: 0 },
    { name: "Street Fighter feelings", text: "Now I feel poweeer!!!", obtained: 0 },
    { name: "Greatest fail of all time", text: "Nobody has attended your funeral", obtained: 0 }
]
var chapters = [
    { beaten: 0 },
    { beaten: 0 },
    { beaten: 0 },
    { beaten: 0 },
    { beaten: 0 },
]
var score = new Array;
var storage = window.localStorage;
if (storage.getItem('score') != null)
    score = JSON.parse(storage.getItem('score'));

var audioType;
var buttons = new Array();
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
};

//functions
function initialize() {
    window.addEventListener('keydown', keyPressed);
    window.addEventListener('keyup', keyReleased);
    window.addEventListener('click', mouseClicked);
    preloadAssets();
    neonWariorPlayArea.createCanvas();
    neonWariorPlayArea.context.font = '90px fighter';
    fps = 60;
    setTimeout(drawMainMenu, 200);
    playBtn = new button(500, 650, 50, 100);
    tutorialBtn = new button(500, 760, 110, 160);
    scoreBtn = new button(500, 670, 180, 230);
    backToMenuBtn = new button(250, 550, 320, 370);
    chapter1Btn = new button(150, 350, 50, 150);
    chapter2Btn = new button(450, 650, 50, 150);
    chapter3Btn = new button(50, 250, 200, 300);
    chapter4Btn = new button(300, 500, 200, 300);
    chapter5Btn = new button(550, 750, 200, 300);
    muteBtn = new button(760, 790, 5, 35);
    pauseBtn = new button(720, 750, 5, 35);
    resumeBtn = new button(neonWariorPlayArea.canvas.width / 2 - 120, neonWariorPlayArea.canvas.width / 2 + 120, 70, 140);
    quitBtn = new button(neonWariorPlayArea.canvas.width / 2 - 80, neonWariorPlayArea.canvas.width / 2 + 80, 220, 280);
    playBtn = new button(500, 650, 50, 100);
    tutorialBtn = new button(500, 760, 110, 160);
    scoreBtn = new button(500, 670, 180, 230);
    buttons.push(pauseBtn, playBtn, tutorialBtn, scoreBtn, backToMenuBtn, chapter1Btn, chapter2Btn, chapter3Btn, chapter4Btn, chapter5Btn, muteBtn, pauseBtn,
        resumeBtn, quitBtn, tutorialBtn);
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
    this.img_arena02 = new Image();
    this.img_arena02.src = "../ASSETS/Images/Arenas/Arena2.png";
    this.img_arena03 = new Image();
    this.img_arena03.src = "../ASSETS/Images/Arenas/Arena3.png";
    this.img_arena04 = new Image();
    this.img_arena04.src = "../ASSETS/Images/Arenas/Arena4.png";
    this.img_arena05 = new Image();
    this.img_arena05.src = "../ASSETS/Images/Arenas/Arena5.png";
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
    //preload animations punching
    this.playerAnimationsPunching = new Array();
    this.playerAnimationsPunching[0] = new Image();
    this.playerAnimationsPunching[0].src = "../ASSETS/Shapes/StickmanAnimations/Punching/frame_01.png";
    this.playerAnimationsPunching[1] = new Image();
    this.playerAnimationsPunching[1].src = "../ASSETS/Shapes/StickmanAnimations/Punching/frame_02.png";
    this.playerAnimationsPunching[2] = new Image();
    this.playerAnimationsPunching[2].src = "../ASSETS/Shapes/StickmanAnimations/Punching/frame_03.png";
    this.playerAnimationsPunching[3] = new Image();
    this.playerAnimationsPunching[3].src = "../ASSETS/Shapes/StickmanAnimations/Punching/frame_04.png";
    this.playerAnimationsPunching[4] = new Image();
    this.playerAnimationsPunching[4].src = "../ASSETS/Shapes/StickmanAnimations/Punching/frame_05.png";
    //flipped
    //preload animations punching
    this.playerAnimationsPunchingFlipped = new Array();
    this.playerAnimationsPunchingFlipped[0] = new Image();
    this.playerAnimationsPunchingFlipped[0].src = "../ASSETS/Shapes/StickmanAnimations/PunchingFlipped/frame_01.png";
    this.playerAnimationsPunchingFlipped[1] = new Image();
    this.playerAnimationsPunchingFlipped[1].src = "../ASSETS/Shapes/StickmanAnimations/PunchingFlipped/frame_02.png";
    this.playerAnimationsPunchingFlipped[2] = new Image();
    this.playerAnimationsPunchingFlipped[2].src = "../ASSETS/Shapes/StickmanAnimations/PunchingFlipped/frame_03.png";
    this.playerAnimationsPunchingFlipped[3] = new Image();
    this.playerAnimationsPunchingFlipped[3].src = "../ASSETS/Shapes/StickmanAnimations/PunchingFlipped/frame_04.png";
    this.playerAnimationsPunchingFlipped[4] = new Image();
    this.playerAnimationsPunchingFlipped[4].src = "../ASSETS/Shapes/StickmanAnimations/PunchingFlipped/frame_05.png";
    //preload animations cover
    this.playerAnimationsCover = new Image();
    this.playerAnimationsCover.src = "../ASSETS/Shapes/StickmanAnimations/Cover/frame01.png";
    //flipped
    this.playerAnimationsCoverFlipped = new Image();
    this.playerAnimationsCoverFlipped.src = "../ASSETS/Shapes/StickmanAnimations/CoverFlipped/frame01.png";
    //player animations kick
    this.playerAnimationsKick = new Array();
    this.playerAnimationsKick[0] = new Image();
    this.playerAnimationsKick[0].src = "../ASSETS/Shapes/StickmanAnimations/Kick/frame01.png";
    this.playerAnimationsKick[1] = new Image();
    this.playerAnimationsKick[1].src = "../ASSETS/Shapes/StickmanAnimations/Kick/frame02.png";
    this.playerAnimationsKick[2] = new Image();
    this.playerAnimationsKick[2].src = "../ASSETS/Shapes/StickmanAnimations/Kick/frame03.png";
    this.playerAnimationsKick[3] = new Image();
    this.playerAnimationsKick[3].src = "../ASSETS/Shapes/StickmanAnimations/Kick/frame04.png";
    this.playerAnimationsKick[4] = new Image();
    this.playerAnimationsKick[4].src = "../ASSETS/Shapes/StickmanAnimations/Kick/frame05.png";
    //flipped
    this.playerAnimationsKickFlipped = new Array();
    this.playerAnimationsKickFlipped[0] = new Image();
    this.playerAnimationsKickFlipped[0].src = "../ASSETS/Shapes/StickmanAnimations/KickFlipped/frame01.png";
    this.playerAnimationsKickFlipped[1] = new Image();
    this.playerAnimationsKickFlipped[1].src = "../ASSETS/Shapes/StickmanAnimations/KickFlipped/frame02.png";
    this.playerAnimationsKickFlipped[2] = new Image();
    this.playerAnimationsKickFlipped[2].src = "../ASSETS/Shapes/StickmanAnimations/KickFlipped/frame03.png";
    this.playerAnimationsKickFlipped[3] = new Image();
    this.playerAnimationsKickFlipped[3].src = "../ASSETS/Shapes/StickmanAnimations/KickFlipped/frame04.png";
    this.playerAnimationsKickFlipped[4] = new Image();
    this.playerAnimationsKickFlipped[4].src = "../ASSETS/Shapes/StickmanAnimations/KickFlipped/frame05.png";
    //pause menu
    this.pauseMenu = new Image();
    this.pauseMenu.src = "../ASSETS/Images/icons/pauseMenu.png";
}