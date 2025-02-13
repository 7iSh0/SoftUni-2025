function specialNumbers(n) {

    let result = "";

    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {

        let currentNumStr = currentNum.toString();
        let isSpecial = true;

        for (let index = 0; index < currentNumStr.length; index++) {
            let currentDigit = Number(currentNumStr[index]);

            if (n % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += `${currentNumStr} `;
        }
    }

    console.log(result);
}

specialNumbers(11);