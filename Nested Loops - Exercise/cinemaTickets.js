function cinemaTickets(input) {

    let standardTicket = 0;
    let studentTicket = 0;
    let kidTicket = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movieTitle = command;

        let hallSeats = Number(input[index]);
        index++;

        let seatsTaken = 0;

        let command1 = input[index];
        index++;

        while (command1 !== "End") {
            let ticketType = command1;

            if (ticketType === "standard") {
                standardTicket++;
            } else if (ticketType === "student") {
                studentTicket++;
            } else if (ticketType === "kid") {
                kidTicket++;
            }

            seatsTaken++;

            if (seatsTaken === hallSeats) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let percentFilledSeats = seatsTaken / hallSeats * 100;
        console.log(`${movieTitle} - ${percentFilledSeats.toFixed(2)}% full.`);
        
        command = input[index];
        index++;
    }

    let totalTicket = standardTicket + studentTicket + kidTicket;
    console.log(`Total tickets: ${totalTicket}`);

    let studentTicketPercent = studentTicket / totalTicket * 100;
    let standardTicketPercent = standardTicket / totalTicket * 100;
    let kidsTicketPercent = kidTicket / totalTicket * 100;

    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);