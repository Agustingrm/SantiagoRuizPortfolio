import PortfolioContext from "../Context/PortfolioContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../Assets/Styles/ProjectContainer.css";

function OverviewPage() {
  const context = useContext(PortfolioContext);
  return (
    <div className="generalContainer">
      <div className="imgContainer">
        {context.projectOverview.map((projectName) => {
          return (
            <Link to={"/project/" + projectName} onClick={context.handleResetWindowDirection()}>
              <img src={context.projectDatabase[projectName].cover} alt={context.projectDatabase[projectName].name} loading="lazy" key={projectName} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default OverviewPage;
