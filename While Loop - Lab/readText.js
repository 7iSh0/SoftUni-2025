function readText(input) {

    let index = 0;

    let text = input[index];
    index++; // текуща

    while(text !== "Stop") {
        // if (text === "Stop") {
        //     break;
        // }
        console.log(text);

        text = input[index];
        index++; // следваща
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);