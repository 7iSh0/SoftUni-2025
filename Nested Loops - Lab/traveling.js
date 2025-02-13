function traveling(input) {

    let index = 0;

    while(index < input.length) {

        let destination = String(input[index]);
        index++;

        if (destination === "End") {
            break;
        }

        let budget = Number(input[index]);
        index++;

        let savings = Number(input[index]);
        index++;

        while (savings < budget) {
            savings += Number(input[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);