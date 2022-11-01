function calc(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let priceForChiken = chickenMenu * 10.35;
    let priceForFish = fishMenu * 12.4;
    let priceForVegMenu = vegMenu * 8.15;
    let priceForMenus = priceForChiken + priceForFish + priceForVegMenu;
    let delivery = 2.5;
    let total = priceForMenus + priceForMenus * 20/100 + delivery;

    console.log(total);
}

calc(["9", "2", "6"])