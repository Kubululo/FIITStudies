// button object constructor

function button(xL, xR, yT, yB) {
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBottom = yB;
    this.width = xR - xL;
    this.height = yB - yT;
    this.active = 0;
    this.drawMe = function() {
        neonWariorPlayArea.context.strokeStyle = "blue";
        neonWariorPlayArea.context.beginPath();
        neonWariorPlayArea.context.rect(this.xLeft, this.yTop, this.width, this.height);
        neonWariorPlayArea.context.stroke();
    }
}

button.prototype.clicked = function() {
    if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBottom && this.active == 1) {
        return true;

    }
}