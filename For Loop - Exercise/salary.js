function salary(input) {

    let openTabsInBrowser = Number(input[0]);
    let salary = Number(input[1]);

    let website = "";

    for (let n = 2; n <= openTabsInBrowser + 5; n++) {
        website = input[n];

        if (website === "Facebook") {
            salary -= 150;
        } else if (website === "Instagram") {
            salary -= 100;
        } else if (website === "Reddit") {
            salary -= 50;
        }
    } 

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}

salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);