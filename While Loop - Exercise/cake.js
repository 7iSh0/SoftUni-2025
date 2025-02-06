function cake(input) {

    let widthOfCake = Number(input[0]);
    let lengthOfCake = Number(input[1]);

    let cakePieces = widthOfCake * lengthOfCake;
    let pieceOfCake = 0;

    let index = 2;
    let command = input[index];

    while (command !== "STOP") {

        let piecesEaten = Number(command);
        pieceOfCake += piecesEaten;

        if (cakePieces <= pieceOfCake) {
            let piecesMore = pieceOfCake - cakePieces;
            console.log(`No more cake left! You need ${piecesMore} pieces more.`);
            break;
        }
        index++;
        command = input[index];
        
    }

    if (command === "STOP") {
        let piecesLeft = cakePieces - pieceOfCake;
        console.log(`${piecesLeft} pieces are left.`);
    } 
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);