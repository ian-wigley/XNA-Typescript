import { Game } from "../lib/game.js";
import { GraphicsDeviceManager } from "../lib/graphicsDeviceManager.js";
import { SpriteBatch } from "../lib/spriteBatch.js";
import { Color } from "../lib/color.js";

/// <summary>
/// This is the main type for your game
/// </summary>
export class TestGame extends Game {
    constructor() {
        super();
        this.graphics = new GraphicsDeviceManager(this);
        this.content.RootDirectory = "Content";
    }
    /// <summary>
    /// Allows the game to perform any initialization it needs to before starting to run.
    /// This is where it can query for any required services and load any non-graphic
    /// related content.  Calling base.Initialize will enumerate through any components
    /// and initialize them as well.
    /// </summary>
    Initialize() {
        // TODO: Add your initialization logic here
        super.Initialize(this);
    }
    /// <summary>
    /// LoadContent will be called once per game and is the place to load
    /// all of your content.
    /// </summary>
    LoadContent() {
        // Create a new SpriteBatch, which can be used to draw textures.
        this.spriteBatch = new SpriteBatch(this.GraphicsDevice);
        // TODO: use this.Content to load your game content here
    }
    /// <summary>
    /// Allows the game to run logic such as updating the world,
    /// checking for collisions, gathering input, and playing audio.
    /// </summary>
    /// <param name="gameTime">Provides a snapshot of timing values.</param>
    Update(gameTime) {
        // TODO: Add your update logic here
        super.Update(gameTime);
    }
    /// <summary>
    /// This is called when the game should draw itself.
    /// </summary>
    /// <param name="gameTime">Provides a snapshot of timing values.</param>
    Draw(gameTime) {
        this.GraphicsDevice.Clear(Color.CornflowerBlue);
    }
}
