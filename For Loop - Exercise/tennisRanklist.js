function tennisRanklist(input) {

    let tournamentCount = Number(input[0]);
    let startPoints = Number(input[1]);

    let points = 0;
    let tournamentWon = 0;

    for (let i = 2; i <= tournamentCount + 2; i++) {
        let result = input[i];

        if (result === "W") {
            points += 2000;
            tournamentWon++;
        } else if (result === "F") {
            points += 1200;
        } else if (result === "SF") {
            points += 720;
        }
    }

    console.log(`Final points: ${startPoints + points}`);

    let avgPoints = Math.floor(points / tournamentCount);
    console.log(`Average points: ${avgPoints}`);

    let tournamentWonPercent = (tournamentWon / tournamentCount) * 100;
    console.log(`${tournamentWonPercent.toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);