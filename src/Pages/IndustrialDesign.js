import img1 from "../Assets/IndustrialDesign/1.jpg";
import img2 from "../Assets/IndustrialDesign/2.jpg";
import img3 from "../Assets/IndustrialDesign/3.jpg";
import img4 from "../Assets/IndustrialDesign/4.jpg";
import img5 from "../Assets/IndustrialDesign/5.jpg";
import img6 from "../Assets/IndustrialDesign/6.jpg";
import img7 from "../Assets/IndustrialDesign/7.jpg";
import img8 from "../Assets/IndustrialDesign/8.jpg";
import img9 from "../Assets/IndustrialDesign/9.jpg";
import img10 from "../Assets/IndustrialDesign/10.jpg";
import img11 from "../Assets/IndustrialDesign/11.jpg";
import img12 from "../Assets/IndustrialDesign/12.jpg";
import img13 from "../Assets/IndustrialDesign/13.jpg";
import img14 from "../Assets/IndustrialDesign/14.jpg";
import img15 from "../Assets/IndustrialDesign/15.jpg";

import "../Assets/Styles/IndustrialDesign.css";

function IndustrialDesign() {
  let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  return (
    <div id="IndustrialDesignContainer">
      <div id="imgContainer">
        {images.map((img) => (
          <img src={img} alt="none" />
        ))}
        <div id='separator'></div>
      </div>
    </div>
  );
}

export default IndustrialDesign;
