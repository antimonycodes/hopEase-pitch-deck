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

export default function Conclusion() {
  return (
    <motion.div
      className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-400 to-blue-500 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-4xl text-center">
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          Transform Your Hospital with hospEase
        </motion.h2>
        <motion.p className="text-xl mb-8" variants={itemVariants}>
          By implementing hospEase, your hospital will experience:
        </motion.p>
        <motion.ul
          className="text-lg mb-8 space-y-2"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            ✓ Improved patient care and satisfaction
          </motion.li>
          <motion.li variants={itemVariants}>
            ✓ Increased operational efficiency
          </motion.li>
          <motion.li variants={itemVariants}>
            ✓ Significant cost savings
          </motion.li>
          <motion.li variants={itemVariants}>
            ✓ Enhanced staff productivity and satisfaction
          </motion.li>
        </motion.ul>
        <motion.div className="mb-8" variants={itemVariants}></motion.div>
        <motion.p className="text-xl mb-8" variants={itemVariants}>
          Don't let outdated systems hold your hospital back. Embrace the future
          of healthcare management with hospEase.
        </motion.p>
        <motion.button
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-xl font-bold hover:bg-blue-100 transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact us
        </motion.button>
        <div>
          <h1 className=" text-2xl">hospeasesolutions@gmail.com</h1>
          <h1 className=" text-2xl">08034820208</h1>
        </div>
      </div>
    </motion.div>
  );
}
