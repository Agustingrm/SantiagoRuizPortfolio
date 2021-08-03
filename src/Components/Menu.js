import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useState } from "react";
import "../Assets/Styles/Menu.css";
import cross from "../Assets/Icons/cross.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu() {
  const context = useContext(PortfolioContext);

  const [display, setDisplay] = useState("showMenu");

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
            <Link to="/">About</Link>
            <Link to="/overview">Overview</Link>
            <Link to="/industrial-design">Industrial Design</Link>
            <Link to="/CGI">CGI</Link>
            <Link to="/graphics">Graphics</Link>
          </div>
          <div id="contact">
            <p>Contact</p>
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
