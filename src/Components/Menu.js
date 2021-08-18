import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import "../Assets/Styles/Menu.css";
import crossHorizontal from "../Assets/Icons/crossHorizontal.svg";
import crossVertical from "../Assets/Icons/crossVertical.svg";
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
  console.log(window.innerWidth);

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
    context.handleRotation()
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
        <div className="mobileSpacing">
          <Link to="/SantiagoRuizPortfolio" id="title" onClick={() => handleClickLink("default")}>
            <h2>SANTIAGO</h2>
            <h2 id="lastName">RUIZ</h2>
          </Link>
          <div id="cross">
            <img src={crossHorizontal} alt="menu" id="crossHorizontal"/>
            <motion.img
              src={crossVertical}
              alt="menu"
              id="crossVertical"
              animate={{ rotate: context.rotation }}
              transition={{ type: "tween" }}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className={context.display}>
        <div id="bottomContainer">
          <div id="links">
            <Link to="/SantiagoRuizPortfolio/about" onClick={() => handleClickLink("about")}>
              {context.category === "about" && <p class="linkSelected">About</p>}
              {context.category === "default" && <p>About</p>}
              {context.category !== "about" && context.category !== "default" && <p class="unpressedLink">About</p>}
            </Link>
            <Link to="/SantiagoRuizPortfolio/industrial-design" onClick={() => handleClickLink("industrialDesign")}>
              {context.category === "industrialDesign" && <p class="linkSelected">Industrial Design</p>}
              {context.category === "default" && <p>Industrial Design</p>}
              {context.category !== "industrialDesign" && context.category !== "default" && <p class="unpressedLink">Industrial Design</p>}
            </Link>
            <Link to="/SantiagoRuizPortfolio/CGI" onClick={() => handleClickLink("CGI")}>
              {context.category === "CGI" && <p class="linkSelected">CGI</p>}
              {context.category === "default" && <p>CGI</p>}
              {context.category !== "CGI" && context.category !== "default" && <p class="unpressedLink">CGI</p>}
            </Link>
            <Link to="/SantiagoRuizPortfolio/graphics" onClick={() => handleClickLink("graphics")}>
              {context.category === "graphics" && <p class="linkSelected">Graphics</p>}
              {context.category === "default" && <p>Graphics</p>}
              {context.category !== "graphics" && context.category !== "default" && <p class="unpressedLink">Graphics</p>}
            </Link>
          </div>
          <div>
            <Link to="/SantiagoRuizPortfolio/contact" id="contact" onClick={() => handleClickLink("contact")}>
              {context.category === "contact" && <p class="linkSelected">Contact</p>}
              {context.category === "default" && <p>Contact</p>}
              {context.category !== "contact" && context.category !== "default" && <p class="unpressedLink">Contact</p>}
            </Link>
            {context.category !== "default" && (
              <a href="https://www.instagram.com/ruizsantiago/" rel="noreferrer noopener" target="_blank" id="instagram" class="unpressedLink">
                Instagram
              </a>
            )}
            {context.category === "default" && (
              <a href="https://www.instagram.com/ruizsantiago/" rel="noreferrer noopener" target="_blank" id="instagram">
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
