function coins(sum) {

    let pennies = 0;
    let coinsChange = Math.round(sum * 100);

    while (coinsChange !== 0) {

        if (coinsChange >= 200) {
            coinsChange -= 200;
        } else if (coinsChange >= 100) {
            coinsChange -= 100;
        } else if (coinsChange >= 50) {
            coinsChange -= 50;
        } else if (coinsChange >= 20) {
            coinsChange -= 20;
        } else if (coinsChange >= 10) {
            coinsChange -= 10;
        } else if (coinsChange >= 5) {
            coinsChange -= 5;
        } else if (coinsChange >= 2) {
            coinsChange -= 2;
        } else if (coinsChange >= 1) {
            coinsChange -= 1;
        }
        pennies++;
    }
    console.log(pennies);  
}

coins(1.23);
coins(2);
coins(0.56);
coins(2.73);