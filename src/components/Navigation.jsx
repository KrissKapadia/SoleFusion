import { useState, useRef, useEffect } from 'react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="container">
      <div className="Logo">
        <img className="logo-color" src="./image 1.png" alt="logo" />
      </div>

      <ul className="nav-links">
        <li className="menu-item" onClick={toggleMenu} ref={dropdownRef}>
          MENU
          {menuOpen && (
            <ul className="dropdown">
              <li>Men’s Shoes</li>
              <li>Women’s Shoes</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Sale Items</li>
            </ul>
          )}
        </li>
        <li><a href="#">LOCATION</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navigation;
