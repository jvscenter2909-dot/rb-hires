import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // પેજ નેવિગેટ થાય ત્યારે સ્ક્રોલ ટોપ પર લઈ જશે
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;