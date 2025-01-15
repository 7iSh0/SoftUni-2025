function timeMinutes(hour, min) {

    let totalMin = hour * 60 + min;
    let minPlus15 = totalMin + 15;

    let newHour = Math.floor(minPlus15 / 60);
    let newMin = minPlus15 % 60;

    if (newHour === 24) {
        newHour = 0;
    }

    if (newMin < 10) {
        console.log(`${newHour}:0${newMin}`);
    } else {
        console.log(`${newHour}:${newMin}`);
    }

}

timeMinutes(1, 46);