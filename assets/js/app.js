/*=== app.js file ready ===*/


/* step 1. Select all of necessary Elements  */
const calculateBtn = document.getElementById("calculate-money-btn");
const incomeInputField = document.getElementById("income-field");
const foodInputField = document.getElementById("food-field");
const rentInputField = document.getElementById("rent-field");
const clothesInputField = document.getElementById("clothes-field");

const totalExpenseText = document.getElementById('expense');
const netBalance = document.getElementById('balance');
const errorMessage = document.getElementById('error-msg');

/* step 2. work with calculate button  */

calculateBtn.addEventListener('click', function () {
    let incomeInputValue = incomeInputField.value;
    let foodInputValue = foodInputField.value;
    let rentInputValue = rentInputField.value;
    let clothInputValue = clothesInputField.value;
    if ((incomeInputValue < 0 || foodInputValue < 0 || rentInputValue < 0 || clothInputValue < 0) || (incomeInputValue === '' || foodInputValue === '' || rentInputValue === '' || clothInputValue === '')) {
        errorMsgHandler('All fields are required & put negative number!');
    } else {
        let totalExpenseAmount = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);
        if (incomeInputValue < totalExpenseAmount) {
            errorMsgHandler('Your income is ' + incomeInputValue + '. So you can not expense amount then of your net income');
        } else {
            totalExpenseText.innerText = totalExpenseAmount;
            netBalance.innerText = incomeInputValue - totalExpenseAmount;
        }
    }
})


/* step 3. Work with save amount  */
const saveAmountBtn = document.getElementById("")



/*  error message function  */
function errorMsgHandler(message) {
    errorMessage.classList.add('active');
    errorMessage.querySelector('span').innerText = message;
    setTimeout(() => {
        errorMessage.classList.remove('active');
    }, 4000);
}