//============================================================
// Icons
//============================================================
import { Eye, Github } from "lucide-react";

//============================================================
// Component
//============================================================
export default function QuickActions_Project({ liveUrl, githubUrl }) {
  //==========================================================
  // Styles
  //==========================================================

  // Actions Container
  const actionsContainerStyle = `
    absolute
    inset-0
    flex
    items-center
    justify-center
    gap-8
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-1500
    bg-background/60
    backdrop-blur-md
    rounded-t-3xl
  `;

  // Live Demo Button
  const liveDemoButtonStyle = `
    p-3.5
    rounded-full
    bg-gradient-to-t
    from-red-500
    via-fuchsia-800
    to-orange-400
    hover:scale-110
    transition-transform
    duration-800
    shadow-lg
    shadow-red-900
  `;

  // GitHub Button
  const githubButtonStyle = `
    p-3.5
    rounded-full
    bg-gradient-to-t
    from-gray-950
    via-gray-700
    to-gray-300
    hover:scale-110
    transition-transform
    duration-800
    shadow-lg
    shadow-white/30
  `;

  // Live Demo Icon
  const liveDemoIconStyle = `
    w-7
    h-7
  `;

  // GitHub Icon
  const githubIconStyle = `
    w-6.5
    h-6.5
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <div className={actionsContainerStyle}>
      <a
        href={liveUrl}
        target="_blank"
        className={liveDemoButtonStyle}
        title="Live Demo"
      >
        <Eye className={liveDemoIconStyle} />
      </a>

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      <a
        href={githubUrl}
        target="_blank"
        className={githubButtonStyle}
        title="Source Code"
      >
        <Github className={githubIconStyle} />
      </a>
    </div>
  );
}
