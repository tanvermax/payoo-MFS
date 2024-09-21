document.getElementById('btn-cash-out').addEventListener('click',function(event){
event.preventDefault();
const cashOut = document.getElementById('input-cash-out').value;
const pinNumber = document.getElementById('cash-out-pin').value;
const mainBalance = document.getElementById('account-balance').innerText;
console.log(mainBalance);

console.log(cashOut,pinNumber);
if (pinNumber ==='1234') {


    const newBalance = mainBalance-cashOut;

    console.log(newBalance);
document.getElementById('account-balance').innerText = newBalance;
    
}
else{
    alert('please try again later')
}

})
