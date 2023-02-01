const webBtn = document.querySelector('button')
webBtn.addEventListener('click', inputName)

function inputName(){
    let name = prompt("enter your name");
    let id = prompt('enter your id');
    let passWrd = prompt('enter you password');
    let pinCode = prompt('enter pin code');
    alert('almost done press ok to continue');
    alert('authenticate plz wait');
    webBtn.textContent = 'You verified : ' + name + '  ' + 'thank you for visit';
}


// const x = 10 < 3;
