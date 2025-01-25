function sumOfNumbers(num) {

    let numAsText = String(num);
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        let num = Number(numAsText[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers("564891");