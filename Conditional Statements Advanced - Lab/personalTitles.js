function personalTitles(age, gender) {

    if (gender == "m") {
        if(age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        } 
    } else if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

personalTitles(13.5, "m");