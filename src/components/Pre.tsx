import { motion } from "framer-motion";
import bgImage from "../assets/helloDoc.png";

const Pre = () => {
  return (
    <section
      className="slide-section"
      style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81)`,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blac bg-opacity-40 " />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl relative px-8"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-7xl font-bold mb-8  text-emerald-500 "
        >
          hospEase Healthcare Management System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl text-emerald-500 mb-8"
        >
          Revolutionizing Healthcare in Nigeria
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Pre;
