function Combine(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
console.log(Combine(20, 30));
console.log(Combine("20", "30"));
