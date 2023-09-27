import { Matrix } from "./matrix.js";
import { Vector3 } from "./vector3.js";

export class Quaternion {

    private x: number;
    private y: number;
    private z: number;
    private w: number;

    public get X(): number {
        return this.x;
    }

    public set X(value: number) {
        this.x = value;
    }


    public get Y(): number {
        return this.y;
    }

    public set Y(value: number) {
        this.y = value;
    }

    public get Z(): number {
        return this.z;
    }

    public set Z(value: number) {
        this.z = value;
    }


    public get W(): number {
        return this.w;
    }

    public set W(value: number) {
        this.w = value;
    }

    //constructor(vectorPart: Vector3, scalarPart: number) {
    constructor(x?: number, y?: number, z?: number, w?: number) {
        this.X = x;
        this.Y = y;
        this.Z = z;
        this.W = w;
    }

    //constructor(vectorPart: Vector3, scalarPart: number) {
    //    this.X = vectorPart.X;
    //    this.Y = vectorPart.Y;
    //    this.Z = vectorPart.Z;
    //    this.W = scalarPart;
    //}


    public LengthSquared(): number {
        return <number>(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y + <number>this.Z * <number>this.Z + <number>this.W * <number>this.W);
    }

    public Length(): number {
        return <number>Math.sqrt(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y + <number>this.Z * <number>this.Z + <number>this.W * <number>this.W);
    }

    // public static Quaternion Normalize(Quaternion quaternion)
    public Normalize(): void {
        var num: number = 1 / <number>Math.sqrt(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y + <number>this.Z * <number>this.Z + <number>this.W * <number>this.W);
        this.X *= num;
        this.Y *= num;
        this.Z *= num;
        this.W *= num;
    }

    // public static void Normalize(ref Quaternion quaternion, out Quaternion result)

    // public void Conjugate()
    public Conjugate(): void {
        this.X = -this.X;
        this.Y = -this.Y;
        this.Z = -this.Z;
    }

    // public static Quaternion Conjugate(Quaternion value)
    // public static void Conjugate(ref Quaternion value, out Quaternion result)
    // public static Quaternion Inverse(Quaternion quaternion)
    public static Inverse(quaternion: Quaternion): Quaternion {
        var num: number = 1 / <number>(<number>quaternion.X * <number>quaternion.X + <number>quaternion.Y * <number>quaternion.Y + <number>quaternion.Z * <number>quaternion.Z + <number>quaternion.W * <number>quaternion.W);
        var quaternion1: Quaternion;
        quaternion1.X = -quaternion.X * num;
        quaternion1.Y = -quaternion.Y * num;
        quaternion1.Z = -quaternion.Z * num;
        quaternion1.W = quaternion.W * num;
        return quaternion1;
    }
    // public static void Inverse(ref Quaternion quaternion, out Quaternion result)
    // public static Quaternion CreateFromAxisAngle(Vector3 axis, float angle)

    // public static void CreateFromAxisAngle(ref Vector3 axis, float angle, out Quaternion result)
    public static CreateFromAxisAngle(axis: Vector3, angle: number, result: Quaternion): void {
        var num1: number = angle * 0.5;
        var num2: number = <number>Math.sin(<number>num1);
        var num3: number = <number>Math.cos(<number>num1);
        result.X = axis.X * num2;
        result.Y = axis.Y * num2;
        result.Z = axis.Z * num2;
        result.W = num3;
    }

