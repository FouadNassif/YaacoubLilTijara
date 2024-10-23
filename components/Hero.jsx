const Hero = () => {
  return (
    <div className="hero-container" id="home-section">
      <img
        src="/assets/Images/Hero.jpg"
        alt="Hero Image"
        className="hero-image"
      />

      <div className="overlay">
        <h1 className="hero-title" translate="no">يعقوب للتجارة</h1>
        <p className="hero-description" translate="no">
          <span className="turbo-text"> TURBO </span>مبيع و صيانة جميع انواع
        </p>
        <p className="hero-subtext" translate="no">بري  <span className="tab_sapce"></span>و<span className="tab_sapce"></span>  بحري</p>
      </div>
    </div>
  );
};

export default Hero;
