module TestGame {

    export enum Color {
        Black = "#000000",
        CornflowerBlue = "#6495ED",
        Red = "#FF0000",
        White = "#FFFFFF",
        Yellow = "#FFF000"
    }

    export class TestGame extends Game {
        private graphics;
        private spriteBatch: SpriteBatch;
        private TargetFrameRate: number = 60;
        private BackBufferWidth: number = 1280;
        private BackBufferHeight: number = 720;
        private m_ctrl: Controls = new Controls();

        constructor() {
            super();
            this.LoadContent();
        }

        protected LoadContent(): void {
            this.spriteBatch = new SpriteBatch();
            this.AddHitListener(this.spriteBatch.Canvas);
        }

        private AddHitListener(element: HTMLElement): void {
            window.addEventListener("keydown", (event) => {
                this.onKeyPress(event);
                return null;
            });

            window.addEventListener("keyup", (event) => {
                this.onKeyUp(event);
                return null;
            });
        }

        private onKeyPress(event: KeyboardEvent) {
            event.preventDefault();
            this.onKeyboardPress(event, false);
        }

        private onKeyUp(event: KeyboardEvent) {
            event.preventDefault();
            this.onKeyboardRelease(event, false);
        }

        private onKeyboardPress(event: Event, touchDevice: boolean) {
            switch (((<number>(<KeyboardEvent>event).keyCode | 0))) {
                case 17:
                    this.m_ctrl.lcontrolPressed = true;
                    break;
                case 37:
                    this.m_ctrl.left = true;
                    break;
                case 38:
                    this.m_ctrl.up = true;
                    break;
                case 39:
                    this.m_ctrl.right = true;
                    break;
                case 40:
                    this.m_ctrl.down = true;
                    break;
                case 13:
                    this.m_ctrl.enterPressed = true;
                    this.m_ctrl.returnPressed = true;
                    break;
                case 32:
                    this.m_ctrl.spacePressed = true;
                    break;
            }
        }

        private onKeyboardRelease(event: Event, touchDevice: boolean) {
            switch (((<number>(<KeyboardEvent>event).keyCode | 0))) {
                case 17:
                    this.m_ctrl.lcontrolPressed = false;
                    break;
                case 37:
                    this.m_ctrl.left = false;
                    break;
                case 38:
                    this.m_ctrl.up = false;
                    break;
                case 39:
                    this.m_ctrl.right = false;
                    break;
                case 40:
                    this.m_ctrl.down = false;
                    break;
                case 13:
                    this.m_ctrl.enterPressed = false;
                    this.m_ctrl.returnPressed = false;
                    break;
                case 32:
                    this.m_ctrl.spacePressed = false;
                    break;
            }
        }

        public Run(gameTime): void {
            this.Draw(gameTime);
        }

        protected Update(gameTime: GameTime): void {
            super.Update(gameTime);
        }

        protected Draw(gameTime: GameTime): void {
        }
    }
}