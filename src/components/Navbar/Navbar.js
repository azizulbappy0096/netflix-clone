import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav--black" : ""}`}>
      <img
        className="netflix-logo"
        src={"./images/netflix-logo.png"}
        alt="Netflix Logo"
      />
      <img
        className="netflix-avatar"
        src={"./images/Netflix-avatar.png"}
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Navbar;