    // public static Quaternion CreateFromYawPitchRoll(float yaw, float pitch, float roll)
    public static CreateFromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion {
        var num1: number = roll * 0.5;
        var num2: number = <number>Math.sin(<number>num1);
        var num3: number = <number>Math.cos(<number>num1);
        var num4: number = pitch * 0.5;
        var num5: number = <number>Math.sin(<number>num4);
        var num6: number = <number>Math.cos(<number>num4);
        var num7: number = yaw * 0.5;
        var num8: number = <number>Math.sin(<number>num7);
        var num9: number = <number>Math.cos(<number>num7);
        var quaternion: Quaternion;
        quaternion.X = <number>(<number>num9 * <number>num5 * <number>num3 + <number>num8 * <number>num6 * <number>num2);
        quaternion.Y = <number>(<number>num8 * <number>num6 * <number>num3 - <number>num9 * <number>num5 * <number>num2);
        quaternion.Z = <number>(<number>num9 * <number>num6 * <number>num2 - <number>num8 * <number>num5 * <number>num3);
        quaternion.W = <number>(<number>num9 * <number>num6 * <number>num3 + <number>num8 * <number>num5 * <number>num2);
        return quaternion;
    }

    // public static void CreateFromYawPitchRoll(float yaw, float pitch, float roll, out Quaternion result)

    // public static Quaternion CreateFromRotationMatrix(Matrix matrix)
    public static CreateFromRotationMatrix(matrix: Matrix): Quaternion {
        var num1: number = matrix.M11 + matrix.M22 + matrix.M33;
        var quaternion: Quaternion = new Quaternion();
        if (<number>num1 > 0.0) {
            var num2: number = <number>Math.sqrt(<number>num1 + 1.0);
            quaternion.W = num2 * 0.5;
            var num3: number = 0.5 / num2;
            quaternion.X = (matrix.M23 - matrix.M32) * num3;
            quaternion.Y = (matrix.M31 - matrix.M13) * num3;
            quaternion.Z = (matrix.M12 - matrix.M21) * num3;
        }
        else if (<number>matrix.M11 >= <number>matrix.M22 && <number>matrix.M11 >= <number>matrix.M33) {
            var num2: number = <number>Math.sqrt(1.0 + <number>matrix.M11 - <number>matrix.M22 - <number>matrix.M33);
            var num3: number = 0.5 / num2;
            quaternion.X = 0.5 * num2;
            quaternion.Y = (matrix.M12 + matrix.M21) * num3;
            quaternion.Z = (matrix.M13 + matrix.M31) * num3;
            quaternion.W = (matrix.M23 - matrix.M32) * num3;
        }
        else if (<number>matrix.M22 > <number>matrix.M33) {
            var num2: number = <number>Math.sqrt(1.0 + <number>matrix.M22 - <number>matrix.M11 - <number>matrix.M33);
            var num3: number = 0.5 / num2;
            quaternion.X = (matrix.M21 + matrix.M12) * num3;
            quaternion.Y = 0.5 * num2;
            quaternion.Z = (matrix.M32 + matrix.M23) * num3;
            quaternion.W = (matrix.M31 - matrix.M13) * num3;
        }
        else {
            var num2: number = <number>Math.sqrt(1.0 + <number>matrix.M33 - <number>matrix.M11 - <number>matrix.M22);
            var num3: number = 0.5 / num2;
            quaternion.X = (matrix.M31 + matrix.M13) * num3;
            quaternion.Y = (matrix.M32 + matrix.M23) * num3;
            quaternion.Z = 0.5 * num2;
            quaternion.W = (matrix.M12 - matrix.M21) * num3;
        }
        return quaternion;
    }

    // public static void CreateFromRotationMatrix(ref Matrix matrix, out Quaternion result)
    // public static float Dot(Quaternion quaternion1, Quaternion quaternion2)
    public static Dot(quaternion1: Quaternion, quaternion2: Quaternion): number {
        return <number>(<number>quaternion1.X * <number>quaternion2.X + <number>quaternion1.Y * <number>quaternion2.Y + <number>quaternion1.Z * <number>quaternion2.Z + <number>quaternion1.W * <number>quaternion2.W);
    }

    // public static void Dot(ref Quaternion quaternion1, ref Quaternion quaternion2, out float result)

