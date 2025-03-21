import "./OrderPage.scss";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderTotal from "../../components/OrderTotal/OrderTotal";

function OrderPage() {
  return (
    <>
      <OrderForm />
      <OrderTotal />
    </>
  );
}

export default OrderPage;
