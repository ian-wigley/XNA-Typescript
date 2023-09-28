import { TimeSpan } from "./timeSpan.js";
export class GameClock {
    baseRealTime = 0;
    lastRealTime = 0;
    lastRealTimeValid = false;
    suspendCount = 0;
    suspendStartTime = 0;
    timeLostToSuspension = 0;
    lastRealTimeCandidate = 0;
    currentTimeOffset = new TimeSpan(0);
    currentTimeBase = new TimeSpan(0);
    elapsedTime = new TimeSpan(0);
    elapsedAdjustedTime = new TimeSpan(0);
    get CurrentTime() {
        return this.currentTimeBase.Add(this.currentTimeOffset);
    }
    get ElapsedTime() {
        return this.elapsedTime;
    }
    get ElapsedAdjustedTime() {
        return this.elapsedAdjustedTime;
    }
    constructor() {
        this.Reset();
    }
    Reset() {
        this.currentTimeBase.Zero;
        this.currentTimeOffset.Zero;
        this.baseRealTime = GameClock.Counter;
        this.lastRealTimeValid = false;
    }
    UpdateElapsedTime() {
        var counter = GameClock.Counter;
        if (!this.lastRealTimeValid) {
            this.lastRealTime = counter;
            this.lastRealTimeValid = true;
        }
        try {
            this.currentTimeOffset = GameClock.CounterToTimeSpan(counter - this.baseRealTime);
        }
        catch (ex1) {
            this.baseRealTime = this.lastRealTime;
            try {
                this.currentTimeOffset = GameClock.CounterToTimeSpan(counter - this.baseRealTime);
            }
            catch (ex2) {
                this.baseRealTime = counter;
                this.currentTimeOffset.Zero;
            }
        }
        try {
            this.elapsedTime = GameClock.CounterToTimeSpan(counter - this.lastRealTime);
        }
        catch (ex) {
            this.elapsedTime.Zero;
        }
        try {
            var num = this.lastRealTime + this.timeLostToSuspension;
            this.elapsedAdjustedTime = GameClock.CounterToTimeSpan(counter - num);
        }
        catch (ex) {
            this.elapsedAdjustedTime.Zero;
        }
        this.lastRealTimeCandidate = counter;
    }
    AdvanceFrameTime() {
        this.lastRealTime = this.lastRealTimeCandidate;
        this.timeLostToSuspension = 0;
    }
    Suspend() {
        ++this.suspendCount;
        if (this.suspendCount != 1)
            return;
        this.suspendStartTime = GameClock.Counter;
    }
    Resume() {
        --this.suspendCount;
        if (this.suspendCount > 0)
            return;
        this.timeLostToSuspension += GameClock.Counter - this.suspendStartTime;
        this.suspendStartTime = 0;
    }
    static get Counter() {
        return Date.now();
    }
    static get Frequency() {
        return 10000000;
    }
    static CounterToTimeSpan(delta) {
        var num = 10000000;
        return this.FromTicks((delta * num) / GameClock.Frequency);
    }
    static FromTicks(value) {
        return new TimeSpan(value);
    }
}
//# sourceMappingURL=gameClock.js.map