var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["Pressed"] = 1] = "Pressed";
})(ButtonState || (ButtonState = {}));
;
class Buttons {
    constructor() {
        this.a = false;
    }
    get A() {
        return this.a;
    }
}
class Dpad {
    get Left() {
        return this.left;
    }
    get Right() {
        return this.right;
    }
    constructor() {
        this.down = false;
        this.left = false;
        this.right = false;
        this.up = false;
    }
}
class Thumbsticks {
    get Left() {
        return this.left;
    }
    get Right() {
        return this.right;
    }
    constructor() {
        this.down = new Vector2(0, 0);
        this.left = new Vector2(0, 0);
        this.right = new Vector2(0, 0);
        this.up = new Vector2(0, 0);
    }
}
class GamePad {
    static get DPad() {
        return this.Dpad;
    }
    static get ThumbSticks() {
        return this.Thumbsticks;
    }
    static get Buttons() {
        return this.Button;
    }
    constructor() { }
    static GetState(one) {
        return this;
    }
}
GamePad.Button = new Buttons();
GamePad.Dpad = new Dpad();
GamePad.Thumbsticks = new Thumbsticks();
