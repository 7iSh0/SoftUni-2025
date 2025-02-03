function sumNumbers(input) {

    let index = 0;

    let target = Number(input[index]);
    index++;

    let sum = 0;

    while(sum < target) {
        let currentNum = Number(input[index]);
        index++;

        sum += currentNum;
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);