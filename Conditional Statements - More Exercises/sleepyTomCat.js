function sleepyTomCat(holiday) {

    let year = 365;
    let tomGame = 30000;
    let workingDaysPlayMinutes = 63;
    let holidaysPlayMinutes = 127;
    let workingDays = year - holiday;
    let realTimeForPlayMinutes = workingDays * workingDaysPlayMinutes + holiday * holidaysPlayMinutes;
    let differenceNorm = Math.abs(tomGame - realTimeForPlayMinutes);
    let differenceNormHour = Math.floor(differenceNorm / 60);
    let differenceNormMinutes = differenceNorm % 60;

    if (tomGame >= realTimeForPlayMinutes) {
        console.log("Tom sleeps well");
        console.log(`${differenceNormHour} hours and ${differenceNormMinutes} minutes less for play`);    
    } else {
        console.log("Tom will run away");
        console.log(`${differenceNormHour} hours and ${differenceNormMinutes} minutes more for play`);
    }
}

sleepyTomCat(20);