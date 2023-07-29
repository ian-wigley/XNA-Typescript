import { GameTime } from "../lib/gametime.js";
import { TimeSpan } from "../lib/timespan.js";
import { ContentManager } from "../lib/contentmanager.js";
import { GameClock } from "../lib/gameclock.js";
import { SpriteBatch } from "../lib/spritebatch.js";
import { Keys } from "../lib/keyboardstate.js";

export class Game {
    constructor() {
        this.gameTime = new GameTime();
        this.isFixedTimeStep = true;
        this.int_MaxValue = 2147483647;
        this.updatesSinceRunningSlowly1 = this.int_MaxValue;
        this.updatesSinceRunningSlowly2 = this.int_MaxValue;
        this.isActive = true;
        this.exitRequested = false;
        this.inactiveSleepTime = new TimeSpan(0);
        this.isMouseVisible = false;
        this.inRun = false;
        this.endRunRequired = false;
        this.targetElapsedTime = new TimeSpan(0);
        this.drawRunningSlowly = false;
        this.doneFirstUpdate = false;
        this.doneFirstDraw = false;
        this.forceElapsedTimeToZero = false;
        this.suppressDraw = false;
        this.maximumElapsedTime = new TimeSpan(0);
        this.content = new ContentManager( /*(IServiceProvider) this.gameServices*/);
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
    Run(gameTime) {
        this.Draw(gameTime);
    }
    get GraphicsDevice() {
        return this.spriteBatch;
    }
    // get Content() {
    //     return this.content;
    // }
    // set Content(value) {
    //     if (value == null) {
    //         console.log("ArgumentNullException");
    //     }
    //     this.content = value;
    // }
    get MaxElapsedTime() {
        return this.maximumElapsedTime;
    }
    set MaxElapsedTime(value) {
        if (value.LessThan(0)) {
            console.log("The time must be positive.");
        }
        if (value.LessThan(this.targetElapsedTime.Ticks)) {
            console.log("The time must be at least TargetElapsedTime");
        }
    }
    get IsActive() {
        return this.IsActive;
    }
    get IsMouseVisible() {
        return this.IsMouseVisible;
    }
    set IsMouseVisible(value) {
        this.IsMouseVisible = value;
    }
    get TargetElapsedTime() {
        return this.targetElapsedTime;
    }
    set TargetElapsedTime(value) {
    }
    get IsFixedTimeStep() {
        return this.IsFixedTimeStep;
    }
    set IsFixedTimeStep(value) {
        this.IsFixedTimeStep = value;
    }
    RunGame(useBlockingRun) {
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
    get ShouldExit() {
        return this.exitRequested;
    }
    Tick() {
        if (this.ShouldExit) {
            return;
        }
        this.clock.UpdateElapsedTime();
        var flag = true;
        var t = new TimeSpan(0);
        var timeSpan1 = this.clock.ElapsedAdjustedTime;
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
            var timeSpan2 = this.accumulatedElapsedGameTime.Add(timeSpan1);
            var num = Math.floor(timeSpan2.Ticks / this.targetElapsedTime.Ticks);
            this.lastFrameElapsedGameTime = this.lastFrameElapsedGameTime.Zero;
            if (num == 0) {
                return;
            }
            this.clock.AdvanceFrameTime();
            this.accumulatedElapsedGameTime = timeSpan2;
            var targetElapsedTime = this.targetElapsedTime;
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
            return;
        }
        this.DrawFrame();
    }
    DrawFrame() {
        try {
            if (this.ShouldExit || !this.doneFirstUpdate) {
                return;
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
    Draw(gameTime) {
    }
    Update(gameTime) {
        this.doneFirstUpdate = true;
    }
    Initialize() {
        //this.HookDeviceEvents();
        //while (this.notYetInitialized.Count != 0) {
        //    this.notYetInitialized[0].Initialize();
        //    this.notYetInitialized.RemoveAt(0);
        //}
        //if (this.graphicsDeviceService == null || this.graphicsDeviceService.GraphicsDevice == null)
        //    return;
        this.LoadContent();
    }
    LoadContent() { }
    AddHitListener(element) {
        window.addEventListener("keydown", (event) => {
            this.onKeyPress(event);
            return null;
        });
        window.addEventListener("keyup", (event) => {
            this.onKeyUp(event);
            return null;
        });
    }
    onKeyPress(event) {
        event.preventDefault();
        this.onKeyboardPress(event, false);
    }
    onKeyUp(event) {
        event.preventDefault();
        this.onKeyboardRelease(event, false);
    }
    onKeyboardPress(event, touchDevice) {
        switch (((event.keyCode | 0))) {
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
    onKeyboardRelease(event, touchDevice) {
        switch (((event.keyCode | 0))) {
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
