import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
// import SprinVerse from "../../assets/images/Sprin Verse.png";
import "./Header.scss";

import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Header: React.FC<{}> = () => {
  const [active, setActive] = useState(0);
  const [activeColor, setActiveColor] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="menu-bar" onClick={() => setOpen(true)}>
          <Menu />
        </div>
        <div className="logo">
          <Link to="/">
            <h1>Sprinverse</h1>
          </Link>
        </div>
        <div className="media-logo">
          <Link to="/">
            <h2>SV</h2>
          </Link>
        </div>

        <div className="nav">
          <div className="link" onClick={() => setActive(0)}>
            <Link to="/">
              <h2 className={active === 0 ? "active-color" : "color"}>Home</h2>
            </Link>
          </div>
          <div className="link" onClick={() => setActive(1)}>
            <Link to="/privacy-policy">
              <h2
                onClick={() => setActiveColor(!activeColor)}
                className={active === 1 ? "active-color" : "color"}
              >
                Privacy Policy
              </h2>
            </Link>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="side-bar"
              animate={{ top: 0, transitionDelay: "-200ms" }}
              exit={{ top: -900 }}
              initial={{ top: -300 }}
            >
              <div className="side-logo">
                <h1>SV</h1>
              </div>
              <div className="side-link" onClick={() => setActive(0)}>
                <Link to="/">
                  <h2
                    className={active === 0 ? "active-color" : "color"}
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </h2>
                </Link>
              </div>
              <div className="side-link" onClick={() => setActive(1)}>
                <Link to="/privacy-policy" onClick={() => setOpen(false)}>
                  <h2
                    onClick={() => setActiveColor(!activeColor)}
                    className={active === 1 ? "active-color" : "color"}
                  >
                    Privacy Policy
                  </h2>
                </Link>
              </div>
              <div className="close" onClick={() => setOpen(false)}>
                <Close />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
