function foodDelivery(chickenMenu, fishMenu, vegMenu) {

    let totalMenuPrice = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
    let dessertPrice = totalMenuPrice * 0.2;
    let finalPrice = totalMenuPrice + dessertPrice + 2.5;

    console.log(finalPrice);
    
}

foodDelivery(2, 4, 3);