type Texture2D = HTMLImageElement;

class Game {

    private maximumElapsedTime: TimeSpan;
    private gameTime: GameTime = new GameTime();
    private isFixedTimeStep: boolean = true;
    private int_MaxValue: number = 2147483647;
    private updatesSinceRunningSlowly1: number = this.int_MaxValue;
    private updatesSinceRunningSlowly2: number = this.int_MaxValue;
    private isActive: boolean = true;
    private exitRequested: boolean = false;
    private inactiveSleepTime: TimeSpan = new TimeSpan(0);
    private isMouseVisible: boolean = false;
    private inRun: boolean = false;
    private endRunRequired: boolean = false;
    private clock: GameClock;
    private totalGameTime: TimeSpan;
    private targetElapsedTime: TimeSpan = new TimeSpan(0);
    private accumulatedElapsedGameTime: TimeSpan;
    private lastFrameElapsedGameTime: TimeSpan;
    private drawRunningSlowly: boolean = false;
    private doneFirstUpdate: boolean = false;
    private doneFirstDraw: boolean = false;
    private forceElapsedTimeToZero: boolean = false;
    private suppressDraw: boolean = false;
    private content: ContentManager;
    protected spriteBatch: SpriteBatch;

    constructor() {
        this.maximumElapsedTime = new TimeSpan(0);
        this.content = new ContentManager(/*(IServiceProvider) this.gameServices*/);
        this.clock = new GameClock();
        this.maximumElapsedTime = this.maximumElapsedTime.FromMilliseconds(500.0);
        this.totalGameTime = new TimeSpan(0);
        this.accumulatedElapsedGameTime = new TimeSpan(0);
        this.lastFrameElapsedGameTime = new TimeSpan(0);
        this.targetElapsedTime.SetTicks(166667);
        this.inactiveSleepTime = this.inactiveSleepTime.FromMilliseconds(20.0);
        this.spriteBatch = new SpriteBatch();
        this.AddHitListener(this.spriteBatch.Canvas);
    }

    public Run(gameTime): void {
        this.Draw(gameTime);
    }

    public get GraphicsDevice() {
        return this.spriteBatch;
    }

    public get Content() {
        return this.content;
    }

    public set Content(value) {
        if (value == null) {
            console.log("ArgumentNullException");
        }
        this.content = value;
    }

    public get MaxElapsedTime(): TimeSpan {
        return this.maximumElapsedTime;
    }

    public set MaxElapsedTime(value: TimeSpan) {
        if (value.LessThan(0)) {
            console.log("The time must be positive.");
        }
        if (value.LessThan(this.targetElapsedTime.Ticks)) {
            console.log("The time must be at least TargetElapsedTime");
        }
    }

    public get IsActive(): boolean {
        return this.IsActive;
    }

    public get IsMouseVisible(): boolean {
        return this.IsMouseVisible;
    }

    public set IsMouseVisible(value: boolean) {
        this.IsMouseVisible = value;
    }

    public get TargetElapsedTime(): TimeSpan {
        return this.targetElapsedTime;
    }

    public set TargetElapsedTime(value: TimeSpan) {
    }

    public get IsFixedTimeStep(): boolean {
        return this.IsFixedTimeStep;
    }

    public set IsFixedTimeStep(value: boolean) {
        this.IsFixedTimeStep = value;
    }

    public RunGame(useBlockingRun: boolean): void {
        try {

            this.Initialize();

            this.inRun = true;
            this.gameTime.ElapsedGameTime.Zero;
            this.gameTime.TotalGameTime = this.totalGameTime;
            this.gameTime.IsRunningSlowly = false;
            this.Update(this.gameTime);
            this.doneFirstUpdate = true;
            if (useBlockingRun) {
            }
            else {
                this.endRunRequired = true;
            }
        }
        catch (__ex__) {
        }
        finally {
            if (!this.endRunRequired) {
                this.inRun = false;
            }
        }
    }

    private get ShouldExit(): boolean {
        return this.exitRequested;
    }

