function fishTank(lenght, width, height, percent) {

    let volTank = lenght * width * height;
    let volTankInLiters = volTank / 1000;
    let busyVolTank = percent / 100;
    let litersNeeded = volTankInLiters * (1 - busyVolTank);

    console.log(litersNeeded);

}

fishTank(85, 75, 47, 17);