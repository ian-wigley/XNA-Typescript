export class ContentManager {
    loadedAssets = [];
    disposableAssets;
    static contentExtension = ".xnb";
    serviceProvider;
    rootDirectory;
    isRootDirectoryAbsolute;
    fullRootDirectory;
    byteBuffer;
    weakByteBuffer;
    readAssetRecurseCount;
    constructor() {
    }
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
        if (!this.isRootDirectoryAbsolute)
            try {
            }
            catch (err) {
            }
    }
}
//# sourceMappingURL=contentManager.js.map