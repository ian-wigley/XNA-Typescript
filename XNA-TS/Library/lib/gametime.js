import { TimeSpan } from "../lib/timespan.js"

export class GameTime {
    set TotalGameTime(value) {
        this.totalGameTime = value;
    }
    get TotalGameTime() {
        return this.totalGameTime;
    }
    set ElapsedGameTime(value) {
        this.elapsedGameTime = value;
    }
    get ElapsedGameTime() {
        return this.elapsedGameTime;
    }
    set IsRunningSlowly(value) {
        this.isRunningSlowly = value;
    }
    get IsRunningSlowly() {
        return this.isRunningSlowly;
    }
    constructor() {
        this.totalGameTime = new TimeSpan(0);
        this.ElapsedGameTime = new TimeSpan(0);
        this.IsRunningSlowly = false;
    }
}
