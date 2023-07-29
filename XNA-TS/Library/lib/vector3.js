export class Vector3 {
    constructor(x, y, z) {
        this.m_x = x;
        this.m_y = y;
        this.m_z = z;
    }
    get X() {
        return this.m_x;
    }
    set X(value) {
        this.m_x = value;
    }
    get Y() {
        return this.m_y;
    }
    set Y(value) {
        this.m_y = value;
    }
    get Z() {
        return this.m_z;
    }
    set Z(value) {
        this.m_z = value;
    }
    Length() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
    }
    LengthSquared() {
        return (this.X * this.X + this.Y * this.Y + this.Z * this.Z);
    }
    static Distance(value1, value2) {
        var num1 = value1.X - value2.X;
        var num2 = value1.Y - value2.Y;
        var num3 = value1.Z - value2.Z;
        return Math.sqrt(num1 * num1 + num2 * num2 + num3 * num3);
    }
    static DistanceSquared(value1, value2) {
        var num1 = value1.X - value2.X;
        var num2 = value1.Y - value2.Y;
        var num3 = value1.Z - value2.Z;
        return (num1 * num1 + num2 * num2 + num3 * num3);
    }
    static Dot(vector1, vector2) {
        return (vector1.X * vector2.X + vector1.Y * vector2.Y + vector1.Z * vector2.Z);
    }
    Normalize() {
        var num = 1 / Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
        this.X *= num;
        this.Y *= num;
        this.Z *= num;
    }
    static Cross(vector1, vector2) {
        var vector3;
        vector3.X = (vector1.Y * vector2.Z - vector1.Z * vector2.Y);
        vector3.Y = (vector1.Z * vector2.X - vector1.X * vector2.Z);
        vector3.Z = (vector1.X * vector2.Y - vector1.Y * vector2.X);
        return vector3;
    }
    static Reflect(vector, normal) {
        var num = (vector.X * normal.X + vector.Y * normal.Y + vector.Z * normal.Z);
        var vector3;
        vector3.X = vector.X - 2 * num * normal.X;
        vector3.Y = vector.Y - 2 * num * normal.Y;
        vector3.Z = vector.Z - 2 * num * normal.Z;
        return vector3;
    }
    static Min(value1, value2) {
        var vector3;
        vector3.X = value1.X < value2.X ? value1.X : value2.X;
        vector3.Y = value1.Y < value2.Y ? value1.Y : value2.Y;
        vector3.Z = value1.Z < value2.Z ? value1.Z : value2.Z;
        return vector3;
    }
    static Max(value1, value2) {
        var vector3;
        vector3.X = value1.X > value2.X ? value1.X : value2.X;
        vector3.Y = value1.Y > value2.Y ? value1.Y : value2.Y;
        vector3.Z = value1.Z > value2.Z ? value1.Z : value2.Z;
        return vector3;
    }
    static Clamp(value1, min, max) {
        var x = value1.X;
        var num1 = x > max.X ? max.X : x;
        var num2 = num1 < min.X ? min.X : num1;
        var y = value1.Y;
        var num3 = y > max.Y ? max.Y : y;
        var num4 = num3 < min.Y ? min.Y : num3;
        var z = value1.Z;
        var num5 = z > max.Z ? max.Z : z;
        var num6 = num5 < min.Z ? min.Z : num5;
        var vector3;
        vector3.X = num2;
        vector3.Y = num4;
        vector3.Z = num6;
        return vector3;
    }
    static Lerp(value1, value2, amount) {
        var vector3;
        vector3.X = value1.X + (value2.X - value1.X) * amount;
        vector3.Y = value1.Y + (value2.Y - value1.Y) * amount;
        vector3.Z = value1.Z + (value2.Z - value1.Z) * amount;
        return vector3;
    }
    static Barycentric(value1, value2, value3, amount1, amount2) {
        var vector3;
        vector3.X = (value1.X + amount1 * (value2.X - value1.X) + amount2 * (value3.X - value1.X));
        vector3.Y = (value1.Y + amount1 * (value2.Y - value1.Y) + amount2 * (value3.Y - value1.Y));
        vector3.Z = (value1.Z + amount1 * (value2.Z - value1.Z) + amount2 * (value3.Z - value1.Z));
        return vector3;
    }
    static SmoothStep(value1, value2, amount) {
        amount = amount > 1.0 ? 1 : (amount < 0.0 ? 0.0 : amount);
        amount = (amount * amount * (3.0 - 2.0 * amount));
        var vector3;
        vector3.X = value1.X + (value2.X - value1.X) * amount;
        vector3.Y = value1.Y + (value2.Y - value1.Y) * amount;
        vector3.Z = value1.Z + (value2.Z - value1.Z) * amount;
        return vector3;
    }
    static CatmullRom(value1, value2, value3, value4, amount) {
        var num1 = amount * amount;
        var num2 = amount * num1;
        var vector3;
        vector3.X = (0.5 * (2.0 * value2.X + (-value1.X + value3.X) * amount + (2.0 * value1.X - 5.0 * value2.X + 4.0 * value3.X - value4.X) * num1 + (-value1.X + 3.0 * value2.X - 3.0 * value3.X + value4.X) * num2));
        vector3.Y = (0.5 * (2.0 * value2.Y + (-value1.Y + value3.Y) * amount + (2.0 * value1.Y - 5.0 * value2.Y + 4.0 * value3.Y - value4.Y) * num1 + (-value1.Y + 3.0 * value2.Y - 3.0 * value3.Y + value4.Y) * num2));
        vector3.Z = (0.5 * (2.0 * value2.Z + (-value1.Z + value3.Z) * amount + (2.0 * value1.Z - 5.0 * value2.Z + 4.0 * value3.Z - value4.Z) * num1 + (-value1.Z + 3.0 * value2.Z - 3.0 * value3.Z + value4.Z) * num2));
        return vector3;
    }
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        var num1 = amount * amount;
        var num2 = amount * num1;
        var num3 = (2.0 * num2 - 3.0 * num1 + 1.0);
        var num4 = (-2.0 * num2 + 3.0 * num1);
        var num5 = num2 - 2 * num1 + amount;
        var num6 = num2 - num1;
        var vector3;
        vector3.X = (value1.X * num3 + value2.X * num4 + tangent1.X * num5 + tangent2.X * num6);
        vector3.Y = (value1.Y * num3 + value2.Y * num4 + tangent1.Y * num5 + tangent2.Y * num6);
        vector3.Z = (value1.Z * num3 + value2.Z * num4 + tangent1.Z * num5 + tangent2.Z * num6);
        return vector3;
    }
    static Transform(position, matrix) {
        var num1 = (position.X * matrix.M11 + position.Y * matrix.M21 + position.Z * matrix.M31) + matrix.M41;
        var num2 = (position.X * matrix.M12 + position.Y * matrix.M22 + position.Z * matrix.M32) + matrix.M42;
        var num3 = (position.X * matrix.M13 + position.Y * matrix.M23 + position.Z * matrix.M33) + matrix.M43;
        var vector3;
        vector3.X = num1;
        vector3.Y = num2;
        vector3.Z = num3;
        return vector3;
    }
    static TransformNormal(normal, matrix) {
        var num1 = (normal.X * matrix.M11 + normal.Y * matrix.M21 + normal.Z * matrix.M31);
        var num2 = (normal.X * matrix.M12 + normal.Y * matrix.M22 + normal.Z * matrix.M32);
        var num3 = (normal.X * matrix.M13 + normal.Y * matrix.M23 + normal.Z * matrix.M33);
        var vector3;
        vector3.X = num1;
        vector3.Y = num2;
        vector3.Z = num3;
        return vector3;
    }
    static Negate(value) {
        var vector3;
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
    static Add(value1, value2) {
        var vector3;
        vector3.X = value1.X + value2.X;
        vector3.Y = value1.Y + value2.Y;
        vector3.Z = value1.Z + value2.Z;
        return vector3;
    }
    static Subtract(value1, value2) {
        var vector3;
        vector3.X = value1.X - value2.X;
        vector3.Y = value1.Y - value2.Y;
        vector3.Z = value1.Z - value2.Z;
        return vector3;
    }
    static Multiply(value1, value2) {
        var vector3;
        vector3.X = value1.X * value2.X;
        vector3.Y = value1.Y * value2.Y;
        vector3.Z = value1.Z * value2.Z;
        return vector3;
    }
    static Divide(value1, value2) {
        var vector3;
        vector3.X = value1.X / value2.X;
        vector3.Y = value1.Y / value2.Y;
        vector3.Z = value1.Z / value2.Z;
        return vector3;
    }
}