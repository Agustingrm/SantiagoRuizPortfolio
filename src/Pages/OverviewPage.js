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
            <Link to={"/project/" + projectName}>
              <img src={context.projectDatabase[projectName].cover} alt="none" />
            </Link>
          )
        })}
        <div className="separator"></div>
      </div>
    </div>
  );
}

export default OverviewPage;
