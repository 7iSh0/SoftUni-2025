function everest(input) {

    let index = 0;

    let days = 1;
    let currentHeight = 5364;
    let reachedHeight = false;

    let rest = input[index];
    index++;

    while (rest !== "END") {

        if (rest === "Yes") {
            days++;

            if (days > 5) {
                break;
            }
        } 

        let climbedMeters = Number(input[index]);
        index++;

        currentHeight += climbedMeters;

        if (currentHeight >= 8848) {
            reachedHeight = true;
            break;
        }

        rest = input[index];
        index++;
    }

    if (reachedHeight) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!");
        console.log(currentHeight);
    }
}

everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
everest(["Yes", "700", "END"]);
everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);