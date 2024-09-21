// console.log('button cliking file aded');

// from submit reloading the page
// var form=document.getElementById("formid");
// function submitForm(event){

//    //Preventing page refresh
//    event.preventDefault();
// }


document.getElementById('login_button').addEventListener('click',function(event){
    event.preventDefault();
    console.log('log in button click');

    const phoneNumber = document.getElementById('phone_number').value;
    console.log(phoneNumber);
    
    
})


// document.getElementById('phone_number').addEventListener('click')
