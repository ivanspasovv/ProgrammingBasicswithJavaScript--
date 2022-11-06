function calc(input) {
    let taxForYear = Number(input[0]);
    let priceForShoes = taxForYear - (taxForYear * 0.4);
    let priceForEquipment = priceForShoes - (priceForShoes * 0.2);
    let priceForBall = priceForEquipment - (priceForEquipment * 0.75);
    let priceForAccessories = priceForBall - (priceForBall * 0.80);
    let total = taxForYear + priceForShoes + priceForEquipment + priceForBall + priceForAccessories
    console.log(total);
}

calc(["550"])