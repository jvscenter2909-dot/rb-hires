import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import About from "./components/About";
import Service from "./components/Service";
import Shop from "./pages/Shop";
import Refer from "./pages/Refern";
import Contact from "./pages/Contact";
import Job from "./pages/ApplyJob";
import PreLoader from "./components/PreLoader"; 
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/scrollToTop"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <Router>
      {/* 👇 અહીં ScrollToTop મૂકવાથી દરેક પેજ ઉપરથી જ લોડ થશે */}
      <ScrollToTop /> 
      
      <Routes>
        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About showExtra={true}  />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/refer" element={<Refer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job" element={<Job />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;