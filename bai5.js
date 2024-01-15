const randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Nhập một số từ 1 đến 10:");

    if (isNaN(guess)) {
        alert("Vui lòng nhập một số.");
    } else if (guess > randomNumber) {
        alert("Lớn hơn. Hãy thử lại.");
    } else if (guess < randomNumber) {
        alert("Nhỏ hơn. Hãy thử lại.");
    } else {
        alert("Chính xác! Bạn đã đoán đúng.");
    }
} while (guess !== randomNumber);