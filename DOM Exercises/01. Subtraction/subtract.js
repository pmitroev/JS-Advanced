function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let sub = Number(firstNumber) - Number(secondNumber);

    document.getElementById('result').textContent = sub;
}