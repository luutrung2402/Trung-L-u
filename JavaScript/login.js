function removeLogin() {
    document.querySelector('.login').classList.add('removeLogin')
}

function addlogin() {
    document.querySelector('.login').classList.remove('removeLogin')
    document.querySelector('.register').classList.add('removeLogin')
}

function addRegister() {
    document.querySelector('.register').classList.remove('removeLogin')
    document.querySelector('.login').classList.add('removeLogin')
    document.querySelector('.success').innerHTML = ''
}

function removeRegister() {
    document.querySelector('.register').classList.add('removeLogin')
}

function addiconLogout() {
    document.querySelector('.iconLogout').classList.remove('disappear');
    document.querySelector('.iconLogin').classList.add('disappear');
}

function addnameAccount() {
    document.querySelector('.nameAccount').classList.remove('disappear')
}

function addiconLogin() {
    document.querySelector('.iconLogin').classList.remove('disappear');
    document.querySelector('.iconLogout').classList.add('disappear');
    document.querySelector('.nameAccount').classList.add('disappear');
    document.querySelector('.nameAccount p').innerHTML = ''
}

/**=============================================================================== */
/**-----------------------------Register---------------------------- */
let account = [
    {
        name: 'mindx',
        password: '1'
    }

];

const exitAccount = JSON.parse(localStorage.getItem('account'));
if (exitAccount) {
    account = exitAccount;
}

const formRegister = document.querySelector('.Register')
formRegister.addEventListener('submit', function register(e) {
    e.preventDefault();
    const newName = formRegister['name'].value;
    const newPassword = formRegister['password'].value;
    const againPassword = document.querySelector('#againPassword').value;
    const success = document.querySelector('.success');

    const newAccount = {
        name: newName,
        password: newPassword
    };
    for (let i = 0; i < account.length; i++) {
        if (newName === '' || newPassword === '') {
            success.innerHTML = 'Bạn cần nhập đủ thông tin';
            success.style.color = 'red';
        }
        else if (newName === account[i].name) {
            return alert('Tài khoản đã tồn tại');
        }
        else if (againPassword != newPassword) {
            return alert('Mật khẩu nhập lại không đúng')
        }
        else {
            alert('Đăng kí thành công');
            success.innerHTML = '';
            account.push(newAccount);
            return localStorage.setItem('account', JSON.stringify(account))
        }
    }

})
/**=============================================================================== */
/**---------------------Login ---------------------------------*/

const formLogin = document.querySelector('.account')
formLogin.addEventListener('submit', function login(e) {
    e.preventDefault();
    const name = formLogin['namelogin'].value;
    const password = formLogin['passwordlogin'].value;

    let bolen = false;
    if (account.length > 0) {
        for (let i = 0; i < account.length; i++) {
            if (name === account[i].name && password === account[i].password) {
                bolen = true;
                break;
            }
        }
    }
    if (bolen) {
        alert('Đăng nhập thành công');
        removeLogin();
        addnameAccount();
        document.querySelector('.nameAccount p').innerHTML = name;
        addiconLogout()
    } else {
        alert('Tài khoản không tồn tại')
    }
})

/**======================================================================================== */

function test(e) {
    if (document.querySelector('.nameAccount p').innerHTML.length !== 0) {
        window.location.href = e.target.href
    }
    else {
        alert('Bạn cần đăng nhập');
        e.preventDefault()
    }
}
const arrDom = document.querySelectorAll('.test');
for (let i = 0; i < arrDom.length; i++) {
    arrDom[i].addEventListener('click', test)
}


