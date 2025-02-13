function sumOfTwoNumbers(arg1, arg2, arg3) {

    let start = Number(arg1);
    let end = Number(arg2);
    let magicNum = Number(arg3);

    let combination = 0;
    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            combination++;
            if (sum === magicNum) {
                isFound = true;
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNum})`);
                break;
            } 
        }
        if (isFound) {
            break;
        }
    }
    
    if (!isFound) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(23, 24, 20);