function calc(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let occupiedSpace = Number(input[3] / 100);

    let volume = lenght * width * height;
    let volumeInLiter = volume * 0.001;

    let total = volumeInLiter - (volumeInLiter * occupiedSpace)

    console.log(total);
}

calc(["105", "77", "89", "18.5"])