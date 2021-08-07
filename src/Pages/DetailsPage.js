import PortfolioContext from "../Context/PortfolioContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Assets/Styles/DetailsPage.css";
import { motion } from "framer-motion";
import { animationLeft2Right, animationRight2Left, transition } from "../Assets/Animations/animationIndex";
import { useSwipeable } from "react-swipeable";

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

  let motionProps = "";
  if (context.windowDirection === "right") {
    motionProps = { initial: "one", animate: "two", exit: context.exit, variants: animationRight2Left, transition: transition };
  } else if (context.windowDirection === "left") {
    motionProps = { initial: "one", animate: "two", exit: context.exit, variants: animationLeft2Right, transition: transition };
  }

  const handleLeftLinkClick = () => {
    if (!disable) {
      context.setWindowDirection("left");
      context.setExit("three");
      history.push("/project/" + previousProject)
    }
  };

  const handleRightLinkClick = () => {
    if (!disable) {
      context.setWindowDirection("right");
      context.setExit("three");
      history.push("/project/" + nextProject)
    }
  };

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
    delta: 10,
  });

  return (
    <div id="detailsContainer" {...handlers}>
      <div className={disable}>
          <div id="leftTransparent" onClick={handleLeftLinkClick} draggable="false"></div>
          <div id="rightTransparent" onClick={handleRightLinkClick} draggable="false"></div>
      </div>
      <div id="infoAndProjectContainer">
        <div id="projectInfo">
          <p className="detailName">{context.projectDatabase[project].name}</p>
          <p className="detail">{context.projectDatabase[project].year}</p>
          <p className="detail">Product Design</p>
          <p className="detail">worked on sich.design</p>
        </div>
        <motion.div id="projectDisplay" {...motionProps}>
          {photoArray.map((img) => (
            <div {...handlers}>
              <img src={img} alt="none" loading="lazy" key={img} draggable="false" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default DetailsPage;
