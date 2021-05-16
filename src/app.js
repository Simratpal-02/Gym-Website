let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let state = document.getElementById('state')
let dob = document.getElementById('date')
let remarks = document.getElementById('remarks')

check= ()=>{
    if(name.value=='')
    {
        name.style.backgroundColor = '#ffd8f0';
        name.style.borderColor = '#a84860'
    }else{
        
        name.style.backgroundColor = 'f0ead2';
        name.style.borderColor = '#f0ead2'
        name.value=''
        state.value = ''
        dob.value = ''
        remarks.value = ''
    }
    if(email.value=='')
    {
        email.style.backgroundColor = '#ffd8f0';
        email.style.borderColor = '#a84860';
    }else{
        email.value=''
        email.style.borderColor = '#f0ead2'
        email.style.backgroundColor = '#f0ead2';
    }
    if(phone.value==''){
        phone.style.backgroundColor = '#ffd8f0';
        phone.style.borderColor = '#a84860';
    }
    else{
        phone.value=''
        phone.style.borderColor = '#f0ead2'
        phone.style.backgroundColor = 'f0ead2';
    }
}
$('input').attr('autocomplete','off');
document.getElementById('form-btn').addEventListener('click', check)



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}