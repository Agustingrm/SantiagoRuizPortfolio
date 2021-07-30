import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import "../Assets/Styles/DetailsPage.css";

function DetailsPage(props) {
  const context = useContext(PortfolioContext);
  const project = props.match.params.project;
  const photoArray = context.projectDatabase[project].detailPhotos;

  return (
    <div>
      <div id="projectInfo">
        <p className="detailName">{context.projectDatabase[project].name}</p>
        <p className="detail">{context.projectDatabase[project].year}</p>
        <p className="detail">Product Design</p>
        <p className="detail">worked on sich.design</p>
      </div>
      <div id="projectDisplay">
        {photoArray.map((img) => (
          <div>
            <img src={img} alt="none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;