    public Tick(): void {
        if (this.ShouldExit) {
            return
        }
        this.clock.UpdateElapsedTime();
        var flag: boolean = true;
        var t = new TimeSpan(0);
        var timeSpan1: TimeSpan = this.clock.ElapsedAdjustedTime;
        if (timeSpan1 < t)
            timeSpan1 = t;
        if (this.forceElapsedTimeToZero) {
            timeSpan1 = t;
            this.forceElapsedTimeToZero = false;
        }
        if (timeSpan1.MoreThan(this.maximumElapsedTime.Ticks)) {
            timeSpan1 = this.maximumElapsedTime;
        }
        if (this.isFixedTimeStep) {
            if (Math.abs(timeSpan1.Ticks - this.targetElapsedTime.Ticks) < this.targetElapsedTime.Ticks >> 6) {
                timeSpan1 = this.targetElapsedTime;
            }
            var timeSpan2: TimeSpan = this.accumulatedElapsedGameTime.Add(timeSpan1);
            var num: number = Math.floor(timeSpan2.Ticks / this.targetElapsedTime.Ticks);
            this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Zero;
            if (num == 0) {
                return
            }

            this.clock.AdvanceFrameTime();
            this.accumulatedElapsedGameTime = timeSpan2;
            var targetElapsedTime: TimeSpan = this.targetElapsedTime;
            if (num > 1) {
                this.updatesSinceRunningSlowly2 = this.updatesSinceRunningSlowly1;
                this.updatesSinceRunningSlowly1 = 0;
            }
            else {
                if (this.updatesSinceRunningSlowly1 < this.int_MaxValue)
                    ++this.updatesSinceRunningSlowly1;
                if (this.updatesSinceRunningSlowly2 < this.int_MaxValue)
                    ++this.updatesSinceRunningSlowly2;
            }
            this.drawRunningSlowly = this.updatesSinceRunningSlowly2 < 20;
            while (num > 0 && !this.ShouldExit) {
                --num;
                try {
                    this.gameTime.ElapsedGameTime = targetElapsedTime;
                    this.gameTime.TotalGameTime = this.totalGameTime;
                    this.gameTime.IsRunningSlowly = this.drawRunningSlowly;
                    this.Update(this.gameTime);
                    flag = flag && this.suppressDraw;
                    this.suppressDraw = false;
                }
                finally {
                    this.accumulatedElapsedGameTime.Subtract(targetElapsedTime);
                    this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Add(targetElapsedTime);
                    this.totalGameTime = this.totalGameTime.Add(targetElapsedTime);
                }
            }
        }
        if (flag) {
            return
        }
        this.DrawFrame();
    }

    private DrawFrame(): void {
        try {
            if (this.ShouldExit || !this.doneFirstUpdate) {
                return
            }
            this.gameTime.TotalGameTime = this.totalGameTime;
            this.gameTime.ElapsedGameTime = this.lastFrameElapsedGameTime;
            this.gameTime.IsRunningSlowly = this.drawRunningSlowly;
            this.Draw(this.gameTime);
            this.doneFirstDraw = true;
        }
        finally {
            this.lastFrameElapsedGameTime.Zero;
        }
    }

    protected Draw(gameTime: GameTime): void {}

    protected Update(gameTime: GameTime): void {
        this.doneFirstUpdate = true;
    }


    protected Initialize(): void {
        //this.HookDeviceEvents();
        //while (this.notYetInitialized.Count != 0) {
        //    this.notYetInitialized[0].Initialize();
        //    this.notYetInitialized.RemoveAt(0);
        //}
        //if (this.graphicsDeviceService == null || this.graphicsDeviceService.GraphicsDevice == null)
        //    return;
        this.LoadContent();
    }

    protected LoadContent(): void { }

    private AddHitListener(element: HTMLElement): void {
        window.addEventListener("keydown", (event) => {
            this.onKeyPress(event);
            return null;
        });

        window.addEventListener("keyup", (event) => {
            this.onKeyUp(event);
            return null;
        });
    }

    private onKeyPress(event: KeyboardEvent) {
        event.preventDefault();
        this.onKeyboardPress(event, false);
    }

    private onKeyUp(event: KeyboardEvent) {
        event.preventDefault();
        this.onKeyboardRelease(event, false);
    }

    private onKeyboardPress(event: Event, touchDevice: boolean) {
        switch (((<number>(<KeyboardEvent>event).keyCode | 0))) {
            case 17:
                Keys.LeftControl = true;
                break;
            case 37:
                Keys.Left = true;
                break;
            case 38:
                Keys.Up = true;
                break;
            case 39:
                Keys.Right = true;
                break;
            case 40:
                Keys.Down = true;
                break;
            case 13:
                break;
            case 32:
                Keys.Space = true;
                break;
            case 88:
            case 120:
                Keys.X = true;
                break;
        }
    }

    private onKeyboardRelease(event: Event, touchDevice: boolean) {
        switch (((<number>(<KeyboardEvent>event).keyCode | 0))) {
            case 17:
                Keys.LeftControl = false;
                break;
            case 37:
                Keys.Left = false;
                break;
            case 38:
                Keys.Up = false;
                break;
            case 39:
                Keys.Right = false;
                break;
            case 40:
                Keys.Up = false;
                break;
            case 13:
                break;
            case 32:
                Keys.Space = false;
                break;
            case 120:
                Keys.X = false;
                break;
        }
    }
}