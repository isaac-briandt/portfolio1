import Intro from "./components/intro/intro.component";
import TopBar from "./components/topbar/topbar.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Work from "./components/work/work.component";
import Testimonial from "./components/testimonial/testimonial.component";
import Contact from "./components/contact/contact.component";
import Menu from "./components/menu/menu.component";
import "./app.scss";
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default App;
