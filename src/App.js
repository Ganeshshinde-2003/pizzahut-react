import "./App.css";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/menu" exact Component={Menu} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
