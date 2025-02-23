let readlineSync = require('readline-sync');

let locationsCount = parseInt(readlineSync.question('Enter number of locations: '), 10);

for (let i = 0; i < locationsCount; i++) {
    let expectedAvgGold = parseFloat(readlineSync.question('Enter expected average gold per day: '));
    let daysCount = parseInt(readlineSync.question('Enter number of days: '), 10);

    let totalGold = 0;
    for (let j = 0; j < daysCount; j++) {
        let dailyGold = parseFloat(readlineSync.question('Enter gold mined for the day: '));
        totalGold += dailyGold;
    }

    let avgGoldPerDay = totalGold / daysCount;
    if (avgGoldPerDay >= expectedAvgGold) {
        console.log(`Good job! Average gold per day: ${avgGoldPerDay.toFixed(2)}.`);
    } else {
        let neededGold = (expectedAvgGold - avgGoldPerDay).toFixed(2);
        console.log(`You need ${neededGold} gold.`);
    }
}
