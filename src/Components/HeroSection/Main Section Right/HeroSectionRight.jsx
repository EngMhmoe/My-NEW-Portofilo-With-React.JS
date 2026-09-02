//============================================================
// Motion
//============================================================
import { motion } from "motion/react";

//============================================================
// Image
//============================================================
import img from "/Images/Image My Person/myPhoto-removebg-preview.png";

//============================================================
// Component
//============================================================
export default function MySectionRight() {
  // Styles
  const imageStyle = `
    duration-1600
    w-80
    h-140
    sm:w-70
    md:w-70
    lg:w-90
    xl:w-120
    lg:ml-10
    xl:ml-0
    drop-shadow-[0_0_866px_red]
  `;

  // Animation
  const imageAnimation = {
    initial: {
      scale: 0,
      opacity: 0,
    },

    animate: {
      scale: 1,
      opacity: 1,
    },

    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  };

  return (
    // My Section Right Component
    <div>
      <motion.img
        {...imageAnimation}
        src={img}
        alt="MyPhoto"
        id="MyPhoto"
        className={imageStyle}
      />
    </div>
  );
}
