/* eslint-disable react-hooks/exhaustive-deps */
import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Assets/Styles/DetailsPage.css";
import { motion } from "framer-motion";
import { animationLeft2Right, animationRight2Left, transition } from "../Assets/Animations/animationIndex";
import { useSwipeable } from "react-swipeable";
import leftArrow from "../Assets/Icons/leftArrow.svg";
import rightArrow from "../Assets/Icons/rightArrow.svg";

function DetailsPage(props) {
  const context = useContext(PortfolioContext);
  const project = props.match.params.project;
  const photoArray = context.projectDatabase[project].detailPhotos;
  const projectOverview = context.projectOverview;
  const projectCGI = context.projectCGI;
  const projectGraphics = context.projectGraphics;
  const projectIndustrialDesign = context.projectIndustrialDesign;
  const [disable, setDisable] = useState("");
  const history = useHistory();

  //Find index of project where we are standing 
  const projectOverviewIndex = projectOverview.findIndex((element) => element === project);
  const projectCGIIndex = projectCGI.findIndex((element) => element === project);
  const projectGraphicsIndex = projectGraphics.findIndex((element) => element === project);
  const projectIndustrialDesignIndex = projectIndustrialDesign.findIndex((element) => element === project);
  //End of project find index

  //Takes you to next and previous project
  let previousProject = projectOverview[(projectOverviewIndex + (projectOverview.length - 1)) % projectOverview.length];
  let nextProject = projectOverview[(projectOverviewIndex + (projectOverview.length + 1)) % projectOverview.length];
  //End of next and previous project
  //This let me change between animations, from left to right or from right to left

  //This lines handle the animation
  let motionProps = "";
  if (context.windowDirection === "right") {
    motionProps = { initial: "one", animate: "two", exit: context.exit, variants: animationRight2Left, transition: transition };
  } else if (context.windowDirection === "left") {
    motionProps = { initial: "one", animate: "two", exit: context.exit, variants: animationLeft2Right, transition: transition };
  }
  //End of animations

  useEffect(() => {
    //Chooses the array of project acording the section
    if (context.category === "default") {
      previousProject = projectOverview[(projectOverviewIndex + (projectOverview.length - 1)) % projectOverview.length];
      nextProject = projectOverview[(projectOverviewIndex + (projectOverview.length + 1)) % projectOverview.length];
    } else if (context.category === "CGI") {
      previousProject = projectCGI[(projectCGIIndex + (projectCGI.length - 1)) % projectCGI.length];
      nextProject = projectCGI[(projectCGIIndex + (projectCGI.length + 1)) % projectCGI.length];
    } else if (context.category === "industrialDesign") {
      previousProject = projectIndustrialDesign[(projectIndustrialDesignIndex + (projectIndustrialDesign.length - 1)) % projectIndustrialDesign.length];
      nextProject = projectIndustrialDesign[(projectIndustrialDesignIndex + (projectIndustrialDesign.length + 1)) % projectIndustrialDesign.length];
    } else if (context.category === "graphics") {
      previousProject = projectGraphics[(projectGraphicsIndex + (projectGraphics.length - 1)) % projectGraphics.length];
      nextProject = projectGraphics[(projectGraphicsIndex + (projectGraphics.length + 1)) % projectGraphics.length];
    }
    //End of array choosing

    //This lines make the windows go to top of the page on load
    window.scrollTo(0, 0);
    //End of windows go to top of the page
  }, []);

  //Handles click to go to the next and previous project
  const handleLeftLinkClick = () => {
    if (!disable) {
      context.setWindowDirection("left");
      context.setExit("three");
      history.push("/SantiagoRuizPortfolio/project/" + previousProject);
    }
  };

  const handleRightLinkClick = () => {
    if (!disable) {
      context.setWindowDirection("right");
      context.setExit("three");
      history.push("/SantiagoRuizPortfolio/project/" + nextProject);
    }
  };
  //End of handle Click

  //Handles swipe action to go to the previous and next Project in Desktop
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDisable("disable");
      context.setWindowDirection("right");
      context.setExit("three");
      history.push("/SantiagoRuizPortfolio/project/" + nextProject);
    },
    onSwipedRight: () => {
      setDisable("disable");
      context.setWindowDirection("left");
      context.setExit("three");
      history.push("/SantiagoRuizPortfolio/project/" + previousProject);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 100,
  });
  //Ends of handle swipe

  //Handles swipe action to go to the previous and next Project in mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
    if (context.display === "hideMenu") {
      setTouchStart(e.targetTouches[0].clientX);
    }
  }

  function handleTouchMove(e) {
    if (context.display === "hideMenu") {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  }

  function handleTouchEnd() {
    if (context.display === "hideMenu") {
      if (touchStart - touchEnd > 100) {
        setDisable("disable");
        context.setWindowDirection("right");
        context.setExit("three");
        history.push("/SantiagoRuizPortfolio/project/" + nextProject);
      }

      if (touchStart - touchEnd < -100) {
        setDisable("disable");
        context.setWindowDirection("left");
        context.setExit("three");
        history.push("/SantiagoRuizPortfolio/project/" + previousProject);
      }
    }
  }
  //End of Handle Swipe mobile

  return (
    <div id="detailsContainer" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className={disable} {...handlers}>
        <div id="leftTransparent" onClick={handleLeftLinkClick} draggable="false"></div>
        <div id="rightTransparent" onClick={handleRightLinkClick} draggable="false"></div>
      </div>
      <div id="infoAndProjectContainer">
        <div id="projectInfo">
          <p className="detailName">{context.projectDatabase[project].name}</p>
          <p className="detailYear">{context.projectDatabase[project].year}</p>
          <div className="detailText">
            {context.projectDatabase[project].textBox.map((line) => (
              <p key={line} className="detail">
                {line}
              </p>
            ))}
          </div>
        </div>
        <motion.div {...motionProps}>
          <div id="projectDisplay">
            {photoArray.map((img) => (
              <div {...handlers} key={img}>
                <img src={img} alt="none" loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
          <div id="mobileArrows">
            <img src={leftArrow} alt="move left" onClick={handleLeftLinkClick} />
            <p>{context.projectDatabase[project].name}</p>
            <img src={rightArrow} alt="move left" onClick={handleRightLinkClick} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DetailsPage;
