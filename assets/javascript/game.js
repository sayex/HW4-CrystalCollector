$(document).ready(function () {

    // object that holds the random values

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


    // random arugment fucntion that the randomizer passes its numbers through

    function assignRandom(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // randomly generate the 5 numbers needed to play this game

    function randomizer() {
        randomNumbersObject.NumberToGuess = assignRandom(120, 19)
        randomNumbersObject.gem1 = assignRandom(1, 12)
        randomNumbersObject.gem2 = assignRandom(1, 12)
        randomNumbersObject.gem3 = assignRandom(1, 12)
        randomNumbersObject.gem4 = assignRandom(1, 12)

    }

    // screen updates

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
            $("#winLossStatus").html("You got it!")
            reset()
        } else if (winLossObject.score > randomNumbersObject.NumberToGuess) {
            winLossObject.losses++
            $("#winLossStatus").html("Try again!")
            reset()

        }
    }
    // reset game function

    function reset() {
        winLossObject.score = 0
        randomizer()
        screenUpdate()
    }


    // play game listener with click 

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