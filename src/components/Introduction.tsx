import { motion } from "framer-motion";

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

export default function Introduction() {
  return (
    <motion.div
      //   bg-gradient-to-br
      //   from-blue-400
      //   to-purple-500
      className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500    text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-4xl">
        <motion.h1 className="text-5xl font-bold mb-6" variants={itemVariants}>
          Simplifying Healthcare Management with HospEase
        </motion.h1>
        <motion.p className="text-xl mb-8" variants={itemVariants}>
          Welcome to <strong>HospEase</strong>, a comprehensive healthcare
          management system tailored to meet the dynamic needs of modern
          hospitals. Our solution is designed to streamline operations, improve
          patient outcomes, and provide seamless experiences for all
          stakeholders.
        </motion.p>
        <motion.div className="mb-8" variants={itemVariants}></motion.div>
        <motion.p className="text-lg" variants={itemVariants}>
          We offer a wide range of solutions to tackle the most pressing
          challenges in healthcare management:
        </motion.p>
        <motion.ul
          className="list-disc pl-6 mt-4 space-y-2 text-lg"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            Electronic Medical Records (EMR)
          </motion.li>
          <motion.li variants={itemVariants}>Inventory Management</motion.li>
          <motion.li variants={itemVariants}>Appointment Management</motion.li>
          <motion.li variants={itemVariants}>
            Patient-Doctor Virtual Interaction
          </motion.li>
          <motion.li variants={itemVariants}>Reports and Analytics</motion.li>
          <motion.li variants={itemVariants}>
            Real-Time Updates and Alerts
          </motion.li>
          <motion.li variants={itemVariants}>
            Day-to-Day Operations and Management
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
}
