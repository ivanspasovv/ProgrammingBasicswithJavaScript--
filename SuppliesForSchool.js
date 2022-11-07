function calc(input) {
    let pen = (input[0]);
    let marker = (input[1]);
    let preparation = (input[2]);
    let reduction = (input[3] / 100);

    let pens = pen * 5.8;
    let markers = marker * 7.2;
    let preparations = preparation * 1.2;
    let price = pens + markers + preparations;
    let priceWithReduction = price - (price * reduction);

    console.log(priceWithReduction);
}

calc(["4", "2", "5", "13"])