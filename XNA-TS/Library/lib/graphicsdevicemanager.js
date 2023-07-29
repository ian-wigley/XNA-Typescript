export class GraphicsDeviceManager {
    get GraphicsProfile() {
        return this.graphicsProfile;
    }
    set GraphicsProfile(value /*: GraphicsProfile*/) {
        this.graphicsProfile = value;
        this.isDeviceDirty = true;
    }
    get PreferredDepthStencilFormat() {
        return this.depthStencilFormat;
    }
    set PreferredDepthStencilFormat(value /*: DepthFormat*/) {
        this.depthStencilFormat = value;
        this.isDeviceDirty = true;
    }
    get PreferredBackBufferFormat() {
        return this.backBufferFormat;
    }
    set PreferredBackBufferFormat(value /*: SurfaceFormat*/) {
        this.backBufferFormat = value;
        this.isDeviceDirty = true;
    }
    get PreferredBackBufferWidth() {
        return this.backBufferWidth;
    }
    set PreferredBackBufferWidth(value) {
        if (value <= 0) {
            //throw new ArgumentOutOfRangeException(nameof(value), Resources.BackBufferDimMustBePositive);
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
            //throw new ArgumentOutOfRangeException(nameof(value), Resources.BackBufferDimMustBePositive);
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
    //    public get SynchronizeWithVerticalRetrace(): boolean {
    //        return this.synchronizeWithVerticalRetrace;
    //    }
    //    public set SynchronizeWithVerticalRetrace(value: boolean) {
    //        this.synchronizeWithVerticalRetrace = value;
    //        this.isDeviceDirty = true;
    //    }
    //    public get PreferMultiSampling(): boolean {
    //        return this.allowMultiSampling;
    //    }
    //    public set PreferMultiSampling(value: boolean) {
    //        this.allowMultiSampling = value;
    //        this.isDeviceDirty = true;
    //    }
    //    public get SupportedOrientations(): DisplayOrientation {
    //        return this.supportedOrientations;
    //    }
    //    public set SupportedOrientations(value: DisplayOrientation) {
    //        this.supportedOrientations = value;
    //        this.isDeviceDirty = true;
    //    }
    //    public get GraphicsDevice(): GraphicsDevice {
    //        return this.device;
    //    }
    //    public event EventHandler<EventArgs> DeviceCreated
    //    {
    //    add
    //    {
    //        this.deviceCreated += value;
    //    }
    //    remove
    //    {
    //        this.deviceCreated -= value;
    //    }
    //}
    //public event EventHandler < EventArgs > DeviceResetting
    //{
    //    add
    //    {
    //        this.deviceResetting += value;
    //    }
    //    remove
    //    {
    //        this.deviceResetting -= value;
    //    }
    //}
    //public event EventHandler < EventArgs > DeviceReset
    //{
    //    add
    //    {
    //        this.deviceReset += value;
    //    }
    //    remove
    //    {
    //        this.deviceReset -= value;
    //    }
    //}
    //public event EventHandler < EventArgs > DeviceDisposing
    //{
    //    add
    //    {
    //        this.deviceDisposing += value;
    //    }
    //    remove
    //    {
    //        this.deviceDisposing -= value;
    //    }
    //}
    //public event EventHandler < PreparingDeviceSettingsEventArgs > PreparingDeviceSettings;
    //public event EventHandler < EventArgs > Disposed;
    constructor(game) {
        this.synchronizeWithVerticalRetrace = true;
        this.backBufferWidth = GraphicsDeviceManager.DefaultBackBufferWidth;
        this.backBufferHeight = GraphicsDeviceManager.DefaultBackBufferHeight;
        if (game == null) {
            //    throw new ArgumentNullException(nameof(game), Resources.GameCannotBeNull);
        }
        this.game = game;
        //if (game.Services.GetService(/*typeof*/IGraphicsDeviceManager) != null) {
        //    throw new ArgumentException(Resources.GraphicsDeviceManagerAlreadyPresent);
        //}
        //game.Services.AddService(/*typeof*/IGraphicsDeviceManager, <Object>this);
        //game.Services.AddService(/*typeof*/IGraphicsDeviceService, <Object>this);
        //game.Window.ClientSizeChanged += new EventHandler<EventArgs>(this.GameWindowClientSizeChanged);
        //game.Window.ScreenDeviceNameChanged += new EventHandler<EventArgs>(this.GameWindowScreenDeviceNameChanged);
        //game.Window.OrientationChanged += new EventHandler<EventArgs>(this.GameWindowOrientationChanged);
        //this.graphicsProfile = this.ReadDefaultGraphicsProfile();
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
    //private GameWindowScreenDeviceNameChanged(sender: Object, e: EventArgs): void {
    //    if (this.inDeviceTransition)
    //        return
    //    this.ChangeDevice(false);
    //}
    //private GameWindowClientSizeChanged(sender: Object, e: EventArgs): void {
    //    if (this.inDeviceTransition || this.game.Window.ClientBounds.Height == 0 && this.game.Window.ClientBounds.Width == 0)
    //        return
    //    this.resizedBackBufferWidth = this.game.Window.ClientBounds.Width;
    //    this.resizedBackBufferHeight = this.game.Window.ClientBounds.Height;
    //    this.useResizedBackBuffer = true;
    //    this.ChangeDevice(false);
    //}
    //private GameWindowOrientationChanged(sender: Object, e: EventArgs): void {
    //    if (this.inDeviceTransition || this.game.Window.ClientBounds.Height == 0 && this.game.Window.ClientBounds.Width == 0 || this.game.Window.CurrentOrientation == this.currentWindowOrientation)
    //        return
    //    this.ChangeDevice(false);
    //}
    //private EnsureDevice(): boolean {
    //    if (this.device == null)
    //        return false;
    //    return this.EnsureDevicePlatform();
    //}
    //private CreateDevice(newInfo: GraphicsDeviceInformation): void {
    //    if (this.device != null) {
    //        this.device.Dispose();
    //        this.device = <GraphicsDevice>null;
    //    }
    //    this.OnPreparingDeviceSettings(<Object>this, new PreparingDeviceSettingsEventArgs(newInfo));
    //    this.MassagePresentParameters(newInfo.PresentationParameters);
    //    try {
    //        this.ValidateGraphicsDeviceInformation(newInfo);
    //        this.device = new GraphicsDevice(newInfo.Adapter, newInfo.GraphicsProfile, newInfo.PresentationParameters);
    //        this.device.DeviceResetting += new EventHandler<EventArgs>(this.HandleDeviceResetting);
    //        this.device.DeviceReset += new EventHandler<EventArgs>(this.HandleDeviceReset);
    //        this.device.DeviceLost += new EventHandler<EventArgs>(this.HandleDeviceLost);
    //        this.device.Disposing += new EventHandler<EventArgs>(this.HandleDisposing);
    //    }
    //    catch (__ex__) {
    //        var ex = __ex__; if (ex instanceof NoSuitableGraphicsDeviceException) {
    //            throw ex;
    //        }
    //        var ex = __ex__; if (ex instanceof ArgumentException) {
    //            throw new NoSuitableGraphicsDeviceException(Resources.Direct3DInvalidCreateParameters, <Exception>ex);
    //        }
    //        var ex = __ex__; if (ex instanceof Exception) {
    //            throw new NoSuitableGraphicsDeviceException(Resources.Direct3DCreateError, ex);
    //        }
    //    }
    //    GraphicsDeviceManager.ConfigureTouchInput(newInfo.PresentationParameters);
    //    this.OnDeviceCreated(<Object>this, EventArgs.Empty);
    //}
    ChangeDevice(forceCreate) {
        if (this.game == null) {
            //        throw new InvalidOperationException(Resources.GraphicsComponentNotAttachedToGame);
        }
        //    this.inDeviceTransition = true;
        //    var screenDeviceName: string = this.game.Window.ScreenDeviceName;
        //    var clientWidth: number = this.game.Window.ClientBounds.Width;
        //    var clientHeight: number = this.game.Window.ClientBounds.Height;
        //    var flag1: boolean = false;
        //    try {
        //        this.game.Window.SetSupportedOrientations(Helpers.ChooseOrientation(this.supportedOrientations, this.PreferredBackBufferWidth, this.PreferredBackBufferHeight, true));
        //        var bestDevice: GraphicsDeviceInformation = this.FindBestDevice(forceCreate);
        //        this.game.Window.BeginScreenDeviceChange(bestDevice.PresentationParameters.IsFullScreen);
        //        flag1 = true;
        //        var flag2: boolean = true;
        //        if (!forceCreate && this.device != null) {
        //            this.OnPreparingDeviceSettings(<Object>this, new PreparingDeviceSettingsEventArgs(bestDevice));
        //            if (this.CanResetDevice(bestDevice)) {
        //                try {
        //                    var deviceInformation: GraphicsDeviceInformation = bestDevice.Clone();
        //                    this.MassagePresentParameters(bestDevice.PresentationParameters);
        //                    this.ValidateGraphicsDeviceInformation(bestDevice);
        //                    this.device.Reset(deviceInformation.PresentationParameters, deviceInformation.Adapter);
        //                    GraphicsDeviceManager.ConfigureTouchInput(deviceInformation.PresentationParameters);
        //                    flag2 = false;
        //                }
        //                catch (err) {
        //                }
        //            }
        //        }
        //        if (flag2)
        //            this.CreateDevice(bestDevice);
        //        var presentationParameters: PresentationParameters = this.device.PresentationParameters;
        //        screenDeviceName = this.device.Adapter.DeviceName;
        //        this.isReallyFullScreen = presentationParameters.IsFullScreen;
        //        if (presentationParameters.BackBufferWidth != 0)
        //            clientWidth = presentationParameters.BackBufferWidth;
        //        if (presentationParameters.BackBufferHeight != 0)
        //            clientHeight = presentationParameters.BackBufferHeight;
        //        this.isDeviceDirty = false;
        //    }
        //    finally {
        //        if (flag1)
        //            this.game.Window.EndScreenDeviceChange(screenDeviceName, clientWidth, clientHeight);
        //        this.currentWindowOrientation = this.game.Window.CurrentOrientation;
        //        this.inDeviceTransition = false;
        //    }
    }
}
GraphicsDeviceManager.DefaultBackBufferWidth = 800;
GraphicsDeviceManager.DefaultBackBufferHeight = 480;
