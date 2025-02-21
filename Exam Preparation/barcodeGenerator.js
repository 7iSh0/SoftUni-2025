function barcodeGenerator(arg1, arg2) {

    let start = String(arg1); // arg1 + "";
    let end = String(arg2);

    let startA = Number(start[0]);
    let startB = Number(start[1]);
    let startC = Number(start[2]);
    let startD = Number(start[3]);

    let endA = Number(end[0]);
    let endB = Number(end[1]);
    let endC = Number(end[2]);
    let endD = Number(end[3]);

    let buff = "";

    for (let a = startA; a <= endA; a++) {
        for (let b = startB; b <= endB; b++) {
            for (let c = startC; c <= endC; c++) {
                for (let d = startD; d <= endD; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        buff += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
    console.log(buff);
}

barcodeGenerator(2345, 6789);