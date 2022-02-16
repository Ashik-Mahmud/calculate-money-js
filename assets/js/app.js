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
function updateCalculateAmount() {
    let incomeInputValue = incomeInputField.value;
    let foodInputValue = foodInputField.value;
    let rentInputValue = rentInputField.value;
    let clothInputValue = clothesInputField.value;
    if ((incomeInputValue < 0 || foodInputValue < 0 || rentInputValue < 0 || clothInputValue < 0) || (incomeInputValue === '' || foodInputValue === '' || rentInputValue === '' || clothInputValue === '')) {
        errorMsgHandler('All fields are required & put positive value!');
    } else {
        let totalExpenseAmount = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);
        if (incomeInputValue < totalExpenseAmount) {
            errorMsgHandler('Your income is ' + incomeInputValue + '. So you can not expense amount then of your net income');
        } else {
            totalExpenseText.innerText = totalExpenseAmount;
            netBalance.innerText = incomeInputValue - totalExpenseAmount;
        }
    }
}
calculateBtn.addEventListener('click', updateCalculateAmount);

/* step 3. Work with save amount button */
const saveAmountBtn = document.getElementById("save-money-btn");
const saveMoneyField = document.getElementById('save-money-field');
const saveAmountText = document.getElementById("save-amount");
const remainingAmountText = document.getElementById("remaining-amount");

function updateSavingAmount() {
    let incomeAmount = incomeInputField.value;
    let saveInputValue = saveMoneyField.value;
    if (incomeAmount === '') {
        errorMsgHandler("First fil up Income field !")
    } else if (saveInputValue < 0 || saveInputValue === '') {
        errorMsgHandler("Save Money field is required & Put positive number.")
    } else {
        let savingAmt = (incomeAmount * saveInputValue) / 100;
        let netBalanceAmount = parseFloat(netBalance.innerText);
        if (savingAmt > netBalanceAmount) {
            errorMsgHandler('Sorry Your Net balance ' + netBalanceAmount + ' So, you can not save more money then of your net balance');
        } else {
            saveAmountText.innerText = savingAmt;
            remainingAmountText.innerText = netBalanceAmount - savingAmt;
        }
    }
}
saveAmountBtn.addEventListener('click', updateSavingAmount);

/*  error message function  */
function errorMsgHandler(message) {
    errorMessage.classList.add('active');
    errorMessage.querySelector('span').innerText = message;
    setTimeout(() => {
        errorMessage.classList.remove('active');
    }, 5000);
}