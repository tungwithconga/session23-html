function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }

    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

let userInput = prompt("Nhập một số:");

if (isNaN(userInput)) {
    console.log("Vui lòng nhập một số.");
} else {
    if (isPerfectNumber(userInput)) {
        console.log(userInput + " là số hoàn hảo.");
    } else {
        console.log(userInput + " không phải là số hoàn hảo.");
    }
}
