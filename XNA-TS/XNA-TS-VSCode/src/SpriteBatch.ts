export enum SpriteEffects { None }
export type Texture2D = HTMLImageElement;

class SpriteBatch {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public get Canvas(): HTMLCanvasElement {
        return this.canvas;
    }

    constructor(non?) {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    public Draw(texture: Texture2D, param2: Vector2 | Rectangle, param3?: Rectangle | Color, param4?: Color, param5?: number, param6?: Vector2, param7?: Vector2 | number, param8?: SpriteEffects, param9?: number): void {
        //public Draw(texture: Texture2D, position: Vector2, color: Color): void;
        if (param2 instanceof Vector2 && typeof (param3) == "string" && !param4 && !param5 && !param6 && !param7 && !param8 && !param9) {
            this.ctx.drawImage(texture, param2.X, param2.Y);
        }

        //public Draw(texture: Texture2D, position: Vector2, sourceRectangle?: Rectangle, color?: Color): void;
        if (param2 instanceof Vector2 && param3 instanceof Rectangle && typeof (param4) == "string" && !param5 && !param6 && !param7 && !param8 && !param9) {
            this.ctx.drawImage(texture, param3.X, param3.Y, param3.Width, param3.Height, param2.X, param2.Y, param3.Width, param3.Height);
        }

        //public Draw(texture: Texture2D, position: Vector2, sourceRectangle?: Rectangle, color?: Color, rotation?: number, origin?: Vector2, scale?: Vector2, effects?: SpriteEffects, layerDepth?: number): void;
        if (param2 instanceof Vector2 && param3 instanceof Rectangle && typeof (param4) == "string" && typeof (param5) == "number"
            && param6 instanceof Vector2 && param7 instanceof Vector2 && typeof (param8) == "number" && typeof (param9) == "number") {
            //alert("Not implemented");
        }

        //public Draw(texture: Texture2D, position: Vector2, sourceRectangle?: Rectangle, color?: Color, rotation?: number, origin?: Vector2, scale?: number, effects?: SpriteEffects, layerDepth?: number): void;
        if (param2 instanceof Vector2 && param3 instanceof Rectangle && typeof (param4) == "string" && typeof (param5) == "number"
            && param6 instanceof Vector2 && typeof (param7) == "number" && typeof (param8) == "number" && typeof (param9) == "number") {
            this.ctx.drawImage(texture, param3.X, param3.Y, param3.Width, param3.Height, param2.X, param2.Y, param3.Width, param3.Height);
        }

        //public Draw(texture: Texture2D, destinationRectangle: Rectangle, color: Color): void;
        if (param2 instanceof Rectangle && typeof (param3) == "string" && !param4 && !param5 && !param6 && !param7 && !param8 && !param9) {
            //alert("Not implemented");
        }

        //public Draw(texture: Texture2D, destinationRectangle: Rectangle, sourceRectangleColor?: Rectangle, color?: Color): void;
        if (param2 instanceof Rectangle && param3 instanceof Rectangle && typeof (param4) == "string" && !param5 && !param6 && !param7 && !param8 && !param9) {
            this.ctx.drawImage(texture, param3.X, param3.Y, param3.Width, param3.Height, param2.X, param2.Y, param3.Width, param3.Height);
        }

        //public Draw(texture: Texture2D, destinationRectangle: Rectangle, sourceRectangle?: Rectangle, color?: Color, rotation?: number, origin?: Vector2, effects?: SpriteEffects, layerDepth?: number): void;
        if (param2 instanceof Rectangle && param3 instanceof Rectangle && typeof (param4) == "string" && typeof (param5) == "number"
            && param6 instanceof Vector2 && typeof (param7) == "number" && typeof (param8) == "number" && !param9) {
            //alert("Not implemented");
        }
    }


    public DrawString(font, value, position, color): void {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(value, position.X, position.Y);
    }

    public Begin(): void {
        //this.ctx.fillStyle = 'CornflowerBlue';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public Clear(col: string): void {
        this.ctx.fillStyle = col;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        //this.ctx.drawImage(null,0,0);
    }

    // To-do
    public End(): void { }

}
