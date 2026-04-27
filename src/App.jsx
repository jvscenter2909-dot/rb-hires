import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";

import About from "./components/About";
import Blog from "./components/blog"; 


const App = () => {
  return (
    <Router>

      <Routes>
        <Route element={<Layout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;