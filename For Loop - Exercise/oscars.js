function oscars(input) {

    let actorName = String(input[0])
    let actorsPoints = Number(input[1]);

    for (i = 3; i <= input.length - 2; i += 2) {
        actor = input[i];
        givenPoints = i + 1;

        actorsPoints += actor.length * input[givenPoints] / 2;

        if (actorsPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorsPoints.toFixed(1)}!`);
            break;
        }
    }

    if (actorsPoints <= 1250.5) {
        let pointsNeeded = 1250.5 - actorsPoints;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock", "340", 5, "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);