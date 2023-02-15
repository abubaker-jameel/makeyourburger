export default function Modal() {
  return (
    `
  <div class="checkout__modal" data-checkout-modal="checkout__modal">
    <div class="card">
      <div class="title">
        <h5>Checkout</h5>
        <i class="fa-sharp fa-solid fa-xmark font-24" data-close-icon="close__icon"></i>
      </div>
      <div class="body">
        <form action="">
          <div class="float__container">
            <i class="fa-regular fa-face-smile"></i>
            <div class="float__input">
              <label for="yourName">your name</label>
              <input type="text" name="" id="yourName" class="float__field semi-bold" data-placeholder="example">
            </div>
          </div>
          <div class="float__container">
            <i class="fa-solid fa-phone"></i>
            <div class="float__input">
              <label for="phoneNo">Phone Number</label>
              <input type="tel" name="" id="phoneNo" class="float__field semi-bold" data-placeholder="example">
            </div>
          </div>
          <div class="float__container">
            <i class="fa-solid fa-location-dot"></i>
            <div class="float__input">
              <label for="shippingAddress">Shipping Address</label>
              <input type="text" name="" id="shippingAddress" class="float__field semi-bold" data-placeholder="example">
            </div>
          </div>
          <div class="float__container">
            <i class="fa-sharp fa-regular fa-calendar-xmark"></i>
            <div class="float__input">
              <label for="timeToDelivery">Time to Delivery</label>
              <input type="text" name="" id="timeToDelivery" class="float__field semi-bold" data-placeholder="example">
            </div>
          </div>
        </form>
      </div>
      <div class="footer">
        <button class="btn--sm btn--ghost btn__cancel" data-btn-cancel="btn--cancel">cancel</button>
        <button class="btn--sm btn--primary btn__checkout">checkout</button>
      </div>
    </div>
  </div>
        `
  )
}