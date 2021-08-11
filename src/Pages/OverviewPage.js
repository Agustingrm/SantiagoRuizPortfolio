import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import "../Assets/Styles/ProjectContainer.css";
import { motion } from "framer-motion";
import { fading, shortTransition } from "../Assets/Animations/animationIndex";

function OverviewPage() {
  const context = useContext(PortfolioContext);
  //This lines make the windows go to top of the page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //End of windows go to top of the page
  return (
    <motion.div className="generalContainer" initial="one" animate="two" exit="three" variants={fading} transition={shortTransition}>
      <div className="imgContainer">
        {context.projectOverview.map((projectName) => {
          return (
            <Link to={"/SantiagoRuizPortfolio/project/" + projectName} onClick={context.handleResetWindowDirection()} key={projectName}>
              <img src={context.projectDatabase[projectName].cover} alt={context.projectDatabase[projectName].name} loading="lazy" />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

export default OverviewPage;
