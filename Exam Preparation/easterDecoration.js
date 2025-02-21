function easterDecoration(input) {

    let index = 0;
    let client = Number(input[index]);
    index++;

    let sumMoney = 0;

    for (let i = 0; i < client; i++) {
        let command = input[index];
        index++;

        let money = 0;
        let countProduct = 0;

        while (command !== "Finish") {

            let product = command;
            countProduct++;

            switch (product) {
                case "basket":
                    money += 1.50;
                    break;
                case "wreath":
                    money += 3.80;
                    break;
                case "chocolate bunny":
                    money += 7;
                    break;
            }

            command = input[index];
            index++;
        }

        if (countProduct % 2 === 0) {
            money *= 0.80;
        }

        sumMoney += money;
        console.log(`You purchased ${countProduct} items for ${money.toFixed(2)} leva.`);
    }

    let avg = sumMoney / client;
    console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`);
}

easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);