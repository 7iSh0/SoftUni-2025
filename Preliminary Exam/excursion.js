function excursion(peopleInGroup, numOfNights, transportCards, museumTickets) {

    let oneNight = 20;
    let oneTransportCard = 1.60;
    let oneTicketForMuseum = 6;

    let sumNights = numOfNights * oneNight;
    let sumTransportCards = transportCards * oneTransportCard;
    let sumMuseumTickets = museumTickets * oneTicketForMuseum;

    let totalSumForOne = sumNights + sumTransportCards + sumMuseumTickets;
    let totalSumForGroup = totalSumForOne * peopleInGroup;

    let totalSumWithUnforeseenExpenses = totalSumForGroup + (totalSumForGroup * 0.25);

    console.log(totalSumWithUnforeseenExpenses.toFixed(2));
}

excursion(20, 14, 30, 6);
excursion(131, 9, 33, 46);