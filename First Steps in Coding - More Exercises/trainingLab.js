function trainingLab(w, h) {

    let widht = h * 100;
    let length = w * 100;

    let corridor = 100;
    let availableWidth = widht - corridor;
    let deskPerRow = Math.floor(availableWidth / 70);

    let availableLength = length;
    let rows = Math.floor(availableLength / 120);

    let totalPlaces = rows * deskPerRow - 3;

    console.log(totalPlaces);
}

trainingLab(15, 8.9);
trainingLab(8.4, 5.2);