class Keys {

    private static right = false;
    private static left = false;
    private static space = false;
    private static up = false;
    private static down = false;
    private static ctrl = false;

    public static get Right(): boolean {
        return Keys.right;
    }
    public static set Right(value: boolean) {
        Keys.right = value;
    }

    public static get Left(): boolean {
        return Keys.left;
    }
    public static set Left(value: boolean) {
        Keys.left = value;
    }

    public static get Space(): boolean {
        return Keys.space;
    }
    public static set Space(value: boolean) {
        Keys.space = value;
    }

    public static get Up(): boolean {
        return Keys.up;
    }
    public static set Up(value: boolean) {
        Keys.up = value;
    }

    public static get Down(): boolean {
        return Keys.down;
    }
    public static set Down(value: boolean) {
        Keys.down = value;
    }

    public static get Ctrl(): boolean {
        return Keys.ctrl;
    }
    public static set Ctrl(value: boolean) {
        Keys.ctrl = value;
    }
}


class Keyboard {

    constructor() {
    }

    public static GetState() {
        return this;
    }

    public static IsKeyDown(key: Keys) {
        return key;
    }
}