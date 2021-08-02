import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/DetailsPage.css";
import { motion } from "framer-motion";
import { animationLeft2Right, animationRight2Left, transition } from "../Assets/Animations/animationIndex";

function DetailsPage(props) {
  const context = useContext(PortfolioContext);
  const project = props.match.params.project;
  const direction = props.location.props;
  const photoArray = context.projectDatabase[project].detailPhotos;
  const projectOverview = context.projectOverview;

  const projectIndex = projectOverview.findIndex((element) => element === project);
  const previousProject = projectOverview[(projectIndex + (projectOverview.length - 1)) % projectOverview.length];
  const nextProject = projectOverview[(projectIndex + (projectOverview.length + 1)) % projectOverview.length];

  // const motionProps = {
  //   ...(direction === undefined ? "" : {}),
  //   ...(direction.name === "right" ? { initial: "one", animate: "two", exit: "three", variants: { animationLeft2Right }, transition: { transition } } : {}),
  //   ...(direction.name === "right" ? { initial: "one", animate: "two", exit: "three", variants: { animationRight2Left }, transition: { transition } } : {}),
  // };

  console.log(direction)

  return (
    <div>
      <motion.div>
        <Link to={{ pathname: "/project/" + previousProject, props: { name: "left" } }}>
          <div id="leftTransparent"></div>
        </Link>
        <Link to={{ pathname: "/project/" + nextProject, props: { name: "right" } }}>
          <div id="rightTransparent"></div>
        </Link>
        <div id="projectInfo">
          <p className="detailName">{context.projectDatabase[project].name}</p>
          <p className="detail">{context.projectDatabase[project].year}</p>
          <p className="detail">Product Design</p>
          <p className="detail">worked on sich.design</p>
        </div>
        <div id="projectDisplay">
          {photoArray.map((img) => (
            <div>
              <img src={img} alt="none" loading="lazy" key={img} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default DetailsPage;
