let userInput;

do {
    userInput = prompt("Nhập một số từ 1 đến 100:");
    userInput = parseInt(userInput);
} while (isNaN(userInput) || userInput < 1 || userInput > 100);
alert("Bạn đã nhập: " + userInput);
if(userInput % 3 ==0 && userInput % 5 ==0){
    console.log("FizzBuzz");
}else if(userInput % 3 == 0){
    console.log("Fizz");
}else if(userInput % 5 == 0){
    console.log("Buzz");
}
