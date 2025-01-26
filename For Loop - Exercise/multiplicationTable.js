function multiplicationTable(secondNum) {

    for (let firstNum = 1; firstNum <= 10; firstNum++) {
        let result = firstNum * secondNum;
        console.log(`${firstNum} * ${secondNum} = ${result}`);
    }
}

multiplicationTable(9);