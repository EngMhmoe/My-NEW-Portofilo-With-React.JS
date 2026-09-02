//============================================================
// React Hooks
//============================================================
import { useContext } from "react";

//============================================================
// Context Provider
//============================================================
import Mohamed from "../../../../context/ContextDarkMode";
import ContextProjectsData from "../../../../context/ContextProjectsData";

//============================================================
// Motion
//============================================================
import { AnimatePresence, motion } from "framer-motion";

//============================================================
// Components
//============================================================
import Image_Project from "./Image_Project";
import GradientOverlayImage_Project from "./GradientOverlayImage_Project";
import Category_YearBadges_Project from "./Category&YearBadges_Project";
import QuickActions_Project from "./QuickActions_Project";
import DecorativeElementImage_Project from "./DecorativeElementImage_Project";
import TitleCard_Project from "./TitleCard_Project";
import ParagraphCard_Project from "./ParagraphCard_Project";
import TagsCard_Project from "./TagsCard_Project";

//============================================================
// Component
//============================================================
const Projects = () => {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Projects Data
  //==========================================================
  const { CopyProjectsData } = useContext(ContextProjectsData);

  //==========================================================
  // Styles
  //==========================================================

  // Projects Grid
  const projectsGridStyle = `
    Projects
    grid
    xl:grid-cols-3
    lg:grid-cols-2
    md:grid-cols-2
    sm:grid-cols-2
    grid-cols-2
    xl:gap-x-6
    lg:gap-x-4
    sm:gap-x-6
    gap-x-5
    gap-y-10
    mx-auto
  `;

  // Project Card
  const projectCardStyle = `
    group
    relative
    rounded-3xl
    glass-card
    overflow-hidden
    hover:scale-[1.01]
    transition-all
    duration-1000
    hover:-translate-y-2
    shadow
    hover:shadow-2xl
    ${
      darkMode
        ? "carLight shadow-blue-300/40 hover:shadow-red-600/20"
        : "cardDark shadow-blue-200/45 hover:shadow-red-500/35"
    }
  `;

  // Project Image Container
  const projectImageContainerStyle = `
    relative
    h-57
    overflow-hidden
  `;

  // Project Info
  const projectInfoStyle = `
    pt-5.5
    pb-4.5
    px-4.5
    relative
  `;

  // Bottom Gradient Accent
  const bottomGradientAccentStyle = `
    absolute
    bottom-0
    left-0
    right-0
    h-1.5
    bg-gradient-to-r
    from-red-500
    via-primary/45
    to-red-500
    transform
    scale-x-0
    group-hover:scale-x-100
    transition-transform
    duration-1500
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <section className="overflow-hidden" id="projects">
      <div className={projectsGridStyle}>
        <AnimatePresence>
          {CopyProjectsData.map((project) => (
            <motion.div
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{
                type: "spring",
                damping: 7,
                stiffness: 10,
              }}
              key={project.id}
              className={projectCardStyle}
              style={{
                animationDelay: `${project.id * 0.1}s`,
              }}
            >
              <div className={projectImageContainerStyle}>
                <Image_Project {...project} />

                {/* ///////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////// */}

                <GradientOverlayImage_Project />

                {/* ///////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////// */}

                <Category_YearBadges_Project {...project} />

                {/* ///////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////// */}

                <QuickActions_Project {...project} />
              </div>

              {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

              <div className={projectInfoStyle}>
                <DecorativeElementImage_Project />

                {/* ///////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////// */}

                <TitleCard_Project {...project} />

                {/* ///////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////// */}

                <ParagraphCard_Project {...project} />

                {/* ///////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////// */}

                <TagsCard_Project {...project} />
              </div>

              {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
              {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

              <div className={bottomGradientAccentStyle} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
