export class ContentManager {
    constructor( /*serviceProvider: IServiceProvider*/) {
        this.loadedAssets = [];
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
    get RootDirectory() {
        return this.rootDirectory;
    }
    set RootDirectory(value) {
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
}
ContentManager.contentExtension = ".xnb";