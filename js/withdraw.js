// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw input field
// 2-5. also make sure to convert the input into a number by using parseFloat 
// 3. get pervious withdraw total 
// 4. calculate total withdraw amount
// 4-5. set total withdraw amount
// 5. get the previous balance total
// 6. calculate new balance total
// 6-5 : set the new balance total
// 7. clear the input field

// step-1 :
document.getElementById('btn-withdaw').addEventListener('click', function () {
    // step-2 :
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3 :
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdawTotalSting = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdawTotalSting);
    // 
    // console.log(previousWithdrawTotal);
    // 

    // step-4 :
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the balance total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5 :
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 :
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7 :
    withdrawField.value = '';
})