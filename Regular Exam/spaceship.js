function spaceship(widthShip, lengthShip, heightShip, averageHeightOfAstronauts) {

    let widthRoom = 2;
    let lengthRoom = 2;
    let heightRoom = averageHeightOfAstronauts + 0.40;

    let volumeRocket = widthShip * lengthShip * heightShip;
    let volumeRoom = widthRoom * lengthRoom * heightRoom;

    let numOfAstronauts = Math.floor(volumeRocket / volumeRoom);

    if (numOfAstronauts < 3) {
        console.log("The spacecraft is too small.");
    } else if (numOfAstronauts > 10) {
        console.log("The spacecraft is too big.");
    } else {
        console.log(`The spacecraft holds ${numOfAstronauts} astronauts.`);
    }
}

spaceship(3.5, 4, 5, 1.70);
spaceship(4.5, 4.8, 5, 1.75);
spaceship(3, 3, 4, 1.68);