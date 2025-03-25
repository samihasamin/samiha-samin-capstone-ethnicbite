import "./OrderPage.scss";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderTotal from "../../components/OrderTotal/OrderTotal";

function OrderPage({ cartItems }) {
  return (
    <div className="order-page">
      <OrderForm />
      <OrderTotal cartItems={cartItems} />
    </div>
  );
}

export default OrderPage;
