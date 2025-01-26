function trekkingMania(input) {

    let climberGroups = Number(input[0]);

    let Musala = 0;
    let Monblan = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;

    for (let i = 1; i <= climberGroups; i++) {
        let climbers = Number(input[i]);

        if (climbers <= 5) {
            Musala += climbers;
        } else if (climbers <= 12) {
            Monblan += climbers;
        } else if (climbers <= 25) {
            Kilimandjaro += climbers;
        } else if (climbers <= 40) {
            K2 += climbers;
        } else {
            Everest += climbers;
        }
    }

    let allClimbers = Musala + Monblan + Kilimandjaro + K2 + Everest;

    let percent1 = (Musala / allClimbers) * 100;
    let percent2 = (Monblan / allClimbers) * 100;
    let percent3 = (Kilimandjaro / allClimbers) * 100;
    let percent4 = (K2 / allClimbers) * 100;
    let percent5 = (Everest / allClimbers) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);