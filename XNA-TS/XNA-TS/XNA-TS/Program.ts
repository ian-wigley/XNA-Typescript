module TestGame {

    export class Program {

        constructor() {
            var game: TestGame = new TestGame();
            game.RunGame(true);
            setInterval(() => game.Tick(), 13);
        }
    }
}

window.onload = () => {
    var main = new TestGame.Program();
}