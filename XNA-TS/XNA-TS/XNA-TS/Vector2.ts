class Vector2 {

    static Zero: any = new Vector2(0, 0);
    private m_x: number;
    private m_y: number;

    constructor(x?: number, y?: number) {
        this.m_x = x;
        this.m_y = y;
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

    public get Zero(): Vector2 {
        return new Vector2(0, 0);
    }

    public Equals(obj: Object): boolean {
        var flag: boolean = false;
        if (obj instanceof Vector2)
            flag = this.Equals(<Vector2>obj);
        return flag;
    }

    public GetHashCode(): number {
        //this.X.GetHashCode() + this.Y.GetHashCode();
        return 0;
    }

    public Length(): number {
        return <number>Math.sqrt(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y);
    }

    //public LengthSquared(): number {
    //    return (this.m_x * this.m_x) + (this.m_y * this.m_y);
    //}

    public LengthSquared(): number {
        return <number>(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y);
    }
    public static Distance(value1: Vector2, value2: Vector2): number {
        var num1: number = value1.X - value2.X;
        var num2: number = value1.Y - value2.Y;
        return <number>Math.sqrt(<number>num1 * <number>num1 + <number>num2 * <number>num2);
    }

    public static Distance1(value1: Vector2, value2: Vector2, result: number): void {
        var num1: number = value1.X - value2.X;
        var num2: number = value1.Y - value2.Y;
        var num3: number = <number>(<number>num1 * <number>num1 + <number>num2 * <number>num2);
        result = <number>Math.sqrt(<number>num3);
    }

    public static DistanceSquared(value1: Vector2, value2: Vector2): number {
        var num1: number = value1.X - value2.X;
        var num2: number = value1.Y - value2.Y;
        return <number>(<number>num1 * <number>num1 + <number>num2 * <number>num2);
    }

    public static DistanceSquared1(value1: Vector2, value2: Vector2, result: number): void {
        var num1: number = value1.X - value2.X;
        var num2: number = value1.Y - value2.Y;
        result = <number>(<number>num1 * <number>num1 + <number>num2 * <number>num2);
    }
    public static Dot(value1: Vector2, value2: Vector2): number {
        return <number>(<number>value1.X * <number>value2.X + <number>value1.Y * <number>value2.Y);
    }

    public static Dot1(value1: Vector2, value2: Vector2, result: number): void {
        result = <number>(<number>value1.X * <number>value2.X + <number>value1.Y * <number>value2.Y);
    }

    public Normalize(): void {
        var num: number = 1 / <number>Math.sqrt(<number>this.X * <number>this.X + <number>this.Y * <number>this.Y);
        this.X *= num;
        this.Y *= num;
    }

    public static Normalize1(value: Vector2): Vector2 {
        var num: number = 1 / <number>Math.sqrt(<number>value.X * <number>value.X + <number>value.Y * <number>value.Y);
        var vector2: Vector2;
        vector2.X = value.X * num;
        vector2.Y = value.Y * num;
        return vector2;
    }
    public static Normalize2(value: Vector2, result: Vector2): void {
        var num: number = 1 / <number>Math.sqrt(<number>value.X * <number>value.X + <number>value.Y * <number>value.Y);
        result.X = value.X * num;
        result.Y = value.Y * num;
    }

    public static Reflect(vector: Vector2, normal: Vector2): Vector2 {
        var num: number = <number>(<number>vector.X * <number>normal.X + <number>vector.Y * <number>normal.Y);
        var vector2: Vector2;
        vector2.X = vector.X - 2 * num * normal.X;
        vector2.Y = vector.Y - 2 * num * normal.Y;
        return vector2;
    }

    public static Reflect1(vector: Vector2, normal: Vector2, result: Vector2): void {
        var num: number = <number>(<number>vector.X * <number>normal.X + <number>vector.Y * <number>normal.Y);
        result.X = vector.X - 2 * num * normal.X;
        result.Y = vector.Y - 2 * num * normal.Y;
    }

    public static Min(value1: Vector2, value2: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = <number>value1.X < <number>value2.X ? value1.X : value2.X;
        vector2.Y = <number>value1.Y < <number>value2.Y ? value1.Y : value2.Y;
        return vector2;
    }

    public static Min1(value1: Vector2, value2: Vector2, result: Vector2): void {
        result.X = <number>value1.X < <number>value2.X ? value1.X : value2.X;
        result.Y = <number>value1.Y < <number>value2.Y ? value1.Y : value2.Y;
    }

    public static Max(value1: Vector2, value2: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = <number>value1.X > <number>value2.X ? value1.X : value2.X;
        vector2.Y = <number>value1.Y > <number>value2.Y ? value1.Y : value2.Y;
        return vector2;
    }

    public static Max1(value1: Vector2, value2: Vector2, result: Vector2): void {
        result.X = <number>value1.X > <number>value2.X ? value1.X : value2.X;
        result.Y = <number>value1.Y > <number>value2.Y ? value1.Y : value2.Y;
    }

    public static Clamp(value1: Vector2, min: Vector2, max: Vector2): Vector2 {
        var x: number = value1.X;
        var num1: number = <number>x > <number>max.X ? max.X : x;
        var num2: number = <number>num1 < <number>min.X ? min.X : num1;
        var y: number = value1.Y;
        var num3: number = <number>y > <number>max.Y ? max.Y : y;
        var num4: number = <number>num3 < <number>min.Y ? min.Y : num3;
        var vector2: Vector2;
        vector2.X = num2;
        vector2.Y = num4;
        return vector2;
    }

    public static Clamp1(value1: Vector2, min: Vector2, max: Vector2, result: Vector2): void {
        var x: number = value1.X;
        var num1: number = <number>x > <number>max.X ? max.X : x;
        var num2: number = <number>num1 < <number>min.X ? min.X : num1;
        var y: number = value1.Y;
        var num3: number = <number>y > <number>max.Y ? max.Y : y;
        var num4: number = <number>num3 < <number>min.Y ? min.Y : num3;
        result.X = num2;
        result.Y = num4;
    }

    public static Lerp(value1: Vector2, value2: Vector2, amount: number): Vector2 {
        var vector2: Vector2;
        vector2.X = value1.X + (value2.X - value1.X) * amount;
        vector2.Y = value1.Y + (value2.Y - value1.Y) * amount;
        return vector2;
    }

    public static Lerp1(value1: Vector2, value2: Vector2, amount: number, result: Vector2): void {
        result.X = value1.X + (value2.X - value1.X) * amount;
        result.Y = value1.Y + (value2.Y - value1.Y) * amount;
    }

    public static Barycentric(value1: Vector2, value2: Vector2, value3: Vector2, amount1: number, amount2: number): Vector2 {
        var vector2: Vector2;
        vector2.X = <number>(<number>value1.X + <number>amount1 * (<number>value2.X - <number>value1.X) + <number>amount2 * (<number>value3.X - <number>value1.X));
        vector2.Y = <number>(<number>value1.Y + <number>amount1 * (<number>value2.Y - <number>value1.Y) + <number>amount2 * (<number>value3.Y - <number>value1.Y));
        return vector2;
    }

    public static Barycentric1(value1: Vector2, value2: Vector2, value3: Vector2, amount1: number, amount2: number, result: Vector2): void {
        result.X = <number>(<number>value1.X + <number>amount1 * (<number>value2.X - <number>value1.X) + <number>amount2 * (<number>value3.X - <number>value1.X));
        result.Y = <number>(<number>value1.Y + <number>amount1 * (<number>value2.Y - <number>value1.Y) + <number>amount2 * (<number>value3.Y - <number>value1.Y));
    }

    public static SmoothStep(value1: Vector2, value2: Vector2, amount: number): Vector2 {
        amount = <number>amount > 1.0 ? 1 : (<number>amount < 0.0 ? 0.0 : amount);
        amount = <number>(<number>amount * <number>amount * (3.0 - 2.0 * <number>amount));
        var vector2: Vector2;
        vector2.X = value1.X + (value2.X - value1.X) * amount;
        vector2.Y = value1.Y + (value2.Y - value1.Y) * amount;
        return vector2;
    }

    public static SmoothStep1(value1: Vector2, value2: Vector2, amount: number, result: Vector2): void {
        amount = <number>amount > 1.0 ? 1 : (<number>amount < 0.0 ? 0.0 : amount);
        amount = <number>(<number>amount * <number>amount * (3.0 - 2.0 * <number>amount));
        result.X = value1.X + (value2.X - value1.X) * amount;
        result.Y = value1.Y + (value2.Y - value1.Y) * amount;
    }

    public static CatmullRom(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number): Vector2 {
        var num1: number = amount * amount;
        var num2: number = amount * num1;
        var vector2: Vector2;
        vector2.X = <number>(0.5 * (2.0 * <number>value2.X + (-<number>value1.X + <number>value3.X) * <number>amount + (2.0 * <number>value1.X - 5.0 * <number>value2.X + 4.0 * <number>value3.X - <number>value4.X) * <number>num1 + (-<number>value1.X + 3.0 * <number>value2.X - 3.0 * <number>value3.X + <number>value4.X) * <number>num2));
        vector2.Y = <number>(0.5 * (2.0 * <number>value2.Y + (-<number>value1.Y + <number>value3.Y) * <number>amount + (2.0 * <number>value1.Y - 5.0 * <number>value2.Y + 4.0 * <number>value3.Y - <number>value4.Y) * <number>num1 + (-<number>value1.Y + 3.0 * <number>value2.Y - 3.0 * <number>value3.Y + <number>value4.Y) * <number>num2));
        return vector2;
    }

    public static CatmullRom1(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number, result: Vector2): void {
        var num1: number = amount * amount;
        var num2: number = amount * num1;
        result.X = <number>(0.5 * (2.0 * <number>value2.X + (-<number>value1.X + <number>value3.X) * <number>amount + (2.0 * <number>value1.X - 5.0 * <number>value2.X + 4.0 * <number>value3.X - <number>value4.X) * <number>num1 + (-<number>value1.X + 3.0 * <number>value2.X - 3.0 * <number>value3.X + <number>value4.X) * <number>num2));
        result.Y = <number>(0.5 * (2.0 * <number>value2.Y + (-<number>value1.Y + <number>value3.Y) * <number>amount + (2.0 * <number>value1.Y - 5.0 * <number>value2.Y + 4.0 * <number>value3.Y - <number>value4.Y) * <number>num1 + (-<number>value1.Y + 3.0 * <number>value2.Y - 3.0 * <number>value3.Y + <number>value4.Y) * <number>num2));
    }

    public static Hermite(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number): Vector2 {
        var num1: number = amount * amount;
        var num2: number = amount * num1;
        var num3: number = <number>(2.0 * <number>num2 - 3.0 * <number>num1 + 1.0);
        var num4: number = <number>(-2.0 * <number>num2 + 3.0 * <number>num1);
        var num5: number = num2 - 2 * num1 + amount;
        var num6: number = num2 - num1;
        var vector2: Vector2;
        vector2.X = <number>(<number>value1.X * <number>num3 + <number>value2.X * <number>num4 + <number>tangent1.X * <number>num5 + <number>tangent2.X * <number>num6);
        vector2.Y = <number>(<number>value1.Y * <number>num3 + <number>value2.Y * <number>num4 + <number>tangent1.Y * <number>num5 + <number>tangent2.Y * <number>num6);
        return vector2;
    }

    public static Hermite1(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number, result: Vector2): void {
        var num1: number = amount * amount;
        var num2: number = amount * num1;
        var num3: number = <number>(2.0 * <number>num2 - 3.0 * <number>num1 + 1.0);
        var num4: number = <number>(-2.0 * <number>num2 + 3.0 * <number>num1);
        var num5: number = num2 - 2 * num1 + amount;
        var num6: number = num2 - num1;
        result.X = <number>(<number>value1.X * <number>num3 + <number>value2.X * <number>num4 + <number>tangent1.X * <number>num5 + <number>tangent2.X * <number>num6);
        result.Y = <number>(<number>value1.Y * <number>num3 + <number>value2.Y * <number>num4 + <number>tangent1.Y * <number>num5 + <number>tangent2.Y * <number>num6);
    }

    public static Transform(position: Vector2, matrix: Matrix): Vector2 {
        var num1: number = <number>(<number>position.X * <number>matrix.M11 + <number>position.Y * <number>matrix.M21) + matrix.M41;
        var num2: number = <number>(<number>position.X * <number>matrix.M12 + <number>position.Y * <number>matrix.M22) + matrix.M42;
        var vector2: Vector2;
        vector2.X = num1;
        vector2.Y = num2;
        return vector2;
    }

    public static Transform1(position: Vector2, matrix: Matrix, result: Vector2): void {
        var num1: number = <number>(<number>position.X * <number>matrix.M11 + <number>position.Y * <number>matrix.M21) + matrix.M41;
        var num2: number = <number>(<number>position.X * <number>matrix.M12 + <number>position.Y * <number>matrix.M22) + matrix.M42;
        result.X = num1;
        result.Y = num2;
    }

    public static Transform2(value: Vector2, rotation: Quaternion): Vector2 {
        var num1: number = rotation.X + rotation.X;
        var num2: number = rotation.Y + rotation.Y;
        var num3: number = rotation.Z + rotation.Z;
        var num4: number = rotation.W * num3;
        var num5: number = rotation.X * num1;
        var num6: number = rotation.X * num2;
        var num7: number = rotation.Y * num2;
        var num8: number = rotation.Z * num3;
        var num9: number = <number>(<number>value.X * (1.0 - <number>num7 - <number>num8) + <number>value.Y * (<number>num6 - <number>num4));
        var num10: number = <number>(<number>value.X * (<number>num6 + <number>num4) + <number>value.Y * (1.0 - <number>num5 - <number>num8));
        var vector2: Vector2;
        vector2.X = num9;
        vector2.Y = num10;
        return vector2;
    }

    public static Transform3(value: Vector2, rotation: Quaternion, result: Vector2): void {
        var num1: number = rotation.X + rotation.X;
        var num2: number = rotation.Y + rotation.Y;
        var num3: number = rotation.Z + rotation.Z;
        var num4: number = rotation.W * num3;
        var num5: number = rotation.X * num1;
        var num6: number = rotation.X * num2;
        var num7: number = rotation.Y * num2;
        var num8: number = rotation.Z * num3;
        var num9: number = <number>(<number>value.X * (1.0 - <number>num7 - <number>num8) + <number>value.Y * (<number>num6 - <number>num4));
        var num10: number = <number>(<number>value.X * (<number>num6 + <number>num4) + <number>value.Y * (1.0 - <number>num5 - <number>num8));
        result.X = num9;
        result.Y = num10;
    }

    public static Transform4(sourceArray: Vector2[], matrix: Matrix, destinationArray: Vector2[]): void {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (destinationArray.length < sourceArray.length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (var index: number = 0; index < sourceArray.length; ++index) {
            var x: number = sourceArray[index].X;
            var y: number = sourceArray[index].Y;
            destinationArray[index].X = <number>(<number>x * <number>matrix.M11 + <number>y * <number>matrix.M21) + matrix.M41;
            destinationArray[index].Y = <number>(<number>x * <number>matrix.M12 + <number>y * <number>matrix.M22) + matrix.M42;
        }
    }

    public static Transform5(sourceArray: Vector2[], sourceIndex: number, matrix: Matrix, destinationArray: Vector2[], destinationIndex: number, length: number): void {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (<number>sourceArray.length < <number>sourceIndex + <number>length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughSourceSize);
        if (<number>destinationArray.length < <number>destinationIndex + <number>length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (; length > 0; --length) {
            var x: number = sourceArray[sourceIndex].X;
            var y: number = sourceArray[sourceIndex].Y;
            destinationArray[destinationIndex].X = <number>(<number>x * <number>matrix.M11 + <number>y * <number>matrix.M21) + matrix.M41;
            destinationArray[destinationIndex].Y = <number>(<number>x * <number>matrix.M12 + <number>y * <number>matrix.M22) + matrix.M42;
            ++sourceIndex;
            ++destinationIndex;
        }
    }

    public static Transform6(sourceArray: Vector2[], rotation: Quaternion, destinationArray: Vector2[]): void {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (destinationArray.length < sourceArray.length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        var num1: number = rotation.X + rotation.X;
        var num2: number = rotation.Y + rotation.Y;
        var num3: number = rotation.Z + rotation.Z;
        var num4: number = rotation.W * num3;
        var num5: number = rotation.X * num1;
        var num6: number = rotation.X * num2;
        var num7: number = rotation.Y * num2;
        var num8: number = rotation.Z * num3;
        var num9: number = 1 - num7 - num8;
        var num10: number = num6 - num4;
        var num11: number = num6 + num4;
        var num12: number = 1 - num5 - num8;
        for (var index: number = 0; index < sourceArray.length; ++index) {
            var x: number = sourceArray[index].X;
            var y: number = sourceArray[index].Y;
            destinationArray[index].X = <number>(<number>x * <number>num9 + <number>y * <number>num10);
            destinationArray[index].Y = <number>(<number>x * <number>num11 + <number>y * <number>num12);
        }
    }

    public static Transform7(sourceArray: Vector2[], sourceIndex: number, rotation: Quaternion, destinationArray: Vector2[], destinationIndex: number, length: number): void {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (<number>sourceArray.length < <number>sourceIndex + <number>length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughSourceSize);
        if (<number>destinationArray.length < <number>destinationIndex + <number>length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        var num1: number = rotation.X + rotation.X;
        var num2: number = rotation.Y + rotation.Y;
        var num3: number = rotation.Z + rotation.Z;
        var num4: number = rotation.W * num3;
        var num5: number = rotation.X * num1;
        var num6: number = rotation.X * num2;
        var num7: number = rotation.Y * num2;
        var num8: number = rotation.Z * num3;
        var num9: number = 1 - num7 - num8;
        var num10: number = num6 - num4;
        var num11: number = num6 + num4;
        var num12: number = 1 - num5 - num8;
        for (; length > 0; --length) {
            var x: number = sourceArray[sourceIndex].X;
            var y: number = sourceArray[sourceIndex].Y;
            destinationArray[destinationIndex].X = <number>(<number>x * <number>num9 + <number>y * <number>num10);
            destinationArray[destinationIndex].Y = <number>(<number>x * <number>num11 + <number>y * <number>num12);
            ++sourceIndex;
            ++destinationIndex;
        }
    }

    public static TransformNormal(normal: Vector2, matrix: Matrix): Vector2 {
        var num1: number = <number>(<number>normal.X * <number>matrix.M11 + <number>normal.Y * <number>matrix.M21);
        var num2: number = <number>(<number>normal.X * <number>matrix.M12 + <number>normal.Y * <number>matrix.M22);
        var vector2: Vector2;
        vector2.X = num1;
        vector2.Y = num2;
        return vector2;
    }

    public static TransformNormal1(normal: Vector2, matrix: Matrix, result: Vector2): void {
        var num1: number = <number>(<number>normal.X * <number>matrix.M11 + <number>normal.Y * <number>matrix.M21);
        var num2: number = <number>(<number>normal.X * <number>matrix.M12 + <number>normal.Y * <number>matrix.M22);
        result.X = num1;
        result.Y = num2;
    }

    public static TransformNormal2(sourceArray: Vector2[], matrix: Matrix, destinationArray: Vector2[]): void {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (destinationArray.length < sourceArray.length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (var index: number = 0; index < sourceArray.length; ++index) {
            var x: number = sourceArray[index].X;
            var y: number = sourceArray[index].Y;
            destinationArray[index].X = <number>(<number>x * <number>matrix.M11 + <number>y * <number>matrix.M21);
            destinationArray[index].Y = <number>(<number>x * <number>matrix.M12 + <number>y * <number>matrix.M22);
        }
    }

    public static TransformNormal3(sourceArray: Vector2[], sourceIndex: number, matrix: Matrix, destinationArray: Vector2[], destinationIndex: number, length: number): void {
        if (sourceArray == null) { }
        //throw new ArgumentNullException(nameof(sourceArray));
        if (destinationArray == null) { }
        //throw new ArgumentNullException(nameof(destinationArray));
        if (<number>sourceArray.length < <number>sourceIndex + <number>length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughSourceSize);
        if (<number>destinationArray.length < <number>destinationIndex + <number>length) { }
        //throw new ArgumentException(FrameworkResources.NotEnoughTargetSize);
        for (; length > 0; --length) {
            var x: number = sourceArray[sourceIndex].X;
            var y: number = sourceArray[sourceIndex].Y;
            destinationArray[destinationIndex].X = <number>(<number>x * <number>matrix.M11 + <number>y * <number>matrix.M21);
            destinationArray[destinationIndex].Y = <number>(<number>x * <number>matrix.M12 + <number>y * <number>matrix.M22);
            ++sourceIndex;
            ++destinationIndex;
        }
    }

    public static Negate(value: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = -value.X;
        vector2.Y = -value.Y;
        return vector2;
    }

    public static Negate1(value: Vector2, result: Vector2): void {
        result.X = -value.X;
        result.Y = -value.Y;
    }

    public static Add(value1: Vector2, value2: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = value1.X + value2.X;
        vector2.Y = value1.Y + value2.Y;
        return vector2;
    }

    public static Add1(value1: Vector2, value2: Vector2, result: Vector2): void {
        result.X = value1.X + value2.X;
        result.Y = value1.Y + value2.Y;
    }

    public static Subtract(value1: Vector2, value2: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = value1.X - value2.X;
        vector2.Y = value1.Y - value2.Y;
        return vector2;
    }

    public static Subtract2(value1: Vector2, value2: Vector2, result: Vector2): void {
        result.X = value1.X - value2.X;
        result.Y = value1.Y - value2.Y;
    }

    public static Multiply(value1: Vector2, value2: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = value1.X * value2.X;
        vector2.Y = value1.Y * value2.Y;
        return vector2;
    }

    public static Multiply1(value1: Vector2, value2: Vector2, result: Vector2): void {
        result.X = value1.X * value2.X;
        result.Y = value1.Y * value2.Y;
    }

    public static Multiply2(value1: Vector2, scaleFactor: number): Vector2 {
        var vector2: Vector2;
        vector2.X = value1.X * scaleFactor;
        vector2.Y = value1.Y * scaleFactor;
        return vector2;
    }

    public static Multiply3(value1: Vector2, scaleFactor: number, result: Vector2): void {
        result.X = value1.X * scaleFactor;
        result.Y = value1.Y * scaleFactor;
    }

    public static Divide(value1: Vector2, value2: Vector2): Vector2 {
        var vector2: Vector2;
        vector2.X = value1.X / value2.X;
        vector2.Y = value1.Y / value2.Y;
        return vector2;
    }

    public static Divide1(value1: Vector2, value2: Vector2, result: Vector2): void {
        result.X = value1.X / value2.X;
        result.Y = value1.Y / value2.Y;
    }

    public static Divide2(value1: Vector2, divider: number): Vector2 {
        var num: number = 1 / divider;
        var vector2: Vector2;
        vector2.X = value1.X * num;
        vector2.Y = value1.Y * num;
        return vector2;
    }

    public static Divide3(value1: Vector2, divider: number, result: Vector2): void {
        var num: number = 1 / divider;
        result.X = value1.X * num;
        result.Y = value1.Y * num;
    }

}