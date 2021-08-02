import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/ProjectContainer.css";

function IndustrialDesignPage() {
  const context = useContext(PortfolioContext);
  return (
    <div className="generalContainer">
      <div className="imgContainer">
      {context.projectIndustrialDesign.map((projectName) => {
          return (
            <Link to={"/project/" + projectName}>
              <img src={context.projectDatabase[projectName].cover} alt={context.projectDatabase[projectName].name} loading="lazy"/>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default IndustrialDesignPage;
