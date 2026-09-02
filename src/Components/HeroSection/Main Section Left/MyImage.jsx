//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Context
//============================================================
import DarkMode from "../../../context/ContextDarkMode";

//============================================================
// Material UI Icons
//============================================================
import VerifiedIcon from "@mui/icons-material/Verified";

//============================================================
// Animations
//============================================================
import { motion } from "motion/react";

//============================================================
// Component
//============================================================
export default function MyImage({ img }) {
  // Dark Mode
  const { darkMode } = useContext(DarkMode);

  // Styles
  const containerStyle = "Img flex items-center justify-start";

  const imageStyle = darkMode ? "" : "img2 rounded-full";

  const verifiedStyle = {
    fontSize: "20px",
    color: "red",
  };

  return (
    // My Image Component
    <div className={containerStyle}>
      {/* My Image */}
      <motion.img
        // الحاله الابتدائيه
        initial={{ transform: "scale(0)" }}
        // الحاله النهائيه
        animate={{
          transform: "scale(1)",
        }}
        // خاصيه عادى
        transition={{
          damping: 6,
          type: "spring",
          stiffness: 50,
          duration: 6,
        }}
        src={img}
        alt="MyPhoto"
        width={80}
        className={imageStyle}
      />

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}

      {/* Verified Icon */}
      <div className="self-end">
        <VerifiedIcon color="primary" style={verifiedStyle} />
      </div>
    </div>
  );
}
