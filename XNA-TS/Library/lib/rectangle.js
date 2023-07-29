export class Rectangle {
    static get Empty() {
        return new Rectangle(0, 0, 0, 0);
    }
    get Left() {
        return this.X;
    }
    get Right() {
        return (this.X + this.Width);
    }
    get Top() {
        return this.Y;
    }
    get Bottom() {
        return (this.Y + this.Height);
    }
    constructor(x, y, width, height) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
    }
    get Center() {
        return new Point(this.X + (this.Width / 2), this.Y + (this.Height / 2));
    }
    Contains(value) {
        if (this.X <= value.X && value.X < this.X + this.Width && this.Y <= value.Y) {
            return value.Y < this.Y + this.Height;
        }
        return false;
    }
    Intersects(value) {
        if (value.X < this.X + this.Width && this.X < value.X + value.Width && value.Y < this.Y + this.Height)
            return this.Y < value.Y + value.Height;
        return false;
    }
}