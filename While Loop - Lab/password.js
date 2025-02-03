function password(input) {

    index = 0;
    let username = input[index]; // index = 0
    index++; // index = 1

    let password = input[index]; // index = 1
    index++; // index = 2

    let temporyPass = input[index]; // index = 2
    index++; // index = 3

    while(temporyPass !== password) {

        temporyPass = input[index]; // index = 3, 4, 5...
        index++; // index = 4, 5, 6...
    }

    console.log(`Welcome ${username}!`);

}

password(["Nakov", "1234", "Pass", "1324", "1234"]);