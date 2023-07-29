export class TimeSpan {
    constructor(ticks) {
        this.TicksPerMillisecond = 10000;
        this.MillisecondsPerTick = 1.0 / this.TicksPerMillisecond;
        this.ticksPerSecond = this.TicksPerMillisecond * 1000;
        this.SecondsPerTick = 1.0 / this.ticksPerSecond;
        this.TicksPerMinute = this.ticksPerSecond * 60;
        this.MinutesPerTick = 1.0 / this.TicksPerMinute;
        this.TicksPerHour = this.TicksPerMinute * 60;
        this.HoursPerTick = 1.0 / this.TicksPerHour;
        this.TicksPerDay = this.TicksPerHour * 24;
        this.DaysPerTick = 1.0 / this.TicksPerDay;
        this.MillisPerSecond = 1000;
        this.MillisPerMinute = this.MillisPerSecond * 60;
        this.MillisPerHour = this.MillisPerMinute * 60;
        this.MillisPerDay = this.MillisPerHour * 24;
        this.MaxValue_Int64 = 9223372036854775807;
        this.MinValue_Int64 = -9223372036854775808;
        this.MaxSeconds = this.MaxValue_Int64 / this.ticksPerSecond;
        this.MinSeconds = this.MinValue_Int64 / this.ticksPerSecond;
        this.MaxMilliSeconds = this.MaxValue_Int64 / this.TicksPerMillisecond;
        this.MinMilliSeconds = this.MinValue_Int64 / this.TicksPerMillisecond;
        this.TicksPerTenthSecond = this.TicksPerMillisecond * 100;
        this._ticks = 0;
        this._ticks = ticks;
    }
    get Zero() {
        return new TimeSpan(0);
    }
    get Ticks() {
        return this._ticks;
    }
    set Ticks(value) {
        this._ticks = value;
    }
    get TicksPerSecond() {
        return this.ticksPerSecond;
    }
    get Days() {
        return this._ticks / this.TicksPerDay;
    }
    get Hours() {
        return (this._ticks / this.TicksPerHour) % 24;
    }
    get Milliseconds() {
        return (this._ticks / this.TicksPerMillisecond) % 1000;
    }
    get Minutes() {
        return (this._ticks / this.TicksPerMinute) % 60;
    }
    get Seconds() {
        return (this._ticks / this.TicksPerSecond) % 60;
    }
    get TotalDays() {
        return this._ticks * this.DaysPerTick;
    }
    get TotalHours() {
        return this._ticks * this.HoursPerTick;
    }
    get TotalMilliseconds() {
        let temp = this._ticks * this.MillisecondsPerTick;
        if (temp > this.MaxMilliSeconds)
            return this.MaxMilliSeconds;
        if (temp < this.MinMilliSeconds)
            return this.MinMilliSeconds;
        return temp;
    }
    get TotalMinutes() {
        return this._ticks * this.MinutesPerTick;
    }
    get TotalSeconds() {
        return this._ticks * this.SecondsPerTick;
    }
    Add(ts) {
        let result = this._ticks + ts.Ticks;
        if ((this._ticks >> 63 == ts.Ticks >> 63) && (this._ticks >> 63 != result >> 63)) {
            console.log("Overflow_TimeSpanTooLong");
        }
        this._ticks = result;
        return new TimeSpan(result);
    }
    Subtract(ts) {
        let ticks = this._ticks - ts.Ticks;
        if (this._ticks >> 63 != ts.Ticks >> 63 && this._ticks >> 63 != ticks >> 63) {
            console.log("Overflow_TimeSpanTooLong");
        }
        return new TimeSpan(ticks);
    }
    LessThan(ts) {
        if (this._ticks < ts) {
            return true;
        }
        return false;
    }
    MoreThan(ts) {
        if (this._ticks > ts) {
            return true;
        }
        return false;
    }
    EqualTo(ts) {
        if (this._ticks == ts) {
            return true;
        }
        return false;
    }
    Compare(t1, t2) {
        if (t1._ticks > t2._ticks)
            return 1;
        if (t1._ticks < t2._ticks)
            return -1;
        return 0;
    }
    CompareTo(value) {
        if (value == null)
            return 1;
        if (!(value instanceof TimeSpan)) {
            console.log("Arg_MustBeTimeSpan");
        }
        let t = value._ticks;
        if (this._ticks > t) {
            return 1;
        }
        if (this._ticks < t) {
            return -1;
        }
        return 0;
    }
    FromMinutes(value) {
        return this.Interval(value, 60000);
    }
    FromSeconds(value) {
        return this.Interval(value, this.MillisPerSecond);
    }
    Interval(value, scale) {
        let tmp = value * scale;
        let millis = Math.floor((tmp + (value >= 0 ? 0.5 : -0.5)));
        if ((millis > this.MaxValue_Int64 / this.TicksPerMillisecond) || (millis < this.MinValue_Int64 / this.TicksPerMillisecond)) {
            console.log("Overflow_TimeSpanTooLong");
        }
        return new TimeSpan(millis * this.TicksPerMillisecond);
    }
    SetTicks(value) {
        this._ticks = value;
    }
    FromTicks(value) {
        return new TimeSpan(value);
    }
    FromMilliseconds(value) {
        return this.Interval(value, 1);
    }
}