import "./OrderPage.scss";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderTotal from "../../components/OrderTotal/OrderTotal";

function OrderPage({ cartItems }) {
  return (
    <>
      <OrderForm />
      <OrderTotal cartItems={cartItems} />
    </>
  );
}

export default OrderPage;
