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

export default function Problem() {
  const [showSectionTwo, setShowSectionTwo] = useState(false);

  // Simulate the transition to show section two after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSectionTwo(true);
    }, 5000); // 5000 ms (5 seconds)

    return () => {
      clearTimeout(timer);
      setShowSectionTwo(false);
    };
  }, []);

  const data = [
    {
      title: "Inventory Management",
      description: `Manual stock counting leads to errors
Expired medications not tracked effectively
Stock-outs of critical supplies
Theft and leakage`,
    },
    {
      title: "Appointment Scheduling",
      description: `No streamlined system for appointment bookings
Long wait times for patients
Missed appointments not tracked
Difficulty in rescheduling`,
    },
    {
      title: "Electronic Medical Records (EMR)",
      description: `Paper-based records are prone to loss and damage
Difficulty in retrieving patient history
Lack of centralized data access for healthcare providers
Time-consuming manual record updates`,
    },
    {
      title: "Patient-Doctor Virtual Interaction",
      description: `Limited accessibility for patients in remote areas
No real-time communication between doctors and patients
Lack of secure and user-friendly platforms
Difficulty in follow-up consultations`,
    },
    {
      title: "Reports and Analytics",
      description: `Inefficient data collection and analysis
Lack of actionable insights for decision-making
Time-consuming manual reporting
Difficulty in tracking performance metrics`,
    },
    {
      title: "Real-Time Updates and Alerts",
      description: `Delayed notifications for critical updates
Lack of automated alerts for urgent issues
Patients missing important reminders
Difficulty in tracking real-time changes`,
    },
    {
      title: "Day-to-Day Operations and Management",
      description: `Lack of automation in routine tasks
Difficulty in coordinating between departments
Inefficient resource allocation
Time-consuming administrative work`,
    },
  ];

  return (
    <motion.div
      className="h-full w-full flex items-center justify-center bg-gradient-to-br from-red-400 to-yellow-500 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* First Section */}
      {!showSectionTwo && (
        <motion.section
          className="sectionone max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 5 }} // Stay visible for 5 seconds
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Challenges in Modern Healthcare Management
          </motion.h2>
          <motion.p className="text-xl mb-6" variants={itemVariants}>
            Today's hospitals face numerous obstacles that hinder efficient
            operation and optimal patient care:
          </motion.p>
          <motion.ul
            className="text-xl mb-8 space-y-4"
            variants={containerVariants}
          >
            <motion.li variants={itemVariants}>
              • Fragmented patient data leading to inefficient care coordination
            </motion.li>
            <motion.li variants={itemVariants}>
              • Manual processes causing delays and increasing the risk of
              errors
            </motion.li>
            <motion.li variants={itemVariants}>
              • Poor resource allocation resulting in long wait times and
              underutilized assets
            </motion.li>
            <motion.li variants={itemVariants}>
              • Lack of real-time insights for informed decision-making
            </motion.li>
          </motion.ul>
          <motion.div className="mb-8" variants={itemVariants}></motion.div>
          <motion.p className="text-lg" variants={itemVariants}>
            These challenges not only affect the quality of patient care but
            also lead to increased operational costs, staff burnout, and reduced
            overall efficiency. It's clear that a comprehensive, integrated
            solution is needed to address these issues head-on.
          </motion.p>
        </motion.section>
      )}

      {/* Second Section (Appears after the first section fades out) */}
      {showSectionTwo && (
        <motion.section
          className="sectiontwo grid md:grid-cols-4 gap-8  w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: 0.5 }} // Delay the second section's appearance
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="px-4 py-1 bg-white shadow-md rounded-lg space-y-4"
              variants={itemVariants}
            >
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>

              {/* Description as a List */}
              <ul className="list-disc pl-6 space-y-2">
                {item.description.split("\n").map((desc, idx) => (
                  <li key={idx} className="text-gray-700">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>
      )}
    </motion.div>
  );
}
