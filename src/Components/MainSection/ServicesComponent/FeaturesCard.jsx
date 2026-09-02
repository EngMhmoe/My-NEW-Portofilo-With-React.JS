//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Context
//============================================================
import Mohamed from "../../../context/ContextDarkMode";

//============================================================
// Component
//============================================================
export default function FeaturesCard({ Service }) {
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

  // Features Container Style
  const featuresContainerStyle = `
    flex
    flex-wrap
    gap-y-5
    justify-between
    items-center
  `;

  // Feature Style
  const featureStyle = `
    capitalize
    px-4
    py-2
    text-sm
    rounded-3xl
    rounded-bl-none
    rounded-tr-none
    group-hover:rounded-3xl
    group-hover:rounded-tl-none
    group-hover:rounded-br-none
    text-muted-foreground
    transition-all
    duration-1000
    ${
      darkMode
        ? "text-orange-900 bg-red-600/45 group-hover:bg-red-600/20 group-hover:text-red-500"
        : "text-orange-100/85 bg-red-600/45 group-hover:bg-red-600/20 group-hover:text-red-500"
    }
  `;

  //==========================================================
  // Render
  //==========================================================

  return (
    <div className={featuresContainerStyle}>
      {Service.features.map((feature, featureIndex) => (
        <span key={featureIndex} className={featureStyle}>
          {t(feature.toLowerCase())}
        </span>
      ))}
    </div>
  );
}
