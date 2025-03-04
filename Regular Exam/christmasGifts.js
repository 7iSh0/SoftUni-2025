function christmasGifts(input) {

    let index = 0;
    let kids = 0;
    let adults = 0;

    let command = input[index];
    index++;

    while (command !== "Christmas") {

        let age = Number(command);

        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        command = input[index];
        index++;
    }

    let moneyForToys = kids * 5;
    let moneyForSweaters = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);
christmasGifts(["16", "16", "16", "16", "16", "Christmas"]);
christmasGifts(["18", "20", "48", "45", "56", "37", "12", "14", "Christmas"]);