//============================================================
// Lucide React
//============================================================
import { Code, Palette, Smartphone, Globe, Zap, Layers } from "lucide-react";

//============================================================
// Component
//============================================================
export default function IconsCard({ Service }) {
  //==========================================================
  // Icon
  //==========================================================

  const ServiceIcon =
    Service.title === "Frontend Development"
      ? Code
      : Service.title === "Responsive Web Design"
        ? Palette
        : Service.title === "Landing Pages"
          ? Globe
          : Service.title === "Design to Code"
            ? Layers
            : Service.title === "Web Application Development"
              ? Zap
              : Service.title === "Interactive UI"
                ? Smartphone
                : null;

  //==========================================================
  // Styles
  //==========================================================

  const containerStyle = `
    inline-flex
    items-center
    justify-center
    w-16
    h-16
    mb-6
    rounded-full
    border
    border-red-500/10
    bg-red-500/20
    shadow-lg
    shadow-red-50/10
    transition-all
    duration-1000
    group-hover:bg-red-800
    group-hover:scale-110
  `;

  const iconStyle = `
    w-8
    h-8
    text-red-500
    duration-1000
    group-hover:text-white
  `;

  //==========================================================
  // Render
  //==========================================================

  return (
    <div className={containerStyle}>
      {ServiceIcon && <ServiceIcon className={iconStyle} />}
    </div>
  );
}
