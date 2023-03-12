// Lấy danh sách sản phẩm
const products = document.querySelectorAll('.option');

// Lấy giỏ hàng
const cart = document.querySelector('.carts');

// Lấy nút thêm sản phẩm vào giỏ hàng
const addToCartButtons = document.querySelectorAll('.option');

addToCartButtons.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    let btnItem = event.target;
    let product = btnItem.parentElement;
    let productImg = product.querySelector("img").src;
    let productName = product.querySelector(".options-name").innerText;
    let productPrice = product.querySelector(".price").innerText;
    addCart(productPrice, productImg, productName);
  });
});

function addCart(productPrice, productImg, productName) {
  let cartTable = document.querySelector("tbody");
  let addTr = document.createElement("tr");
  let cartItem = document.querySelectorAll("tbody tr")
  for (let i = 0; i < cartItem.length; i++) {
    let productT = document.querySelectorAll(".title")
    if (productT[i].innerHTML == productName) {
      return alert("Đã có trong hàng chờ đăng kí")
    }
  }
  let trContent = '<td style="display: flex; align-items: center;"><img src="' + productImg + '" alt="" width="70px;"><span class="title">' + productName + '</span></td><td><span class="prices">' + productPrice + '</span></td><td><input style="width: 30px; text-align: center; outline: none;" type="number"readonly value="1" min="1"></td><td><button class="delete-btn">Xóa</button></td>';
  addTr.innerHTML = trContent;
  cartTable.appendChild(addTr);

  // Thêm sự kiện xóa sản phẩm
  let deleteButton = addTr.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function () {
    addTr.remove();
    cartTotal();
  });
  cartTotal()
}

function cartTotal() {
  let cartItem = document.querySelectorAll("tbody tr")
  let totalC = 0
  for (let i = 0; i < cartItem.length; i++) {
    let inputValue = cartItem[i].querySelector("input").value
    let productPrice = cartItem[i].querySelector(".prices").innerHTML.replace(/\./g, '').replace(',', '.')
    let totalA = parseFloat(inputValue) * parseFloat(productPrice)
    totalC += totalA
    totalD = totalC.toLocaleString('de-DE')
  }
  let cartTotalA = document.querySelector(".price-total span")
  cartTotalA.innerHTML = totalD
}

// if () {
//   document.querySelector(".price-total span").innerHTML === '0'
// }

/**================================================================================================= */

document.getElementById('apply').addEventListener('click', function (e) {
  e.preventDefault()
  let nameClient = document.querySelector('.nameClient').value;
  let phonenumberClient = document.querySelector('.phonenumberClient').value;
  let voucher = document.getElementById('voucher').value;
  if (voucher === 'mindx' && nameClient !== '' && phonenumberClient !== '') {
    document.querySelector('h4').innerHTML = 'Chúc mừng khách hàng đã trúng gói voucher 1 tỷ <br> Voucher có hạn, khách hàng nhanh chóng mua xe để được áp dụng ';
  } else {
    document.querySelector('h4').innerHTML = '';
    alert('Khách hàng cần điền đầy đủ tên, số điện thoại và đúng mã voucher')
  }
})

console.log(document.querySelector(".price-total span"));

document.getElementById('registerBuycar').addEventListener('click', function (e) {
  let nameClient = document.querySelector('.nameClient').value;
  let phonenumberClient = document.querySelector('.phonenumberClient').value;

  if(nameClient === '' && phonenumberClient ===''){
    e.preventDefault();
    alert('Đăng kí không thành công')
  }else {
    alert('Đăng kí thành công')
  }
}
 
)