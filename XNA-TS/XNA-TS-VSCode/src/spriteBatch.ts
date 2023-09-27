import { Color } from "./color";
import { Rectangle } from "./rectangle";

export enum SpriteEffects { None }
export type Texture2D = HTMLImageElement;

export class SpriteBatch {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;// = new CanvasRenderingContext2D();

    public get Canvas(): HTMLCanvasElement {
        return this.canvas;
    }

    constructor(non?: any) {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    // Overloaded signitures
    Draw(texture: Texture2D, param2: any, param3?: Color | Rectangle):void;
    public Draw(texture: Texture2D, param2: any, param3?: any, param4?: any, param5?: any, param6?: any, param7?: any, param8?: any, param9?: any): void {

        if (!param4) {
        // if (typeof (param2) == "number" && typeof (param3) =="number" ) {
            this.ctx.drawImage(texture, param2, param3);
        }
        else {
            this.ctx.drawImage(texture, param2, param3, param4, param5, param6, param7, param8, param9);
        }

        // if (param2 instanceof Vector2 && typeof (param3) == "string" && !param4 && !param5 && !param6 && !param7 && !param8 && !param9) {
        //     this.ctx.drawImage(texture, param2.X, param2.Y);
        // }

        // //public Draw(texture: Texture2D, position: Vector2, sourceRectangle?: Rectangle, color?: Color): void;
        // if (param2 instanceof Vector2 && param3 instanceof Rectangle && typeof (param4) == "string" && !param5 && !param6 && !param7 && !param8 && !param9) {
        //     this.ctx.drawImage(texture, param3.X, param3.Y, param3.Width, param3.Height, param2.X, param2.Y, param3.Width, param3.Height);
        // }

        // //public Draw(texture: Texture2D, position: Vector2, sourceRectangle?: Rectangle, color?: Color, rotation?: number, origin?: Vector2, scale?: Vector2, effects?: SpriteEffects, layerDepth?: number): void;
        // if (param2 instanceof Vector2 && param3 instanceof Rectangle && typeof (param4) == "string" && typeof (param5) == "number"
        //     && param6 instanceof Vector2 && param7 instanceof Vector2 && typeof (param8) == "number" && typeof (param9) == "number") {
        //     //alert("Not implemented");
        // }

        // //public Draw(texture: Texture2D, position: Vector2, sourceRectangle?: Rectangle, color?: Color, rotation?: number, origin?: Vector2, scale?: number, effects?: SpriteEffects, layerDepth?: number): void;
        // if (param2 instanceof Vector2 && param3 instanceof Rectangle && typeof (param4) == "string" && typeof (param5) == "number"
        //     && param6 instanceof Vector2 && typeof (param7) == "number" && typeof (param8) == "number" && typeof (param9) == "number") {
        //     this.ctx.drawImage(texture, param3.X, param3.Y, param3.Width, param3.Height, param2.X, param2.Y, param3.Width, param3.Height);
        // }

        // //public Draw(texture: Texture2D, destinationRectangle: Rectangle, color: Color): void;
        // if (param2 instanceof Rectangle && typeof (param3) == "string" && !param4 && !param5 && !param6 && !param7 && !param8 && !param9) {

        // }

        // //public Draw(texture: Texture2D, destinationRectangle: Rectangle, sourceRectangleColor?: Rectangle, color?: Color): void;
        // if (param2 instanceof Rectangle && param3 instanceof Rectangle && typeof (param4) == "string" && !param5 && !param6 && !param7 && !param8 && !param9) {
        //     this.ctx.drawImage(texture, param3.X, param3.Y, param3.Width, param3.Height, param2.X, param2.Y, param3.Width, param3.Height);
        // }

        // //public Draw(texture: Texture2D, destinationRectangle: Rectangle, sourceRectangle?: Rectangle, color?: Color, rotation?: number, origin?: Vector2, effects?: SpriteEffects, layerDepth?: number): void;
        // if (param2 instanceof Rectangle && param3 instanceof Rectangle && typeof (param4) == "string" && typeof (param5) == "number"
        //     && param6 instanceof Vector2 && typeof (param7) == "number" && typeof (param8) == "number" && !param9) {
        // }

    }


    public DrawString(font: any, value: any, position: any, color: any): void {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(value, position.X, position.Y);
    }

    public Begin(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public Clear(col: string): void {
        this.ctx.fillStyle = col;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // TODO
    public End(): void { }

}