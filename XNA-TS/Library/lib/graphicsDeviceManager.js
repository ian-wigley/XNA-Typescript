export class GraphicsDeviceManager {
    static DefaultBackBufferWidth = 800;
    static DefaultBackBufferHeight = 480;
    static deviceLostSleepTime;
    synchronizeWithVerticalRetrace = true;
    depthStencilFormat;
    backBufferWidth = GraphicsDeviceManager.DefaultBackBufferWidth;
    backBufferHeight = GraphicsDeviceManager.DefaultBackBufferHeight;
    game;
    isReallyFullScreen;
    isDeviceDirty;
    inDeviceTransition;
    device;
    isFullScreen;
    graphicsProfile;
    backBufferFormat;
    allowMultiSampling;
    supportedOrientations;
    currentWindowOrientation;
    resizedBackBufferWidth;
    resizedBackBufferHeight;
    useResizedBackBuffer;
    deviceCreated;
    deviceResetting;
    deviceReset;
    deviceDisposing;
    beginDrawOk;
    get GraphicsProfile() {
        return this.graphicsProfile;
    }
    set GraphicsProfile(value) {
        this.graphicsProfile = value;
        this.isDeviceDirty = true;
    }
    get PreferredDepthStencilFormat() {
        return this.depthStencilFormat;
    }
    set PreferredDepthStencilFormat(value) {
        this.depthStencilFormat = value;
        this.isDeviceDirty = true;
    }
    get PreferredBackBufferFormat() {
        return this.backBufferFormat;
    }
    set PreferredBackBufferFormat(value) {
        this.backBufferFormat = value;
        this.isDeviceDirty = true;
    }
    get PreferredBackBufferWidth() {
        return this.backBufferWidth;
    }
    set PreferredBackBufferWidth(value) {
        if (value <= 0) {
        }
        this.backBufferWidth = value;
        this.useResizedBackBuffer = false;
        this.isDeviceDirty = true;
    }
    get PreferredBackBufferHeight() {
        return this.backBufferHeight;
    }
    set PreferredBackBufferHeight(value) {
        if (value <= 0) {
        }
        this.backBufferHeight = value;
        this.useResizedBackBuffer = false;
        this.isDeviceDirty = true;
    }
    get IsFullScreen() {
        return this.isFullScreen;
    }
    set IsFullScreen(value) {
        this.isFullScreen = value;
        this.isDeviceDirty = true;
    }
    constructor(game) {
        if (game == null) {
        }
        this.game = game;
    }
    ApplyChanges() {
        if (this.device != null && !this.isDeviceDirty) {
            return;
        }
        this.ChangeDevice(false);
    }
    ToggleFullScreen() {
        this.IsFullScreen = !this.IsFullScreen;
        this.ChangeDevice(false);
    }
    ChangeDevice(forceCreate) {
        if (this.game == null) {
        }
    }
}
//# sourceMappingURL=graphicsDeviceManager.js.map