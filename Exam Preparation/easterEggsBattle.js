function easterEggsBattle(input) {

    let index = 0;

    let playerOne = Number(input[index]);
    index++;

    let playerTwo = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let isOutOfEggs = false;

    while (command !== "End") {
        let winner = command;

        switch(winner) {
            case "one": playerTwo--; break;
            case "two": playerOne--; break;
        }

        if (playerOne === 0) {
            isOutOfEggs = true;
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            break;
        } else if (playerTwo === 0) {
            isOutOfEggs = true
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (!isOutOfEggs) {
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);
    }
}

easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End"]);
easterEggsBattle(["2", "6", "one", "two", "two"]);