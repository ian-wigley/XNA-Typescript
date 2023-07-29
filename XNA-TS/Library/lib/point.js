export class Point {
    constructor(x, y) {
        this.m_x = x;
        this.m_y = y;
    }
    get X() {
        return this.m_x;
    }
    set X(value) {
        this.m_x = value;
    }
    get Y() {
        return this.m_y;
    }
    set Y(value) {
        this.m_y = value;
    }
}
