function lunchBreak(nameSeries, episodeTime, restTime) {

    let timeForLunch = restTime * 1/8;
    let timeForRelax = restTime * 1/4;
    let timeLeft = restTime - timeForLunch - timeForRelax;

    if (timeLeft >= episodeTime) {
        let freeTime = timeLeft - episodeTime;
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        let timeNeed = episodeTime - timeLeft;
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(timeNeed)} more minutes.`);
    }
}

lunchBreak("Game of Thrones", 60, 96);