// console.log('featytre file added');

document.getElementById('show-cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('cash-in-form').classList.add('hidden');
})



document.getElementById('show-cash-in').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('cash-in-form').classList.remove('hidden');
})
