class Game {
    constructor() {

        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "./images/car.png");
        this.height = "600px";
        this.width = "500px";
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false
    }

    start() {

        this.gameScreen.style.height = this.height
        this.gameScreen.style.width = this.width
        this.startScreen.style.display = "none"
        this.startScreen.style.height = "0px"
        this.gameScreen.style.display = "block"
        this.gameLoop()

    }

    gameLoop() {

        if (this.gameIsOver) {
            return
        }

        this.update()



        window.requestAnimationFrame(() => this.gameLoop())

    }

    update() {

        this.player.move()

    }

    // code to be added
}