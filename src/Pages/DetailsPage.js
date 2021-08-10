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
  const [disable, setDisable] = useState("");
  const history = useHistory();

  const projectIndex = projectOverview.findIndex((element) => element === project);
  const previousProject = projectOverview[(projectIndex + (projectOverview.length - 1)) % projectOverview.length];
  const nextProject = projectOverview[(projectIndex + (projectOverview.length + 1)) % projectOverview.length];

  //This let me change between animations, from left to right or from right to left

  //This lines handle the animation
  let motionProps = "";
  if (context.windowDirection === "right") {
    motionProps = { initial: "one", animate: "two", exit: context.exit, variants: animationRight2Left, transition: transition };
  } else if (context.windowDirection === "left") {
    motionProps = { initial: "one", animate: "two", exit: context.exit, variants: animationLeft2Right, transition: transition };
  }
  //End of animations

  //This lines make the windows go to top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //End of windows go to top of the page

  //Handles click to go to the next and previous project
  const handleLeftLinkClick = () => {
    if (!disable) {
      context.setWindowDirection("left");
      context.setExit("three");
      history.push("/project/" + previousProject);
    }
  };

  const handleRightLinkClick = () => {
    if (!disable) {
      context.setWindowDirection("right");
      context.setExit("three");
      history.push("/project/" + nextProject);
    }
  };
  //End of handle Click

  //Handles swipe action to go to the previous and next Project in Desktop
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setDisable("disable");
      context.setWindowDirection("right");
      context.setExit("three");
      history.push("/project/" + nextProject);
    },
    onSwipedRight: () => {
      setDisable("disable");
      context.setWindowDirection("left");
      context.setExit("three");
      history.push("/project/" + previousProject);
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
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 20) {
      setDisable("disable");
      context.setWindowDirection("right");
      context.setExit("three");
      history.push("/project/" + nextProject);
    }

    if (touchStart - touchEnd < -20) {
      setDisable("disable");
      context.setWindowDirection("left");
      context.setExit("three");
      history.push("/project/" + previousProject);
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
          <p className="detail">{context.projectDatabase[project].year}</p>
          <div className="detail">
            {context.projectDatabase[project].textBox.map((line) => (
              <p>{line}</p>
            ))}
          </div>
        </div>
        <motion.div {...motionProps}>
          <div id="projectDisplay">
            {photoArray.map((img) => (
              <div {...handlers}>
                <img src={img} alt="none" loading="lazy" key={img} draggable="false" />
              </div>
            ))}
          </div>
          <div id="mobileArrows">
            <img src={leftArrow} alt="move left" onClick={handleLeftLinkClick} />
            <img src={rightArrow} alt="move left" onClick={handleRightLinkClick} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DetailsPage;
