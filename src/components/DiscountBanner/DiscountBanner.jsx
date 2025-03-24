import "./DiscountBanner.scss";

function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="discount-banner__card">
        <h3>Get 50% Off Your First Order!</h3>
        <h3>
          Use Code: <span>ETHNIC50</span>
        </h3>
      </div>
    </section>
  );
}

export default DiscountBanner;
