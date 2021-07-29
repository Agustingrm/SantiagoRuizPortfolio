import { BrowserRouter, Route } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import Menu from "./Components/Menu";
import AboutPage from "./Pages/AboutPage";
import CGIPage from "./Pages/CGIPage";
import GraphicsPage from "./Pages/GraphicsPage";
import IndustrialDesignPage from "./Pages/IndustrialDesignPage";

function App() {
  return (
      <GlobalState>
        <BrowserRouter>
          <Menu />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/industrial-design" exact component={IndustrialDesignPage} />
          <Route path="/CGI" exact component={CGIPage} />
          <Route path="/graphics" exact component={GraphicsPage} />
        </BrowserRouter>
      </GlobalState>
  );
}

export default App;
