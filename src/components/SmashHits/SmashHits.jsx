import "./SmashHits.scss";

function SmashHits() {
  return (
    <section className="smash-hits">
      <div className="smash-hits__headline">
        <h3 className="smash-hits__headline-title">
          The <span>EthnicBite Experience</span> - Our Smash Hits!
        </h3>
        <p className="smash-hits__headline-description">
          Discover our most loved meals. Prepared with passion and tradition
        </p>
      </div>
      <div className="smash-hits__meals">
        {/* <img src={ChingriMalai} alt="Chingri Malai" />
        <img src={TacosAlPastor} alt="TacosAlPastor" />
        <img src={KimchiJjigae} alt="Kimchi Jjigae" />
        <img src={CoqAuVin} alt="Coq au Vin" />
        <img src={MangoStickyRice} alt="Mango Sticky Rice" /> */}
      </div>
    </section>
  );
}

export default SmashHits;
