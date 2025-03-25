import "./OrderTotal.scss";

function OrderTotal({ cartItems }) {
  const taxRate = 0.13;
  const shippingFee = 2.0;

  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += Number(cartItems[i].price) || 0;
  }

  const tax = subtotal * taxRate;
  const total = Number(subtotal + tax + shippingFee);

  return (
    <>
      <div className="order-total">
        <ul className="order-total__cart">
          {cartItems.map((item) => (
            <li key={item.id} className="order-total__cart-item">
              <img
                src={item.image_url}
                alt={item.name}
                className="order-total__cart-item-image"
              />
              <div className="order-total__cart-details">
                <p className="order-total__cart-details-name">{item.name}</p>
                <p className="order-total__cart-details-price">
                  ${Number(item.price).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="order-total__details">
          <p>
            Subtotal: <span>${Number(subtotal).toFixed(2)}</span>
          </p>
          <p>
            Tax: <span>${tax.toFixed(2)}</span>
          </p>
          <p>
            Shipping Fee: <span>${shippingFee.toFixed(2)}</span>
          </p>
        </div>
        <div className="order-total__coupon">
          <label className="order-total__coupon-label" htmlFor="coupon">
            Apply Coupon
          </label>
          <input
            className="order-total__coupon-input"
            type="text"
            name="coupon"
            id="coupon"
          />
          <button className="order-total__coupon-apply">Apply</button>
        </div>
        <div className="order-total__final">
          <h3>
            Total: <span>${total.toFixed(2)}</span>
          </h3>
        </div>
        <div className="order-total__action">
          <button className="order-total__action-checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default OrderTotal;
