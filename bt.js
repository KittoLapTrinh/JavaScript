function tinhBMI(khoiLuong, chieuCao) {
    var chieuCaoM = chieuCao / 100

    var BMI = khoiLuong / (chieuCaoM * chieuCaoM)

    return BMI
}
/*

*/
console.log("Bai tap 1: ");
//Du lieu 1
// Thông tin về Mark
var khoiLuongMark1 = 78
var chieuCaoMark1 = 169
var bmiMark1 = tinhBMI(khoiLuongMark1, chieuCaoMark1)

console.log("Chi so BMI cua Mark theo du lieu 1: " + bmiMark1);

// Thông tin về John
var khoiLuongJohn1 = 92;
var chieuCaoJohn1 = 195;
var bmiJohn1 = tinhBMI(khoiLuongJohn1, chieuCaoJohn1)
console.log("Chi so BMI cua John theo du lieu 1: " + bmiJohn1);
//Du lieu 2
// Thông tin về Mark
var khoiLuongMark2 = 95
var chieuCaoMark2 = 188
var bmiMark2 = tinhBMI(khoiLuongMark2, chieuCaoMark2)

console.log("Chi so BMI cua Mark theo du lieu 2: " + bmiMark2);

// Thông tin về John
var khoiLuongJohn2 = 85;
var chieuCaoJohn2 = 176;
var bmiJohn2 = tinhBMI(khoiLuongJohn2, chieuCaoJohn2)

console.log("Chi so BMI cua John theo du lieu 2: " + bmiJohn2);

//3
// Tạo biến Boolean 'markHigherBMI' theo  du lieu 1
var markHigherBMI1 = bmiMark1 > bmiJohn1;

// Tạo biến Boolean 'markHigherBMI' theo  du lieu 2
var markHigherBMI2 = bmiMark2 > bmiJohn2;

// In kết quả
console.log("Theo du lieu 1, Mark có chỉ số BMI cao hơn John không? " + markHigherBMI1);
console.log("Theo du lieu 2, Mark có chỉ số BMI cao hơn John không? " + markHigherBMI2);

////BT2
console.log("Bai tap 2:");
//Du lieu 1
if (markHigherBMI1) {
    console.log("Theo du lieu 1, chi so BMI cua Mark cao hon John!");
} else {
    console.log("Theo du lieu 1, chi so BMI cua John cao hon Mark!");
}

//Du lieu 2
if (markHigherBMI2) {
    console.log("Theo du lieu 2, chi so BMI cua Mark cao hon John!");
} else {
    console.log("Theo du lieu 2, chi so BMI cua John cao hon Mark!");
}

// Tạo chuỗi mẫu
var ketQua = "Mark BMI (" + bmiMark1.toFixed(1) + ") ";
ketQua += markHigherBMI1 ? "cao hơn" : "thấp hơn";
ketQua += " John (" + bmiJohn1.toFixed(1) + ")!";

// In kết quả
console.log(ketQua);


///////////BT3
console.log("Bai tap 3:");
// Điểm của Dolphins sau 3 lần cạnh tranh
var diemDolphins = (96 + 108 + 89) / 3;

// Điểm của Koalas sau 3 lần cạnh tranh
var diemKoalas = (88 + 91 + 110) / 3;

// Xác định đội chiến thắng và kiểm tra ai có điểm trung bình cao hơn
if (diemDolphins > diemKoalas) {
    console.log("Dolphins chiến thắng với điểm trung bình " + diemDolphins);
} else if (diemKoalas > diemDolphins) {
    console.log("Koalas chiến thắng với điểm trung bình " + diemKoalas);
} else {
    console.log("Hòa! Cả Dolphins và Koalas đều có điểm trung bình " + diemDolphins);
}

//