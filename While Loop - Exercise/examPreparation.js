function examPreparation(input) {

    let unsatisfactoryGrades = Number(input[0]);
    let badGrades = 0;
    let gradeCount = 0;
    let gradeSum = 0;
    let problemName = "";

    let index = 1;
    let nameOfTask = input[index];
    index++;

    while(nameOfTask !== "Enough") {
        problemName = nameOfTask;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            badGrades++;

            if (badGrades === unsatisfactoryGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }

        gradeCount++;
        gradeSum += grade;

        nameOfTask = input[index];
        index++;
    }

    if (nameOfTask === "Enough") {
        let averegeGrade = gradeSum / gradeCount;
        console.log(`Average score: ${averegeGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${problemName}`);
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);