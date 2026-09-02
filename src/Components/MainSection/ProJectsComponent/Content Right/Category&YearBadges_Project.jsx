//============================================================
// Translation
//============================================================
import { useTranslation } from "react-i18next";

//============================================================
// Component
//============================================================
export default function Category_YearBadges_Project({ category, year }) {
  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Styles
  //==========================================================

  // Badges Container
  const badgesContainerStyle = `
    absolute
    top-5
    right-5
    flex
    items-center
    gap-
    capitalize
  `;

  // Category Badge
  const categoryBadgeStyle = `
    bg-red-700
    shadow
    shadow-black
    text-gray-50
    text-[13px]
    font-bold
    px-3.5
    py-1.5
    rounded-full
    rounded-r-none
  `;

  // Year Badge
  const yearBadgeStyle = `
    bg-warning
    text-red-900
    text-[13px]
    font-extrabold
    px-3.5
    py-1.5
    rounded-full
    rounded-l-none
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <div dir="ltr" className={badgesContainerStyle}>
      <div className={categoryBadgeStyle}>{t(category)}</div>

      {/* /////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////// */}

      <div className={yearBadgeStyle}>{year}</div>
    </div>
  );
}
