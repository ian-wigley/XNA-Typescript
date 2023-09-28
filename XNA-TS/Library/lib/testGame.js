import { Game } from "./game.js";
import { SpriteBatch } from "./spriteBatch.js";
import { GraphicsDeviceManager } from "./graphicsDeviceManager.js";
import { Color } from "./color.js";
export class TestGame extends Game {
    graphics;
    constructor() {
        super();
        this.graphics = new GraphicsDeviceManager(this);
        this.Content.RootDirectory = "Content";
    }
    Initialize() {
        super.Initialize(this);
    }
    LoadContent() {
        this.spriteBatch = new SpriteBatch();
    }
    Update(gameTime) {
        super.Update(gameTime);
    }
    Draw(gameTime) {
        this.GraphicsDevice.Clear(Color.CornflowerBlue);
    }
}
//# sourceMappingURL=testGame.js.map