$(document).ready(function () {

    // object that hold the random values

    var randomNumbersObject = {
        NumberToGuess: "",
        gem1: "",
        gem2: "",
        gem3: "",
        gem4: ""

    }
    // object to hold game stats

    var winLossObject = {
        wins: 0,
        losses: 0,
        score: 0

    }
    // randomly generate the 5 numbers needed to play this game

    function randomizer() {
        randomNumbersObject.NumberToGuess = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        randomNumbersObject.gem1 = Math.floor(Math.random() * 12 + 1);
        randomNumbersObject.gem2 = Math.floor(Math.random() * 12 + 1);
        randomNumbersObject.gem3 = Math.floor(Math.random() * 12 + 1);
        randomNumbersObject.gem4 = Math.floor(Math.random() * 12 + 1);

    }

    // all screen updates are in this function

    function screenUpdate() {
        $(".numberToGuess").text(randomNumbersObject.NumberToGuess);
        $("#wins").text(winLossObject.wins);
        $("#losses").text(winLossObject.losses);
        $("#score").text(winLossObject.score)
    }

    // check if the player has won or lossed then reset game

    function checkWinLoss() {
        if (winLossObject.score === randomNumbersObject.NumberToGuess) {
            winLossObject.wins++
            $("#winLossStatus").text("You got it!")
            reset()
        } else if (winLossObject.score > randomNumbersObject.NumberToGuess) {
            winLossObject.losses++
            $("#winLossStatus").text("Try again!")
            reset()

        }
    }
    // reset game function

    function reset() {
        randomizer()
        winLossObject.score = 0
        screenUpdate()
    }


    // play game with on click function

    $(".gems").on("click", function () {
        $("#winLossStatus").text("")
        if ($(this).hasClass("gem1")) {
            winLossObject.score = winLossObject.score + randomNumbersObject.gem1
        } else if ($(this).hasClass("gem2")) {
            winLossObject.score = winLossObject.score + randomNumbersObject.gem2
        } else if ($(this).hasClass("gem3")) {
            winLossObject.score = winLossObject.score + randomNumbersObject.gem3
        } else if ($(this).hasClass("gem4")) {
            winLossObject.score = winLossObject.score + randomNumbersObject.gem4
        }
        screenUpdate()
        checkWinLoss()

    })

    // game start on page load

    randomizer()
    screenUpdate()

})