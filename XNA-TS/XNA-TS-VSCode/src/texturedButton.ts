export class TexturedButton {

    public x: number;
    public y: number;
    public width: number;
    public height: number;

    private image: HTMLImageElement;
    private onClick: () => void;

    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
        imageSrc: string,
        onClick: () => void
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onClick = onClick;

        this.image = new Image();
        this.image.src = imageSrc;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    public containsPoint(mouseX: number, mouseY: number): boolean {
        return (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
        );
    }

    public click(mouseX: number, mouseY: number): void {
        if (this.containsPoint(mouseX, mouseY)) {
            this.onClick();
        }
    }
}