    // public static Quaternion Slerp(Quaternion quaternion1, Quaternion quaternion2, float amount)
    public static Slerp(quaternion1: Quaternion, quaternion2: Quaternion, amount: number): Quaternion {
        var num1: number = amount;
        var num2: number = <number>(<number>quaternion1.X * <number>quaternion2.X + <number>quaternion1.Y * <number>quaternion2.Y + <number>quaternion1.Z * <number>quaternion2.Z + <number>quaternion1.W * <number>quaternion2.W);
        var flag: boolean = false;
        if (<number>num2 < 0.0) {
            flag = true;
            num2 = -num2;
        }
        var num3: number;
        var num4: number;
        if (<number>num2 > 0.999998986721039) {
            num3 = 1 - num1;
            num4 = flag ? -num1 : num1;
        }
        else {
            var num5: number = <number>Math.acos(<number>num2);
            var num6: number = <number>(1.0 / Math.sin(<number>num5));
            num3 = <number>Math.sin((1.0 - <number>num1) * <number>num5) * num6;
            num4 = flag ? <number>-Math.sin(<number>num1 * <number>num5) * num6 : <number>Math.sin(<number>num1 * <number>num5) * num6;
        }
        var quaternion: Quaternion;
        quaternion.X = <number>(<number>num3 * <number>quaternion1.X + <number>num4 * <number>quaternion2.X);
        quaternion.Y = <number>(<number>num3 * <number>quaternion1.Y + <number>num4 * <number>quaternion2.Y);
        quaternion.Z = <number>(<number>num3 * <number>quaternion1.Z + <number>num4 * <number>quaternion2.Z);
        quaternion.W = <number>(<number>num3 * <number>quaternion1.W + <number>num4 * <number>quaternion2.W);
        return quaternion;
    }

    // public static void Slerp(ref Quaternion quaternion1, ref Quaternion quaternion2, float amount, out Quaternion result)

    // public static Quaternion Lerp(Quaternion quaternion1, Quaternion quaternion2, float amount)
    public static Lerp(quaternion1: Quaternion, quaternion2: Quaternion, amount: number): Quaternion {
        var num1: number = amount;
        var num2: number = 1 - num1;
        var quaternion: Quaternion = new Quaternion();
        if (<number>quaternion1.X * <number>quaternion2.X + <number>quaternion1.Y * <number>quaternion2.Y + <number>quaternion1.Z * <number>quaternion2.Z + <number>quaternion1.W * <number>quaternion2.W >= 0.0) {
            quaternion.X = <number>(<number>num2 * <number>quaternion1.X + <number>num1 * <number>quaternion2.X);
            quaternion.Y = <number>(<number>num2 * <number>quaternion1.Y + <number>num1 * <number>quaternion2.Y);
            quaternion.Z = <number>(<number>num2 * <number>quaternion1.Z + <number>num1 * <number>quaternion2.Z);
            quaternion.W = <number>(<number>num2 * <number>quaternion1.W + <number>num1 * <number>quaternion2.W);
        }
        else {
            quaternion.X = <number>(<number>num2 * <number>quaternion1.X - <number>num1 * <number>quaternion2.X);
            quaternion.Y = <number>(<number>num2 * <number>quaternion1.Y - <number>num1 * <number>quaternion2.Y);
            quaternion.Z = <number>(<number>num2 * <number>quaternion1.Z - <number>num1 * <number>quaternion2.Z);
            quaternion.W = <number>(<number>num2 * <number>quaternion1.W - <number>num1 * <number>quaternion2.W);
        }
        var num3: number = 1 / <number>Math.sqrt(<number>quaternion.X * <number>quaternion.X + <number>quaternion.Y * <number>quaternion.Y + <number>quaternion.Z * <number>quaternion.Z + <number>quaternion.W * <number>quaternion.W);
        quaternion.X *= num3;
        quaternion.Y *= num3;
        quaternion.Z *= num3;
        quaternion.W *= num3;
        return quaternion;
    }

