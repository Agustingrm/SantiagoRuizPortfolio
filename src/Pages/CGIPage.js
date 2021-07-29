import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import "../Assets/Styles/ProjectContainer.css";

function CGIPage() {
  const context = useContext(PortfolioContext);
  return (
    <div className="generalContainer">
      <div className="imgContainer">
        {context.projectCGI.map((projectName) => {
          return <img src={context.projectDatabase[projectName].cover} alt="none" />;
        })}
        <div className="separator"></div>
      </div>
    </div>
  );
}

export default CGIPage;
