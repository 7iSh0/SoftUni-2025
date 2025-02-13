function equalSumsEvenOddPosition(startNum, endNum) {

    let result = "";

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let evenSum = 0;
        let oddSum = 0;

        let currentNumStr = currentNum + "";

        for (let index = 0; index < currentNumStr.length; index++) {
            let currentDigit = Number(currentNumStr[index]);

            if (index % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (evenSum === oddSum) {
            result += currentNumStr + " ";
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(100000, 100050);