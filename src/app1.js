var timing1 = document.getElementById('t1')
var timing2 = document.getElementById('t2')


timing1.addEventListener('click', function(){
    if(this.style.backgroundColor == '' || this.style.backgroundColor == 'rgb(204, 228, 255)')
    {
        this.style.backgroundColor = '#01499D'
        this.style.color = 'white'
        timing2.style.backgroundColor = '#CCE4FF'
        timing2.style.color = 'grey'
    }
    else{
        this.style.backgroundColor = '#CCE4FF'
        this.style.color = '01499D'
    }
})

timing2.addEventListener('click', function(){
    if(this.style.backgroundColor == '' || this.style.backgroundColor == 'rgb(204, 228, 255)')
    {
        this.style.backgroundColor = '#01499D'
        this.style.color = 'white'
        timing1.style.backgroundColor = '#CCE4FF'
        timing1.style.color = 'grey'
    }
    else{
        this.style.backgroundColor = '#CCE4FF'
        this.style.color = '01499D'
    }
})

var plan1 = document.getElementById('p1')
var plan2 = document.getElementById('p2')

plan1.addEventListener('click', function(){
    if(this.style.backgroundColor == '' || this.style.backgroundColor == 'rgb(204, 228, 255)')
    {
        this.style.backgroundColor = '#01499D'
        this.style.color = 'white'
        plan2.style.backgroundColor = '#CCE4FF'
        plan2.style.color = 'grey'
    }
    else{
        this.style.backgroundColor = '#CCE4FF'
        this.style.color = '01499D'
    }
})

plan2.addEventListener('click', function(){
    if(this.style.backgroundColor == '' || this.style.backgroundColor == 'rgb(204, 228, 255)')
    {
        this.style.backgroundColor = '#01499D'
        this.style.color = 'white'
        plan1.style.backgroundColor = '#CCE4FF'
        plan1.style.color = 'grey'
    }
    else{
        this.style.backgroundColor = '#CCE4FF'
        this.style.color = '01499D'
    }
})

let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

var tosubmitn = false;
var tosubmite = false;
var tosubmitp = false;

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Submit" && tosubmitp && tosubmitn && tosubmite) {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit" && tosubmitp && tosubmitn && tosubmite) {
    buttonText.innerHTML = tickMark;
  }
  if(tosubmite && tosubmitp && tosubmitn)
  {
      this.classList.toggle('button__circle');
      alert('Are you sure you want to submit?')
  }
});

var email = document.getElementById('email')
var phone = document.getElementById('phone')
var timing = document.getElementById('timings')
var n = document.getElementById('n')

function check(){

    if(n.value == '')
    {
        n.style.borderColor = 'red'
        n.style.backgroundColor = '#fff4f4'
    }else{
        tosubmitn = true;
        n.style.borderColor = '#01499D'
        n.style.backgroundColor = '#CCE4FF'
        
    }
    
    if(email.value == '')
    {
        email.style.borderColor = 'red'
        email.style.backgroundColor = '#fff4f4'
    }
    else{
        tosubmite = true
        email.style.borderColor = '#01499D'
        email.style.backgroundColor = '#CCE4FF'
    }

    if(phone.value == '')
    {
        phone.style.borderColor = 'red'
        phone.style.backgroundColor = '#fff4f4'
    }
    else{
        tosubmitp = true
        phone.style.borderColor = '#01499D'
        phone.style.backgroundColor = '#CCE4FF'
    }
    

}

document.getElementById('submit').addEventListener('click', check)
