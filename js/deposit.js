document.getElementById("deposit").addEventListener("click", function(){
// step 1 get inputField value 
    const inputField = document.getElementById("deposit-input");
    const depositInputString = inputField.value;
    const depositAmount = parseFloat(depositInputString);
    // step 2 clear input field
    inputField.value = "" ;
    if(isNaN(depositAmount)){
        alert("Please enter a valid number")
        return ;
    }
    // step 3 get deposit element total 
    const depositElement = document.getElementById("deposittotal");
    const depositeElementString = depositElement.innerText;
    const previousDepositTotal = parseFloat(depositeElementString);
    // step 4 calculate deposit element total 
    let depositTotal = previousDepositTotal + depositAmount;
    depositTotal = depositTotal.toFixed(2);
    depositTotal = parseFloat(depositTotal);
    //step 5 set deposit element total 
    depositElement.innerText = depositTotal;
    //step 6 get previous Balance total 
    const balanceTotalElement = document.getElementById("balancetotal");
    console.log(balanceTotalElement)
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);
    // step 7 calculate balance total ammount and set balance total amout
    let balanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal = balanceTotal.toFixed(2);
    balanceTotal = parseFloat(balanceTotal);
    balanceTotalElement.innerText = balanceTotal;
});