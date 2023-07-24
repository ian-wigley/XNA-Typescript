enum ButtonState {
    Pressed = 1
};


class Buttons {

    private a: boolean = false;

    public get A() {
        return this.a;
    }

}

class dpad {

    private down: boolean = false;
    private left: boolean = false;
    private right: boolean = false;
    private up: boolean = false;

    public get Left() {
        return this.left;
    }

    public get Right() {
        return this.right;
    }

    constructor() { }
}

class thumbsticks {

    private down: Vector2 = new Vector2(0, 0);
    private left: Vector2 = new Vector2(0, 0);
    private right: Vector2 = new Vector2(0, 0);
    private up: Vector2 = new Vector2(0, 0);

    public get Left(): Vector2 {
        return this.left;
    }

    public get Right(): Vector2 {
        return this.right;
    }

    constructor() { }
}

class GamePad {

    public static Button: Buttons = new Buttons();
    public static Dpad: dpad = new dpad();
    public static Thumbsticks: thumbsticks = new thumbsticks();

    public static get DPad() {
        return this.Dpad;
    }

    public static get ThumbSticks() {
        return this.Thumbsticks;
    }

    public static get Buttons() {
        return this.Button;
    }

    constructor() { }

    public static GetState(one) {
        return this;
    }
}