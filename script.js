function loadCart() {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartStatus() {
  const cart = loadCart();
  const status = document.getElementById('cart-status');
  status.textContent = `Carrito (${cart.length})`;
}

function addToCart(id, name) {
  const cart = loadCart();
  cart.push({id, name});
  saveCart(cart);
  updateCartStatus();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartStatus();
  document.querySelectorAll('.add').forEach(btn => {
    btn.addEventListener('click', () => {
      const li = btn.parentElement;
      addToCart(li.dataset.id, li.dataset.name);
    });
  });
});
