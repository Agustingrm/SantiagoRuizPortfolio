import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import "../Assets/Styles/Menu.css";
import cross from "../Assets/Icons/cross.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
  const context = useContext(PortfolioContext);
  const [display, setDisplay] = useState("");

  // From here until the next comentary the code is to handle the rotation of the phone
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (window.matchMedia("(max-width: 750px)").matches) {
        setDisplay(dimension.height > dimension.width ? "showMenu" : "hideMenu");
      }
      context.resetAnimations();
    }, 100);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  // The code above is to handle rotation of the phone

  useEffect(() => {
    if (window.matchMedia("(max-width: 750px)").matches) {
      setDisplay("hideMenu");
    } else {
      setDisplay("showMenu");
    }
  }, []);

  const handleClick = () => {
    setDisplay(display === "showMenu" ? "hideMenu" : "showMenu");
  };

  const handleClickLink = () => {
    context.resetAnimations();
    if (window.matchMedia("(max-width: 750px)").matches) {
      handleClick();
    }
  };
  return (
    <div id="container">
      <div id="topContainer">
        <div id="title">
          <h2>Santiago</h2>
          <h2>Ruiz</h2>
        </div>
        <div id="cross" onClick={handleClick}>
          <motion.img src={cross} alt="menu" animate={{ rotate: context.rotation }} onClick={context.handleRotation} />
        </div>
      </div>
      <div className={display}>
        <div id="bottomContainer">
          <div id="links">
            <Link to="/" onClick={handleClickLink}>
              About
            </Link>
            <Link to="/overview" onClick={handleClickLink}>
              Overview
            </Link>
            <Link to="/industrial-design" onClick={handleClickLink}>
              Industrial Design
            </Link>
            <Link to="/CGI" onClick={handleClickLink}>
              CGI
            </Link>
            <Link to="/graphics" onClick={handleClickLink}>
              Graphics
            </Link>
          </div>
          <div id="contact">
            <Link to="/contact" id="contact">
              Contact
            </Link>
            <a href="https://www.instagram.com/ruizsantiago/" rel="noreferrer noopener" target="_blank" id="instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
