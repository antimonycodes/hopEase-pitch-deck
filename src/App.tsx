import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import Conclusion from "./components/Conclussion";
import Pre from "./components/Pre";
import Video from "./components/Video";
// import Conclusion from "./components/Conclusion";

const sections = [
  "Pre",
  "Video",
  "Introduction",
  "Problem",
  "Solution",
  "Features",
  "Conclusion",
];

function Content() {
  const [currentSection, setCurrentSection] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionIndex = sections.findIndex(
      (section) => `/${section.toLowerCase()}` === location.pathname
    );
    setCurrentSection(sectionIndex !== -1 ? sectionIndex : 0);
  }, [location]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const nextSection = (currentSection + 1) % sections.length;
  //     navigate(`/${sections[nextSection].toLowerCase()}`);
  //   }, 12000);

  //   return () => clearTimeout(timer);
  // }, [currentSection, navigate]);

  const nextSection = () => {
    const nextIndex = (currentSection + 1) % sections.length;
    navigate(`/${sections[nextIndex].toLowerCase()}`);
  };

  const prevSection = () => {
    const prevIndex = (currentSection - 1 + sections.length) % sections.length;
    navigate(`/${sections[prevIndex].toLowerCase()}`);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100">
      <Navigation
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={(index) =>
          navigate(`/${sections[index].toLowerCase()}`)
        }
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Routes location={location}>
            <Route path="/pre" element={<Pre />} />
            <Route path="/video" element={<Video />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/features" element={<Features />} />
            <Route path="/conclusion" element={<Conclusion />} />
            {/* <Route path="*" element={<Introduction />} /> */}
            <Route path="*" element={<Pre />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-5 right-5 flex space-x-4">
        <button
          onClick={prevSection}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Previous
        </button>
        <button
          onClick={nextSection}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}
