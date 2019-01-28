module TestGame {

    export class TestGame extends Game {
        private graphics;
        private TargetFrameRate: number = 60;
        private BackBufferWidth: number = 1280;
        private BackBufferHeight: number = 720;

        constructor() {
            super();
            this.LoadContent();
        }

        protected LoadContent(): void {
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