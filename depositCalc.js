function calc(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1])
    let interestRate = Number(input[2] / 100);
    let interest = deposit * interestRate;
    let interestPerMonth = interest / 12;
    let result = deposit + months * interestPerMonth;
    console.log(result);
}

calc(["2350", "6", "7"]);