import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

const Preloader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
            },
          }}
        >
          <motion.h1
            className="preloader-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            Ahmed Gaballah
          </motion.h1>

          <div className="loader-line-container">
            <motion.div
              className="loader-line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            className="loading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
            }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
