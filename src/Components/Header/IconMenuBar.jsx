//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Context
//============================================================
import Mohamed from "../../context/ContextDarkMode";

//============================================================
// ReactBits
//============================================================
import BubbleMenu from "../ReactBits/BubbleMenu";

//============================================================
// Data
//============================================================
import { menuBar_Links } from "../../Data/Header Component/menuBar_Links";

//============================================================
// Component
//============================================================
export default function IconMenuBar() {
  // Dark Mode
  const { darkMode } = useContext(Mohamed);

  // Styles
  const menuBarStyle = darkMode
    ? "icoN flex items-center sm:hidden"
    : "icoN flex items-center sm:hidden";

  return (
    <div className={menuBarStyle}>
      {/* Bubble Menu Component */}
      <BubbleMenu
        items={menuBar_Links}
        menuAriaLabel="Toggle navigation"
        menuBg="#660000"
        menuContentColor="white"
        useFixedPosition={false}
        animationEase="bonce.out"
        animationDuration={0.7}
        staggerDelay={0.49}
      />
    </div>
  );
}
