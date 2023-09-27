import { Matrix } from "./matrix.js";

export class Vector3 {

    private m_x: number;
    private m_y: number;
    private m_z: number;

    constructor(x?: number, y?: number, z?: number) {
        this.m_x = x;
        this.m_y = y;
        this.m_z = z;
    }

    public get X(): number {
        return this.m_x;
    }

    public set X(value: number) {
        this.m_x = value;
    }

    public get Y(): number {
        return this.m_y;
    }

    public set Y(value: number) {
        this.m_y = value;
    }

    public get Z(): number {
        return this.m_z;
    }

    public set Z(value: number) {
        this.m_z = value;
    }

    public Length(): number {
        return <number>Math.sqrt(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y + <number>this.Z * <number>this.Z);
    }

    public LengthSquared(): number {
        return <number>(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y + <number>this.Z * <number>this.Z);
    }

    public static Distance(value1: Vector3, value2: Vector3): number {
        var num1: number = value1.X - value2.X;
        var num2: number = value1.Y - value2.Y;
        var num3: number = value1.Z - value2.Z;
        return <number>Math.sqrt(<number>num1 * <number>num1 + <number>num2 * <number>num2 + <number>num3 * <number>num3);
    }

    public static DistanceSquared(value1: Vector3, value2: Vector3): number {
        var num1: number = value1.X - value2.X;
        var num2: number = value1.Y - value2.Y;
        var num3: number = value1.Z - value2.Z;
        return <number>(<number>num1 * <number>num1 + <number>num2 * <number>num2 + <number>num3 * <number>num3);
    }

    public static Dot(vector1: Vector3, vector2: Vector3): number {
        return <number>(<number>vector1.X * <number>vector2.X + <number>vector1.Y * <number>vector2.Y + <number>vector1.Z * <number>vector2.Z);
    }

    public Normalize(): void {
        var num: number = 1 / <number>Math.sqrt(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y + <number>this.Z * <number>this.Z);
        this.X *= num;
        this.Y *= num;
        this.Z *= num;
    }

    public static Cross(vector1: Vector3, vector2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = <number>(<number>vector1.Y * <number>vector2.Z - <number>vector1.Z * <number>vector2.Y);
        vector3.Y = <number>(<number>vector1.Z * <number>vector2.X - <number>vector1.X * <number>vector2.Z);
        vector3.Z = <number>(<number>vector1.X * <number>vector2.Y - <number>vector1.Y * <number>vector2.X);
        return vector3;
    }

    public static Reflect(vector: Vector3, normal: Vector3): Vector3 {
        var num: number = <number>(<number>vector.X * <number>normal.X + <number>vector.Y * <number>normal.Y + <number>vector.Z * <number>normal.Z);
        var vector3: Vector3;
        vector3.X = vector.X - 2 * num * normal.X;
        vector3.Y = vector.Y - 2 * num * normal.Y;
        vector3.Z = vector.Z - 2 * num * normal.Z;
        return vector3;
    }

    public static Min(value1: Vector3, value2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = <number>value1.X < <number>value2.X ? value1.X : value2.X;
        vector3.Y = <number>value1.Y < <number>value2.Y ? value1.Y : value2.Y;
        vector3.Z = <number>value1.Z < <number>value2.Z ? value1.Z : value2.Z;
        return vector3;
    }

    public static Max(value1: Vector3, value2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = <number>value1.X > <number>value2.X ? value1.X : value2.X;
        vector3.Y = <number>value1.Y > <number>value2.Y ? value1.Y : value2.Y;
        vector3.Z = <number>value1.Z > <number>value2.Z ? value1.Z : value2.Z;
        return vector3;
    }

    public static Clamp(value1: Vector3, min: Vector3, max: Vector3): Vector3 {
        var x: number = value1.X;
        var num1: number = <number>x > <number>max.X ? max.X : x;
        var num2: number = <number>num1 < <number>min.X ? min.X : num1;
        var y: number = value1.Y;
        var num3: number = <number>y > <number>max.Y ? max.Y : y;
        var num4: number = <number>num3 < <number>min.Y ? min.Y : num3;
        var z: number = value1.Z;
        var num5: number = <number>z > <number>max.Z ? max.Z : z;
        var num6: number = <number>num5 < <number>min.Z ? min.Z : num5;
        var vector3: Vector3;
        vector3.X = num2;
        vector3.Y = num4;
        vector3.Z = num6;
        return vector3;
    }

    public static Lerp(value1: Vector3, value2: Vector3, amount: number): Vector3 {
        var vector3: Vector3;
        vector3.X = value1.X + (value2.X - value1.X) * amount;
        vector3.Y = value1.Y + (value2.Y - value1.Y) * amount;
        vector3.Z = value1.Z + (value2.Z - value1.Z) * amount;
        return vector3;
    }

    public static Barycentric(value1: Vector3, value2: Vector3, value3: Vector3, amount1: number, amount2: number): Vector3 {
        var vector3: Vector3;
        vector3.X = <number>(<number>value1.X + <number>amount1 * (<number>value2.X - <number>value1.X) + <number>amount2 * (<number>value3.X - <number>value1.X));
        vector3.Y = <number>(<number>value1.Y + <number>amount1 * (<number>value2.Y - <number>value1.Y) + <number>amount2 * (<number>value3.Y - <number>value1.Y));
        vector3.Z = <number>(<number>value1.Z + <number>amount1 * (<number>value2.Z - <number>value1.Z) + <number>amount2 * (<number>value3.Z - <number>value1.Z));
        return vector3;
    }

