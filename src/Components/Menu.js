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

  console.log(dimension);

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
        menuTransition();
      } else if (window.matchMedia("(min-width: 751px)").matches) {
        setDisplay("showMenu");
      }
      context.resetAnimations();
    }, 100);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  // The code above is to handle rotation of the phone

  //Code to handle the transition of the Menu
  const menuTransition = () => {
    setDisplay("transitionMenu");
    console.log("alaal");
    setTimeout(() => setDisplay("hideMenu"), 600);
  };

  //End of code handling Menu Transition

  useEffect(() => {
    if (window.matchMedia("(max-width: 750px)").matches) {
      setDisplay("hideMenu");
    } else {
      setDisplay("showMenu");
    }
  }, []);

  const handleClick = () => {
    display === "showMenu" ? menuTransition() : setDisplay("showMenu");
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
        <Link to="/" onClick={handleClickLink} id="title">
          <h2>SANTIAGO</h2>
          <h2 id="lastName">RUIZ</h2>
        </Link>
        <div id="cross" onClick={handleClick}>
          <motion.img src={cross} alt="menu" animate={{ rotate: context.rotation }} onClick={context.handleRotation} />
        </div>
      </div>
      <div className={display}>
        <div id="bottomContainer">
          {/* Ver transicion para que sea con fading */}
          <div id="links">
            <Link to="/about" onClick={handleClickLink}>
              About
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
            <Link to="/contact" id="contact" onClick={handleClickLink}>
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
