class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.medium = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let medium = this.max - Math.floor((this.max - this.min) / 2);
        this.medium = medium
        return this.medium;
    }

    lower() {
        this.max = this.medium;
        let game = new GuessingGame;
        game.guess();
    }

    greater() {
        this.min = this.medium;
        let game = new GuessingGame;
        game.guess();
    }
}

module.exports = GuessingGame;
