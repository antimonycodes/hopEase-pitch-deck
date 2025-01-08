import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import overview from "../assets/overview.png";
import inventory from "../assets/inventory.png";
import chat from "../assets/chat.png";
import appointment from "../assets/appointmentbooking.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function Features() {
  const features = [
    {
      title: "General Management",
      image: overview,
    },
    {
      title: "Inventory and Assets Management",
      image: inventory,
    },
    {
      title: "Doctors-Patients Communication",
      image: chat,
    },
    {
      title: "Appointment Booking",
      image: appointment,
    },
  ];

  const [activeGroup, setActiveGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGroup((prevGroup) => (prevGroup === 0 ? 1 : 0));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Get the two cards based on the active group
  const displayedFeatures =
    activeGroup === 0 ? features.slice(0, 2) : features.slice(2);

  return (
    <motion.div
      className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {displayedFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-white bg-opacity-20 p-6 rounded-lg flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="w-[600px] h-[400px] mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
