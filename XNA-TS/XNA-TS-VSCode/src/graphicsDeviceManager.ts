import { Game } from "./game.js";
import { TimeSpan } from "./timeSpan.js";

export class GraphicsDeviceManager {

    public static DefaultBackBufferWidth: number = 800;
    public static DefaultBackBufferHeight: number = 480;
    private static deviceLostSleepTime: TimeSpan;/* = TimeSpan.FromMilliseconds(50.0);*/
    private synchronizeWithVerticalRetrace: boolean = true;
    private depthStencilFormat;/*: DepthFormat = DepthFormat.Depth24;*/
    private backBufferWidth: number = GraphicsDeviceManager.DefaultBackBufferWidth;
    private backBufferHeight: number = GraphicsDeviceManager.DefaultBackBufferHeight;
    private game: Game;
    private isReallyFullScreen: boolean;
    private isDeviceDirty: boolean;
    private inDeviceTransition: boolean;
    private device;/*: GraphicsDevice;*/
    private isFullScreen: boolean;
    private graphicsProfile;/*: GraphicsProfile;*/
    private backBufferFormat;/*: SurfaceFormat;*/
    private allowMultiSampling: boolean;
    private supportedOrientations;/*: DisplayOrientation;*/
    private currentWindowOrientation;/*: DisplayOrientation;*/
    private resizedBackBufferWidth: number;
    private resizedBackBufferHeight: number;
    private useResizedBackBuffer: boolean;
    private deviceCreated;/*: EventHandler<EventArgs>;*/
    private deviceResetting;/*: EventHandler<EventArgs>;*/
    private deviceReset;/*: EventHandler<EventArgs>;*/
    private deviceDisposing;/*: EventHandler<EventArgs>;*/
    private beginDrawOk: boolean;

    public get GraphicsProfile()/*: GraphicsProfile*/ {
        return this.graphicsProfile;
    }

    public set GraphicsProfile(value/*: GraphicsProfile*/) {
        this.graphicsProfile = value;
        this.isDeviceDirty = true;
    }

    public get PreferredDepthStencilFormat()/*: DepthFormat*/ {
        return this.depthStencilFormat;
    }

    public set PreferredDepthStencilFormat(value/*: DepthFormat*/) {
        this.depthStencilFormat = value;
        this.isDeviceDirty = true;
    }

    public get PreferredBackBufferFormat()/*: SurfaceFormat*/ {
        return this.backBufferFormat;
    }

    public set PreferredBackBufferFormat(value/*: SurfaceFormat*/) {
        this.backBufferFormat = value;
        this.isDeviceDirty = true;
    }

    public get PreferredBackBufferWidth(): number {
        return this.backBufferWidth;
    }

    public set PreferredBackBufferWidth(value: number) {
        if (value <= 0) {
            //throw new ArgumentOutOfRangeException(nameof(value), Resources.BackBufferDimMustBePositive);
        }
        this.backBufferWidth = value;
        this.useResizedBackBuffer = false;
        this.isDeviceDirty = true;
    }

    public get PreferredBackBufferHeight(): number {
        return this.backBufferHeight;
    }

    public set PreferredBackBufferHeight(value: number) {
        if (value <= 0) {
            //throw new ArgumentOutOfRangeException(nameof(value), Resources.BackBufferDimMustBePositive);
        }
        this.backBufferHeight = value;
        this.useResizedBackBuffer = false;
        this.isDeviceDirty = true;
    }

    public get IsFullScreen(): boolean {
        return this.isFullScreen;
    }

