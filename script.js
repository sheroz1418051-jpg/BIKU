const paymentButtons = document.querySelectorAll('.pay-btn');
const qrCards = document.querySelectorAll('.qr-card');

function setActiveMethod(methodName) {
  paymentButtons.forEach((button) => {
    const isActive = button.dataset.method === methodName;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  qrCards.forEach((card) => {
    const isVisible = card.dataset.qr === methodName;
    card.classList.toggle('active', isVisible);
  });
}

paymentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveMethod(button.dataset.method);
  });
});

setActiveMethod('easypaisa');
