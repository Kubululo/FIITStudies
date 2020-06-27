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
                break;
            case (this.arenaType == 2):
                neonWariorPlayArea.context.drawImage(img_arena02, this.x, this.y);
                break;

            case (this.arenaType == 3):
                neonWariorPlayArea.context.drawImage(img_arena03, this.x, this.y);
                break;
            case (this.arenaType == 4):
                neonWariorPlayArea.context.drawImage(img_arena04, this.x, this.y);
                break;
            case (this.arenaType == 5):
                neonWariorPlayArea.context.drawImage(img_arena05, this.x, this.y);
                break;
        }
    }
}
//end of arena object