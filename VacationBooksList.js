function calc(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let hours = pages / pagesPerHour;
    let hoursPerDay = hours / days;
    console.log(hoursPerDay);
}

calc(["432", "15", "4"])