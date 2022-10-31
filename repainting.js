function calc(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let additionalPaint = paint + (paint * 10/100);

    let sumForNylon = (nylon + 2) * 1.5;
    let sumForPaint = additionalPaint * 14.5;
    let sumForThinner = thinner * 5;
    let sumForBags = 0.4;
    
    let sumForMaterials = sumForNylon + sumForPaint + sumForThinner + sumForBags;

    let sumForMasters = (sumForMaterials * 30/100) * hours;

    let total = sumForMasters + sumForMaterials;

    console.log(total);
}

calc(["5", "10", "10", "1"]);