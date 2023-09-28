import { Vector2 } from "./vector2.js";
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["Pressed"] = 1] = "Pressed";
})(ButtonState || (ButtonState = {}));
;
export class Buttons {
    a = false;
    get A() {
        return this.a;
    }
}
class dpad {
    down = false;
    left = false;
    right = false;
    up = false;
    get Left() {
        return this.left;
    }
    get Right() {
        return this.right;
    }
    constructor() { }
}
class thumbsticks {
    down = new Vector2(0, 0);
    left = new Vector2(0, 0);
    right = new Vector2(0, 0);
    up = new Vector2(0, 0);
    get Left() {
        return this.left;
    }
    get Right() {
        return this.right;
    }
    constructor() { }
}
class GamePad {
    static Button = new Buttons();
    static Dpad = new dpad();
    static Thumbsticks = new thumbsticks();
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
//# sourceMappingURL=gamePadState.js.map