



const btn = document.getElementById('form')

btn.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailInput = document.querySelector('#exampleInputEmail1')
    let passInput = document.querySelector('#exampleInputPassword1')

    if (emailInput !== 'user@gmail.com' && passInput !== '123ee') {
        window.location.href = 'menu.html'
    } else {
        alert('sifre ve ya emailiniz yanlisdir')
    }
})

