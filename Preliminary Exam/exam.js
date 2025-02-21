function exam(input) {

    let index = 0;
    let numOfStudents = Number(input[index]);
    index++;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;

    let totalGrade = 0;

    for (let i = 0; i < numOfStudents; i++) {

        let grades = Number(input[index]);
        totalGrade += grades;
        index++;

        if (grades >= 5.00) {
            group1++;
        } else if (grades >= 4.00) {
            group2++;
        } else if (grades >= 3.00) {
            group3++;
        } else {
            group4++;
        }
    }

    let group1Percentage = (group1 / numOfStudents) * 100;
    let group2Percentage = (group2 / numOfStudents) * 100;
    let group3Percentage = (group3 / numOfStudents) * 100;
    let group4Percentage = (group4 / numOfStudents) * 100;

    let averageGrade = totalGrade / numOfStudents;

    console.log(`Top students: ${group1Percentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group2Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group3Percentage.toFixed(2)}%`);
    console.log(`Fail: ${group4Percentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"]);