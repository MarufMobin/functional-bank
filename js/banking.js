// function doubleit(num){
//     const result = num *2;
//     return result;
// }
// const fist = doubleit(4);
// const second = doubleit(6);

// console.log(fist, second);

// Define a Function to declear deposit-input
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

const depositBtn = document.getElementById('deposit-button').addEventListener('click',function(){

    // input field catch data
    /* const depositInputText = document.getElementById('deposit-input');
    const depositInputValue = depositInputText.value;
    const depositInput = parseFloat(depositInputValue); */
 
    const depositInput = getInputValue('deposit-input');
    // Deposit box value 
    const depositBoxText = document.getElementById('deposit-total');
    const depositBoxValue = depositBoxText.innerText;
    const depositBox = parseFloat(depositBoxValue);

    
    // New Deposti value in Box
    const newDepositValue = depositInput + depositBox;
    const  totalDepositBalance =  depositBoxText.innerText  = newDepositValue;

    // Balence calculation
    const totalBalanceText = document.getElementById('balance-total');
    const totalBalance = totalBalanceText.innerText;
    const totalBalanceAmount = parseFloat(totalBalance);
    
    const totalBalanceUpdates = totalBalanceAmount +  depositInput;

    totalBalanceText.innerText = totalBalanceUpdates;

    // clear input field
    // depositInputText.value = '';
})


// Withdraw Related Work 

const withdrawBtn = document.getElementById('withdraw-button').addEventListener('click',function(){

    // withdraw Input
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValueText = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputValueText); */

    const withdrawInputValue = getInputValue('withdraw-input')

    // Withdraw Total 
    const  withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValueText = withdrawTotal.innerText;
    const withdrawTotalvalue = parseFloat(withdrawTotalValueText);

    // Withdraw Update 
    withdrawTotal.innerText = withdrawInputValue + withdrawTotalvalue;

    // Total balence 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    // insert into Total Balance box
    const totalWidthrawBalance =  totalBalanceAmount - withdrawInputValue;

    totalBalance.innerText = totalWidthrawBalance; 

    // clear input data 
    // withdrawInput.value = '';

})