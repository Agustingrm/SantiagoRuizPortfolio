import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import "../Assets/Styles/Menu.css";
import cross from "../Assets/Icons/cross.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
  const context = useContext(PortfolioContext);

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
  });

  let minWidth = window.matchMedia("(min-width: 400px)").matches;
  const [display, setDisplay] = useState("");

  let win = window.resize;
  useEffect(() => {
    console.log(win);
    if (window.matchMedia("(max-width: 750px)").matches) {
      setDisplay("hideMenu");
    } else {
      setDisplay("showMenu");
    }
  }, [win]);

  const handleClick = () => {
    setDisplay(display === "showMenu" ? "hideMenu" : "showMenu");
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
            <Link to="/" onClick={context.resetAnimations}>
              About
            </Link>
            <Link to="/overview" onClick={context.resetAnimations}>
              Overview
            </Link>
            <Link to="/industrial-design" onClick={context.resetAnimations}>
              Industrial Design
            </Link>
            <Link to="/CGI" onClick={context.resetAnimations}>
              CGI
            </Link>
            <Link to="/graphics" onClick={context.resetAnimations}>
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
