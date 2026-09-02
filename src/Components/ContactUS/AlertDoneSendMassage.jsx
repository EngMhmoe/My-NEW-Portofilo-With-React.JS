//============================================================
// Animation
//============================================================
import Lottie from "lottie-react";
import doneAnimation from "/public/Animations/AlertDone/Check okey done.json";

//============================================================
// React Hooks
//============================================================
import { useContext } from "react";

//============================================================
// Context Provider
//============================================================
import Mohamed from "../../context/ContextDarkMode";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Component
//============================================================
export default function AlertDoneSendMassage() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================
  const messageStyle = `
    flex
    justify-center
    items-center
    gap-1
    text-[16px]
    font-bold
    mt-8
    ${darkMode ? "text-black" : "text-white"}
  `;

  const animationStyle = {
    height: "40px",
  };

  //==========================================================
  // Render
  //==========================================================
  return (
    <div className={messageStyle}>
      <Lottie animationData={doneAnimation} style={animationStyle} />

      {/* //////////////////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////////////////// */}

      {t("your massage has been sent successfully")}
    </div>
  );
}
