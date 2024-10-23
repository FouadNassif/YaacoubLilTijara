"use client";

import { useState, useEffect } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { text: "Home", id: "home-section" },
    { text: "Shop", id: "shop-section" },
    { text: "Contact", id: "contact-section" },
  ];

  // Handle scrolling to sections
  const handleScroll = (id, index) => {
    setActiveLink(index);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`flex justify-between w-full bg-black transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h2 translate="no">يعقوب للتجارة</h2>
      <div className="navLinks_con">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            text={item.text}
            isActive={activeLink === index}
            handleClick={() => handleScroll(item.id, index)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
