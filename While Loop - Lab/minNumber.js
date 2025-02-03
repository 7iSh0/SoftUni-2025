function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop") {
        let currentNum = Number(command);

        if (minNum > currentNum) {
            minNum = currentNum;
        }

        command = input[index];
        index++;
    }

    console.log(minNum);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);