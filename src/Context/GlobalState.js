import PortfolioContext from "./PortfolioContext";
import BedroomRenderCover from "../Assets/Projects/BedroomRender/BedroomRenderCover.jpg";
import BedroomRender1 from "../Assets/Projects/BedroomRender/BedroomRender1.jpg";
import BedroomRender2 from "../Assets/Projects/BedroomRender/BedroomRender2.jpg";
import BedroomRender3 from "../Assets/Projects/BedroomRender/BedroomRender3.jpg";
import BedroomRender4 from "../Assets/Projects/BedroomRender/BedroomRender4.jpg";
import HotelRenderCover from "../Assets/Projects/HotelRender/HotelRenderCover.jpg";
import HotelRender1 from "../Assets/Projects/HotelRender/HotelRender1.jpg";
import HotelRender2 from "../Assets/Projects/HotelRender/HotelRender2.jpg";
import HotelRender3 from "../Assets/Projects/HotelRender/HotelRender3.jpg";
import HotelRender4 from "../Assets/Projects/HotelRender/HotelRender4.jpg";


function GlobalState({ children }) {
  const projects = ["BedroomRender"];
  const projectDatabase = {
    BedroomRender: {
      Name: "Bedroom Render",
      Year: 2020,
      cover: BedroomRenderCover,
      category: "CGI",
      detailPhotos: [BedroomRender1, BedroomRender2, BedroomRender3, BedroomRender4],
    },
    HotelRender: {
      Name: "Hotel Render",
      Year: 2019,
      cover: HotelRenderCover,
      category: "CGI",
      detailPhotos: [HotelRender1, HotelRender2, HotelRender3, HotelRender4],
    },
  };

  return <PortfolioContext.Provider value={{ projectDatabase, projects }}>{children}</PortfolioContext.Provider>;
}

export default GlobalState;
