export class Vector2 {
    constructor(x, y) {
        this.m_x = x;
        this.m_y = y;
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
    get Zero() {
        return new Vector2(0, 0);
    }
    Equals(obj) {
        var flag = false;
        if (obj instanceof Vector2)
            flag = this.Equals(obj);
        return flag;
    }
    GetHashCode() {
        return 0; //this.X.GetHashCode() + this.Y.GetHashCode();
    }
    Length() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    }
    //public LengthSquared(): number {
    //    return (this.m_x * this.m_x) + (this.m_y * this.m_y);
    //}
    LengthSquared() {
        return (this.X * this.X + this.Y * this.Y);
    }
    static Distance(value1, value2) {
        var num1 = value1.X - value2.X;
        var num2 = value1.Y - value2.Y;
        return Math.sqrt(num1 * num1 + num2 * num2);
    }
    static Distance1(value1, value2, result) {
        var num1 = value1.X - value2.X;
        var num2 = value1.Y - value2.Y;
        var num3 = (num1 * num1 + num2 * num2);
        result = Math.sqrt(num3);
    }
    static DistanceSquared(value1, value2) {
        var num1 = value1.X - value2.X;
        var num2 = value1.Y - value2.Y;
        return (num1 * num1 + num2 * num2);
    }
    static DistanceSquared1(value1, value2, result) {
        var num1 = value1.X - value2.X;
        var num2 = value1.Y - value2.Y;
        result = (num1 * num1 + num2 * num2);
    }
    static Dot(value1, value2) {
        return (value1.X * value2.X + value1.Y * value2.Y);
    }
    static Dot1(value1, value2, result) {
        result = (value1.X * value2.X + value1.Y * value2.Y);
    }
    Normalize() {
        var num = 1 / Math.sqrt(this.X * this.X + this.Y * this.Y);
        this.X *= num;
        this.Y *= num;
    }
    static Normalize1(value) {
        var num = 1 / Math.sqrt(value.X * value.X + value.Y * value.Y);
        var vector2;
        vector2.X = value.X * num;
        vector2.Y = value.Y * num;
        return vector2;
    }
    static Normalize2(value, result) {
        var num = 1 / Math.sqrt(value.X * value.X + value.Y * value.Y);
        result.X = value.X * num;
        result.Y = value.Y * num;
    }
    static Reflect(vector, normal) {
        var num = (vector.X * normal.X + vector.Y * normal.Y);
        var vector2;
        vector2.X = vector.X - 2 * num * normal.X;
        vector2.Y = vector.Y - 2 * num * normal.Y;
        return vector2;
    }
    static Reflect1(vector, normal, result) {
        var num = (vector.X * normal.X + vector.Y * normal.Y);
        result.X = vector.X - 2 * num * normal.X;
        result.Y = vector.Y - 2 * num * normal.Y;
    }
    static Min(value1, value2) {
        var vector2;
        vector2.X = value1.X < value2.X ? value1.X : value2.X;
        vector2.Y = value1.Y < value2.Y ? value1.Y : value2.Y;
        return vector2;
    }
    static Min1(value1, value2, result) {
        result.X = value1.X < value2.X ? value1.X : value2.X;
        result.Y = value1.Y < value2.Y ? value1.Y : value2.Y;
    }
    static Max(value1, value2) {
        var vector2;
        vector2.X = value1.X > value2.X ? value1.X : value2.X;
        vector2.Y = value1.Y > value2.Y ? value1.Y : value2.Y;
        return vector2;
    }
    static Max1(value1, value2, result) {
        result.X = value1.X > value2.X ? value1.X : value2.X;
        result.Y = value1.Y > value2.Y ? value1.Y : value2.Y;
    }
    static Clamp(value1, min, max) {
        var x = value1.X;
        var num1 = x > max.X ? max.X : x;
        var num2 = num1 < min.X ? min.X : num1;
        var y = value1.Y;
        var num3 = y > max.Y ? max.Y : y;
        var num4 = num3 < min.Y ? min.Y : num3;
        var vector2;
        vector2.X = num2;
        vector2.Y = num4;
        return vector2;
    }
    static Clamp1(value1, min, max, result) {
        var x = value1.X;
        var num1 = x > max.X ? max.X : x;
        var num2 = num1 < min.X ? min.X : num1;
        var y = value1.Y;
        var num3 = y > max.Y ? max.Y : y;
        var num4 = num3 < min.Y ? min.Y : num3;
        result.X = num2;
        result.Y = num4;
    }
    static Lerp(value1, value2, amount) {
        var vector2;
        vector2.X = value1.X + (value2.X - value1.X) * amount;
        vector2.Y = value1.Y + (value2.Y - value1.Y) * amount;
        return vector2;
    }
    static Lerp1(value1, value2, amount, result) {
        result.X = value1.X + (value2.X - value1.X) * amount;
        result.Y = value1.Y + (value2.Y - value1.Y) * amount;
    }
    static Barycentric(value1, value2, value3, amount1, amount2) {
        var vector2;
        vector2.X = (value1.X + amount1 * (value2.X - value1.X) + amount2 * (value3.X - value1.X));
        vector2.Y = (value1.Y + amount1 * (value2.Y - value1.Y) + amount2 * (value3.Y - value1.Y));
        return vector2;
    }
    static Barycentric1(value1, value2, value3, amount1, amount2, result) {
        result.X = (value1.X + amount1 * (value2.X - value1.X) + amount2 * (value3.X - value1.X));
        result.Y = (value1.Y + amount1 * (value2.Y - value1.Y) + amount2 * (value3.Y - value1.Y));
    }
    static SmoothStep(value1, value2, amount) {
        amount = amount > 1.0 ? 1 : (amount < 0.0 ? 0.0 : amount);
        amount = (amount * amount * (3.0 - 2.0 * amount));
        var vector2;
        vector2.X = value1.X + (value2.X - value1.X) * amount;
        vector2.Y = value1.Y + (value2.Y - value1.Y) * amount;
        return vector2;
    }
    static SmoothStep1(value1, value2, amount, result) {
        amount = amount > 1.0 ? 1 : (amount < 0.0 ? 0.0 : amount);
        amount = (amount * amount * (3.0 - 2.0 * amount));
        result.X = value1.X + (value2.X - value1.X) * amount;
        result.Y = value1.Y + (value2.Y - value1.Y) * amount;
    }
    static CatmullRom(value1, value2, value3, value4, amount) {
        var num1 = amount * amount;
        var num2 = amount * num1;
        var vector2;
        vector2.X = (0.5 * (2.0 * value2.X + (-value1.X + value3.X) * amount + (2.0 * value1.X - 5.0 * value2.X + 4.0 * value3.X - value4.X) * num1 + (-value1.X + 3.0 * value2.X - 3.0 * value3.X + value4.X) * num2));
        vector2.Y = (0.5 * (2.0 * value2.Y + (-value1.Y + value3.Y) * amount + (2.0 * value1.Y - 5.0 * value2.Y + 4.0 * value3.Y - value4.Y) * num1 + (-value1.Y + 3.0 * value2.Y - 3.0 * value3.Y + value4.Y) * num2));
        return vector2;
    }
    static CatmullRom1(value1, value2, value3, value4, amount, result) {
        var num1 = amount * amount;
        var num2 = amount * num1;
        result.X = (0.5 * (2.0 * value2.X + (-value1.X + value3.X) * amount + (2.0 * value1.X - 5.0 * value2.X + 4.0 * value3.X - value4.X) * num1 + (-value1.X + 3.0 * value2.X - 3.0 * value3.X + value4.X) * num2));
        result.Y = (0.5 * (2.0 * value2.Y + (-value1.Y + value3.Y) * amount + (2.0 * value1.Y - 5.0 * value2.Y + 4.0 * value3.Y - value4.Y) * num1 + (-value1.Y + 3.0 * value2.Y - 3.0 * value3.Y + value4.Y) * num2));
    }
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        var num1 = amount * amount;
        var num2 = amount * num1;
        var num3 = (2.0 * num2 - 3.0 * num1 + 1.0);
        var num4 = (-2.0 * num2 + 3.0 * num1);
        var num5 = num2 - 2 * num1 + amount;
        var num6 = num2 - num1;
        var vector2;
        vector2.X = (value1.X * num3 + value2.X * num4 + tangent1.X * num5 + tangent2.X * num6);
        vector2.Y = (value1.Y * num3 + value2.Y * num4 + tangent1.Y * num5 + tangent2.Y * num6);
        return vector2;
    }
    static Hermite1(value1, tangent1, value2, tangent2, amount, result) {
        var num1 = amount * amount;
        var num2 = amount * num1;
        var num3 = (2.0 * num2 - 3.0 * num1 + 1.0);
        var num4 = (-2.0 * num2 + 3.0 * num1);
        var num5 = num2 - 2 * num1 + amount;
        var num6 = num2 - num1;
        result.X = (value1.X * num3 + value2.X * num4 + tangent1.X * num5 + tangent2.X * num6);
        result.Y = (value1.Y * num3 + value2.Y * num4 + tangent1.Y * num5 + tangent2.Y * num6);
    }
    static Transform(position, matrix) {
        var num1 = (position.X * matrix.M11 + position.Y * matrix.M21) + matrix.M41;
        var num2 = (position.X * matrix.M12 + position.Y * matrix.M22) + matrix.M42;
        var vector2;
        vector2.X = num1;
        vector2.Y = num2;
        return vector2;
    }
    static Transform1(position, matrix, result) {
        var num1 = (position.X * matrix.M11 + position.Y * matrix.M21) + matrix.M41;
        var num2 = (position.X * matrix.M12 + position.Y * matrix.M22) + matrix.M42;
        result.X = num1;
        result.Y = num2;
    }
    static Transform2(value, rotation) {
        var num1 = rotation.X + rotation.X;
        var num2 = rotation.Y + rotation.Y;
        var num3 = rotation.Z + rotation.Z;
        var num4 = rotation.W * num3;
        var num5 = rotation.X * num1;
        var num6 = rotation.X * num2;
        var num7 = rotation.Y * num2;
        var num8 = rotation.Z * num3;
        var num9 = (value.X * (1.0 - num7 - num8) + value.Y * (num6 - num4));
        var num10 = (value.X * (num6 + num4) + value.Y * (1.0 - num5 - num8));
        var vector2;
        vector2.X = num9;
        vector2.Y = num10;
        return vector2;
    }
    static Transform3(value, rotation, result) {
        var num1 = rotation.X + rotation.X;
        var num2 = rotation.Y + rotation.Y;
        var num3 = rotation.Z + rotation.Z;
        var num4 = rotation.W * num3;
        var num5 = rotation.X * num1;
        var num6 = rotation.X * num2;
        var num7 = rotation.Y * num2;
        var num8 = rotation.Z * num3;
        var num9 = (value.X * (1.0 - num7 - num8) + value.Y * (num6 - num4));
        var num10 = (value.X * (num6 + num4) + value.Y * (1.0 - num5 - num8));
        result.X = num9;
        result.Y = num10;
    }
    static Transform4(sourceArray, matrix, destinationArray) {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (destinationArray.length < sourceArray.length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (var index = 0; index < sourceArray.length; ++index) {
            var x = sourceArray[index].X;
            var y = sourceArray[index].Y;
            destinationArray[index].X = (x * matrix.M11 + y * matrix.M21) + matrix.M41;
            destinationArray[index].Y = (x * matrix.M12 + y * matrix.M22) + matrix.M42;
        }
    }
    static Transform5(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (sourceArray.length < sourceIndex + length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughSourceSize);
        if (destinationArray.length < destinationIndex + length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (; length > 0; --length) {
            var x = sourceArray[sourceIndex].X;
            var y = sourceArray[sourceIndex].Y;
            destinationArray[destinationIndex].X = (x * matrix.M11 + y * matrix.M21) + matrix.M41;
            destinationArray[destinationIndex].Y = (x * matrix.M12 + y * matrix.M22) + matrix.M42;
            ++sourceIndex;
            ++destinationIndex;
        }
    }
    static Transform6(sourceArray, rotation, destinationArray) {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (destinationArray.length < sourceArray.length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        var num1 = rotation.X + rotation.X;
        var num2 = rotation.Y + rotation.Y;
        var num3 = rotation.Z + rotation.Z;
        var num4 = rotation.W * num3;
        var num5 = rotation.X * num1;
        var num6 = rotation.X * num2;
        var num7 = rotation.Y * num2;
        var num8 = rotation.Z * num3;
        var num9 = 1 - num7 - num8;
        var num10 = num6 - num4;
        var num11 = num6 + num4;
        var num12 = 1 - num5 - num8;
        for (var index = 0; index < sourceArray.length; ++index) {
            var x = sourceArray[index].X;
            var y = sourceArray[index].Y;
            destinationArray[index].X = (x * num9 + y * num10);
            destinationArray[index].Y = (x * num11 + y * num12);
        }
    }
    static Transform7(sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (sourceArray.length < sourceIndex + length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughSourceSize);
        if (destinationArray.length < destinationIndex + length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        var num1 = rotation.X + rotation.X;
        var num2 = rotation.Y + rotation.Y;
        var num3 = rotation.Z + rotation.Z;
        var num4 = rotation.W * num3;
        var num5 = rotation.X * num1;
        var num6 = rotation.X * num2;
        var num7 = rotation.Y * num2;
        var num8 = rotation.Z * num3;
        var num9 = 1 - num7 - num8;
        var num10 = num6 - num4;
        var num11 = num6 + num4;
        var num12 = 1 - num5 - num8;
        for (; length > 0; --length) {
            var x = sourceArray[sourceIndex].X;
            var y = sourceArray[sourceIndex].Y;
            destinationArray[destinationIndex].X = (x * num9 + y * num10);
            destinationArray[destinationIndex].Y = (x * num11 + y * num12);
            ++sourceIndex;
            ++destinationIndex;
        }
    }
    static TransformNormal(normal, matrix) {
        var num1 = (normal.X * matrix.M11 + normal.Y * matrix.M21);
        var num2 = (normal.X * matrix.M12 + normal.Y * matrix.M22);
        var vector2;
        vector2.X = num1;
        vector2.Y = num2;
        return vector2;
    }
    static TransformNormal1(normal, matrix, result) {
        var num1 = (normal.X * matrix.M11 + normal.Y * matrix.M21);
        var num2 = (normal.X * matrix.M12 + normal.Y * matrix.M22);
        result.X = num1;
        result.Y = num2;
    }
    static TransformNormal2(sourceArray, matrix, destinationArray) {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (destinationArray.length < sourceArray.length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (var index = 0; index < sourceArray.length; ++index) {
            var x = sourceArray[index].X;
            var y = sourceArray[index].Y;
            destinationArray[index].X = (x * matrix.M11 + y * matrix.M21);
            destinationArray[index].Y = (x * matrix.M12 + y * matrix.M22);
        }
    }
    static TransformNormal3(sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (sourceArray.length < sourceIndex + length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughSourceSize);
        if (destinationArray.length < destinationIndex + length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (; length > 0; --length) {
            var x = sourceArray[sourceIndex].X;
            var y = sourceArray[sourceIndex].Y;
            destinationArray[destinationIndex].X = (x * matrix.M11 + y * matrix.M21);
            destinationArray[destinationIndex].Y = (x * matrix.M12 + y * matrix.M22);
            ++sourceIndex;
            ++destinationIndex;
        }
    }
    static Negate(value) {
        var vector2;
        vector2.X = -value.X;
        vector2.Y = -value.Y;
        return vector2;
    }
    static Negate1(value, result) {
        result.X = -value.X;
        result.Y = -value.Y;
    }
    static Add(value1, value2) {
        var vector2;
        vector2.X = value1.X + value2.X;
        vector2.Y = value1.Y + value2.Y;
        return vector2;
    }
    static Add1(value1, value2, result) {
        result.X = value1.X + value2.X;
        result.Y = value1.Y + value2.Y;
    }
    static Subtract(value1, value2) {
        var vector2;
        vector2.X = value1.X - value2.X;
        vector2.Y = value1.Y - value2.Y;
        return vector2;
    }
    static Subtract2(value1, value2, result) {
        result.X = value1.X - value2.X;
        result.Y = value1.Y - value2.Y;
    }
    static Multiply(value1, value2) {
        var vector2;
        vector2.X = value1.X * value2.X;
        vector2.Y = value1.Y * value2.Y;
        return vector2;
    }
    static Multiply1(value1, value2, result) {
        result.X = value1.X * value2.X;
        result.Y = value1.Y * value2.Y;
    }
    static Multiply2(value1, scaleFactor) {
        var vector2;
        vector2.X = value1.X * scaleFactor;
        vector2.Y = value1.Y * scaleFactor;
        return vector2;
    }
    static Multiply3(value1, scaleFactor, result) {
        result.X = value1.X * scaleFactor;
        result.Y = value1.Y * scaleFactor;
    }
    static Divide(value1, value2) {
        var vector2;
        vector2.X = value1.X / value2.X;
        vector2.Y = value1.Y / value2.Y;
        return vector2;
    }
    static Divide1(value1, value2, result) {
        result.X = value1.X / value2.X;
        result.Y = value1.Y / value2.Y;
    }
    static Divide2(value1, divider) {
        var num = 1 / divider;
        var vector2;
        vector2.X = value1.X * num;
        vector2.Y = value1.Y * num;
        return vector2;
    }
    static Divide3(value1, divider, result) {
        var num = 1 / divider;
        result.X = value1.X * num;
        result.Y = value1.Y * num;
    }
}
Vector2.Zero = new Vector2(0, 0);