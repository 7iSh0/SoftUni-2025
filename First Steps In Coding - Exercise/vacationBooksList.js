function vacationBooksList(numPages, pagesForHour, numDays) {

    let totalBookReading = numPages / pagesForHour;
    let necesseryHours = totalBookReading / numDays;

    console.log(necesseryHours);

}

vacationBooksList(432, 15, 4);