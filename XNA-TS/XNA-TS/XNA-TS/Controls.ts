class Controls {

    private m_left: boolean;			
    private m_right: boolean;			
    private m_up: boolean;				
    private m_down: boolean;			
    private m_fire: boolean;			
    private m_spacePressed: boolean;
    private m_firePressed: boolean;		
    private m_divePressed: boolean;		
    private m_reversePressed: boolean;	
    private m_return: boolean;	        
    private m_enter: boolean;	        
    private m_lcontrol: boolean;
    private m_record: boolean;
    private m_play: boolean;

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

    public get fire(): boolean {
        return this.m_fire;
    }

    public set fire(value: boolean) {
        this.m_fire = value;
    }

    public get spacePressed(): boolean {
        return this.m_spacePressed;
    }

    public set spacePressed(value: boolean) {
        this.m_spacePressed = value;
    }

    public get firePressed(): boolean {
        return this.m_firePressed;
    }

    public set firePressed(value: boolean) {
        this.m_firePressed = value;
    }

    public set divePressed(value: boolean) {
        this.m_divePressed = value;
    }

    public set reversePressed(value: boolean) {
        this.m_reversePressed = value;
    }

    public get returnPressed(): boolean {
        return this.m_return;
    }

    public set returnPressed(value: boolean) {
        this.m_return = value;
    }

    public get enterPressed(): boolean {
        return this.m_enter;
    }

    public set enterPressed(value: boolean) {
        this.m_enter = value;
    }

    public get lcontrolPressed(): boolean {
        return this.m_lcontrol;
    }

    public set lcontrolPressed(value: boolean) {
        this.m_lcontrol = value;
    }

    public set record(value: boolean) {
        this.m_record = value;
    }

    public get record(): boolean {
        return this.m_record;
    }

    public set play(value: boolean) {
        this.m_record = value;
    }

    public get play(): boolean {
        return this.m_record;
    }
}