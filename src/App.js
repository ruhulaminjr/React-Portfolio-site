import React from "react";
//global style import
import GlobalStyle from "./components/GlobalStyled";
//page import
import Aboutus from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';
import {Switch,Route,useLocation} from 'react-router-dom';
import {AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Aboutus />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
