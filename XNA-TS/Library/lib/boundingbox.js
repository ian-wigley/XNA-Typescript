define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BoundingBox = void 0;
    class BoundingBox {
        //public GetCorners(): Vector3[] {
        //    return new Vector3(this.Min.X, this.Max.Y, this.Max.Z),
        //        new Vector3(this.Max.X, this.Max.Y, this.Max.Z),
        //        new Vector3(this.Max.X, this.Min.Y, this.Max.Z),
        //        new Vector3(this.Min.X, this.Min.Y, this.Max.Z),
        //        new Vector3(this.Min.X, this.Max.Y, this.Min.Z),
        //        new Vector3(this.Max.X, this.Max.Y, this.Min.Z),
        //        new Vector3(this.Max.X, this.Min.Y, this.Min.Z),
        //        new Vector3(this.Min.X, this.Min.Y, this.Min.Z);
        //}
        //public GetCorners(corners: Vector3[]): void {
        //    if (corners == null)
        //        throw new ArgumentNullException(nameof(corners));
        //    if (corners.length < 8)
        //        throw new ArgumentOutOfRangeException(nameof(corners), FrameworkResources.NotEnoughCorners);
        //    corners[0].X = this.Min.X;
        //    corners[0].Y = this.Max.Y;
        //    corners[0].Z = this.Max.Z;
        //    corners[1].X = this.Max.X;
        //    corners[1].Y = this.Max.Y;
        //    corners[1].Z = this.Max.Z;
        //    corners[2].X = this.Max.X;
        //    corners[2].Y = this.Min.Y;
        //    corners[2].Z = this.Max.Z;
        //    corners[3].X = this.Min.X;
        //    corners[3].Y = this.Min.Y;
        //    corners[3].Z = this.Max.Z;
        //    corners[4].X = this.Min.X;
        //    corners[4].Y = this.Max.Y;
        //    corners[4].Z = this.Min.Z;
        //    corners[5].X = this.Max.X;
        //    corners[5].Y = this.Max.Y;
        //    corners[5].Z = this.Min.Z;
        //    corners[6].X = this.Max.X;
        //    corners[6].Y = this.Min.Y;
        //    corners[6].Z = this.Min.Z;
        //    corners[7].X = this.Min.X;
        //    corners[7].Y = this.Min.Y;
        //    corners[7].Z = this.Min.Z;
        //}
        constructor(min, max) {
            this.Min = min;
            this.Max = max;
        }
        Equals(other) {
            if (this.Min == other.Min)
                return this.Max == other.Max;
            return false;
        }
        //public Equals(obj: Object): boolean {
        //    var flag: boolean = false;
        //    if (obj instanceof BoundingBox)
        //        flag = this.Equals(<BoundingBox>obj);
        //    return flag;
        //}
        //public GetHashCode(): number {
        //    return this.Min.GetHashCode() + this.Max.GetHashCode();
        //}
        //public ToString(): string {
        //    return string.Format(<IFormatProvider>CultureInfo.CurrentCulture, "{{Min:{0} Max:{1}}}", <Object>this.Min.ToString(),
        //        <Object>this.Max.ToString());
        //}
        //public static CreateMerged(original: BoundingBox, additional: BoundingBox): BoundingBox {
        //    var boundingBox: BoundingBox;
        //    Vector3.Min(original.Min, additional.Min, boundingBox.Min);
        //    Vector3.Max(original.Max, additional.Max, boundingBox.Max);
        //    return boundingBox;
        //}
        //public static CreateMerged(original: BoundingBox, additional: BoundingBox, result: BoundingBox): void {
        //    var result1: Vector3;
        //    Vector3.Min(original.Min, additional.Min, result1);
        //    var result2: Vector3;
        //    Vector3.Max(original.Max, additional.Max, result2);
        //    result.Min = result1;
        //    result.Max = result2;
        //}
        //public static CreateFromSphere(sphere: BoundingSphere): BoundingBox {
        //    var boundingBox: BoundingBox;
        //    boundingBox.Min.X = sphere.Center.X - sphere.Radius;
        //    boundingBox.Min.Y = sphere.Center.Y - sphere.Radius;
        //    boundingBox.Min.Z = sphere.Center.Z - sphere.Radius;
        //    boundingBox.Max.X = sphere.Center.X + sphere.Radius;
        //    boundingBox.Max.Y = sphere.Center.Y + sphere.Radius;
        //    boundingBox.Max.Z = sphere.Center.Z + sphere.Radius;
        //    return boundingBox;
        //}
        //public static CreateFromSphere(sphere: BoundingSphere, result: BoundingBox): void {
        //    result.Min.X = sphere.Center.X - sphere.Radius;
        //    result.Min.Y = sphere.Center.Y - sphere.Radius;
        //    result.Min.Z = sphere.Center.Z - sphere.Radius;
        //    result.Max.X = sphere.Center.X + sphere.Radius;
        //    result.Max.Y = sphere.Center.Y + sphere.Radius;
        //    result.Max.Z = sphere.Center.Z + sphere.Radius;
        //}
        //public static CreateFromPoints(points: IEnumerable<Vector3>): BoundingBox {
        //    if (points == null)
        //        throw new ArgumentNullException();
        //    var flag: boolean = false;
        //    var result1: Vector3 = new Vector3(number.MaxValue);
        //    var result2: Vector3 = new Vector3(number.MinValue);
        //    points.forEach(function (point) {
        //        Vector3.Min(result1, point, result1);
        //        Vector3.Max(result2, point, result2);
        //        flag = true;
        //    });
        //    if (!flag)
        //        throw new ArgumentException(FrameworkResources.BoundingBoxZeroPoints);
        //    return new BoundingBox(result1, result2);
        //}
        Intersects(box) {
            return this.Max.X >= box.Min.X && this.Min.X <= box.Max.X && (this.Max.Y >= box.Min.Y && this.Min.Y <= box.Max.Y) && (this.Max.Z >= box.Min.Z && this.Min.Z <= box.Max.Z);
        }
        //public Intersects(box: BoundingBox, result: boolean): void {
        //    result = false;
        //    if (<number>this.Max.X << number > box.Min.X || <number>this.Min.X > <number>box.Max.X || (<number>this.Max.Y << number > box.Min.Y || <number>this.Min.Y > <number>box.Max.Y) || (<number>this.Max.Z << number > box.Min.Z || <number>this.Min.Z > <number>box.Max.Z))
        //        return
        //    result = true;
        //}
        //public Intersects(frustum: BoundingFrustum): boolean {
        //    if (<BoundingFrustum>null == frustum)
        //        throw new ArgumentNullException(nameof(frustum), FrameworkResources.NullNotAllowed);
        //    return frustum.Intersects(this);
        //}
        //public Intersects(plane: Plane): PlaneIntersectionType {
        //    var vector3_1: Vector3;
        //    vector3_1.X = <number>plane.Normal.X >= 0.0 ? this.Min.X : this.Max.X;
        //    vector3_1.Y = <number>plane.Normal.Y >= 0.0 ? this.Min.Y : this.Max.Y;
        //    vector3_1.Z = <number>plane.Normal.Z >= 0.0 ? this.Min.Z : this.Max.Z;
        //    var vector3_2: Vector3;
        //    vector3_2.X = <number>plane.Normal.X >= 0.0 ? this.Max.X : this.Min.X;
        //    vector3_2.Y = <number>plane.Normal.Y >= 0.0 ? this.Max.Y : this.Min.Y;
        //    vector3_2.Z = <number>plane.Normal.Z >= 0.0 ? this.Max.Z : this.Min.Z;
        //    if (<number>plane.Normal.X * <number>vector3_1.X + <number>plane.Normal.Y * <number>vector3_1.Y + <number>plane.Normal.Z * <number>vector3_1.Z + <number>plane.D > 0.0)
        //        return PlaneIntersectionType.Front;
        //    return <number>plane.Normal.X * <number>vector3_2.X + <number>plane.Normal.Y * <number>vector3_2.Y + <number>plane.Normal.Z * <number>vector3_2.Z + <number>plane.D < 0.0 ? PlaneIntersectionType.Back : PlaneIntersectionType.Intersecting;
        //}
        //public Intersects(plane: Plane, result: PlaneIntersectionType): void {
        //    var vector3_1: Vector3;
        //    vector3_1.X = <number>plane.Normal.X >= 0.0 ? this.Min.X : this.Max.X;
        //    vector3_1.Y = <number>plane.Normal.Y >= 0.0 ? this.Min.Y : this.Max.Y;
        //    vector3_1.Z = <number>plane.Normal.Z >= 0.0 ? this.Min.Z : this.Max.Z;
        //    var vector3_2: Vector3;
        //    vector3_2.X = <number>plane.Normal.X >= 0.0 ? this.Max.X : this.Min.X;
        //    vector3_2.Y = <number>plane.Normal.Y >= 0.0 ? this.Max.Y : this.Min.Y;
        //    vector3_2.Z = <number>plane.Normal.Z >= 0.0 ? this.Max.Z : this.Min.Z;
        //    if (<number>plane.Normal.X * <number>vector3_1.X + <number>plane.Normal.Y * <number>vector3_1.Y + <number>plane.Normal.Z * <number>vector3_1.Z + <number>plane.D > 0.0)
        //        result = PlaneIntersectionType.Front;
        //    else if (<number>plane.Normal.X * <number>vector3_2.X + <number>plane.Normal.Y * <number>vector3_2.Y + <number>plane.Normal.Z * <number>vector3_2.Z + <number>plane.D < 0.0)
        //        result = PlaneIntersectionType.Back;
        //    else result = PlaneIntersectionType.Intersecting;
        //}
        //public Intersects(ray: Ray): number {
        //    var num1: number = 0.0f;
        //    var num2: number = number.MaxValue;
        //    if (<number>Math.Abs(ray.Direction.X) < 9.99999997475243E-07) {
        //        if (<number>ray.Position.X << number > this.Min.X || <number>ray.Position.X > <number>this.Max.X)
        //            return new number();
        //    }
        //    else {
        //        var num3: number = 1f / ray.Direction.X;
        //        var num4: number = (this.Min.X - ray.Position.X) * num3;
        //        var num5: number = (this.Max.X - ray.Position.X) * num3;
        //        if (<number>num4 > <number>num5) {
        //            var num6: number = num4;
        //            num4 = num5;
        //            num5 = num6;
        //        }
        //        num1 = MathHelper.Max(num4, num1);
        //        num2 = MathHelper.Min(num5, num2);
        //        if (<number>num1 > <number>num2)
        //            return new number();
        //    }
        //    if (<number>Math.Abs(ray.Direction.Y) < 9.99999997475243E-07) {
        //        if (<number>ray.Position.Y << number > this.Min.Y || <number>ray.Position.Y > <number>this.Max.Y)
        //            return new number();
        //    }
        //    else {
        //        var num3: number = 1f / ray.Direction.Y;
        //        var num4: number = (this.Min.Y - ray.Position.Y) * num3;
        //        var num5: number = (this.Max.Y - ray.Position.Y) * num3;
        //        if (<number>num4 > <number>num5) {
        //            var num6: number = num4;
        //            num4 = num5;
        //            num5 = num6;
        //        }
        //        num1 = MathHelper.Max(num4, num1);
        //        num2 = MathHelper.Min(num5, num2);
        //        if (<number>num1 > <number>num2)
        //            return new number();
        //    }
        //    if (<number>Math.Abs(ray.Direction.Z) < 9.99999997475243E-07) {
        //        if (<number>ray.Position.Z << number > this.Min.Z || <number>ray.Position.Z > <number>this.Max.Z)
        //            return new number();
        //    }
        //    else {
        //        var num3: number = 1f / ray.Direction.Z;
        //        var num4: number = (this.Min.Z - ray.Position.Z) * num3;
        //        var num5: number = (this.Max.Z - ray.Position.Z) * num3;
        //        if (<number>num4 > <number>num5) {
        //            var num6: number = num4;
        //            num4 = num5;
        //            num5 = num6;
        //        }
        //        num1 = MathHelper.Max(num4, num1);
        //        var num7: number = MathHelper.Min(num5, num2);
        //        if (<number>num1 > <number>num7)
        //            return new number();
        //    }
        //    return new number(num1);
        //}
        //public Intersects(ray: Ray, result: number): void {
        //    result = new number();
        //    var num1: number = 0.0f;
        //    var num2: number = number.MaxValue;
        //    if (<number>Math.Abs(ray.Direction.X) < 9.99999997475243E-07) {
        //        if (<number>ray.Position.X << number > this.Min.X || <number>ray.Position.X > <number>this.Max.X)
        //            return
        //    }
        //    else {
        //        var num3: number = 1f / ray.Direction.X;
        //        var num4: number = (this.Min.X - ray.Position.X) * num3;
        //        var num5: number = (this.Max.X - ray.Position.X) * num3;
        //        if (<number>num4 > <number>num5) {
        //            var num6: number = num4;
        //            num4 = num5;
        //            num5 = num6;
        //        }
        //        num1 = MathHelper.Max(num4, num1);
        //        num2 = MathHelper.Min(num5, num2);
        //        if (<number>num1 > <number>num2)
        //            return
        //    }
        //    if (<number>Math.Abs(ray.Direction.Y) < 9.99999997475243E-07) {
        //        if (<number>ray.Position.Y << number > this.Min.Y || <number>ray.Position.Y > <number>this.Max.Y)
        //            return
        //    }
        //    else {
        //        var num3: number = 1f / ray.Direction.Y;
        //        var num4: number = (this.Min.Y - ray.Position.Y) * num3;
        //        var num5: number = (this.Max.Y - ray.Position.Y) * num3;
        //        if (<number>num4 > <number>num5) {
        //            var num6: number = num4;
        //            num4 = num5;
        //            num5 = num6;
        //        }
        //        num1 = MathHelper.Max(num4, num1);
        //        num2 = MathHelper.Min(num5, num2);
        //        if (<number>num1 > <number>num2)
        //            return
        //    }
        //    if (<number>Math.Abs(ray.Direction.Z) < 9.99999997475243E-07) {
        //        if (<number>ray.Position.Z << number > this.Min.Z || <number>ray.Position.Z > <number>this.Max.Z)
        //            return
        //    }
        //    else {
        //        var num3: number = 1f / ray.Direction.Z;
        //        var num4: number = (this.Min.Z - ray.Position.Z) * num3;
        //        var num5: number = (this.Max.Z - ray.Position.Z) * num3;
        //        if (<number>num4 > <number>num5) {
        //            var num6: number = num4;
        //            num4 = num5;
        //            num5 = num6;
        //        }
        //        num1 = MathHelper.Max(num4, num1);
        //        var num7: number = MathHelper.Min(num5, num2);
        //        if (<number>num1 > <number>num7)
        //            return
        //    }
        //    result = new number(num1);
        //}
        //public Intersects(sphere: BoundingSphere): boolean {
        //    var result1: Vector3;
        //    Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
        //    var result2: number;
        //    Vector3.DistanceSquared(sphere.Center, result1, result2);
        //    return <number>result2 <= <number>sphere.Radius * <number>sphere.Radius;
        //}
        //public Intersects(sphere: BoundingSphere, result: boolean): void {
        //    var result1: Vector3;
        //    Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
        //    var result2: number;
        //    Vector3.DistanceSquared(sphere.Center, result1, result2);
        //    result = <number>result2 <= <number>sphere.Radius * <number>sphere.Radius;
        //}
        //public Contains(box: BoundingBox): ContainmentType {
        //    if (<number>this.Max.X << number > box.Min.X || <number>this.Min.X > <number>box.Max.X || (<number>this.Max.Y << number > box.Min.Y || <number>this.Min.Y > <number>box.Max.Y) || (<number>this.Max.Z << number > box.Min.Z || <number>this.Min.Z > <number>box.Max.Z))
        //        return ContainmentType.Disjoint;
        //    return <number>this.Min.X > <number>box.Min.X || <number>box.Max.X > <number>this.Max.X || (<number>this.Min.Y > <number>box.Min.Y || <number>box.Max.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>box.Min.Z || <number>box.Max.Z > <number>this.Max.Z) ? ContainmentType.Intersects : ContainmentType.Contains;
        //}
        //public Contains(box: BoundingBox, result: ContainmentType): void {
        //    result = ContainmentType.Disjoint;
        //    if (<number>this.Max.X << number > box.Min.X || <number>this.Min.X > <number>box.Max.X || (<number>this.Max.Y << number > box.Min.Y || <number>this.Min.Y > <number>box.Max.Y) || (<number>this.Max.Z << number > box.Min.Z || <number>this.Min.Z > <number>box.Max.Z))
        //        return
        //    result = <number>this.Min.X > <number>box.Min.X || <number>box.Max.X > <number>this.Max.X || (<number>this.Min.Y > <number>box.Min.Y || <number>box.Max.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>box.Min.Z || <number>box.Max.Z > <number>this.Max.Z) ? ContainmentType.Intersects : ContainmentType.Contains;
        //}
        //public Contains(frustum: BoundingFrustum): ContainmentType {
        //    if (<BoundingFrustum>null == frustum)
        //        throw new ArgumentNullException(nameof(frustum), FrameworkResources.NullNotAllowed);
        //    if (!frustum.Intersects(this))
        //        return ContainmentType.Disjoint;
        //    frustum.cornerArray.forEach(function (corner) {
        //        if (this.Contains(corner) == ContainmentType.Disjoint)
        //            return ContainmentType.Intersects;
        //    });
        //    return ContainmentType.Contains;
        //}
        //public Contains(point: Vector3): ContainmentType {
        //    return <number>this.Min.X > <number>point.X || <number>point.X > <number>this.Max.X || (<number>this.Min.Y > <number>point.Y || <number>point.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>point.Z || <number>point.Z > <number>this.Max.Z) ? ContainmentType.Disjoint : ContainmentType.Contains;
        //}
        //public Contains(point: Vector3, result: ContainmentType): void {
        //    result = <number>this.Min.X > <number>point.X || <number>point.X > <number>this.Max.X || (<number>this.Min.Y > <number>point.Y || <number>point.Y > <number>this.Max.Y) || (<number>this.Min.Z > <number>point.Z || <number>point.Z > <number>this.Max.Z) ? ContainmentType.Disjoint : ContainmentType.Contains;
        //}
        //public Contains(sphere: BoundingSphere): ContainmentType {
        //    var result1: Vector3;
        //    Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
        //    var result2: number;
        //    Vector3.DistanceSquared(sphere.Center, result1, result2);
        //    var radius: number = sphere.Radius;
        //    if (<number>result2 > <number>radius * <number>radius)
        //        return ContainmentType.Disjoint;
        //    return <number>this.Min.X + <number>radius > <number>sphere.Center.X || <number>sphere.Center.X > <number>this.Max.X - <number>radius || (<number>this.Max.X - <number>this.Min.X <= <number>radius || <number>this.Min.Y + <number>radius > <number>sphere.Center.Y) || (<number>sphere.Center.Y > <number>this.Max.Y - <number>radius || <number>this.Max.Y - <number>this.Min.Y <= <number>radius || (<number>this.Min.Z + <number>radius > <number>sphere.Center.Z || <number>sphere.Center.Z > <number>this.Max.Z - <number>radius)) || <number>this.Max.X - <number>this.Min.X <= <number>radius ? ContainmentType.Intersects : ContainmentType.Contains;
        //}
        //public Contains(sphere: BoundingSphere, result: ContainmentType): void {
        //    var result1: Vector3;
        //    Vector3.Clamp(sphere.Center, this.Min, this.Max, result1);
        //    var result2: number;
        //    Vector3.DistanceSquared(sphere.Center, result1, result2);
        //    var radius: number = sphere.Radius;
        //    if (<number>result2 > <number>radius * <number>radius)
        //        result = ContainmentType.Disjoint;
        //    else result = <number>this.Min.X + <number>radius > <number>sphere.Center.X || <number>sphere.Center.X > <number>this.Max.X - <number>radius || (<number>this.Max.X - <number>this.Min.X <= <number>radius || <number>this.Min.Y + <number>radius > <number>sphere.Center.Y) || (<number>sphere.Center.Y > <number>this.Max.Y - <number>radius || <number>this.Max.Y - <number>this.Min.Y <= <number>radius || (<number>this.Min.Z + <number>radius > <number>sphere.Center.Z || <number>sphere.Center.Z > <number>this.Max.Z - <number>radius)) || <number>this.Max.X - <number>this.Min.X <= <number>radius ? ContainmentType.Intersects : ContainmentType.Contains;
        //}
        SupportMapping(v, result) {
            result.X = v.X >= 0.0 ? this.Max.X : this.Min.X;
            result.Y = v.Y >= 0.0 ? this.Max.Y : this.Min.Y;
            result.Z = v.Z >= 0.0 ? this.Max.Z : this.Min.Z;
        }
        OperatorEquals(b) {
            var a = this;
            return a.Equals(b);
        }
        OperatorNotEqual(b) {
            var a = this;
            if (!(a.Min != b.Min))
                return a.Max != b.Max;
            return true;
        }
    }
    exports.BoundingBox = BoundingBox;
    BoundingBox.CornerCount = 8;
});
