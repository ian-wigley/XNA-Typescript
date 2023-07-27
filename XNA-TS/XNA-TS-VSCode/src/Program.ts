namespace TestGame {

    export class Program {

        constructor() {
            let game: TestGame = new TestGame();
            game.RunGame(true);
            setInterval(() => game.Tick(), 13);
        }
    }
}

window.onload = () => {
    let main = new TestGame.Program();
}