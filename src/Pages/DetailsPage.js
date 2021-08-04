import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/DetailsPage.css";
import { motion } from "framer-motion";
import { animationLeft2Right, animationRight2Left, transition } from "../Assets/Animations/animationIndex";

function DetailsPage(props) {
  const context = useContext(PortfolioContext);
  const project = props.match.params.project;
  const photoArray = context.projectDatabase[project].detailPhotos;
  const projectOverview = context.projectOverview;

  const projectIndex = projectOverview.findIndex((element) => element === project);
  const previousProject = projectOverview[(projectIndex + (projectOverview.length - 1)) % projectOverview.length];
  const nextProject = projectOverview[(projectIndex + (projectOverview.length + 1)) % projectOverview.length];

  //This let me change between animations, from left to right or from right to left
  let motionProps = "";
  if (context.windowDirection === "right") {
    motionProps = { initial: "one", animate: "two",exit:context.exit, variants: animationRight2Left, transition: transition };
  } else if (context.windowDirection === "left") {
    motionProps = { initial: "one", animate: "two", exit:context.exit, variants: animationLeft2Right, transition: transition };
  }

  const handleLeftLinkClick = () => {
    context.setWindowDirection("left");
    context.setExit('three')
  };

  const handleRightLinkClick = () => {
    context.setWindowDirection("right");
    context.setExit('three')
  };

  return (
    <div id="detailsContainer">
      <Link to={"/project/" + previousProject} onClick={handleLeftLinkClick}>
        <div id="leftTransparent"></div>
      </Link>
      <Link to={"/project/" + nextProject} onClick={handleRightLinkClick}>
        <div id="rightTransparent"></div>
      </Link>
      <div id="infoAndProjectContainer">
        <div id="projectInfo">
          <p className="detailName">{context.projectDatabase[project].name}</p>
          <p className="detail">{context.projectDatabase[project].year}</p>
          <p className="detail">Product Design</p>
          <p className="detail">worked on sich.design</p>
        </div>
        <motion.div id="projectDisplay" {...motionProps}>
          {photoArray.map((img) => (
            <div>
              <img src={img} alt="none" loading="lazy" key={img} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default DetailsPage;
