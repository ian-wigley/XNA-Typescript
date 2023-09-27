export class Keys {

    private static f1 = false;
    private static f2 = false;
    private static f3 = false;
    private static f4 = false;
    private static f5 = false;
    private static f6 = false;
    private static f7 = false;
    private static f8 = false;
    private static f9 = false;
    private static f10 = false;
    private static f11 = false;
    private static f12 = false;

    private static right = false;
    private static left = false;
    private static space = false;
    private static up = false;
    private static down = false;
    private static leftctrl = false;
    private static rightctrl = false;

    private static a = false;
    private static b = false;
    private static c = false;
    private static d = false;
    private static e = false;
    private static f = false;
    private static g = false;
    private static h = false;
    private static i = false;
    private static j = false;
    private static k = false;
    private static l = false;
    private static m = false;
    private static n = false;
    private static o = false;
    private static p = false;
    private static q = false;
    private static r = false;
    private static s = false;
    private static t = false;
    private static u = false;
    private static v = false;
    private static w = false;
    private static x = false;
    private static y = false;
    private static z = false;

    public static get F1(): boolean { return Keys.f1; }
    public static set F1(value: boolean) { Keys.f1 = value; }
    public static get F2(): boolean { return Keys.f2; }
    public static set F2(value: boolean) { Keys.f2 = value; }
    public static get F3(): boolean { return Keys.f3; }
    public static set F3(value: boolean) { Keys.f3 = value; }
    public static get F4(): boolean { return Keys.f4; }
    public static set F4(value: boolean) { Keys.f4 = value; }
    public static get F5(): boolean { return Keys.f5; }
    public static set F5(value: boolean) { Keys.f5 = value; }
    public static get F6(): boolean { return Keys.f6; }
    public static set F6(value: boolean) { Keys.f6 = value; }
    public static get F7(): boolean { return Keys.f7; }
    public static set F7(value: boolean) { Keys.f7 = value; }
    public static get F8(): boolean { return Keys.f8; }
    public static set F8(value: boolean) { Keys.f8 = value; }
    public static get F9(): boolean { return Keys.f9; }
    public static set F9(value: boolean) { Keys.f9 = value; }
    public static get F10(): boolean { return Keys.f10; }
    public static set F10(value: boolean) { Keys.f10 = value; }
    public static get F11(): boolean { return Keys.f11; }
    public static set F11(value: boolean) { Keys.f11 = value; }
    public static get F12(): boolean { return Keys.f12; }
    public static set F12(value: boolean) { Keys.f12 = value; }

    public static get Right(): boolean { return Keys.right; }
    public static set Right(value: boolean) { Keys.right = value; }
    public static get Left(): boolean { return Keys.left; }
    public static set Left(value: boolean) { Keys.left = value; }
    public static get Space(): boolean { return Keys.space; }
    public static set Space(value: boolean) { Keys.space = value; }
    public static get Up(): boolean { return Keys.up; }
    public static set Up(value: boolean) { Keys.up = value; }
    public static get Down(): boolean { return Keys.down; }
    public static set Down(value: boolean) { Keys.down = value; }
    public static get LeftControl(): boolean { return Keys.leftctrl; }
    public static set LeftControl(value: boolean) { Keys.leftctrl = value; }
    public static get RightControl(): boolean { return Keys.rightctrl; }
    public static set RightControl(value: boolean) { Keys.rightctrl = value; }

    public static get A(): boolean { return Keys.a; }
    public static set A(value: boolean) { Keys.a = value; }
    public static get B(): boolean { return Keys.b; }
    public static set B(value: boolean) { Keys.b = value; }
    public static get C(): boolean { return Keys.c; }
    public static set C(value: boolean) { Keys.c = value; }
    public static get D(): boolean { return Keys.d; }
    public static set D(value: boolean) { Keys.d = value; }
    public static get E(): boolean { return Keys.e; }
    public static set E(value: boolean) { Keys.e = value; }
    public static get F(): boolean { return Keys.f; }
    public static set F(value: boolean) { Keys.f = value; }
    public static get G(): boolean { return Keys.g; }
    public static set G(value: boolean) { Keys.g = value; }
    public static get H(): boolean { return Keys.h; }
    public static set H(value: boolean) { Keys.h = value; }
    public static get I(): boolean { return Keys.i; }
    public static set I(value: boolean) { Keys.i = value; }
    public static get J(): boolean { return Keys.j; }
    public static set J(value: boolean) { Keys.j = value; }
    public static get K(): boolean { return Keys.k; }
    public static set K(value: boolean) { Keys.k = value; }
    public static get L(): boolean { return Keys.l; }
    public static set L(value: boolean) { Keys.l = value; }
    public static get M(): boolean { return Keys.m; }
    public static set M(value: boolean) { Keys.m = value; }
    public static get N(): boolean { return Keys.n; }
    public static set N(value: boolean) { Keys.n = value; }
    public static get O(): boolean { return Keys.o; }
    public static set O(value: boolean) { Keys.o = value; }
    public static get P(): boolean { return Keys.p; }
    public static set P(value: boolean) { Keys.p = value; }
    public static get Q(): boolean { return Keys.q; }
    public static set Q(value: boolean) { Keys.q = value; }
    public static get R(): boolean { return Keys.r; }
    public static set R(value: boolean) { Keys.r = value; }
    public static get S(): boolean { return Keys.s; }
    public static set S(value: boolean) { Keys.s = value; }
    public static get T(): boolean { return Keys.t; }
    public static set T(value: boolean) { Keys.t = value; }
    public static get U(): boolean { return Keys.u; }
    public static set U(value: boolean) { Keys.u = value; }
    public static get V(): boolean { return Keys.v; }
    public static set V(value: boolean) { Keys.v = value; }
    public static get W(): boolean { return Keys.w; }
    public static set W(value: boolean) { Keys.w = value; }
    public static get X(): boolean { return Keys.x; }
    public static set X(value: boolean) { Keys.x = value; }
    public static get Y(): boolean { return Keys.y; }
    public static set Y(value: boolean) { Keys.y = value; }
    public static get Z(): boolean { return Keys.z; }
    public static set Z(value: boolean) { Keys.z = value; }
}

export class Keyboard {
    constructor() {
    }
    public static GetState() {
        return this;
    }
    public static IsKeyDown(key: Keys) {
        return key;
    }
}