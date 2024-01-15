const soNguyenDuong = parseInt(prompt('Nhập một số nguyên dương:'));

if (Number.isInteger(soNguyenDuong) && soNguyenDuong > 0) {
    let giaiThua = 1;
    for (let i = 2; i <= soNguyenDuong; i++) {
        giaiThua *= i;
    }
    console.log(`Giai thừa của ${soNguyenDuong} là: ${giaiThua}`);
} else {
    console.log('Số không hợp lệ. Vui lòng nhập một số nguyên dương.');
}
