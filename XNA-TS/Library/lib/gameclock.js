import { TimeSpan } from "../lib/timespan.js"

export class GameClock {
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
        this.baseRealTime = 0;
        this.lastRealTime = 0;
        this.lastRealTimeValid = false;
        this.suspendCount = 0;
        this.suspendStartTime = 0;
        this.timeLostToSuspension = 0;
        this.lastRealTimeCandidate = 0;
        this.currentTimeOffset = new TimeSpan(0);
        this.currentTimeBase = new TimeSpan(0);
        this.elapsedTime = new TimeSpan(0);
        this.elapsedAdjustedTime = new TimeSpan(0);
        this.Reset();
    }
    Reset() {
        this.currentTimeBase.Zero;
        this.currentTimeOffset.Zero;
        this.baseRealTime = GameClock.Counter;
        this.lastRealTimeValid = false;
    }
    UpdateElapsedTime() {
        let counter = GameClock.Counter;
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
            let num = this.lastRealTime + this.timeLostToSuspension;
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
        const num = 10000000;
        return this.FromTicks((delta * num) / GameClock.Frequency);
    }
    static FromTicks(value) {
        return new TimeSpan(value);
    }
}
