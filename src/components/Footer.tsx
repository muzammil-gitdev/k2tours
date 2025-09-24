interface FooterLink {
  href: string;
  label: string;
  icon?: string;
}

const quickLinks: FooterLink[] = [
  { href: "#home", label: "Home" },
  { href: "#bus", label: "Bus" },
  { href: "#hotels", label: "Hotels" },
  { href: "#cruise", label: "Cruise" },
];

const contactLinks: FooterLink[] = [
  { href: "tel:051-5163314", label: "051-5163314", icon: "ri-phone-line" },
  {
    href: "mailto:info@K2-Tours",
    label: "info@K2-Tours",
    icon: "ri-mail-line",
  },
  { href: "#", label: "Skardu, Pakistan", icon: "ri-map-pin-line" },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <img src="img/logo.png" alt="logo" className="logo" />
          <p>
            Explore the world with ease and excitement through our all-in-one
            bus travel platform. Your journey begins here — where smooth
            planning meets unforgettable road experiences.
          </p>
          <div className="footer__socials">
            <a href="#">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="#">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <div className="footer__links">
            {quickLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <div className="footer__links">
            {contactLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <span>
                  <i className={link.icon}></i>
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer__col">
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 Code Prashtt. All rights reserved.
        <br />
        Distributed by K2 Tours
      </div>
    </footer>
  );
};

export default Footer;
