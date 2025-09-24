const Header: React.FC = () => {
  return (
    <header id="home">
      <div className="header__container">
        <div className="header__content">
          <p>BUS YOUR TREVEL JOURNEY</p>
          <h1>Where Every Bus Ride Feels Magical!</h1>
          <div className="header__btns">
            <button className="btn">Book A Trip Now</button>
            <a href="#">
              <i className="ri-play-circle-line"></i>
            </a>
          </div>
        </div>
        <div className="header__image">
          <img src="../src/assets/images/hero-bg.webp" alt="header" />
        </div>
      </div>
    </header>
  );
};

export default Header;
