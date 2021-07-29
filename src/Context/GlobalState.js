import PortfolioContext from "./PortfolioContext";
import BedroomRenderCover from "../Assets/Projects/BedroomRender/BedroomRenderCover.jpg";
import BedroomRender1 from "../Assets/Projects/BedroomRender/BedroomRender1.jpg";
import BedroomRender2 from "../Assets/Projects/BedroomRender/BedroomRender2.jpg";
import BedroomRender3 from "../Assets/Projects/BedroomRender/BedroomRender3.jpg";
import BedroomRender4 from "../Assets/Projects/BedroomRender/BedroomRender4.jpg";
import CurtainsCover from "../Assets/Projects/Curtains/CurtainsCover.jpg";
import Curtains1 from "../Assets/Projects/Curtains/Curtains1.jpg";
import Curtains2 from "../Assets/Projects/Curtains/Curtains2.jpg";
import Curtains3 from "../Assets/Projects/Curtains/Curtains3.jpg";
import Curtains4 from "../Assets/Projects/Curtains/Curtains4.jpg";
import GrinderCover from "../Assets/Projects/Grinder/GrinderCover.jpg";
import Grinder1 from "../Assets/Projects/Grinder/Grinder1.jpg";
import Grinder2 from "../Assets/Projects/Grinder/Grinder2.jpg";
import Grinder3 from "../Assets/Projects/Grinder/Grinder3.jpg";
import Grinder4 from "../Assets/Projects/Grinder/Grinder4.jpg";
import HotelRenderCover from "../Assets/Projects/HotelRender/HotelRenderCover.jpg";
import HotelRender1 from "../Assets/Projects/HotelRender/HotelRender1.jpg";
import HotelRender2 from "../Assets/Projects/HotelRender/HotelRender2.jpg";
import HotelRender3 from "../Assets/Projects/HotelRender/HotelRender3.jpg";
import HotelRender4 from "../Assets/Projects/HotelRender/HotelRender4.jpg";
import KitchenCover from "../Assets/Projects/Kitchen/KitchenCover.jpg";
import Kitchen1 from "../Assets/Projects/Kitchen/Kitchen1.jpg";
import Kitchen2 from "../Assets/Projects/Kitchen/Kitchen2.jpg";
import Kitchen3 from "../Assets/Projects/Kitchen/Kitchen3.jpg";
import Kitchen4 from "../Assets/Projects/Kitchen/Kitchen4.jpg";
import KnifeCover from "../Assets/Projects/Knife/KnifeCover.jpg";
import Knife1 from "../Assets/Projects/Knife/Knife1.jpg";
import Knife2 from "../Assets/Projects/Knife/Knife2.jpg";
import Knife3 from "../Assets/Projects/Knife/Knife3.jpg";
import Knife4 from "../Assets/Projects/Knife/Knife4.jpg";
import MirrorCover from "../Assets/Projects/Mirror/MirrorCover.jpg";
import Mirror1 from "../Assets/Projects/Mirror/Mirror1.jpg";
import Mirror2 from "../Assets/Projects/Mirror/Mirror2.jpg";
import Mirror3 from "../Assets/Projects/Mirror/Mirror3.jpg";
import Mirror4 from "../Assets/Projects/Mirror/Mirror4.jpg";
import SofaRenderCover from "../Assets/Projects/SofaRender/SofaRenderCover.jpg";
import SofaRender1 from "../Assets/Projects/SofaRender/SofaRender1.jpg";
import SofaRender2 from "../Assets/Projects/SofaRender/SofaRender2.jpg";
import SofaRender3 from "../Assets/Projects/SofaRender/SofaRender3.jpg";
import SpoonCover from "../Assets/Projects/Spoon/SpoonCover.jpg";
import Spoon1 from "../Assets/Projects/Spoon/Spoon1.jpg";
import Spoon2 from "../Assets/Projects/Spoon/Spoon2.jpg";
import Spoon3 from "../Assets/Projects/Spoon/Spoon3.jpg";
import Spoon4 from "../Assets/Projects/Spoon/Spoon4.jpg";
import WheelCover from "../Assets/Projects/Wheel/WheelCover.jpg";
import Wheel1 from "../Assets/Projects/Wheel/Wheel1.jpg";
import Wheel2 from "../Assets/Projects/Wheel/Wheel2.jpg";
import Wheel3 from "../Assets/Projects/Wheel/Wheel3.jpg";
import Wheel4 from "../Assets/Projects/Wheel/Wheel4.jpg";

function GlobalState({ children }) {
  const projectOverview = ["BedroomRender", "Curtains", "Grinder", "HotelRender", "Kitchen", "Knife", "Mirror", "SofaRender", "Wheel", "Spoon"];
  const projectCGI = ["BedroomRender", "SofaRender", "HotelRender"];
  const projectGraphics = ["Wheel", "Kitchen", "Curtains"];
  const projectIndustrialDesign = ["Grinder", "Knife", "Mirror", "Spoon"];

  const projectDatabase = {
    BedroomRender: {
      Name: "Bedroom Render",
      Year: 2020,
      cover: BedroomRenderCover,
      category: "CGI",
      detailPhotos: [BedroomRender1, BedroomRender2, BedroomRender3, BedroomRender4],
    },
    Curtains: {
      Name: "Curtains",
      Year: 2020,
      cover: CurtainsCover,
      category: "graphics",
      detailPhotos: [Curtains1, Curtains2, Curtains3, Curtains4],
    },
    Grinder: {
      Name: "Grinder",
      Year: 2020,
      cover: GrinderCover,
      category: "industrialDesign",
      detailPhotos: [Grinder1, Grinder2, Grinder3, Grinder4],
    },
    HotelRender: {
      Name: "Hotel Render",
      Year: 2019,
      cover: HotelRenderCover,
      category: "CGI",
      detailPhotos: [HotelRender1, HotelRender2, HotelRender3, HotelRender4],
    },
    Kitchen: {
      Name: "Kitchen",
      Year: 2019,
      cover: KitchenCover,
      category: "graphics",
      detailPhotos: [Kitchen1, Kitchen2, Kitchen3, Kitchen4],
    },
    Knife: {
      Name: "Knife",
      Year: 2019,
      cover: KnifeCover,
      category: "industrialDesign",
      detailPhotos: [Knife1, Knife2, Knife3, Knife4],
    },
    Mirror: {
      Name: "Mirror",
      Year: 2019,
      cover: MirrorCover,
      category: "industrialDesign",
      detailPhotos: [Mirror1, Mirror2, Mirror3, Mirror4],
    },
    SofaRender: {
      Name: "Sofa Render",
      Year: 2019,
      cover: SofaRenderCover,
      category: "CGI",
      detailPhotos: [SofaRender1, SofaRender2, SofaRender3],
    },
    Spoon: {
      Name: "Spoon",
      Year: 2019,
      cover: SpoonCover,
      category: "industrialDesign",
      detailPhotos: [Spoon1, Spoon2, Spoon3, Spoon4],
    },
    Wheel: {
      Name: "Wheel",
      Year: 2019,
      cover: WheelCover,
      category: "graphics",
      detailPhotos: [Wheel1, Wheel2, Wheel3, Wheel4],
    },
  };

  return (
    <PortfolioContext.Provider value={{ projectDatabase, projectOverview, projectCGI, projectGraphics, projectIndustrialDesign }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default GlobalState;
