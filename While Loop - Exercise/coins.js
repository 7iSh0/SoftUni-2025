function coins(arg) {

    let lv = Number(arg)
    let money = Math.floor(lv * 100);
    let count = 0;

    while (money > 0) {
        count++;
        if (money >= 200) {
            money -= 200;
        } else if (money >= 100) {
            money -= 100;
        } else if (money >= 50) {
            money -= 50;
        } else if (money >= 20) {
            money -= 20;
        } else if (money >= 10) {
            money -= 10;
        } else if (money >= 5) {
            money -= 5;
        } else if (money >= 2) {
            money -= 2;
        } else {
            money -= 1;
        }
    }
    console.log(count);
}

coins(1.23);
coins(2);
coins(0.56);
coins(2.73);

// let pennies = 0;
// let coinsChange = Math.round(sum * 100);

// while (coinsChange !== 0) {

//     if (coinsChange >= 200) {
//         coinsChange -= 200;
//     } else if (coinsChange >= 100) {
//         coinsChange -= 100;
//     } else if (coinsChange >= 50) {
//         coinsChange -= 50;
//     } else if (coinsChange >= 20) {
//         coinsChange -= 20;
//     } else if (coinsChange >= 10) {
//         coinsChange -= 10;
//     } else if (coinsChange >= 5) {
//         coinsChange -= 5;
//     } else if (coinsChange >= 2) {
//         coinsChange -= 2;
//     } else if (coinsChange >= 1) {
//         coinsChange -= 1;
//     }
//     pennies++;
// }
// console.log(pennies);  