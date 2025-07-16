function loadCart() {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getTotalItems(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartStatus() {
  const cart = loadCart();
  const status = document.getElementById('cart-status');
  status.textContent = `Carrito (${getTotalItems(cart)})`;
}

function addToCart(id, name, price) {
  const cart = loadCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  saveCart(cart);
  updateCartStatus();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartStatus();
  document.querySelectorAll('.add').forEach(btn => {
    btn.addEventListener('click', () => {
      const li = btn.parentElement;
      addToCart(li.dataset.id, li.dataset.name, Number(li.dataset.price));
    });
  });
});
