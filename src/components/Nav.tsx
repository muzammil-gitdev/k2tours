import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#tour", label: "TOUR" },
  { href: "#package", label: "PACKAGE" },
  { href: "#contact", label: "CONTACT" },
  { href: "#book", label: "BOOK TRIP" },
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <img
            src="../src/assets/k2tourslogo.webp"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? "open" : ""}`} id="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav__btns">
        <button className="btn">BOOK TRIP</button>
      </div>
    </nav>
  );
};

export default Nav;
