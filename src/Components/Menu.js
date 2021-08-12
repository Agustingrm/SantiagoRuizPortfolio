import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import "../Assets/Styles/Menu.css";
import cross from "../Assets/Icons/cross.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Menu(props) {
  const context = useContext(PortfolioContext);

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
        context.setDisplay("hideMenu");
      } else if (window.matchMedia("(min-width: 751px)").matches) {
        context.setDisplay("showMenu");
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
    context.setDisplay("transitionMenu");
    setTimeout(() => context.setDisplay("hideMenu"), 130);
  };

  //End of code handling Menu Transition

  useEffect(() => {
    if (window.matchMedia("(max-width: 750px)").matches) {
      context.setDisplay("hideMenu");
    } else {
      context.setDisplay("showMenu");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    context.display === "showMenu" ? menuTransition() : context.setDisplay("showMenu");
  };

  const handleClickLink = (category) => {
    context.setCategory(category);
    context.resetAnimations();
    if (window.matchMedia("(max-width: 750px)").matches) {
      context.setDisplay("hideMenu");
    }
  };

  //This lines prevent the right click
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
  //End of right click prevention

  return (
    <div id="container">
      <div id="topContainer">
        <Link to="/SantiagoRuizPortfolio" id="title" onClick={() => handleClickLink("")}>
          <h2>SANTIAGO</h2>
          <h2 id="lastName">RUIZ</h2>
        </Link>
        <div id="cross" onClick={handleClick}>
          <motion.img src={cross} alt="menu" animate={{ rotate: context.rotation }} onClick={context.handleRotation} />
        </div>
      </div>
      <div className={context.display}>
        <div id="bottomContainer">
          <div id="links">
            <Link to="/SantiagoRuizPortfolio/about" onClick={() => handleClickLink("about")}>
              {context.category === "about" && (
                <p class='linkSelected'>
                  <strong>About</strong>
                </p>
              )}
              {context.category !== "about" && <p>About</p>}
            </Link>
            <Link to="/SantiagoRuizPortfolio/industrial-design" onClick={() => handleClickLink("industrialDesign")}>
              {context.category === "industrialDesign" && (
                <p class='linkSelected'>
                  <strong>Industrial Design</strong>
                </p>
              )}
              {context.category !== "industrialDesign" && <p>Industrial Design</p>}
            </Link>
            <Link to="/SantiagoRuizPortfolio/CGI" onClick={() => handleClickLink("CGI")}>
              {context.category === "CGI" && (
                <p class='linkSelected'>
                  <strong>CGI</strong>
                </p>
              )}
              {context.category !== "CGI" && <p>CGI</p>}
            </Link>
            <Link to="/SantiagoRuizPortfolio/graphics" onClick={() => handleClickLink("graphics")}>
              {context.category === "graphics" && (
                <p class='linkSelected'>
                  <strong>Graphics</strong>
                </p>
              )}
              {context.category !== "graphics" && <p>Graphics</p>}
            </Link>
          </div>
          <div>
            <Link to="/SantiagoRuizPortfolio/contact" id="contact" onClick={() => handleClickLink("contact")}>
              {context.category === "contact" && (
                <p class='linkSelected'>
                  <strong>Contact</strong>
                </p>
              )}
              {context.category !== "contact" && <p>Contact</p>}
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
