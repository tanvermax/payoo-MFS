// console.log('home added');

document.getElementById('btn-money_add').addEventListener('click', function (event) {
    event.preventDefault();
    const AddableMoney = document.getElementById('addable-money').value;
    console.log(AddableMoney);



    // console.log(moneyNum);

    const pinNumber2 = document.getElementById('pin_number2').value;
    console.log(typeof pinNumber2);


    // wrong way to validat
    if (pinNumber2 === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        const moneyNum = parseFloat(balance);
        const moneyADD = parseFloat(AddableMoney)

        const newBalance = moneyNum + moneyADD;
        console.log(newBalance);
// step 6 update the balance in DOM
document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('wrong PIN');

    }





})