    public static SmoothStep(value1: Vector3, value2: Vector3, amount: number): Vector3 {
        amount = <number>amount > 1.0 ? 1 : (<number>amount < 0.0 ? 0.0 : amount);
        amount = <number>(<number>amount * <number>amount * (3.0 - 2.0 * <number>amount));
        var vector3: Vector3;
        vector3.X = value1.X + (value2.X - value1.X) * amount;
        vector3.Y = value1.Y + (value2.Y - value1.Y) * amount;
        vector3.Z = value1.Z + (value2.Z - value1.Z) * amount;
        return vector3;
    }

    public static CatmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number): Vector3 {
        var num1: number = amount * amount;
        var num2: number = amount * num1;
        var vector3: Vector3;
        vector3.X = <number>(0.5 * (2.0 * <number>value2.X + (-<number>value1.X + <number>value3.X) * <number>amount + (2.0 * <number>value1.X - 5.0 * <number>value2.X + 4.0 * <number>value3.X - <number>value4.X) * <number>num1 + (-<number>value1.X + 3.0 * <number>value2.X - 3.0 * <number>value3.X + <number>value4.X) * <number>num2));
        vector3.Y = <number>(0.5 * (2.0 * <number>value2.Y + (-<number>value1.Y + <number>value3.Y) * <number>amount + (2.0 * <number>value1.Y - 5.0 * <number>value2.Y + 4.0 * <number>value3.Y - <number>value4.Y) * <number>num1 + (-<number>value1.Y + 3.0 * <number>value2.Y - 3.0 * <number>value3.Y + <number>value4.Y) * <number>num2));
        vector3.Z = <number>(0.5 * (2.0 * <number>value2.Z + (-<number>value1.Z + <number>value3.Z) * <number>amount + (2.0 * <number>value1.Z - 5.0 * <number>value2.Z + 4.0 * <number>value3.Z - <number>value4.Z) * <number>num1 + (-<number>value1.Z + 3.0 * <number>value2.Z - 3.0 * <number>value3.Z + <number>value4.Z) * <number>num2));
        return vector3;
    }

    public static Hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number): Vector3 {
        var num1: number = amount * amount;
        var num2: number = amount * num1;
        var num3: number = <number>(2.0 * <number>num2 - 3.0 * <number>num1 + 1.0);
        var num4: number = <number>(-2.0 * <number>num2 + 3.0 * <number>num1);
        var num5: number = num2 - 2 * num1 + amount;
        var num6: number = num2 - num1;
        var vector3: Vector3;
        vector3.X = <number>(<number>value1.X * <number>num3 + <number>value2.X * <number>num4 + <number>tangent1.X * <number>num5 + <number>tangent2.X * <number>num6);
        vector3.Y = <number>(<number>value1.Y * <number>num3 + <number>value2.Y * <number>num4 + <number>tangent1.Y * <number>num5 + <number>tangent2.Y * <number>num6);
        vector3.Z = <number>(<number>value1.Z * <number>num3 + <number>value2.Z * <number>num4 + <number>tangent1.Z * <number>num5 + <number>tangent2.Z * <number>num6);
        return vector3;
    }

    public static Transform(position: Vector3, matrix: Matrix): Vector3 {
        var num1: number = <number>(<number>position.X * <number>matrix.M11 + <number>position.Y * <number>matrix.M21 + <number>position.Z * <number>matrix.M31) + matrix.M41;
        var num2: number = <number>(<number>position.X * <number>matrix.M12 + <number>position.Y * <number>matrix.M22 + <number>position.Z * <number>matrix.M32) + matrix.M42;
        var num3: number = <number>(<number>position.X * <number>matrix.M13 + <number>position.Y * <number>matrix.M23 + <number>position.Z * <number>matrix.M33) + matrix.M43;
        var vector3: Vector3;
        vector3.X = num1;
        vector3.Y = num2;
        vector3.Z = num3;
        return vector3;
    }

    public static TransformNormal(normal: Vector3, matrix: Matrix): Vector3 {
        var num1: number = <number>(<number>normal.X * <number>matrix.M11 + <number>normal.Y * <number>matrix.M21 + <number>normal.Z * <number>matrix.M31);
        var num2: number = <number>(<number>normal.X * <number>matrix.M12 + <number>normal.Y * <number>matrix.M22 + <number>normal.Z * <number>matrix.M32);
        var num3: number = <number>(<number>normal.X * <number>matrix.M13 + <number>normal.Y * <number>matrix.M23 + <number>normal.Z * <number>matrix.M33);
        var vector3: Vector3;
        vector3.X = num1;
        vector3.Y = num2;
        vector3.Z = num3;
        return vector3;
    }


    public static Negate(value: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = -value.X;
        vector3.Y = -value.Y;
        vector3.Z = -value.Z;
        return vector3;
    }

    //public static Negate(value: Vector3, result: Vector3): void {
    //    result.X = -value.X;
    //    result.Y = -value.Y;
    //    result.Z = -value.Z;
    //}

    public static Add(value1: Vector3, value2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = value1.X + value2.X;
        vector3.Y = value1.Y + value2.Y;
        vector3.Z = value1.Z + value2.Z;
        return vector3;
    }

    public static Subtract(value1: Vector3, value2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = value1.X - value2.X;
        vector3.Y = value1.Y - value2.Y;
        vector3.Z = value1.Z - value2.Z;
        return vector3;
    }

    public static Multiply(value1: Vector3, value2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = value1.X * value2.X;
        vector3.Y = value1.Y * value2.Y;
        vector3.Z = value1.Z * value2.Z;
        return vector3;
    }

    public static Divide(value1: Vector3, value2: Vector3): Vector3 {
        var vector3: Vector3;
        vector3.X = value1.X / value2.X;
        vector3.Y = value1.Y / value2.Y;
        vector3.Z = value1.Z / value2.Z;
        return vector3;
    }
}