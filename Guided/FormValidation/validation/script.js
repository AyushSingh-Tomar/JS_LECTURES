var nameError= document.getElementById("name-error");
var phoneError= document.getElementById("phone-error");
var emailError= document.getElementById("email-error");
var messageError= document.getElementById("message-error");
var submitError= document.getElementById("submit-error");

// Name validation

function validateName(){
 var name= document.getElementById("contact-name").value.trim();
 if (name.length==0){
    nameError.innerHTML= "Name is required";
    return false;
 }
 if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
    nameError.innerHTML= "Please Enter full name";
    return false;
 }
 nameError.innerHTML='<span class="material-symbols-outlined" id="check-Sign">check_circle</span>';
 return true; 
}

// Phone number validation
function validatePhoneNumber(){
 var phoneNumber= document.getElementById("contact-phone").value.trim();
 if (phoneNumber.length==0){
    phoneError.innerHTML= "Phone number is required";
    return false;
 }
 if (phoneNumber.length!==10){
    phoneError.innerHTML= "Phone should contain 10 digits";
    return false;
 }
 if(!phoneNumber.match(/^\d{10}$/)){
    phoneError.innerHTML= "Phone number contains only digits";
    return false;
 }
 phoneError.innerHTML='<span class="material-symbols-outlined" id="check-Sign">check_circle</span>';
 return true; 
}
// email address validation
function validateEmail(){
 var email= document.getElementById("contact-email").value.trim();
 if (email.length==0){
    emailError.innerHTML= "Email address is required";
    return false;
 }
 if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML= "Invalid Email";
    return false;
 }
 emailError.innerHTML='<span class="material-symbols-outlined" id="check-Sign">check_circle</span>';
 return true; 
}
// Message validation
function validateMessage(){
 var msg= document.getElementById("contact-message").value.trim();
 var requirement=30;
 var left = requirement- msg.length;
 if (msg.length==0){
    messageError.innerHTML= "Please Enter a message";
    return false;
 }
 if(msg.length<requirement){
    messageError.innerHTML= `${left} more letters required`;
    return false;
 }
 messageError.innerHTML='<span class="material-symbols-outlined" id="check-Sign">check_circle</span>';
 return true; 
}

function validateForm(){
   if(!validateName() || !validateMessage() || !validatePhoneNumber() || !validateEmail()){
    submitError.style.display='block';
    submitError.innerHTML="Please fix all errors";
    setTimeout(function(){
        submitError.style.display='none';
    },3000)
    return false;
   }
   
}