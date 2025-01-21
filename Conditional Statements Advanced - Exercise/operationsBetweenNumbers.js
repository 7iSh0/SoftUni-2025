function operationsBetweenNumbers(num1, num2, operator) {

    let result = 0;
    let evenOrOdd = "";

    switch(operator) {
        case "+":
            result = num1 + num2;
            evenOrOdd = result % 2 === 0 ? "even":"odd";
            console.log(`${num1} ${"+"} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case "-":
            result = num1 - num2;
            evenOrOdd = result % 2 === 0 ? "even":"odd";
            console.log(`${num1} ${"-"} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case "*":
            result = num1 * num2;
            evenOrOdd = result % 2 === 0 ? "even":"odd";
            console.log(`${num1} ${"*"} ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case "/":

            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
                return;
            } 
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
                break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
                return;
            } 
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`);
                break;
    }   
}

operationsBetweenNumbers(10, 12, "+");