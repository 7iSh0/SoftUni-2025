function onTimeForTheExam(examHour, examMin, arrivalHour, arrivalMin) {

    let examMins = examHour * 60 + examMin;  
    let arrivalMins = arrivalHour * 60 + arrivalMin;
    let differenceTime = arrivalMins - examMins;

    if (differenceTime > 0) {
        console.log("Late");
        let hour = Math.floor(differenceTime / 60);
        let min = differenceTime % 60;
    if (hour > 0) {
        console.log(`${hour}:${min < 10 ? "0":""}${min} hours after the start`);
    } else {
        console.log(`${min} minutes after the start`);
    }

    } else if (differenceTime >= -30) {
        console.log("On time");
    if (differenceTime < 0) {
        console.log(`${Math.abs(differenceTime)} minutes before the start`);
    } 
    } else {
        console.log("Early");
        let absdifferenceTime = Math.abs(differenceTime);
        let hour = Math.floor(absdifferenceTime / 60);
        let min = absdifferenceTime % 60;
    if (hour > 0) {
        console.log(`${hour}:${min < 10 ? "0":""}${min} hours before the start`);
    } else {
        console.log(`${min} minutes before the start`);
    }
        
    }

}

onTimeForTheExam(9, 30, 9, 50);