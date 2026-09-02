//============================================================
// Hooks React
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
// Component
//============================================================
export default function TagsCard_Project({ tags }) {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Render
  //==========================================================
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
      {tags?.map((tag) => (
        <span
          key={tag}
          className={`
            px-5
            py-1.5
            text-[12.5px]
            font-bold
            rounded-full
            rounded-tl-none
            transition-colors
            duration-1000
            capitalize
            shadow

            ${
              darkMode
                ? "bg-[#f1e9e9] text-black hover:bg-red-800 hover:text-white"
                : "bg-gray-800/50 text-blue-50 hover:bg-red-700"
            }
          `}
        >
          {t(tag)}
        </span>
      ))}
    </div>
  );
}
