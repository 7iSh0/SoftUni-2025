function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let badGrade = 0;
    let isExcluded = false;

    let clas = 1;
    while (clas <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            badGrade++;
            if (badGrade === 2) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${clas} grade`);
                break;
            }
            continue;
        }

        sumGrade += grade;
        clas++;
    }

    if (!isExcluded) {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);