import { Vector3 } from "./vector3.js";
export class BoundingBox {
    static CornerCount = 8;
    Min;
    Max;
    GetCorners() {
        return [new Vector3(this.Min.X, this.Max.Y, this.Max.Z),
            new Vector3(this.Max.X, this.Max.Y, this.Max.Z),
            new Vector3(this.Max.X, this.Min.Y, this.Max.Z),
            new Vector3(this.Min.X, this.Min.Y, this.Max.Z),
            new Vector3(this.Min.X, this.Max.Y, this.Min.Z),
            new Vector3(this.Max.X, this.Max.Y, this.Min.Z),
            new Vector3(this.Max.X, this.Min.Y, this.Min.Z),
            new Vector3(this.Min.X, this.Min.Y, this.Min.Z)];
    }
    constructor(min, max) {
        this.Min = min;
        this.Max = max;
    }
    Equals(other) {
        if (this.Min == other.Min)
            return this.Max == other.Max;
        return false;
    }
    Intersects(box) {
        return this.Max.X >= box.Min.X &&
            this.Min.X <= box.Max.X &&
            (this.Max.Y >= box.Min.Y && this.Min.Y <= box.Max.Y) &&
            (this.Max.Z >= box.Min.Z && this.Min.Z <= box.Max.Z);
    }
    SupportMapping(v, result) {
        result.X = v.X >= 0.0 ? this.Max.X : this.Min.X;
        result.Y = v.Y >= 0.0 ? this.Max.Y : this.Min.Y;
        result.Z = v.Z >= 0.0 ? this.Max.Z : this.Min.Z;
    }
    OperatorEquals(b) {
        let a = this;
        return a.Equals(b);
    }
    OperatorNotEqual(b) {
        let a = this;
        if (!(a.Min != b.Min)) {
            return a.Max != b.Max;
        }
        return true;
    }
}
//# sourceMappingURL=boundingBox.js.map