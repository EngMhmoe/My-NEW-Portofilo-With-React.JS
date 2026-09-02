//============================================================
// Motion
//============================================================
import { motion } from "framer-motion";

//============================================================
// Component
//============================================================
export default function FadeUpMotion({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 66,
      }}
      whileInView={{
        opacity: 20,
        y: 0,
      }}
      transition={{
        duration: 3.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
