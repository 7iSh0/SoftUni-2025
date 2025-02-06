function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let apartVolume = width * length * height;

    let index = 3;
    let command = input[index];
    index++;

    while(command !== "Done") {

        let boxes = Number(command);
        apartVolume -= boxes;

        if (apartVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartVolume)} Cubic meters more.`);
            break;       
        }

        command = input[index];
        index++;
    }

    if (command === "Done") {
        console.log(`${apartVolume} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);