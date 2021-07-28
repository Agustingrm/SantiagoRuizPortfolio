import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import About from "./Pages/About";
import IndustrialDesign from "./Pages/IndustrialDesign";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Route path="/about" exact component={About} />
        <Route path="/industrial-design" exact component={IndustrialDesign} />
      </BrowserRouter>
    </div>
  );
}

export default App;