    // public static void Lerp(ref Quaternion quaternion1, ref Quaternion quaternion2, float amount, out Quaternion result)

    // public static Quaternion Concatenate(Quaternion value1, Quaternion value2)
    public static Concatenate(value1: Quaternion, value2: Quaternion): Quaternion {
        var x1: number = value2.X;
        var y1: number = value2.Y;
        var z1: number = value2.Z;
        var w1: number = value2.W;
        var x2: number = value1.X;
        var y2: number = value1.Y;
        var z2: number = value1.Z;
        var w2: number = value1.W;
        var num1: number = <number>(<number>y1 * <number>z2 - <number>z1 * <number>y2);
        var num2: number = <number>(<number>z1 * <number>x2 - <number>x1 * <number>z2);
        var num3: number = <number>(<number>x1 * <number>y2 - <number>y1 * <number>x2);
        var num4: number = <number>(<number>x1 * <number>x2 + <number>y1 * <number>y2 + <number>z1 * <number>z2);
        var quaternion: Quaternion;
        quaternion.X = <number>(<number>x1 * <number>w2 + <number>x2 * <number>w1) + num1;
        quaternion.Y = <number>(<number>y1 * <number>w2 + <number>y2 * <number>w1) + num2;
        quaternion.Z = <number>(<number>z1 * <number>w2 + <number>z2 * <number>w1) + num3;
        quaternion.W = w1 * w2 - num4;
        return quaternion;
    }

    // public static void Concatenate(ref Quaternion value1, ref Quaternion value2, out Quaternion result)

    // public static Quaternion Negate(Quaternion quaternion)
    public static Negate(quaternion: Quaternion): Quaternion {
        var quaternion1: Quaternion;
        quaternion1.X = -quaternion.X;
        quaternion1.Y = -quaternion.Y;
        quaternion1.Z = -quaternion.Z;
        quaternion1.W = -quaternion.W;
        return quaternion1;
    }

    // public static void Negate(ref Quaternion quaternion, out Quaternion result)

