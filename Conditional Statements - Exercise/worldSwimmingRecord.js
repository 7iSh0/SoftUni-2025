function worldSwimmingRecord(recordSec, distanceMeters, timeSecSwim) {

    let allSecSwim = distanceMeters * timeSecSwim;
    let every15Meters = Math.floor(distanceMeters / 15);
    let every15MetersPlus = every15Meters * 12.5;
    let totalTime = allSecSwim + every15MetersPlus;

    if (recordSec <= totalTime) {
        let notEnoughtTime = totalTime - recordSec;
        console.log(`No, he failed! He was ${notEnoughtTime.toFixed(2)} seconds slower.`);
    } else if (recordSec > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(10464, 1500, 20);