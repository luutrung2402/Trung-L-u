
function check(e) {
    const userName = document.getElementById('username').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const phoneNumberlength = phoneNumber.length;

    if (userName !== '' && phoneNumberlength === 10) {
        alert('Đăng kí thành công')
             
    }else {
        alert(`Khách hàng ${userName} cần điền đầy đủ thông tin`)
        e.preventDefault();
    }
}

document.getElementById('btn').addEventListener('click', check);