import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavigationProps {
  sections: string[];
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

export default function Navigation({
  sections,
  currentSection,
  setCurrentSection,
}: NavigationProps) {
  return (
    <nav className="absolute top-5 left-5 z-10">
      <motion.div
        key={currentSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        {/* Animated Number */}
        <h1 className="text-4xl font-bold text-blue-600">
          {currentSection + 1 < 10 ? `0${currentSection}` : currentSection + 1}
        </h1>

        {/* Active Section */}
        <motion.li
          className="text-blue-600 font-bold text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={`/${sections[currentSection].toLowerCase()}`}
            onClick={() => setCurrentSection(currentSection)}
          >
            {sections[currentSection]}
          </Link>
        </motion.li>
      </motion.div>
    </nav>
  );
}
