import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import Menu from "./Components/Menu";
import AboutPage from "./Pages/AboutPage";
import CGIPage from "./Pages/CGIPage";
import GraphicsPage from "./Pages/GraphicsPage";
import IndustrialDesignPage from "./Pages/IndustrialDesignPage";
import OverviewPage from "./Pages/OverviewPage";
import DetailsPage from "./Pages/DetailsPage";
import { AnimatePresence } from "framer-motion";
import ContactPage from "./Pages/ContactPage";

function App() {
  let location = useLocation();
  return (
    <GlobalState>
      <Menu />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={OverviewPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/industrial-design" exact component={IndustrialDesignPage} />
          <Route path="/CGI" exact component={CGIPage} />
          <Route path="/graphics" exact component={GraphicsPage} />
          <Route path="/project/:project" exact component={DetailsPage} />
        </Switch>
      </AnimatePresence>
    </GlobalState>
  );
}

export default App;
