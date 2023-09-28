export var SpriteEffects;
(function (SpriteEffects) {
    SpriteEffects[SpriteEffects["None"] = 0] = "None";
})(SpriteEffects || (SpriteEffects = {}));
export class SpriteBatch {
    canvas;
    ctx;
    get Canvas() {
        return this.canvas;
    }
    constructor(non) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    Draw(texture, param2, param3, param4, param5, param6, param7, param8, param9) {
        if (!param4) {
            this.ctx.drawImage(texture, param2, param3);
        }
        else {
            this.ctx.drawImage(texture, param2, param3, param4, param5, param6, param7, param8, param9);
        }
    }
    DrawString(font, value, position, color) {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(value, position.X, position.Y);
    }
    Begin() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    Clear(col) {
        this.ctx.fillStyle = col;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    End() { }
}
//# sourceMappingURL=spriteBatch.js.map