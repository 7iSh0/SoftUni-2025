function trainTheTrainers(input) {

    let judgeCount = Number(input[0]);

    let totalGradeSum = 0;
    let totalGradeCount = 0;

    let index = 1;
    let command = input[index];

    while(command !== "Finish") {
        let presentationTitle = command;

        let presentationGradeSum = 0;

        for (let currentJudge = 1; currentJudge <= judgeCount; currentJudge++) {
            index++;
            let grade = Number(input[index]);
            presentationGradeSum += grade;
        }

        let avgPresentationGrade = presentationGradeSum / judgeCount;
        console.log(`${presentationTitle} - ${avgPresentationGrade.toFixed(2)}.`);

        totalGradeSum += avgPresentationGrade;
        totalGradeCount++;

        index++;
        command = input[index];
    }

    let finalAvgGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);