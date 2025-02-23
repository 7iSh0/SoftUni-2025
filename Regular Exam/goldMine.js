function goldMine(input) {

    let index = 0;

    let locationsCount = Number(input[index]);
    index++;

    for (let i = 0; i < locationsCount; i++) {

        let expectedAvgGold = Number(input[index]);
        index++;

        let daysCount = Number(input[index]);
        index++;

        let totalGold = 0;

        for (let b = 0; b < daysCount; b++) {

            let dailyGold = Number(input[index]);
            index++;

            totalGold += dailyGold;
        }

        let avgGoldPerDay = totalGold / daysCount;

        if (avgGoldPerDay >= expectedAvgGold) {
            console.log(`Good job! Average gold per day: ${avgGoldPerDay.toFixed(2)}.`);
        } else {
            let neededGold = expectedAvgGold - avgGoldPerDay;
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
        }
    }
}

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);