    // public static Quaternion Add(Quaternion quaternion1, Quaternion quaternion2)
    public static Add(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion {
        var quaternion: Quaternion;
        quaternion.X = quaternion1.X + quaternion2.X;
        quaternion.Y = quaternion1.Y + quaternion2.Y;
        quaternion.Z = quaternion1.Z + quaternion2.Z;
        quaternion.W = quaternion1.W + quaternion2.W;
        return quaternion;
    }

    // public static void Add(ref Quaternion quaternion1, ref Quaternion quaternion2, out Quaternion result)

    // public static Quaternion Subtract(Quaternion quaternion1, Quaternion quaternion2)
    public static Subtract(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion {
        var quaternion: Quaternion;
        quaternion.X = quaternion1.X - quaternion2.X;
        quaternion.Y = quaternion1.Y - quaternion2.Y;
        quaternion.Z = quaternion1.Z - quaternion2.Z;
        quaternion.W = quaternion1.W - quaternion2.W;
        return quaternion;
    }

    // public static void Subtract(ref Quaternion quaternion1, ref Quaternion quaternion2, out Quaternion result)

    // public static Quaternion Multiply(Quaternion quaternion1, Quaternion quaternion2)
    public static Multiply(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion {
        var x1: number = quaternion1.X;
        var y1: number = quaternion1.Y;
        var z1: number = quaternion1.Z;
        var w1: number = quaternion1.W;
        var x2: number = quaternion2.X;
        var y2: number = quaternion2.Y;
        var z2: number = quaternion2.Z;
        var w2: number = quaternion2.W;
        var num1: number = <number>(<number>y1 * <number>z2 - <number>z1 * <number>y2);
        var num2: number = <number>(<number>z1 * <number>x2 - <number>x1 * <number>z2);
        var num3: number = <number>(<number>x1 * <number>y2 - <number>y1 * <number>x2);
        var num4: number = <number>(<number>x1 * <number>x2 + <number>y1 * <number>y2 + <number>z1 * <number>z2);
        var quaternion: Quaternion;
        quaternion.X = <number>(<number>x1 * <number>w2 + <number>x2 * <number>w1) + num1;
        quaternion.Y = <number>(<number>y1 * <number>w2 + <number>y2 * <number>w1) + num2;
        quaternion.Z = <number>(<number>z1 * <number>w2 + <number>z2 * <number>w1) + num3;
        quaternion.W = w1 * w2 - num4;
        return quaternion;
    }

    // public static void Multiply(ref Quaternion quaternion1, ref Quaternion quaternion2, out Quaternion result)
    //public static Multiply(quaternion1: Quaternion, quaternion2: Quaternion, result: Quaternion): void {
    //    var x1: number = quaternion1.X;
    //    var y1: number = quaternion1.Y;
    //    var z1: number = quaternion1.Z;
    //    var w1: number = quaternion1.W;
    //    var x2: number = quaternion2.X;
    //    var y2: number = quaternion2.Y;
    //    var z2: number = quaternion2.Z;
    //    var w2: number = quaternion2.W;
    //    var num1: number = <number>(<number>y1 * <number>z2 - <number>z1 * <number>y2);
    //    var num2: number = <number>(<number>z1 * <number>x2 - <number>x1 * <number>z2);
    //    var num3: number = <number>(<number>x1 * <number>y2 - <number>y1 * <number>x2);
    //    var num4: number = <number>(<number>x1 * <number>x2 + <number>y1 * <number>y2 + <number>z1 * <number>z2);
    //    result.X = <number>(<number>x1 * <number>w2 + <number>x2 * <number>w1) + num1;
    //    result.Y = <number>(<number>y1 * <number>w2 + <number>y2 * <number>w1) + num2;
    //    result.Z = <number>(<number>z1 * <number>w2 + <number>z2 * <number>w1) + num3;
    //    result.W = w1 * w2 - num4;
    //}

    // public static Quaternion Multiply(Quaternion quaternion1, float scaleFactor)
    // public static void Multiply(ref Quaternion quaternion1, float scaleFactor, out Quaternion result)

    // public static Quaternion Divide(Quaternion quaternion1, Quaternion quaternion2)
    public static Divide(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion {
        var x: number = quaternion1.X;
        var y: number = quaternion1.Y;
        var z: number = quaternion1.Z;
        var w: number = quaternion1.W;
        var num1: number = 1 / <number>(<number>quaternion2.X * <number>quaternion2.X + <number>quaternion2.Y * <number>quaternion2.Y + <number>quaternion2.Z * <number>quaternion2.Z + <number>quaternion2.W * <number>quaternion2.W);
        var num2: number = -quaternion2.X * num1;
        var num3: number = -quaternion2.Y * num1;
        var num4: number = -quaternion2.Z * num1;
        var num5: number = quaternion2.W * num1;
        var num6: number = <number>(<number>y * <number>num4 - <number>z * <number>num3);
        var num7: number = <number>(<number>z * <number>num2 - <number>x * <number>num4);
        var num8: number = <number>(<number>x * <number>num3 - <number>y * <number>num2);
        var num9: number = <number>(<number>x * <number>num2 + <number>y * <number>num3 + <number>z * <number>num4);
        var quaternion: Quaternion;
        quaternion.X = <number>(<number>x * <number>num5 + <number>num2 * <number>w) + num6;
        quaternion.Y = <number>(<number>y * <number>num5 + <number>num3 * <number>w) + num7;
        quaternion.Z = <number>(<number>z * <number>num5 + <number>num4 * <number>w) + num8;
        quaternion.W = w * num5 - num9;
        return quaternion;
    }

    // public static void Divide(ref Quaternion quaternion1, ref Quaternion quaternion2, out Quaternion result)


}