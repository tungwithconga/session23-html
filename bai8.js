function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let userInput = parseInt(prompt("Nhập một số nguyên dương:"));

if (isNaN(userInput) || userInput <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    console.log(`Các số nguyên tố nhỏ hơn ${userInput}:`);
    for (let i = 2; i < userInput; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
