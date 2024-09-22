// console.log('button cliking file aded');

// from submit reloading the page
// var form=document.getElementById("formid");
// function submitForm(event){

//    //Preventing page refresh
//    event.preventDefault();
// }


// document.getElementById('login_button').addEventListener('click',function(event){
//     event.preventDefault();
//     // console.log('log in button click');

//     const phoneNumber = document.getElementById('phone_number').value;
//     // console.log();
    
//     const pinNumber = document.getElementById('pin_number').value;
//     console.log(phoneNumber,pinNumber);
    

//     // thsi is not hte ideal way
//     if(phoneNumber=== '5' && pinNumber=== '1234'){
//         console.log('you are log in');
//         alert('WELCOME')
        
//     }
//     else{
//         alert('!!wrong phne number or pin')
//     }
// })


// document.getElementById('phone_number').addEventListener('click')

document.getElementById('login_button').addEventListener('click',function(event){
        event.preventDefault();
        const phoneNumber= document.getElementById('phone_number').value;
        const pinNumber=  document.getElementById('pin_number').value;
        console.log(phoneNumber,pinNumber);
        
        if(phoneNumber==='5'&& pinNumber==='1234'){
        console.log('yopu are log in');
        window.location.href= '/home.html';

        }
        else{
            alert('wrong phone number or pin')
        }
});