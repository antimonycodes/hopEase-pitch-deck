import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const slideIn = {
//   hidden: { x: -60, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const scaleIn = {
//   hidden: { scale: 0.8, opacity: 0 },
//   visible: {
//     scale: 1,
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

export default function Solution() {
  const [showSectionTwos, setShowSectionTwos] = useState(false);

  // Simulate the transition to show section two after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSectionTwos(true);
    }, 5000); // 5000 ms (5 seconds)

    return () => {
      clearTimeout(timer);
      setShowSectionTwos(false);
    };
  }, []);

  const data = [
    {
      title: "Digital EMR System",
      features: [
        "Secure digital patient records",
        "Real-time updates",
        "Mobile access",
      ],
      //   image: "/api/placeholder/600/300",
    },
    {
      title: "Smart Inventory Management",
      features: [
        "Automated tracking",
        "Expiry date monitoring and alerts",
        "Usage analytics for better procurement",
        "Expiry monitoring",
        "Vendor management",
      ],
      //   image: "/api/placeholder/600/300",
    },
    {
      title: "Appointment Management",
      features: [
        "Online appointment booking system",
        "Appointment history tracking",
        "Wait-time management",
        "Automated SMS/email reminders",
      ],
      //   image: "/api/placeholder/600/300",
    },
  ];

  return (
    <motion.div
      className="h-full w-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* First Section */}
      {!showSectionTwos && (
        <motion.section
          className="sectionone max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 5 }} // Stay visible for 5 seconds
        >
          {/* <motion.h2
            className="text-4xl font-bold mb-6"
         
          >
            Introducing MediSync: Your Comprehensive Solution
          </motion.h2> */}
          <motion.p className="text-xl mb-8" variants={itemVariants}>
            hospEase is a state-of-the-art Hospital Management System designed
            to address the complex challenges of modern healthcare institutions:
          </motion.p>
          <motion.div className="mb-8" variants={itemVariants}></motion.div>
          <motion.ul className="text-xl space-y-4" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              • Centralized patient data management for seamless care
              coordination
            </motion.li>
            <motion.li variants={itemVariants}>
              • Automated workflows to reduce manual errors and improve
              efficiency
            </motion.li>
            <motion.li variants={itemVariants}>
              • Intelligent resource allocation to minimize wait times and
              optimize asset utilization
            </motion.li>
            <motion.li variants={itemVariants}>
              • Real-time analytics and reporting for data-driven decision
              making
            </motion.li>
          </motion.ul>
          <motion.p className="text-lg mt-8" variants={itemVariants}>
            hospEase integrates seamlessly with your existing systems, ensuring
            a smooth transition and immediate improvements in your hospital's
            operations. Our solution is scalable, secure, and user-friendly,
            empowering your staff to focus on what matters most - providing
            excellent patient care.
          </motion.p>
        </motion.section>
      )}

      {/* Second Section (Appears after the first section fades out) */}
      {showSectionTwos && (
        <motion.section
          className="sectiontwo text-black p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: 0.5 }} // Delay the second section's appearance
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 ">
              {data.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="mb-12 bg-blue-50 rounded-xl overflow-hidden"
                >
                  <div className="grd md:grid-cols-2 gap-8 items-center p-8">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-6">
                        {solution.title}
                      </h3>
                      <ul className="space-y-4">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="order-1 md:order-2">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="rounded-lg shadow-xl"
                      />
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      )}
    </motion.div>
  );
}
