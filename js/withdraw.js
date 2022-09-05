document.getElementById("withdraw").addEventListener("click", function(){
    //step 1 get withdraw ammount 
    const inputField = document.getElementById("withdraw-input");
    const withdrawInputString = inputField.value;
    const withdrawAmount = parseFloat( withdrawInputString);
    //step 2 clear input field 
    inputField.value = "";
    if (isNaN(withdrawAmount)) {
        alert("Please enter a valid number")
        return;
    }
    // step 3 get previous withdraw total 
    const withdrawElement = document.getElementById("withdrawtotal");
    const withdrawElementString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat( withdrawElementString);
    // step 6 get previous balance total 
    const balanceTotalElement = document.getElementById("balancetotal");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat( balanceTotalElementString);
    if(withdrawAmount > previousBalanceTotal) {
        alert("Baap er bank a eto taka nai");
        return;
    }
    //step 4 get withdraw total ammount 
    let withdrawTotal = previousWithdrawTotal + withdrawAmount;
    withdrawTotal = withdrawTotal.toFixed(2);
    withdrawTotal = parseFloat( withdrawTotal );
    // step 5 set withdraw total ammount
    withdrawElement.innerText = withdrawTotal;
    // step 7 calculate balance total ammount set balance total 
    let balanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal = balanceTotal.toFixed(2);
    balanceTotal = parseFloat( balanceTotal );
    balanceTotalElement.innerText = balanceTotal;
});