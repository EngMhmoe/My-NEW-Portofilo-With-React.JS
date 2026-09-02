//============================================================
// Styles
//============================================================
import "../../../styles/aboutMe.css";

//============================================================
// Components UI
//============================================================
import MineTitle_AND_Description_Section from "../../../UI/MineTitle_AND_Description_Section";

//============================================================
// Components
//============================================================
import ContainerAboutMe from "./ContainerAboutMe";

//============================================================
// Component
//============================================================
export default function AboutMe() {
  // Styles
  const containerStyle = `
  flex
  flex-col
  gap-20
  `;

  // About Me Title
  const aboutMeTitle = {
    title1: "about",
    title2: "me",
  };

  // About Me Description
  const aboutMeDescription =
    "Get to know me and my journey as a Front-End Developer, specializing in React.js and building modern, responsive, and user-friendly web interfaces";

  return (
    // About Me Component
    <div id="About" className={containerStyle}>
      {/* Title And Description Component */}
      <MineTitle_AND_Description_Section
        Badge={"about me"}
        Title={aboutMeTitle}
        Description={aboutMeDescription}
      />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////////////// */}

      {/* Container About Me Component */}
      <ContainerAboutMe />
    </div>
  );
}
