export class Controls {

    m_left = false;
    m_right = false;
    m_up = false;
    m_down = false;
    m_fire = false;
    m_spacePressed = false;
    m_firePressed = false;
    m_divePressed = false;
    m_reversePressed = false;
    m_return = false;
    m_enter = false;
    m_lcontrol = false;
    m_record = false;
    m_play = false;


    constructor() {
        this.m_left = false;
        this.m_right = false;
        this.m_up = false;
        this.m_down = false;
        this.m_fire = false;
        this.m_spacePressed = false;
        this.m_firePressed = false;
        this.m_divePressed = false;
        this.m_reversePressed = false;
        this.m_return = false;
        this.m_enter = false;
        this.m_lcontrol = false;
        this.m_record = false;
        this.m_play = false;
    }

    public get left(): boolean {
        return this.m_left;
    }

    public set left(value: boolean) {
        this.m_left = value;
    }

    public get right(): boolean {
        return this.m_right;
    }

    public set right(value: boolean) {
        this.m_right = value;
    }

    public get up(): boolean {
        return this.m_up;
    }

    public set up(value: boolean) {
        this.m_up = value;
    }

    public get down(): boolean {
        return this.m_down;
    }

    public set down(value: boolean) {
        this.m_down = value;
    }

    public get lcontrolPressed(): boolean {
        return this.m_lcontrol;
    }

    public set lcontrolPressed(value: boolean) {
        this.m_lcontrol = value;
    }

    public get enterPressed(): boolean {
        return this.m_enter;
    }

    public set enterPressed(value: boolean) {
        this.m_enter = value;
    }

    public get returnPressed(): boolean {
        return this.m_return;
    }

    public set returnPressed(value: boolean) {
        this.m_return = value;
    }

    public get spacePressed(): boolean {
        return this.m_spacePressed;
    }

    public set spacePressed(value: boolean) {
        this.m_spacePressed = value;
    }
}