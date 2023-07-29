class Quaternion {
    get X() {
        return this.x;
    }
    set X(value) {
        this.x = value;
    }
    get Y() {
        return this.y;
    }
    set Y(value) {
        this.y = value;
    }
    get Z() {
        return this.z;
    }
    set Z(value) {
        this.z = value;
    }
    get W() {
        return this.w;
    }
    set W(value) {
        this.w = value;
    }
    //constructor(vectorPart: Vector3, scalarPart: number) {
    constructor(x, y, z, w) {
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
    LengthSquared() {
        return (this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
    }
    Length() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
    }
    // public static Quaternion Normalize(Quaternion quaternion)
    Normalize() {
        var num = 1 / Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
        this.X *= num;
        this.Y *= num;
        this.Z *= num;
        this.W *= num;
    }
    // public static void Normalize(ref Quaternion quaternion, out Quaternion result)
    // public void Conjugate()
    Conjugate() {
        this.X = -this.X;
        this.Y = -this.Y;
        this.Z = -this.Z;
    }
    // public static Quaternion Conjugate(Quaternion value)
    // public static void Conjugate(ref Quaternion value, out Quaternion result)
    // public static Quaternion Inverse(Quaternion quaternion)
    static Inverse(quaternion) {
        var num = 1 / (quaternion.X * quaternion.X + quaternion.Y * quaternion.Y + quaternion.Z * quaternion.Z + quaternion.W * quaternion.W);
        var quaternion1;
        quaternion1.X = -quaternion.X * num;
        quaternion1.Y = -quaternion.Y * num;
        quaternion1.Z = -quaternion.Z * num;
        quaternion1.W = quaternion.W * num;
        return quaternion1;
    }
    // public static void Inverse(ref Quaternion quaternion, out Quaternion result)
    // public static Quaternion CreateFromAxisAngle(Vector3 axis, float angle)
    // public static void CreateFromAxisAngle(ref Vector3 axis, float angle, out Quaternion result)
    static CreateFromAxisAngle(axis, angle, result) {
        var num1 = angle * 0.5;
        var num2 = Math.sin(num1);
        var num3 = Math.cos(num1);
        result.X = axis.X * num2;
        result.Y = axis.Y * num2;
        result.Z = axis.Z * num2;
        result.W = num3;
    }
    // public static Quaternion CreateFromYawPitchRoll(float yaw, float pitch, float roll)
    static CreateFromYawPitchRoll(yaw, pitch, roll) {
        var num1 = roll * 0.5;
        var num2 = Math.sin(num1);
        var num3 = Math.cos(num1);
        var num4 = pitch * 0.5;
        var num5 = Math.sin(num4);
        var num6 = Math.cos(num4);
        var num7 = yaw * 0.5;
        var num8 = Math.sin(num7);
        var num9 = Math.cos(num7);
        var quaternion;
        quaternion.X = (num9 * num5 * num3 + num8 * num6 * num2);
        quaternion.Y = (num8 * num6 * num3 - num9 * num5 * num2);
        quaternion.Z = (num9 * num6 * num2 - num8 * num5 * num3);
        quaternion.W = (num9 * num6 * num3 + num8 * num5 * num2);
        return quaternion;
    }
    // public static void CreateFromYawPitchRoll(float yaw, float pitch, float roll, out Quaternion result)
    // public static Quaternion CreateFromRotationMatrix(Matrix matrix)
    static CreateFromRotationMatrix(matrix) {
        var num1 = matrix.M11 + matrix.M22 + matrix.M33;
        var quaternion = new Quaternion();
        if (num1 > 0.0) {
            var num2 = Math.sqrt(num1 + 1.0);
            quaternion.W = num2 * 0.5;
            var num3 = 0.5 / num2;
            quaternion.X = (matrix.M23 - matrix.M32) * num3;
            quaternion.Y = (matrix.M31 - matrix.M13) * num3;
            quaternion.Z = (matrix.M12 - matrix.M21) * num3;
        }
        else if (matrix.M11 >= matrix.M22 && matrix.M11 >= matrix.M33) {
            var num2 = Math.sqrt(1.0 + matrix.M11 - matrix.M22 - matrix.M33);
            var num3 = 0.5 / num2;
            quaternion.X = 0.5 * num2;
            quaternion.Y = (matrix.M12 + matrix.M21) * num3;
            quaternion.Z = (matrix.M13 + matrix.M31) * num3;
            quaternion.W = (matrix.M23 - matrix.M32) * num3;
        }
        else if (matrix.M22 > matrix.M33) {
            var num2 = Math.sqrt(1.0 + matrix.M22 - matrix.M11 - matrix.M33);
            var num3 = 0.5 / num2;
            quaternion.X = (matrix.M21 + matrix.M12) * num3;
            quaternion.Y = 0.5 * num2;
            quaternion.Z = (matrix.M32 + matrix.M23) * num3;
            quaternion.W = (matrix.M31 - matrix.M13) * num3;
        }
        else {
            var num2 = Math.sqrt(1.0 + matrix.M33 - matrix.M11 - matrix.M22);
            var num3 = 0.5 / num2;
            quaternion.X = (matrix.M31 + matrix.M13) * num3;
            quaternion.Y = (matrix.M32 + matrix.M23) * num3;
            quaternion.Z = 0.5 * num2;
            quaternion.W = (matrix.M12 - matrix.M21) * num3;
        }
        return quaternion;
    }
    // public static void CreateFromRotationMatrix(ref Matrix matrix, out Quaternion result)
    // public static float Dot(Quaternion quaternion1, Quaternion quaternion2)
    static Dot(quaternion1, quaternion2) {
        return (quaternion1.X * quaternion2.X + quaternion1.Y * quaternion2.Y + quaternion1.Z * quaternion2.Z + quaternion1.W * quaternion2.W);
    }
    // public static void Dot(ref Quaternion quaternion1, ref Quaternion quaternion2, out float result)
    // public static Quaternion Slerp(Quaternion quaternion1, Quaternion quaternion2, float amount)
    static Slerp(quaternion1, quaternion2, amount) {
        var num1 = amount;
        var num2 = (quaternion1.X * quaternion2.X + quaternion1.Y * quaternion2.Y + quaternion1.Z * quaternion2.Z + quaternion1.W * quaternion2.W);
        var flag = false;
        if (num2 < 0.0) {
            flag = true;
            num2 = -num2;
        }
        var num3;
        var num4;
        if (num2 > 0.999998986721039) {
            num3 = 1 - num1;
            num4 = flag ? -num1 : num1;
        }
        else {
            var num5 = Math.acos(num2);
            var num6 = (1.0 / Math.sin(num5));
            num3 = Math.sin((1.0 - num1) * num5) * num6;
            num4 = flag ? -Math.sin(num1 * num5) * num6 : Math.sin(num1 * num5) * num6;
        }
        var quaternion;
        quaternion.X = (num3 * quaternion1.X + num4 * quaternion2.X);
        quaternion.Y = (num3 * quaternion1.Y + num4 * quaternion2.Y);
        quaternion.Z = (num3 * quaternion1.Z + num4 * quaternion2.Z);
        quaternion.W = (num3 * quaternion1.W + num4 * quaternion2.W);
        return quaternion;
    }
    // public static void Slerp(ref Quaternion quaternion1, ref Quaternion quaternion2, float amount, out Quaternion result)
    // public static Quaternion Lerp(Quaternion quaternion1, Quaternion quaternion2, float amount)
    static Lerp(quaternion1, quaternion2, amount) {
        var num1 = amount;
        var num2 = 1 - num1;
        var quaternion = new Quaternion();
        if (quaternion1.X * quaternion2.X + quaternion1.Y * quaternion2.Y + quaternion1.Z * quaternion2.Z + quaternion1.W * quaternion2.W >= 0.0) {
            quaternion.X = (num2 * quaternion1.X + num1 * quaternion2.X);
            quaternion.Y = (num2 * quaternion1.Y + num1 * quaternion2.Y);
            quaternion.Z = (num2 * quaternion1.Z + num1 * quaternion2.Z);
            quaternion.W = (num2 * quaternion1.W + num1 * quaternion2.W);
        }
        else {
            quaternion.X = (num2 * quaternion1.X - num1 * quaternion2.X);
            quaternion.Y = (num2 * quaternion1.Y - num1 * quaternion2.Y);
            quaternion.Z = (num2 * quaternion1.Z - num1 * quaternion2.Z);
            quaternion.W = (num2 * quaternion1.W - num1 * quaternion2.W);
        }
        var num3 = 1 / Math.sqrt(quaternion.X * quaternion.X + quaternion.Y * quaternion.Y + quaternion.Z * quaternion.Z + quaternion.W * quaternion.W);
        quaternion.X *= num3;
        quaternion.Y *= num3;
        quaternion.Z *= num3;
        quaternion.W *= num3;
        return quaternion;
    }
    // public static void Lerp(ref Quaternion quaternion1, ref Quaternion quaternion2, float amount, out Quaternion result)
    // public static Quaternion Concatenate(Quaternion value1, Quaternion value2)
    static Concatenate(value1, value2) {
        var x1 = value2.X;
        var y1 = value2.Y;
        var z1 = value2.Z;
        var w1 = value2.W;
        var x2 = value1.X;
        var y2 = value1.Y;
        var z2 = value1.Z;
        var w2 = value1.W;
        var num1 = (y1 * z2 - z1 * y2);
        var num2 = (z1 * x2 - x1 * z2);
        var num3 = (x1 * y2 - y1 * x2);
        var num4 = (x1 * x2 + y1 * y2 + z1 * z2);
        var quaternion;
        quaternion.X = (x1 * w2 + x2 * w1) + num1;
        quaternion.Y = (y1 * w2 + y2 * w1) + num2;
        quaternion.Z = (z1 * w2 + z2 * w1) + num3;
        quaternion.W = w1 * w2 - num4;
        return quaternion;
    }
    // public static void Concatenate(ref Quaternion value1, ref Quaternion value2, out Quaternion result)
    // public static Quaternion Negate(Quaternion quaternion)
    static Negate(quaternion) {
        var quaternion1;
        quaternion1.X = -quaternion.X;
        quaternion1.Y = -quaternion.Y;
        quaternion1.Z = -quaternion.Z;
        quaternion1.W = -quaternion.W;
        return quaternion1;
    }
    // public static void Negate(ref Quaternion quaternion, out Quaternion result)
    // public static Quaternion Add(Quaternion quaternion1, Quaternion quaternion2)
    static Add(quaternion1, quaternion2) {
        var quaternion;
        quaternion.X = quaternion1.X + quaternion2.X;
        quaternion.Y = quaternion1.Y + quaternion2.Y;
        quaternion.Z = quaternion1.Z + quaternion2.Z;
        quaternion.W = quaternion1.W + quaternion2.W;
        return quaternion;
    }
    // public static void Add(ref Quaternion quaternion1, ref Quaternion quaternion2, out Quaternion result)
    // public static Quaternion Subtract(Quaternion quaternion1, Quaternion quaternion2)
    static Subtract(quaternion1, quaternion2) {
        var quaternion;
        quaternion.X = quaternion1.X - quaternion2.X;
        quaternion.Y = quaternion1.Y - quaternion2.Y;
        quaternion.Z = quaternion1.Z - quaternion2.Z;
        quaternion.W = quaternion1.W - quaternion2.W;
        return quaternion;
    }
    // public static void Subtract(ref Quaternion quaternion1, ref Quaternion quaternion2, out Quaternion result)
    // public static Quaternion Multiply(Quaternion quaternion1, Quaternion quaternion2)
    static Multiply(quaternion1, quaternion2) {
        var x1 = quaternion1.X;
        var y1 = quaternion1.Y;
        var z1 = quaternion1.Z;
        var w1 = quaternion1.W;
        var x2 = quaternion2.X;
        var y2 = quaternion2.Y;
        var z2 = quaternion2.Z;
        var w2 = quaternion2.W;
        var num1 = (y1 * z2 - z1 * y2);
        var num2 = (z1 * x2 - x1 * z2);
        var num3 = (x1 * y2 - y1 * x2);
        var num4 = (x1 * x2 + y1 * y2 + z1 * z2);
        var quaternion;
        quaternion.X = (x1 * w2 + x2 * w1) + num1;
        quaternion.Y = (y1 * w2 + y2 * w1) + num2;
        quaternion.Z = (z1 * w2 + z2 * w1) + num3;
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
    static Divide(quaternion1, quaternion2) {
        var x = quaternion1.X;
        var y = quaternion1.Y;
        var z = quaternion1.Z;
        var w = quaternion1.W;
        var num1 = 1 / (quaternion2.X * quaternion2.X + quaternion2.Y * quaternion2.Y + quaternion2.Z * quaternion2.Z + quaternion2.W * quaternion2.W);
        var num2 = -quaternion2.X * num1;
        var num3 = -quaternion2.Y * num1;
        var num4 = -quaternion2.Z * num1;
        var num5 = quaternion2.W * num1;
        var num6 = (y * num4 - z * num3);
        var num7 = (z * num2 - x * num4);
        var num8 = (x * num3 - y * num2);
        var num9 = (x * num2 + y * num3 + z * num4);
        var quaternion;
        quaternion.X = (x * num5 + num2 * w) + num6;
        quaternion.Y = (y * num5 + num3 * w) + num7;
        quaternion.Z = (z * num5 + num4 * w) + num8;
        quaternion.W = w * num5 - num9;
        return quaternion;
    }
}
