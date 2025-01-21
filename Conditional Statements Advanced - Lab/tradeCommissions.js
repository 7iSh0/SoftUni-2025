function tradeCommissions(town, sales) {

    let commission = 0;

    switch(town) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.05;
                console.log(commission.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.07;
                console.log(commission.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.08;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = sales * 0.12; 
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            } break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.045;
                console.log(commission.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.075;
                console.log(commission.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.10;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = sales * 0.13;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            } break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.055;
                console.log(commission.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.08;
                console.log(commission.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.12;
                console.log(commission.toFixed(2));
            } else if (sales > 10000) {
                commission = sales * 0.145;
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            } break;
        default: console.log("error"); break;
        
    }   
}

tradeCommissions("Varna", 3874.50); 
