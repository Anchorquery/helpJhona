function loadCart() {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  const cart = loadCart();
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    const remove = document.createElement('button');
    remove.textContent = 'Eliminar';
    remove.addEventListener('click', () => {
      cart.splice(index, 1);
      saveCart(cart);
      renderCart();
    });
    li.appendChild(remove);
    list.appendChild(li);
  });
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  document.getElementById('clear-cart').addEventListener('click', clearCart);
});
