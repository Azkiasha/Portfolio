import React from "react";
import "./App.css";
import "./Responsive.css";
import Sidebar from "./component/sidebar/Sidebar.jsx";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Resume from "./component/resume/Resume";
import Services from "./component/services/Services";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact.jsx";
import Testimonials from "./component/testimonials/Testimonials";
import Pricing from "./component/pricing/Pricing";
import Blog from "./component/blog/Blog";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>{" "}
    </>
  );
}

export default App;
