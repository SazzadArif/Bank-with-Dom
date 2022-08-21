// step-1 : add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 : get the diposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositFiled = document.getElementById('user-deposit');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount); check-1

    //step-3 : get the current deposit total
    // for none-input (element other than input, textArea) use innerText to get
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(previousDepositTotal);   check-2

    // step-4 :add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 : get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 : calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7 : clear the deposit field
    depositFiled.value = '';
})