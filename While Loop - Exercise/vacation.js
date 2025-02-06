function vacation(input) {

    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    let daysOfSpendMoney = 0;
    let totalDays = 0;

    while(availableMoney < neededMoney) {

        let command = input[index];
        index++;

        let amount = Number(input[index]);
        index++

        if (command === "save") {
            availableMoney += amount;
            daysOfSpendMoney = 0;
        } else if (command === "spend") {
            if (amount > availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= amount;   
            }
            daysOfSpendMoney++;
        }

        totalDays++;

        if (daysOfSpendMoney === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        } 
        
        if (availableMoney >= neededMoney) {
            console.log (`You saved the money for ${totalDays} days.`);
        }
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);