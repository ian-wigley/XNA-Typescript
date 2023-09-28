export class MathHelper {
    static E = 2.718282;
    static Log2E = 1.442695;
    static Log10E = 0.4342945;
    static Pi = 3.141593;
    static TwoPi = 6.283185;
    static PiOver2 = 1.570796;
    static PiOver4 = 0.7853982;
    static ToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    static ToDegrees(radians) {
        return radians * 57.29578;
    }
    static Distance(value1, value2) {
        return Math.abs(value1 - value2);
    }
    static Min(value1, value2) {
        return Math.min(value1, value2);
    }
    static Max(value1, value2) {
        return Math.max(value1, value2);
    }
    static Clamp(value, min, max) {
        value = value > max ? max : value;
        value = value < min ? min : value;
        return value;
    }
    static Lerp(value1, value2, amount) {
        return value1 + (value2 - value1) * amount;
    }
    static Barycentric(value1, value2, value3, amount1, amount2) {
        return (value1 + amount1 * (value2 - value1) + amount2 * (value3 - value1));
    }
    static SmoothStep(value1, value2, amount) {
        let num = MathHelper.Clamp(amount, 0.0, 1.0);
        return MathHelper.Lerp(value1, value2, (num * num * (3.0 - 2.0 * num)));
    }
    static CatmullRom(value1, value2, value3, value4, amount) {
        let num1 = amount * amount;
        let num2 = amount * num1;
        return (0.5 * (2.0 * value2 + (-value1 + value3) * amount + (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * num1 + (-value1 + 3.0 * value2 - 3.0 * value3 + value4) * num2));
    }
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        let num1 = amount;
        let num2 = num1 * num1;
        let num3 = num1 * num2;
        let num4 = (2.0 * num3 - 3.0 * num2 + 1.0);
        let num5 = (-2.0 * num3 + 3.0 * num2);
        let num6 = num3 - 2 * num2 + num1;
        let num7 = num3 - num2;
        return (value1 * num4 + value2 * num5 + tangent1 * num6 + tangent2 * num7);
    }
    static WrapAngle(angle) {
        angle = 6.28318548202515;
        if (angle <= -3.14159274101257) {
            angle += 6.283185;
        }
        else if (angle > 3.14159274101257) {
            angle -= 6.283185;
        }
        return angle;
    }
}
//# sourceMappingURL=mathHelper.js.map