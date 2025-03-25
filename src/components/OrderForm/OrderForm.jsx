import "./OrderForm.scss";

function OrderForm() {
  return (
    <div className="order-form">
      <h1 className="order-form__title">Your Order</h1>
      <form className="order-form__details">
        <div className="order-form__details-name">
          <label className="order-form__details-name-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="order-form__details-name-input"
            id="name"
            name="name"
            placeholder="Enter Full Name Here"
          />
        </div>
        <div className="order-form__details-address">
          <label
            className="order-form__details-address-label"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            className="order-form__details-address-input"
            id="address"
            name="address"
            placeholder="Enter Full Address Here"
          />
        </div>
        <div className="order-form__details-phone">
          <label className="order-form__details-phone-label" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            className="order-form__details-phone-input"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number Here"
          />
        </div>
        <div className="order-form__details-email">
          <label className="order-form__details-email-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="order-form__details-email-input"
            id="email"
            name="email"
            placeholder="Enter Email Address Here"
          />
        </div>
        <div className="order-form__details-creditcard">
          <label className="order-form__details-creditcard-label">
            Credit Card
            <input
              type="text"
              className="order-form__details-creditcard-name"
              name="cardholder"
              placeholder="Cardholder Name"
            />
            <input
              type="number"
              className="order-form__details-creditcard-number"
              name="number"
              placeholder="Enter Card Number"
            />
            <input
              type="month"
              className="order-form__details-creditcard-date"
              name="expiry"
              placeholder="MM/YYYY"
            />
            <input
              type="current-password"
              className="order-form__details-creditcard-code"
              name="cvv"
              placeholder="Enter 3-Digit CVV"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
