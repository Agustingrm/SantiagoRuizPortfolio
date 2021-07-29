import img1 from "../Assets/Projects/IndustrialDesign/1.jpg";
import img2 from "../Assets/Projects/IndustrialDesign/2.jpg";
import img3 from "../Assets/Projects/IndustrialDesign/3.jpg";
import img4 from "../Assets/Projects/IndustrialDesign/4.jpg";
import img5 from "../Assets/Projects/IndustrialDesign/5.jpg";
import img6 from "../Assets/Projects/IndustrialDesign/6.jpg";
import img7 from "../Assets/Projects/IndustrialDesign/7.jpg";
import img8 from "../Assets/Projects/IndustrialDesign/8.jpg";
import img9 from "../Assets/Projects/IndustrialDesign/9.jpg";
import img10 from "../Assets/Projects/IndustrialDesign/10.jpg";
import img11 from "../Assets/Projects/IndustrialDesign/11.jpg";
import img12 from "../Assets/Projects/IndustrialDesign/12.jpg";
import img13 from "../Assets/Projects/IndustrialDesign/13.jpg";
import img14 from "../Assets/Projects/IndustrialDesign/14.jpg";
import img15 from "../Assets/Projects/IndustrialDesign/15.jpg";

import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";
import "../Assets/Styles/IndustrialDesignPage.css";

function IndustrialDesignPage() {
  const context = useContext(PortfolioContext);
  let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  console.log(context.imageDatabase);
  const handleClick = () => {};
  return (
    <div id="IndustrialDesignContainer">
      <div id="imgContainerIndustrialDesign">
        {images.map((img) => (
          <img src={img} alt="none" onClick={handleClick} />
        ))}
        <div id="separator"></div>
      </div>
    </div>
  );
}

export default IndustrialDesignPage;
