//============================================================
// React Hooks
//============================================================
import { useContext } from "react";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Context Provider
//============================================================
import Mohamed from "../../../../context/ContextDarkMode";

//============================================================
// Icons
//============================================================
import { ArrowUpRight } from "lucide-react";

//============================================================
// Component
//============================================================
export default function TitleCard_Project({ title }) {
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

  // Title Container
  const titleContainerStyle = `
    flex
    items-start
    justify-between
    mb-3
  `;

  // Title
  const titleStyle = `
    text-xl
    capitalize
    font-bold
    transition-colors
    duration-500
    ${
      darkMode
        ? "text-black group-hover:text-red-800"
        : "text-blue-100 group-hover:text-red-400"
    }
  `;

  // Arrow Icon
  const arrowIconStyle = `
    w-6
    h-6
    opacity-0
    -translate-y-5
    translate-x-5
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:translate-x-0
    group-hover:text-red-600
    transition-all
    duration-800
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <div className={titleContainerStyle}>
      <h1 className={titleStyle}>{t(title)}</h1>

      {/* ////////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////////// */}

      <ArrowUpRight className={arrowIconStyle} />
    </div>
  );
}
