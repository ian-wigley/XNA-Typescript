export class MathHelper {
    public static E: number = 2.718282;
    public static Log2E: number = 1.442695;
    public static Log10E: number = 0.4342945;
    public static Pi: number = 3.141593;
    public static TwoPi: number = 6.283185;
    public static PiOver2: number = 1.570796;
    public static PiOver4: number = 0.7853982;
    public static ToRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }
    public static ToDegrees(radians: number): number {
        return radians * 57.29578;
    }
    public static Distance(value1: number, value2: number): number {
        return Math.abs(value1 - value2);
    }
    public static Min(value1: number, value2: number): number {
        return Math.min(value1, value2);
    }
    public static Max(value1: number, value2: number): number {
        return Math.max(value1, value2);
    }
    public static Clamp(value: number, min: number, max: number): number {
        value = value > max ? max : value;
        value = value < min ? min : value;
        return value;
    }
    public static Lerp(value1: number, value2: number, amount: number): number {
        return value1 + (value2 - value1) * amount;
    }
    public static Barycentric(value1: number, value2: number, value3: number, amount1: number, amount2: number): number {
        return <number>(<number>value1 + <number>amount1 * (<number>value2 - <number>value1) + <number>amount2 * (<number>value3 - <number>value1));
    }
    public static SmoothStep(value1: number, value2: number, amount: number): number {
        let num: number = MathHelper.Clamp(amount, 0.0, 1.0);
        return MathHelper.Lerp(value1, value2, <number>(<number>num * <number>num * (3.0 - 2.0 * <number>num)));
    }
    public static CatmullRom(value1: number, value2: number, value3: number, value4: number, amount: number): number {
        let num1: number = amount * amount;
        let num2: number = amount * num1;
        return <number>(0.5 * (2.0 * <number>value2 + (-<number>value1 + <number>value3) * <number>amount + (2.0 * <number>value1 - 5.0 * <number>value2 + 4.0 * <number>value3 - <number>value4) * <number>num1 + (-<number>value1 + 3.0 * <number>value2 - 3.0 * <number>value3 + <number>value4) * <number>num2));
    }
    public static Hermite(value1: number, tangent1: number, value2: number, tangent2: number, amount: number): number {
        let num1: number = amount;
        let num2: number = num1 * num1;
        let num3: number = num1 * num2;
        let num4: number = <number>(2.0 * <number>num3 - 3.0 * <number>num2 + 1.0);
        let num5: number = <number>(-2.0 * <number>num3 + 3.0 * <number>num2);
        let num6: number = num3 - 2 * num2 + num1;
        let num7: number = num3 - num2;
        return <number>(<number>value1 * <number>num4 + <number>value2 * <number>num5 + <number>tangent1 * <number>num6 + <number>tangent2 * <number>num7);
    }
    public static WrapAngle(angle: number): number {
        // Todo fix this
        angle = 6.28318548202515; //<number>Math.IEEERemainder(<number>angle, 6.28318548202515);
        if (<number>angle <= -3.14159274101257) {
            angle += 6.283185;
        }
        else if (<number>angle > 3.14159274101257) {
            angle -= 6.283185;
        }
        return angle;
    }
}

