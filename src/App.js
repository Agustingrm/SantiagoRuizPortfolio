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
      <AnimatePresence >
        <Switch location={location} key={location.pathname}>
            <Route path="/SantiagoRuizPortfolio" exact component={OverviewPage} />
            <Route path="/SantiagoRuizPortfolio/about" exact component={AboutPage} />
            <Route path="/SantiagoRuizPortfolio/contact" exact component={ContactPage} />
            <Route path="/SantiagoRuizPortfolio/industrial-design" exact component={IndustrialDesignPage} />
            <Route path="/SantiagoRuizPortfolio/CGI" exact component={CGIPage} />
            <Route path="/SantiagoRuizPortfolio/graphics" exact component={GraphicsPage} />
            <Route path="/SantiagoRuizPortfolio/project/:project" exact component={DetailsPage} />
        </Switch>
      </AnimatePresence>
    </GlobalState>
  );
}

export default App;
