class SpriteBatch {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public get Canvas(): HTMLCanvasElement {
        return this.canvas;
    }

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    public Draw(texture: HTMLImageElement, sourceX: number | Rectangle, sourceY?: number | Rectangle, sourceW?: number, sourceH?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void {

        if (sourceX instanceof Rectangle && sourceY instanceof Rectangle) {
            if (!sourceY.Width || !sourceY.Height) {
                this.ctx.drawImage(texture, sourceX.X, sourceX.Y);
            }
            else {
                //this.ctx.drawImage(texture, sourceX.X, sourceX.Y, sourceX.Width, sourceX.Height, sourceY.X, sourceY.Y, sourceX.Width, sourceX.Height);//, canvasImageWidth, canvasImageHeight);
                this.ctx.drawImage(texture, sourceY.X, sourceY.Y, sourceY.Width, sourceY.Height, sourceX.X, sourceX.Y, sourceX.Width, sourceX.Height);//, canvasImageWidth, canvasImageHeight);
            }
        }

        if (!sourceW && !(sourceX instanceof Rectangle)) {
            this.ctx.drawImage(texture, <number>sourceX, <number>sourceY);
        }
        if (sourceW && !(sourceX instanceof Rectangle)) {
            this.ctx.drawImage(texture, <number>sourceX, <number>sourceY, sourceW, sourceH, canvasOffsetX, canvasOffsetY, canvasImageWidth, canvasImageHeight);
        }
    }

    public DrawString(font, value, position, color): void {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(value, position.X, position.Y);
    }

    public Begin(): void {
        this.ctx.fillStyle = 'CornflowerBlue';
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // To-do
    public End(): void { }

}