    public set IsFullScreen(value: boolean) {
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

    constructor(game: Game) {
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

    public ApplyChanges(): void {
        if (this.device != null && !this.isDeviceDirty) {
            return;
        }
        this.ChangeDevice(false);
    }

    public ToggleFullScreen(): void {
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

    private ChangeDevice(forceCreate: boolean): void {
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

    //private MassagePresentParameters(pp: PresentationParameters): void {
    //    var flag1: boolean = pp.BackBufferWidth == 0;
    //    var flag2: boolean = pp.BackBufferHeight == 0;
    //    if (pp.IsFullScreen)
    //        return
    //    var hWnd: IntPtr = pp.DeviceWindowHandle;
    //    if (hWnd == IntPtr.Zero) {
    //        if (this.game == null)
    //            throw new InvalidOperationException(Resources.GraphicsComponentNotAttachedToGame);
    //        hWnd = this.game.Window.Handle;
    //    }
    //    var rect: NativeMethods.RECT;
    //    NativeMethods.GetClientRect(hWnd, rect);
    //    if (flag1 && rect.Right == 0)
    //        pp.BackBufferWidth = 1;
    //    if (!flag2 || rect.Bottom != 0)
    //        return
    //    pp.BackBufferHeight = 1;
    //}

    //private static ConfigureTouchInput(pp: PresentationParameters): void {
    //    TouchPanel.DisplayWidth = pp.BackBufferWidth;
    //    TouchPanel.DisplayHeight = pp.BackBufferHeight;
    //    TouchPanel.DisplayOrientation = pp.DisplayOrientation;
    //}

    //protected FindBestDevice(anySuitableDevice: boolean): GraphicsDeviceInformation {
    //    return this.FindBestPlatformDevice(anySuitableDevice);
    //}

    //protected CanResetDevice(newDeviceInfo: GraphicsDeviceInformation): boolean {
    //    return this.device.GraphicsProfile == newDeviceInfo.GraphicsProfile;
    //}

    //protected RankDevices(foundDevices: List<GraphicsDeviceInformation>): void {
    //    this.RankDevicesPlatform(foundDevices);
    //}

    //private HandleDisposing(sender: Object, e: EventArgs): void {
    //    this.OnDeviceDisposing(<Object>this, EventArgs.Empty);
    //}

    //private HandleDeviceLost(sender: Object, e: EventArgs): void {
    //}

    //private HandleDeviceReset(sender: Object, e: EventArgs): void {
    //    this.OnDeviceReset(<Object>this, EventArgs.Empty);
    //}

    //private HandleDeviceResetting(sender: Object, e: EventArgs): void {
    //    this.OnDeviceResetting(<Object>this, EventArgs.Empty);
    //}

    //protected OnDeviceCreated(sender: Object, args: EventArgs): void {
    //    if (this.deviceCreated == null)
    //        return
    //    this.deviceCreated(sender, args);
    //}

    //protected OnDeviceDisposing(sender: Object, args: EventArgs): void {
    //    if (this.deviceDisposing == null)
    //        return
    //    this.deviceDisposing(sender, args);
    //}

    //protected OnDeviceReset(sender: Object, args: EventArgs): void {
    //    if (this.deviceReset == null)
    //        return
    //    this.deviceReset(sender, args);
    //}

    //protected OnDeviceResetting(sender: Object, args: EventArgs): void {
    //    if (this.deviceResetting == null)
    //        return
    //    this.deviceResetting(sender, args);
    //}

    //protected Dispose(disposing: boolean): void {
    //    if (!disposing)
    //        return
    //    if (this.game != null) {
    //        if (this.game.Services.GetService(/*typeof*/IGraphicsDeviceService) == this)
    //            this.game.Services.RemoveService(/*typeof*/IGraphicsDeviceService);
    //        this.game.Window.ClientSizeChanged -= new EventHandler<EventArgs>(this.GameWindowClientSizeChanged);
    //        this.game.Window.ScreenDeviceNameChanged -= new EventHandler<EventArgs>(this.GameWindowScreenDeviceNameChanged);
    //        this.game.Window.OrientationChanged -= new EventHandler<EventArgs>(this.GameWindowOrientationChanged);
    //    }
    //    if (this.device != null) {
    //        this.device.Dispose();
    //        this.device = <GraphicsDevice>null;
    //    }
    //    if (this.Disposed == null)
    //        return
    //    this.Disposed(<Object>this, EventArgs.Empty);
    //}

    //protected OnPreparingDeviceSettings(sender: Object, args: PreparingDeviceSettingsEventArgs): void {
    //    if (this.PreparingDeviceSettings == null)
    //        return
    //    this.PreparingDeviceSettings(sender, args);
    //}

    //Dispose(): void {
    //    this.Dispose(true);
    //    GC.SuppressFinalize(<Object>this);
    //}

    //CreateDevice(): void {
    //    this.ChangeDevice(true);
    //}

    //BeginDraw(): boolean {
    //    if (!this.EnsureDevice())
    //        return false;
    //    this.beginDrawOk = true;
    //    return true;
    //}

    //EndDraw(): void {
    //    if (!this.beginDrawOk)
    //        return
    //    if (this.device == null)
    //        return
    //    try {
    //        this.device.Present();
    //    }
    //    catch (__ex__) {
    //        var ex = __ex__; if (ex instanceof DeviceLostException) {
    //        }
    //        var ex = __ex__; if (ex instanceof DeviceNotResetException) {
    //        }
    //    }
    //}

    //private ReadDefaultGraphicsProfile(): GraphicsProfile {
    //    var manifestResourceStream: Stream = this.game.GetType().Assembly.GetManifestResourceStream("Microsoft.Xna.Framework.RuntimeProfile");
    //    if (manifestResourceStream != null) {
    //        var streamReader: StreamReader = new StreamReader(manifestResourceStream)
    //        try {
    //            var str: string = streamReader.ReadLine();
    //            if (str != null)
    //                return str.EndsWith("Reach") || !str.EndsWith("HiDef") ? GraphicsProfile.Reach : GraphicsProfile.HiDef;
    //        }
    //        finally {
    //            if (streamReader != null) streamReader.Dispose();
    //        }
    //    }
    //    return GraphicsProfile.Reach;
    //}

    //private RankDevicesPlatform(foundDevices: List<GraphicsDeviceInformation>): void {
    //    foundDevices.Sort(<IComparer<GraphicsDeviceInformation>>new GraphicsDeviceInformationComparer(this));
    //}

    //private FindBestPlatformDevice(anySuitableDevice: boolean): GraphicsDeviceInformation {
    //    var foundDevices: List<GraphicsDeviceInformation> = new List<GraphicsDeviceInformation>();
    //    this.AddDevices(anySuitableDevice, foundDevices);
    //    if (foundDevices.Count == 0 && this.PreferMultiSampling) {
    //        this.PreferMultiSampling = false;
    //        this.AddDevices(anySuitableDevice, foundDevices);
    //    }
    //    if (foundDevices.Count == 0)
    //        throw new NoSuitableGraphicsDeviceException(string.Format(<IFormatProvider>CultureInfo.CurrentCulture, Resources.NoCompatibleDevices, <Object>this.graphicsProfile), <Exception>null);
    //    this.RankDevices(foundDevices);
    //    if (foundDevices.Count == 0)
    //        throw new NoSuitableGraphicsDeviceException(Resources.NoCompatibleDevicesAfterRanking, <Exception>null);
    //    return foundDevices[0];
    //}

    //private AddDevices(anySuitableDevice: boolean, foundDevices: List<GraphicsDeviceInformation>): void {
    //    var handle: IntPtr = this.game.Window.Handle;
    //    GraphicsAdapter.Adapters.forEach(function (adapter) {
    //        if (!anySuitableDevice) {
    //            if (!this.IsWindowOnAdapter(handle, adapter))
    //                continue;
    //        }
    //        try {
    //            if (adapter.IsProfileSupported(this.graphicsProfile)) {
    //                var baseDeviceInfo: GraphicsDeviceInformation = new GraphicsDeviceInformation();
    //                baseDeviceInfo.Adapter = adapter;
    //                baseDeviceInfo.GraphicsProfile = this.graphicsProfile;
    //                baseDeviceInfo.PresentationParameters.DeviceWindowHandle = handle;
    //                baseDeviceInfo.PresentationParameters.MultiSampleCount = 0;
    //                baseDeviceInfo.PresentationParameters.IsFullScreen = this.IsFullScreen;
    //                baseDeviceInfo.PresentationParameters.PresentationInterval = this.SynchronizeWithVerticalRetrace ? PresentInterval.One : PresentInterval.Immediate;
    //                this.AddDevices(adapter, adapter.CurrentDisplayMode, baseDeviceInfo, foundDevices);
    //                if (this.isFullScreen) {
    //                    adapter.SupportedDisplayModes.forEach(function (supportedDisplayMode) {
    //                        if (supportedDisplayMode.Width >= 640 && supportedDisplayMode.Height >= 480)
    //                            this.AddDevices(adapter, supportedDisplayMode, baseDeviceInfo, foundDevices);
    //                    });
    //                }
    //            }
    //        }
    //        catch (ex) {
    //        }
    //    });
    //}

    //    private AddDevices(adapter: GraphicsAdapter, mode: DisplayMode, baseDeviceInfo: GraphicsDeviceInformation, foundDevices: List<GraphicsDeviceInformation>): void {
    //        var deviceInformation: GraphicsDeviceInformation = baseDeviceInfo.Clone();
    //        if (this.IsFullScreen) {
    //            deviceInformation.PresentationParameters.BackBufferWidth = mode.Width;
    //            deviceInformation.PresentationParameters.BackBufferHeight = mode.Height;
    //        }
    //        else if (this.useResizedBackBuffer) {
    //            deviceInformation.PresentationParameters.BackBufferWidth = this.resizedBackBufferWidth;
    //            deviceInformation.PresentationParameters.BackBufferHeight = this.resizedBackBufferHeight;
    //        }
    //        else {
    //            deviceInformation.PresentationParameters.BackBufferWidth = this.PreferredBackBufferWidth;
    //            deviceInformation.PresentationParameters.BackBufferHeight = this.PreferredBackBufferHeight;
    //        }
    //        var selectedFormat: SurfaceFormat;
    //        var selectedDepthFormat: DepthFormat;
    //        var selectedMultiSampleCount: number;
    //        adapter.QueryBackBufferFormat(deviceInformation.GraphicsProfile, mode.Format, this.PreferredDepthStencilFormat, this.PreferMultiSampling ? 16 : 0, selectedFormat, selectedDepthFormat, selectedMultiSampleCount);
    //        deviceInformation.PresentationParameters.BackBufferFormat = selectedFormat;
    //        deviceInformation.PresentationParameters.DepthStencilFormat = selectedDepthFormat;
    //        deviceInformation.PresentationParameters.MultiSampleCount = selectedMultiSampleCount;
    //        if (foundDevices.Contains(deviceInformation))
    //            return
    //        foundDevices.Add(deviceInformation);
    //    }

    //    private IsWindowOnAdapter(windowHandle: IntPtr, adapter: GraphicsAdapter): boolean {
    //        return WindowsGameWindow.ScreenFromAdapter(adapter) == WindowsGameWindow.ScreenFromHandle(windowHandle);
    //    }

    //    private EnsureDevicePlatform(): bool {
    //        if (this.isReallyFullScreen && !this.game.IsActiveIgnoringGuide)
    //            return false;
    //        switch (this.device.GraphicsDeviceStatus) {
    //            case GraphicsDeviceStatus.Lost:
    //                Thread.Sleep((int) GraphicsDeviceManager.deviceLostSleepTime.TotalMilliseconds);
    //                return false;
    //            case GraphicsDeviceStatus.NotReset:
    //                Thread.Sleep((int) GraphicsDeviceManager.deviceLostSleepTime.TotalMilliseconds);
    //                try {
    //                    this.ChangeDevice(false);
    //                    break;
    //                }
    //                catch (DeviceLostException ex)
    //                {
    //                    return false;
    //                }
    //          catch
    //                {
    //                    this.ChangeDevice(true);
    //                    break;
    //                }
    //        }
    //        return true;
    //    }

    //    private ValidateGraphicsDeviceInformation(GraphicsDeviceInformation devInfo): void {
    //        GraphicsAdapter adapter = devInfo.Adapter;
    //        PresentationParameters presentationParameters = devInfo.PresentationParameters;
    //        if (!presentationParameters.IsFullScreen)
    //            return;
    //        if (presentationParameters.BackBufferWidth == 0 || presentationParameters.BackBufferHeight == 0)
    //            throw new ArgumentException(Resources.ValidateBackBufferDimsFullScreen);
    //        bool flag = true;
    //        DisplayMode currentDisplayMode = adapter.CurrentDisplayMode;
    //        if (currentDisplayMode.Format != presentationParameters.BackBufferFormat && currentDisplayMode.Width != presentationParameters.BackBufferWidth && currentDisplayMode.Height != presentationParameters.BackBufferHeight) {
    //            flag = false;
    //            foreach(DisplayMode displayMode in adapter.SupportedDisplayModes[presentationParameters.BackBufferFormat])
    //            {
    //                if (displayMode.Width == presentationParameters.BackBufferWidth && displayMode.Height == presentationParameters.BackBufferHeight) {
    //                    flag = true;
    //                    break;
    //                }
    //            }
    //        }
    //        if (!flag)
    //            throw new ArgumentException(Resources.ValidateBackBufferDimsModeFullScreen);
    //    }
    //}
}