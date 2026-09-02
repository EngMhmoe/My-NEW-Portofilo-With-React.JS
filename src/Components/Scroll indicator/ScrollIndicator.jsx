//============================================================
// Motion
//============================================================
import { motion } from "motion/react";

//============================================================
// Icons
//============================================================
import { ArrowDown } from "lucide-react";

//============================================================
// Component
//============================================================
export default function ScrollIndicator() {
  //==========================================================
  // Styles
  //==========================================================

  const containerStyle = `
    absolute
    left-[50%]
    -translate-x-1/2
    text-red-500
  `;

  const iconStyle = `
    mt-20
    h-8
    w-8
    text-muted-foreground
  `;

  //==========================================================
  // Motion Variants
  //==========================================================

  // Container Animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  //==========================================================
  // Render
  //==========================================================

  return (
    // Scroll Indicator Component
    <motion.div
      className={containerStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Arrow Down */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <ArrowDown className={iconStyle} />
      </motion.div>
    </motion.div>
  );
}
