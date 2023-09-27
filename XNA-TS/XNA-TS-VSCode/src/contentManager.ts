export class ContentManager {
    private loadedAssets = [];
    private disposableAssets;
    private static contentExtension: string = ".xnb";
    private serviceProvider;
    private rootDirectory: string;
    private isRootDirectoryAbsolute: boolean;
    public fullRootDirectory: string;
    private byteBuffer: number[];
    private weakByteBuffer;
    private readAssetRecurseCount: number;

    constructor(/*serviceProvider: IServiceProvider*/) {
        //this(serviceProvider, string.Empty);
    }

    //constructor(serviceProvider/*: IServiceProvider*/, rootDirectory: string) {
    //    if (serviceProvider == null)
    //        throw new ArgumentNullException(nameof(serviceProvider));
    //    if (rootDirectory == null)
    //        throw new ArgumentNullException(nameof(rootDirectory));
    //    this.RootDirectory = rootDirectory;
    //    this.serviceProvider = serviceProvider;
    //}

    //public get ServiceProvider(): IServiceProvider {
    //    return this.serviceProvider;
    //}

    public get RootDirectory(): string {
        return this.rootDirectory;
    }
    public set RootDirectory(value: string) {
        if (value == null) {
            console.log("throw new ArgumentNullException(nameof(value)");
        }
        if (this.loadedAssets.length > 0) {
            console.log("throw new InvalidOperationException(FrameworkResources.ContentManagerCannotChangeRootDirectory");
        }
        this.rootDirectory = value;
        this.fullRootDirectory = value;
        //this.isRootDirectoryAbsolute = TitleContainer.IsPathAbsolute(value);
        if (!this.isRootDirectoryAbsolute)
            //return
            try {
                //this.fullRootDirectory = Path.Combine(TitleLocation.Path, value);
            }
            catch (err) {
            }
    }

    //public RecordDisposableObject(disposable: IDisposable): void {
    //    this.disposableAssets.Add(disposable);
    //}

    //public Dispose(): void {
    //    this.Dispose(true);
    //    GC.SuppressFinalize(<Object>this);
    //}

    //protected Dispose(disposing: boolean): void {
    //    try {
    //        if (!disposing || this.loadedAssets == null)
    //            return
    //        this.Unload();
    //    }

    //    finally {
    //        this.loadedAssets = <Dictionary<string, Object>>null;
    //        this.disposableAssets = <List<IDisposable>>null;
    //    }
    //}

    //public Unload(): void {
    //    if (this.loadedAssets == null)
    //        throw new ObjectDisposedException(this.ToString());
    //    try {
    //        this.disposableAssets.forEach(function (disposableAsset) { disposableAsset.Dispose(); });
    //    }
    //    finally {
    //        this.loadedAssets.Clear();
    //        this.disposableAssets.Clear();
    //    }
    //}

    //public Load<T>(assetName: string): T {
    //    if (this.loadedAssets == null)
    //        throw new ObjectDisposedException(this.ToString());
    //    if (string.IsNullOrEmpty(assetName))
    //        throw new ArgumentNullException(nameof(assetName));
    //    assetName = TitleContainer.GetCleanPath(assetName);
    //    var obj1: Object;
    //    if (this.loadedAssets.TryGetValue(assetName, obj1)) {
    //        if (!(obj1 instanceof T))
    //            throw new ContentLoadException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, FrameworkResources.BadXnbWrongType, <Object>assetName,
    //                <Object>obj1.GetType(),
    //                <Object>/*typeof*/T));
    //        return <T>obj1;
    //    }
    //    Logger.BeginLogEvent(LoggingEvent.LoadContent, "XNA: Begin Loading Content: " + assetName);
    //    var obj2: T;
    //    try {
    //        obj2 = this.ReadAsset<T>(assetName, <(_: IDisposable) => void>null);
    //        this.loadedAssets.Add(assetName, <Object>obj2);
    //    }
    //    finally {
    //        Logger.EndLogEvent(LoggingEvent.LoadContent, "XNA: Done Loading Content: " + assetName);
    //    }
    //    return obj2;
    //}

    //protected ReadAsset<T>(assetName: string, recordDisposableObject: (_: IDisposable) => void): T {
    //    if (this.loadedAssets == null)
    //        throw new ObjectDisposedException(this.ToString());
    //    if (string.IsNullOrEmpty(assetName))
    //        throw new ArgumentNullException(nameof(assetName));
    //    var input: Stream = this.OpenStream(assetName)
    //    try {
    //        var contentReader: ContentReader = ContentReader.Create(this, input, assetName, recordDisposableObject)
    //        try {
    //            ++this.readAssetRecurseCount;
    //            try {
    //                return contentReader.ReadAsset<T>();
    //            }

    //            finally {
    //                if (--this.readAssetRecurseCount == 0)
    //                    this.byteBuffer = <number[]>null;
    //            }
    //        }
    //        finally {
    //            if (contentReader != null) contentReader.Dispose();
    //        }
    //    }
    //    finally {
    //        if (input != null) input.Dispose();
    //    }
    //}

    //protected OpenStream(assetName: string): Stream {
    //    try {
    //        var cleanPath: string = TitleContainer.GetCleanPath(Path.Combine(this.fullRootDirectory, assetName + ".xnb"));
    //        if (this.isRootDirectoryAbsolute)
    //            return <Stream>new FileStream(cleanPath, FileMode.Open, FileAccess.Read, FileShare.Read);
    //        return TitleContainer.OpenStream(cleanPath);
    //    }
    //    catch (ex) {
    //        if (ex instanceof FileNotFoundException || ex instanceof DirectoryNotFoundException)
    //            throw new ContentLoadException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, FrameworkResources.OpenStreamNotFound, <Object>assetName), ex);
    //        throw new ContentLoadException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, FrameworkResources.OpenStreamError, <Object>assetName), ex);
    //    }
    //}

    //public GetByteBuffer(size: number): number[] {
    //    var numArray: number[] = this.byteBuffer;
    //    if (numArray == null && this.weakByteBuffer != null)
    //        numArray = <number[]>this.weakByteBuffer.Target;
    //    if (numArray == null || numArray.length < size) {
    //        numArray = new Array(size);
    //        this.byteBuffer = numArray;
    //        this.weakByteBuffer = new WeakReference(<Object>numArray);
    //    }
    //    return numArray;
    //}
    //   }
}