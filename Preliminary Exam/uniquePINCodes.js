function uniquePINCodes(arg1, arg2, arg3) {

    let firstNum = Number(arg1);
    let secondNum = Number(arg2);
    let thirdNum = Number(arg3);

    for (let first = 2; first <= firstNum; first += 2) {
        for (let second = 2; second <= secondNum; second++) {
            if (second === 2 || second === 3 || second === 5 || second === 7) {
                for (let third = 2; third <= thirdNum; third += 2) {
                    console.log(`${first} ${second} ${third}`);
                }
            }
        }
    }
}

uniquePINCodes(3, 5, 5);
uniquePINCodes(8, 2, 8);