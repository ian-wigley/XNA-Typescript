export class Keys {
    static get F1() { return Keys.f1; }
    static set F1(value) { Keys.f1 = value; }
    static get F2() { return Keys.f2; }
    static set F2(value) { Keys.f2 = value; }
    static get F3() { return Keys.f3; }
    static set F3(value) { Keys.f3 = value; }
    static get F4() { return Keys.f4; }
    static set F4(value) { Keys.f4 = value; }
    static get F5() { return Keys.f5; }
    static set F5(value) { Keys.f5 = value; }
    static get F6() { return Keys.f6; }
    static set F6(value) { Keys.f6 = value; }
    static get F7() { return Keys.f7; }
    static set F7(value) { Keys.f7 = value; }
    static get F8() { return Keys.f8; }
    static set F8(value) { Keys.f8 = value; }
    static get F9() { return Keys.f9; }
    static set F9(value) { Keys.f9 = value; }
    static get F10() { return Keys.f10; }
    static set F10(value) { Keys.f10 = value; }
    static get F11() { return Keys.f11; }
    static set F11(value) { Keys.f11 = value; }
    static get F12() { return Keys.f12; }
    static set F12(value) { Keys.f12 = value; }
    static get Right() { return Keys.right; }
    static set Right(value) { Keys.right = value; }
    static get Left() { return Keys.left; }
    static set Left(value) { Keys.left = value; }
    static get Space() { return Keys.space; }
    static set Space(value) { Keys.space = value; }
    static get Up() { return Keys.up; }
    static set Up(value) { Keys.up = value; }
    static get Down() { return Keys.down; }
    static set Down(value) { Keys.down = value; }
    static get LeftControl() { return Keys.leftctrl; }
    static set LeftControl(value) { Keys.leftctrl = value; }
    static get RightControl() { return Keys.rightctrl; }
    static set RightControl(value) { Keys.rightctrl = value; }
    static get A() { return Keys.a; }
    static set A(value) { Keys.a = value; }
    static get B() { return Keys.b; }
    static set B(value) { Keys.b = value; }
    static get C() { return Keys.c; }
    static set C(value) { Keys.c = value; }
    static get D() { return Keys.d; }
    static set D(value) { Keys.d = value; }
    static get E() { return Keys.e; }
    static set E(value) { Keys.e = value; }
    static get F() { return Keys.f; }
    static set F(value) { Keys.f = value; }
    static get G() { return Keys.g; }
    static set G(value) { Keys.g = value; }
    static get H() { return Keys.h; }
    static set H(value) { Keys.h = value; }
    static get I() { return Keys.i; }
    static set I(value) { Keys.i = value; }
    static get J() { return Keys.j; }
    static set J(value) { Keys.j = value; }
    static get K() { return Keys.k; }
    static set K(value) { Keys.k = value; }
    static get L() { return Keys.l; }
    static set L(value) { Keys.l = value; }
    static get M() { return Keys.m; }
    static set M(value) { Keys.m = value; }
    static get N() { return Keys.n; }
    static set N(value) { Keys.n = value; }
    static get O() { return Keys.o; }
    static set O(value) { Keys.o = value; }
    static get P() { return Keys.p; }
    static set P(value) { Keys.p = value; }
    static get Q() { return Keys.q; }
    static set Q(value) { Keys.q = value; }
    static get R() { return Keys.r; }
    static set R(value) { Keys.r = value; }
    static get S() { return Keys.s; }
    static set S(value) { Keys.s = value; }
    static get T() { return Keys.t; }
    static set T(value) { Keys.t = value; }
    static get U() { return Keys.u; }
    static set U(value) { Keys.u = value; }
    static get V() { return Keys.v; }
    static set V(value) { Keys.v = value; }
    static get W() { return Keys.w; }
    static set W(value) { Keys.w = value; }
    static get X() { return Keys.x; }
    static set X(value) { Keys.x = value; }
    static get Y() { return Keys.y; }
    static set Y(value) { Keys.y = value; }
    static get Z() { return Keys.z; }
    static set Z(value) { Keys.z = value; }
}
Keys.f1 = false;
Keys.f2 = false;
Keys.f3 = false;
Keys.f4 = false;
Keys.f5 = false;
Keys.f6 = false;
Keys.f7 = false;
Keys.f8 = false;
Keys.f9 = false;
Keys.f10 = false;
Keys.f11 = false;
Keys.f12 = false;
Keys.right = false;
Keys.left = false;
Keys.space = false;
Keys.up = false;
Keys.down = false;
Keys.leftctrl = false;
Keys.rightctrl = false;
Keys.a = false;
Keys.b = false;
Keys.c = false;
Keys.d = false;
Keys.e = false;
Keys.f = false;
Keys.g = false;
Keys.h = false;
Keys.i = false;
Keys.j = false;
Keys.k = false;
Keys.l = false;
Keys.m = false;
Keys.n = false;
Keys.o = false;
Keys.p = false;
Keys.q = false;
Keys.r = false;
Keys.s = false;
Keys.t = false;
Keys.u = false;
Keys.v = false;
Keys.w = false;
Keys.x = false;
Keys.y = false;
Keys.z = false;

export class Keyboard {
    constructor() {}
    static GetState() {
        return this;
    }
    static IsKeyDown(key) {
        return key;
    }
}
