import "./App.css";
import React, {useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Resident from "./pages/Resident";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Radio from './pages/Radio'
import Loading from './components/Loading';
//import { WifiLoader } from "react-awesome-loaders"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })
  return (
    
    <div className="App">
    {isLoading==true? <Loading/>:
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/resident" exact component={Resident} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route className="AppR" path="/radio" exact component={Radio} />
        </Switch>
        <Footer />
      </Router>
    }
    </div>
  );
}

export default App;
